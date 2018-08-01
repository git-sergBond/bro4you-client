#!/usr/bin/env nodejs
var express = require("express");
var bodyParser = require("body-parser");
// 
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
//
var app = express();
app.use(express.static(__dirname));
//тестовые данные пользователей
let arr_users= [
  {
    login: "vacya",
    password: "12345",
    email: "vacya@mail.ru",
    phone: "89202205409"
  },
  {
    login: "kurasava",
    password: "12345",
    email: "kurasava@mail.ru",
    phone: "89802285410"
  }
]
function sendJSON(data,response){
  return response.send(JSON.stringify(data));
}
//Модуль Авторизации/Регистрации
app.post("/sessionAPI",jsonParser, function(request, response){
  if (!request.body) return response.sendStatus(400);
  console.log("/sessionAPI");
  console.log("POST requset ::");
  console.log(request.body);
  if (!request.body.login && !request.body.password)
    return response.send("Неверный метод отправки запроса или не отправлен логин и пароль");
  for (user of arr_users) {
    if (request.body.login == user.login
      && request.body.password == user.password) {
      return sendJSON({
        status: 'OK',
        errors: []
      }, response);
    }
  }
  return sendJSON({
    status: 'WRONG_DATA',
    errors: 'Неверные логин или пароль'
  }, response);
});
app.post("/registerAPI",jsonParser, function(request, response){
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);

  response.send("<h2>Регистрация!</h2>");
});
app.listen(3000);