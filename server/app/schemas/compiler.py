from pydantic import BaseModel

class CodeExecutionRequest(BaseModel):
    language: str
    code: str
    custom_input: str = ""

'''
Our API Call Format (Request Body (POST)):
{
  "language": "cpp",
  "code": "#include <iostream>...",
  "custom_input": "5 10"
}
'''