import os
import subprocess
import uuid

from fastapi import APIRouter, HTTPException
from app.schemas.compiler import CodeExecutionRequest

router = APIRouter()

@router.post("/run") #instead of app.post()
async def execute_code(payload: CodeExecutionRequest): #payLoad || req.body should be of this type 
    if payload.language != "cpp": #if lang !=cpp ==> Error400
        raise HTTPException(status_code=400, detail="Currently, only C++ is Supported")

    #uid is imp so that if 2 users runs there code parallely, it won't overwrite both of there files!
    unique_id = uuid.uuid4().hex
    cpp_file = f"temp_{unique_id}.cpp"

    exe_file = f"temp_{unique_id}.exe" if os.name == 'nt' else f"./temp_{unique_id}"

    try:
        with open(cpp_file,"w") as f:
            f.write(payload.code) #saving code in actual cpp file

        #compilation process (Step1 || Child Process 1 )
        compile_process = subprocess.run(
            ['g++',cpp_file,"-o",exe_file], #terminal command
            capture_output=True,
            text=True
        )
        if compile_process.returncode != 0:
            return {"status":"error","output":compile_process.stderr}

        #execution process (Step2 || Child Process 2 )
        run_process = subprocess.run(
            [exe_file] if os.name == 'nt' else [f"./{exe_file}"],
            input=payload.custom_input,
            capture_output=True,
            text=True,
            timeout=3 #Only 3 seconds we're giving to our childprocess, after that, it'll destroy itself.
        )

        return {"status":"success","output":run_process.stdout}
    except subprocess.TimeoutExpired:
        return {"status": "error", "output": "Time Limit Exceeded (TLE)"}
    except Exception as e:
        return {"status": "error", "output": str(e)}

    finally:
        if os.path.exists(cpp_file):
            os.remove(cpp_file)
        if os.path.exists(exe_file):
            os.remove(exe_file)            

