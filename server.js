#!/usr/bin/env nodejs
var express = require("express");
var bodyParser = require("body-parser");
var ServicesAPIController = require("./server/Controllers/ServicesAPIController.js");
var TradePointsAPIController = require("./server/Controllers/TradePointsAPIController.js");
var CompaniesAPIController = require("./server/Controllers/CompaniesAPIController.js");
// 
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
//
var app = express();
app.use(express.static(__dirname));
//тестовые данные пользователей
let arr_users= [
  {
    login: "a",
    password: "a",
    email: "vacya@mail.ru",
    phone: "89202205409",
    token: "a"
  },
  {
    login: "b",
    password: "b",
    email: "kurasava@mail.ru",
    phone: "89802285410",
    token: "b"
  }
]
//функция отправки данных на клиент
function sendJSON(status, data ,response){
  return response.status(status).send(JSON.stringify(data));
}
//Модуль Авторизации
app.post("/sessionAPI",jsonParser, function(request, response){
  console.log("// "+new Date + " POST /sessionAPI");
  if (!request.body) return response.sendStatus(400);
  console.log("auth user -> "+request.body.login+" : "+request.body.password);
  if (!request.body.login && !request.body.password) {
    response.sendStatus(200);
    response.send("Неверный метод отправки запроса или не отправлен логин и пароль");
    return response;
  }
  for (user of arr_users) {
    if (request.body.login == user.login
      && request.body.password == user.password) {
        console.log("-failed-")
      return sendJSON(200,{
        status: 'OK',
        token: user.token,
        errors: []//? зачем ошибки
      }, response);
    }
  }
  console.log("-success-")
  return sendJSON(200,{
    status: 'WRONG_DATA',
    errors: 'Неверные логин или пароль'//? где список ошибок
  }, response);
});
//Модуль Регистрации
app.post("/registerAPI",jsonParser, function(request, response){
  console.log("// "+new Date + " POST /registerAPI");
  if(!request.body) return response.sendStatus(200);
  console.log(request.body);
  if (!request.body.login && !request.body.password){
    response.sendStatus(200);
    response.send("Неверный метод отправки запроса или не отправлены email, пароль и телефон");
    return response
  } 
  /*
  if(request.body.login.length != 11){
    return sendJSON(200,{
      status : 'WRONG_DATA',
      errors : ['Неверный номер']
    },response);
  }*/
  for (user of arr_users) {
    if (request.body.login == user.login
      && request.body.password == user.password) {
        return sendJSON(200,{
          status: 'WRONG_DATA',
          errors: ['Такой пользователь уже существует']
        }, response);
    }
  }
  return sendJSON(200,{
    status: 'OK',//зачем? когда можно отдать 200 или 400 или еще ченить
    token: 'new user.token',
    errors: []//? где список ошибок
  }, response);
});
//Разрыв сессии
app.post("/sessionAPI/end",jsonParser, function(request, response){
  console.log("// "+new Date + " POST /sessionAPI/end");
  console.log("disconect user ->" + request.headers.authorization)
  return sendJSON(200,request.headers.authorization, response)
});
//ServicesAPI
app.post("/ServicesAPI/addService",jsonParser, ServicesAPIController.addService);
app.post("/ServicesAPI/addImageHandler",jsonParser, ServicesAPIController.addImageHandler);
//TradePointsAPI
app.get("/TradePointsAPI/getPoints",jsonParser, TradePointsAPIController.getPoints);
app.get("/TradePointsAPI/getPointsForCompany",jsonParser, TradePointsAPIController.getPointsForCompany);
//CompaniesAPI
app.get("/CompaniesAPI/getCompanies",jsonParser,CompaniesAPIController.getCompanies);
app.listen(8080);
//app.listen(3000);