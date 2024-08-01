// import the axios for making HTTP requests
// import { create, Whatsapp } from 'venom-bot';
const axios = require('axios');
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  function start(client) {
    client.onMessage(async (message) => {
      if (message.isGroupMsg === false){
        try {
          // Gets the sender's number and the content of the message
          const senderNumber = message.from.replace(/[^\d]/g, ''); // Remove todos os caracteres que não são dígitos
          const messageBody = message.body;
    
          // Send the message to API FastAPI using GET
          const response = await axios.get('http://127.0.0.1:8000/messages', {
            params: {
              sender: senderNumber,
              content: messageBody
            }
          });
  
          console.log('Resposta da API:', response.data);
  
          // Send a back message
          await client
            .sendText(message.from, 'Recebemos sua mensagem!')
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending message: ', erro); //return object error
            });
        } 
  
        catch (error) {
          console.error('Erro ao enviar mensagem para a API:', error);
        }
      }
    });
  }