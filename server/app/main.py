from fastapi import FastAPI
from app.api import compiler_routes

app = FastAPI(title="Code Editor v2.0") #making fastAPI object

#Routes
@app.get("/") #telling starlette what to do if an user interacts or comes towards "/"
async def root():
    return {"message": "Welcome to the Online Compiler API, Cheetah!"}

app.include_router(compiler_routes.router, prefix="/api/v1")
@app.get("/past-submissions/{submission_id}")
async def get_submissions(submission_id: int): #fastAPI autom. fetch sub_id and it'll convert it into Integer!
    return {
        "id":submission_id,
        "language":"cpp",
        "code": "cout << 'Old code';",
        "status": "Accepted"
    }
