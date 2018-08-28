function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
var reviews = 
//serviceId, numPage, widthPag
[
    {
        "review": {
            "reviewid": 84,
            "textreview": "Эти черепахи слишком быстрые! А так неплохо",
            "reviewdate": "2018-08-28T17:57:07+00:00",
            "rating": 8,
            "binderid": 22,
            "executor": false,
            "bindertype": "request"
        },
        "userinfo": {
            "userid": 9,
            "firstname": "Федор",
            "patronymic": "Васильевич",
            "lastname": "Сумкин",
            "birthday": "1997-05-25",
            "male": 1,
            "about": "Эмм...",
            "ratingexecutor": 5,
            "ratingclient": 5,
            "address": "г. Орел, улица Скоморохова, д.5",
            "pathtophoto": "/public/img/d4dd0c47.jpg"
        }
    }
];
//Контроллер акций
module.exports =  {
    //Отдает список акций
    getReviewsForService(request, response){
        console.log("// "+new Date + " GET /.../getReviewsForService");
        console.log("data: ")
        console.log(request.body)
        return sendJSON(200, {
            status: "OK",
            reviews
        }, response)
    }
}