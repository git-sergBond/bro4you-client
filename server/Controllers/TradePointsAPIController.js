//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let tradePoints = 
[
    {
        "tradePoint": {
            "pointid": 1,//идентификатор точки на карте
            "name": "Главная точка",
            "longitude": "36.595487310396",//долгота
            "latitude": "50.581499805984",//широта
            "fax": null,
            "subjectid": 54,
            "time": null,
            "email": "qwe@d.ds",
            "usermanager": null,
            "website": "http://cvetochek.com",
            "address": null,
            "deleted": false,
            "deletedcascade": null,
            "subjecttype": 1
        },
        "phones": [
            {
                "phoneId": 4,
                "phone": "+79606210806"
            },
            {
                "phoneId": 5,
                "phone": "+79087801276"
            },
            {
                "phoneId": 6,
                "phone": "+74722293538"
            },
            {
                "phoneId": 7,
                "phone": "+7 943 567-89-01"
            },
            {
                "phoneId": 24,
                "phone": "+7 986 574-32-88"
            }
        ]
    },
    {
        "tradePoint": {
            "pointid": 2,
            "name": "Гильдия Белошвеек",
            "longitude": "37",
            "latitude": "50.568459640885",
            "fax": null,
            "subjectid": 54,
            "time": null,
            "email": "beloshi@mail.ru",
            "usermanager": 9,
            "website": "http://beloshi",
            "address": null,
            "deleted": false,
            "deletedcascade": null,
            "subjecttype": 1
        },
        "phones": [
            {
                "phoneId": 8,
                "phone": "+7 960 621-08-06"
            }
        ]
    }
]
//Контроллер для точек оказания услуг
module.exports =  {
    //Возвращает точки предоставления услуг назначенные текущему пользователю
    getPoints(request, response){
        console.log("// "+new Date + " POST /TradePointsAPI/getPoints");
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
            points: [],
        }, response)
    }
}