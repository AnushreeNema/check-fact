from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Claim(BaseModel):
    claim: str

@app.post("/fact-check")
async def fact_check(claim: Claim):
    return {"status": "ok"}

