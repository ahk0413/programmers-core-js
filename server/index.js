//console.log(process.env.Lang);

//live server 설정 가능
const server = require('live-server');

const params = {
  host:'localhost',
  port:3000,
  open:false,
  root:'./client'
}

server.start(params)