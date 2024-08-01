from typing import Union
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/messages")
def receive_message(sender: str, content: Union[str, None] = None):
    # Processa a mensagem recebida
    print(f"Mensagem recebida de {sender}: {content}")
    
    # Retorna uma resposta simples para confirmação
    return {"status": "success", "received": {"sender": sender, "content": content}}