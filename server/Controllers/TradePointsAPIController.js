//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let tradePoints = [
        {
            pointid: 0,//идентификатор точки на карте
            latitude: 50,//широта
            longitude: 50,//долгота
            address: "улица 1, дом 1",//адрес
        },
        {
            pointid: 1,//идентификатор точки на карте
            latitude: 55,//широта
            longitude: 50,//долгота
            address: "улица 2, дом 2",//адрес
        },
        {
            pointid: 2,//идентификатор точки на карте
            latitude: 55,//широта
            longitude: 55,//долгота
            address: "улица 3, дом 3",//адрес
        }
    ]
//Контроллер для точек оказания услуг
module.exports =  {
    //Возвращает точки предоставления услуг назначенные текущему пользователю
    getPointsForUserManager(request, response){
        console.log("// "+new Date + " GET /TradePointsAPI/getPointsForUserManager");
        console.log("data: ")
        console.log(request.body)
        console.log(tradePoints)
        return sendJSON(200, {
            status: "OK",
            points: tradePoints
        }, response)
    },
    //Возвращает точки предоставления услуг для компании
    getPointsForCompany(request, response){
        console.log("// "+new Date + " GET /TradePointsAPI/getPointsForCompany");
        console.log("data: ")
        console.log(request.body)
        return sendJSON(200, {
            status: "OK",
            points: tradePoints,
        }, response)
    }
}