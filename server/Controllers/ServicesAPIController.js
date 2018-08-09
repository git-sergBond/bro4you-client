//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let services =
 [
    {
        "service": {
            "serviceid": 37,
            "subjectid": 6,
            "description": "Надо назвать метку\n\rВидео: ",
            "pricemin": 100,
            "pricemax": 5000,
            "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-09T17:20:11+00:00",
                "regionid": 1,
                "name": "СТО"
            },
            "userinfo": {
                "userid": 6,
                "firstname": "Алексей",
                "patronymic": "",
                "lastname": "Арраков",
                "birthday": "1994-01-23",
                "male": 1,
                "about": "Ну о себе можно много чего рассказать, поэтому я не стану этого делать. Ну наверно, не буду... Я ещё подумаю.",
                "ratingexecutor": 4.16667,
                "ratingclient": 5,
                "address": "улица Волоколамская и еще некоторые",
                "pathtophoto": "/public/img/6960437f.jpg"
            },
            "categories": [],
            "points": [
                {
                    "pointid": 4,
                    "name": "Лига Белошвеек",
                    "longitude": 36.58035063374,
                    "latitude": 50.568459640885,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": "beloshi@mail.ru",
                    "usermanager": null,
                    "website": "http://beloshi",
                    "address": null,
                    "deleted": false,
                    "deletedcascade": false,
                    "subjecttype": 0,
                    "phones": []
                },
                {
                    "pointid": 13,
                    "name": "Большая точка",
                    "longitude": 36.646965560625,
                    "latitude": 50.551173779243,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Белгород, лесопарк Сосновка",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 0,
                    "phones": [
                        "+7 948 843-34-43",
                        "+7 948 345-34-34"
                    ]
                }
            ]
    },
    {
        "service": {
            "serviceid": 40,
            "subjectid": 6,
            "description": "СБегаю на харь-гору за пивом\n\rВидео: ",
            "pricemin": 100,
            "pricemax": 7000,
            "deleted": false,
            "subjecttype": 0,
            "deletedcascade": null,
            "datepublication": "2018-08-09T21:13:24+00:00",
            "regionid": 1,
            "name": "Забегу на самую высокую гору в мире."
        },
        "userinfo": {
            "userid": 6,
            "firstname": "Алексей",
            "patronymic": "",
            "lastname": "Арраков",
            "birthday": "1994-01-23",
            "male": 1,
            "about": "Ну о себе можно много чего рассказать, поэтому я не стану этого делать. Ну наверно, не буду... Я ещё подумаю.",
            "ratingexecutor": 4.16667,
            "ratingclient": 5,
            "address": "улица Волоколамская и еще некоторые",
            "pathtophoto": "/public/img/6960437f.jpg"
        },
        "categories": [],
        "points": [
            {
                "pointid": 16,
                "name": "назовите метку",
                "longitude": 36.587223,
                "latitude": 50.59566,
                "fax": null,
                "subjectid": 6,
                "time": null,
                "email": null,
                "usermanager": null,
                "website": null,
                "address": "Белгород, Соборная площадь",
                "deleted": false,
                "deletedcascade": null,
                "subjecttype": 0,
                "phones": [
                    "+7 958 454-23-54"
                ]
            }
        ]
    }
]

//Контроллер для услуг
module.exports =  {
    //Добавляет новую услугу к субъекту
    addService(request, response){
        console.log("// "+new Date + " POST /ServicesAPI/addService");
        console.log("data: ")
        console.log(request.body)
        //если в строке присутствуют символы, то отдаем id новой услуги, и ждем запроса закачивания фоток
        if(request.body.name.length > 0){
            let serviceid = 123
            return sendJSON(200, {
                status: "OK",
                serviceid
            }, response)
        } else {
            //если ошибка, то на фронте не должен прийти запрос закачивания картинки
            return sendJSON(200, {
                status: "WRONG_DATA",
                errors: [
                    "Вы ввели данные с ошибками"
                ]
            }, response)
        }
        
    },
    getServices(request, response){
        console.log("// "+new Date + " GET /ServicesAPI/getServices");
        console.log("data: ")
        console.log(request.body)
        return sendJSON(200, {
            status: "OK",
            services
        }, response)
    },
    /*Добавляет картинку к услуге.
    Parameters $serviceId	
    Returns с json массивом типа Status
    */
    addImageHandler(request, response){
        console.log("// "+new Date + " POST /ServicesAPI/addImageHandler");
        console.log("data: ")
        console.log(request.body)
        return sendJSON(200, {
            status: "OK",
            
        }, response)
    }
}