from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI() #making fastAPI object

#Schemas:
class CodeExecutionRequest(BaseModel):
    language: str
    code: str
    custom_input: str = "" # Is empty String if user haven't gave any input
'''
Our API Call Format (Request Body (POST)):
{
  "language": "cpp",
  "code": "#include <iostream>...",
  "custom_input": "5 10"
}
'''

#Routes
@app.get("/") #telling starlette what to do if an user interacts or comes towards "/"
async def root():
    return {"message": "Welcome to the Online Compiler API, Cheetah!"}

@app.post("/run")
async def execute_code(payload: CodeExecutionRequest): #payLoad || req.body should be of this type 
    print(f"Received {payload.language} code to execute!")
    fake_output = f"Simulated output for your {payload.language} code.\nCode length: {len(payload.code)} characters."
    
    return {
        "status": "success",
        "output": fake_output,
        "error": None
    }

@app.get("/past-submissions/{submission_id}")
async def get_submissions(submission_id: int): #fastAPI autom. fetch sub_id and it'll convert it into Integer!
    return {
        "id":submission_id,
        "language":"cpp",
        "code": "cout << 'Old code';",
        "status": "Accepted"
    }
