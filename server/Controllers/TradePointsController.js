//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
//Контроллер для точек оказания услуг
module.exports =  {
    
}