# Bot-Whatsapp
Development of my scientific initiation using botpress and venom bot.
The purpose of the bot is to offer information and services to buyers interested in products on an e-commerce platform (and) via WhatsApp.
### Requirements: installed Python, Nodejs, Npm, Venom-Bot, FastAPI
```sudo apt-get install python3.7``` ```sudo apt-get install nodejs``` ```sudo apt install npm``` ```npm i --save venom-bot``` ```pip install fastapi```

### First Commit:
Venom Bot sends a GET request to http://localhost:8000/messages with the person's number and the message they sent. Then Venom responds on whatsapp with the message "Recebemos sua mensagem!".

### Tutorial: 

1- Run the FastAPI API:
Inside the API directory, use the command 
```
fastapi dev apifast.py
```

2-Run Venom-bot and connect your WhatsApp account using the QR-code on the terminal.
Inside the venom-bot directory, use the command
```
node venombot.js
```
