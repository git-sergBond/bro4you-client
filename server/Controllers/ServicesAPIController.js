//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let services =
/* [
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
        "categories": [
            {
                "categoryid": 18,
                "categoryname": "Организация мероприятий",
                "parentid": 15,
                "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                "img": null
            }
        ],
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
*/
[
        {
            "service": {
                "serviceid": 43,
                "subjectid": 55,
                "description": "Где-то в Воронеже\n\rВидео: ",
                "pricemin": 10050,
                "pricemax": 1000050,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-10T13:16:24+00:00",
                "regionid": 1,
                "name": "Услугу в Воронеже, предоставляемая компанией"
            },
            "company": {
                "companyid": 55,
                "name": "Кулинария",
                "fullname": "ОАО \"Кулинария\"",
                "tin": "1234567890",
                "regionid": 1,
                "userid": 6,
                "website": "http://wdqdwq.ru",
                "email": "qwe@d.ds",
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null
            },
            "categories": [
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 21,
                    "name": "Воронеж",
                    "longitude": 39.228809868747,
                    "latitude": 51.597103495105,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Воронеж, Левобережный район",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 0,
                    "phones": []
                }
            ]
        },
        {
            "service": {
                "serviceid": 52,
                "subjectid": 54,
                "description": "Устройте себе незабываемые выходные! Погоняйтесь со страусами, докажите всем вокруг и себе самому (самой), что можете обогнать этих жалких птиц.\n\rВидео: ",
                "pricemin": 500,
                "pricemax": 5000,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-10T13:37:05+00:00",
                "regionid": 1,
                "name": "Гонки со страусами"
            },
            "company": {
                "companyid": 54,
                "name": "Цветочки",
                "fullname": "ООО \"Цветочки\"",
                "tin": "123456781212",
                "regionid": 1,
                "userid": 6,
                "website": "http://cvetochek.com",
                "email": "qwe@d.ds",
                "ismaster": false,
                "deleted": false,
                "deletedcascade": false
            },
            "categories": [
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 29,
                    "name": "назовите метку",
                    "longitude": 39.19473917456,
                    "latitude": 51.659779074494,
                    "fax": null,
                    "subjectid": 54,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Воронеж, улица Свободы, 16",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 943 454-34-54",
                        "+7 847 345-34-65"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 41,
                "subjectid": 54,
                "description": "Устройте незабываемые выходные вместе с нами и нашими черепахами!\n\rВидео: ",
                "pricemin": 100,
                "pricemax": 10000,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-09T21:17:32+00:00",
                "regionid": 1,
                "name": "Черепашьи бега"
            },
            "company": {
                "companyid": 54,
                "name": "Цветочки",
                "fullname": "ООО \"Цветочки\"",
                "tin": "123456781212",
                "regionid": 1,
                "userid": 6,
                "website": "http://cvetochek.com",
                "email": "qwe@d.ds",
                "ismaster": false,
                "deleted": false,
                "deletedcascade": false
            },
            "categories": [
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 18,
                    "name": "Космос",
                    "longitude": 36.578380986816,
                    "latitude": 50.573351965536,
                    "fax": null,
                    "subjectid": 54,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Белгород, улица Королёва, 5",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 954 645-74-45",
                        "+7 954 695-23-80"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 44,
                "subjectid": 6,
                "description": "Третья услуга в воронеже\n\rВидео: ",
                "pricemin": 0,
                "pricemax": 0,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-10T13:22:11+00:00",
                "regionid": 1,
                "name": "Третья услуга в воронеже"
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
                    "pointid": 19,
                    "name": "Точка в Воронеже",
                    "longitude": 39.175144362495,
                    "latitude": 51.647905633633,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Воронеж, улица Моисеева, 75",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 0,
                    "phones": [
                        "+7 984 234-43-34"
                    ]
                },
                {
                    "pointid": 22,
                    "name": "Воронеж",
                    "longitude": 39.17276651831,
                    "latitude": 51.66978697865,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Воронеж, Коминтерновский район",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 0,
                    "phones": [
                        "+7 958 943-54-43"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 51,
                "subjectid": 6,
                "description": "4.1\n\rВидео: ",
                "pricemin": 10,
                "pricemax": 104,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-10T13:31:09+00:00",
                "regionid": 1,
                "name": "4.1 услуга в воронее"
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
                    "pointid": 28,
                    "name": "Речной вокзал",
                    "longitude": 39.222017,
                    "latitude": 51.66706,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Воронеж, Центральный район",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 0,
                    "phones": []
                }
            ]
        },
        {
            "service": {
                "serviceid": 40,
                "subjectid": 6,
                "description": "СБегаю на харь-гору за пивом\n\rВидео: ",
                "pricemin": 100,
                "pricemax": 10000,
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
                    "pointid": 17,
                    "name": "Мой дом.",
                    "longitude": 36.557866,
                    "latitude": 50.556064,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Белгород, улица Есенина",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 0,
                    "phones": []
                },
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
                    "deletedcascade": false,
                    "subjecttype": 0,
                    "phones": [
                        "+7 958 454-23-54"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 45,
                "subjectid": 6,
                "description": "Четвертая услуга в воронеже\n\rВидео: ",
                "pricemin": 100,
                "pricemax": 50000,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-10T13:24:19+00:00",
                "regionid": 1,
                "name": "Четвертая услуга в воронеже"
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
            "points": []
        },
        {
            "service": {
                "serviceid": 42,
                "subjectid": 6,
                "description": "Где-то в Воронеже\n\rВидео: ",
                "pricemin": 100,
                "pricemax": 10000,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-10T13:12:25+00:00",
                "regionid": 1,
                "name": "Услуга в Воронеже"
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
            "points": []
        },
        {
            "service": {
                "serviceid": 39,
                "subjectid": 6,
                "description": "блаблабла\n\rВидео: ",
                "pricemin": 321,
                "pricemax": 12312,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": false,
                "datepublication": "2018-08-09T21:07:55+00:00",
                "regionid": 1,
                "name": "бла-бла"
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
                    "deletedcascade": false,
                    "subjecttype": 0,
                    "phones": [
                        "+7 958 454-23-54"
                    ]
                }
            ]
        }
    ];
var autocomplete = [
    {
        "type":"point", 
        "name":"Левая точка", 
        "id": 12, "address": 
        "Москва, Шелапутинский переулок, 6с5"
    },{
        "type":"company", 
        "name":"Левая компания",
        "id": 11
    },{
        "type":"point", 
        "name":"Правая точка", 
        "id": 45, 
        "address": "Москва, улица Александра Невского"
    },{
        "type":"category", 
        "name":"Перевоза левых грузов", 
        "id": 19
    },{
        "type":"service", 
        "name":"Украду для вас ключи", 
        "id": 105
    },{
        "type":"company", 
        "name":"Бочка Ромы", 
        "id": 84
    },{
        "type":"company", 
        "name":"Четвертый вокзал", 
        "id": 3
    },{
        "type":"service", 
        "name":"Помою машину", 
        "id": 45
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
        console.log("// "+new Date + " POST /ServicesAPI/getServices");
        console.log("data: ")
        console.log(request.body)
        if (1 == request.body.typeQuery){
            return sendJSON(200, {
                status: "OK",
                autocomplete
            }, response)
        }
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