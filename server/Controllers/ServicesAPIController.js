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
/*
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
*/
[
    /*
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
                "name": "Черепашьи бега",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 54,
                "name": "Wok box",
                "fullname": "Wok box",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nцентр повышения квалификации\nWi-Fi\nбизнес-ланч\nдоставка еды\nкухня: русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nоплата картой",
                "yandexMapPages": "https://yandex.ru/maps/org/fudkort/219109634913/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
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
                "name": "Услугу в Воронеже, предоставляемая компанией",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 55,
                "name": "Wok and rolls",
                "fullname": "Wok and rolls",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nбыстрое питание\nмагазин кулинарии\nкондитерская\nWi-Fi\nбизнес-ланч\nдоставка еды\nкухня: смешанная\nкофе с собой\nзавтрак\nоплата картой\nСсылки: \n#vkontakte: https://vk.com/bufenaxitrovke\n#facebook: https://www.facebook.com/Bufetnahitrovke/\n#facebook: https://www.facebook.com/bufetnahitrovkemoscow/",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_bufet_na_khitrovke/73407979736/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
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
                "serviceid": 64,
                "subjectid": 21,
                "description": "Профессиональные молитвы",
                "pricemin": 50,
                "pricemax": 150,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-15T13:37:19+00:00",
                "regionid": 1,
                "name": "Помолимся за вас",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 21,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://kafedebut.ru/",
                "email": "kafedebut@bk.ru",
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nбанкетный зал\nстоловая\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nлетняя веранда\nоплата картой\nцена: умеренные цены",
                "yandexMapPages": "https://yandex.ru/maps/org/shashlychnaya_1_ataman/1072018774/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 35,
                    "name": "Храм в Белгороде",
                    "longitude": 36.595048231489,
                    "latitude": 50.595397751339,
                    "fax": null,
                    "subjectid": 21,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Белгород, Гражданский проспект, 50А",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
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
                "name": "Гонки со страусами",
                "numberofdisplay": 1,
                "rating": 5
            },
            "company": {
                "companyid": 54,
                "name": "Wok box",
                "fullname": "Wok box",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nцентр повышения квалификации\nWi-Fi\nбизнес-ланч\nдоставка еды\nкухня: русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nоплата картой",
                "yandexMapPages": "https://yandex.ru/maps/org/fudkort/219109634913/"
            },
            "images": [
                {
                    "imageid": 103,
                    "serviceid": 52,
                    "imagepath": "/img/services/3c803785_1.jpg"
                },
                {
                    "imageid": 104,
                    "serviceid": 52,
                    "imagepath": "/img/services/3c803785_2.PNG"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
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
                "serviceid": 110,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "Кафе",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                },
                {
                    "pointid": 73,
                    "name": "Pomodoro royal",
                    "longitude": 37.767061,
                    "latitude": 55.653807,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://lamadjo-maryino.ru/",
                    "address": "Россия, Москва, Братиславская улица, 29к1, эт. 1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 244,
                    "name": "Saperavi cafe",
                    "longitude": 37.624172,
                    "latitude": 55.684742,
                    "fax": null,
                    "subjectid": 228,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Варшавское шоссе, 39",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 359,
                    "name": "Monkeys cafe",
                    "longitude": 37.771673,
                    "latitude": 55.726682,
                    "fax": null,
                    "subjectid": 381,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://cafe-kobzar.ru/",
                    "address": "Россия, Москва, улица Михайлова, 29/3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 437,
                    "name": "Konigsbacker Королевский пекарь",
                    "longitude": 37.655678,
                    "latitude": 55.773645,
                    "fax": null,
                    "subjectid": 477,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://bk-food.ru/",
                    "address": "Россия, Москва, Комсомольская площадь, 2",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 481,
                    "name": "Il Патио",
                    "longitude": 37.589941,
                    "latitude": 55.773313,
                    "fax": null,
                    "subjectid": 539,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.jagannath.ru/",
                    "address": "Россия, Москва, 1-я Тверская-Ямская улица, 13, стр. 1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 582,
                    "name": "Dolce latte",
                    "longitude": 37.592082,
                    "latitude": 55.731041,
                    "fax": null,
                    "subjectid": 809,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://lambcook.ru/",
                    "address": "Россия, Москва, Комсомольский проспект, 7/3к1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 606,
                    "name": "Corleone Pizza",
                    "longitude": 37.618596,
                    "latitude": 55.727496,
                    "fax": null,
                    "subjectid": 838,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, 4-й Добрынинский переулок, 4",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (919) 777-69-60"
                    ]
                },
                {
                    "pointid": 875,
                    "name": "Хлеб С Маслом",
                    "longitude": 37.666527,
                    "latitude": 55.73799,
                    "fax": null,
                    "subjectid": 1230,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.cafe-anderson.ru/",
                    "address": "Россия, Москва, ул. Таганская, 40/42, Таганский парк, Таганский парк",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (495) 221-93-63",
                        "+7 (495) 125-49-24"
                    ]
                },
                {
                    "pointid": 1014,
                    "name": "Ташир Пицца",
                    "longitude": 37.716703,
                    "latitude": 55.751148,
                    "fax": null,
                    "subjectid": 1412,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, шоссе Энтузиастов, 22",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1096,
                    "name": "Сулико",
                    "longitude": 37.352127,
                    "latitude": 55.594476,
                    "fax": null,
                    "subjectid": 1649,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.club-orion.ru/",
                    "address": "Россия, Москва, Московский, улица Хабарова, 2",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1873,
                    "name": "Кафе-бар Бобры и утки",
                    "longitude": 37.558671,
                    "latitude": 55.763055,
                    "fax": null,
                    "subjectid": 2708,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://hinkaligali.ru/",
                    "address": "Россия, Москва, улица 1905 года, 7, стр. 1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 2318,
                    "name": "Зеленый мыс",
                    "longitude": 37.606514,
                    "latitude": 55.883742,
                    "fax": null,
                    "subjectid": 3209,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, улица Плещеева, 4",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                }
            ]
        },
        {
            "service": {
                "serviceid": 111,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "доставка еды и обедов",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                },
                {
                    "pointid": 1649,
                    "name": "Легио",
                    "longitude": 37.488768,
                    "latitude": 55.567451,
                    "fax": null,
                    "subjectid": 2411,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://www.hatimaki.ru/",
                    "address": "Россия, Москва, посёлок Коммунарка, улица Липовый Парк, 9",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 2077,
                    "name": "Кафе на Пушкинской",
                    "longitude": 37.734682,
                    "latitude": 55.653062,
                    "fax": null,
                    "subjectid": 2926,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, улица Перерва, 38",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                }
            ]
        },
        {
            "service": {
                "serviceid": 112,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "спорт-бар",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 113,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "пиццерия",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                },
                {
                    "pointid": 2499,
                    "name": "Быстрое питание",
                    "longitude": 37.848502,
                    "latitude": 55.697828,
                    "fax": null,
                    "subjectid": 3448,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://dominospizza.ru/",
                    "address": "Россия, Москва, Жулебинский бульвар, 9",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 2542,
                    "name": "Бистро",
                    "longitude": 37.644243,
                    "latitude": 55.815969,
                    "fax": null,
                    "subjectid": 3500,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://dominospizza.ru/",
                    "address": "Россия, Москва, улица Кибальчича, 2, корп. 1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 2543,
                    "name": "Бисквитъ",
                    "longitude": 37.48154,
                    "latitude": 55.800134,
                    "fax": null,
                    "subjectid": 3501,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://dominospizza.ru/",
                    "address": "Россия, Москва, улица Маршала Бирюзова, 34, корп. 2",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                }
            ]
        },
        {
            "service": {
                "serviceid": 114,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "бизнес-ланч",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 145,
                "subjectid": 6,
                "description": "Кафе | кальян-бар | кофейня | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, смешанная | кофе с собой | завтрак | цена чашки капучино: 250–290 руб | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кофейня",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 281,
                "subjectid": 37,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | кухня: европейская | кофе с собой | завтрак | оплата картой",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:33:10+00:00",
                "regionid": 102269,
                "name": "завтрак",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 37,
                "name": "Zelen' Эко кафе",
                "fullname": "Zelen' Эко кафе",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nкухня: европейская\nкофе с собой\nзавтрак\nоплата картой\nСсылки: \n#instagram: https://www.instagram.com/mafia_loft_cafe/\n#foodfox: https://www.foodfox.ru/restaurant/mafia_cafe?utm_campaign=rest_card&utm_medium=cpa&utm_source=yandex_maps",
                "yandexMapPages": "https://yandex.ru/maps/org/mafia_loft_cafe/5738121726/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 87,
                    "name": "Zelen' Эко кафе",
                    "longitude": 37.616099,
                    "latitude": 55.704879,
                    "fax": null,
                    "subjectid": 37,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Духовской переулок, 17, стр. 1, пом.17А",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 805-76-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 115,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "доставка еды",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 116,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, итальянская, русская, японская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 117,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кофе с собой",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 118,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "завтрак",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 119,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "летняя веранда",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 120,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "бесплатная доставка",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 121,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "минимальная сумма заказа: 600 руб",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 122,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "особенности заведения: закрытие под банкет",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 142,
                "subjectid": 6,
                "description": "Кафе | бар, паб | торты на заказ | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | особенности заведения: бесплатная парковка, барная стойка, закрытие под банкет | цена бокала пива: 130–250 руб | цена: умеренные цены | караоке | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "особенности заведения: бесплатная парковка, барная стойка, закрытие под банкет",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 17420,
                "subjectid": 3061,
                "description": "Кафе | ",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:50:32+00:00",
                "regionid": 102269,
                "name": "",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 3061,
                "name": "Кафе Бриошь",
                "fullname": "Кафе Бриошь",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\n\nСсылки: \n#restoclub: https://www.restoclub.ru/msk/place/ljudmila",
                "yandexMapPages": "https://yandex.ru/maps/org/lyudmila/26977456544/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 2204,
                    "name": "Кафе Бриошь",
                    "longitude": 37.591377,
                    "latitude": 55.498189,
                    "fax": null,
                    "subjectid": 3061,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Юго-Западный административный округ, район Южное Бутово, деревня Захарьино, улица Гагарина, 2",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (496) 412-70-18"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 123,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "спортивные трансляции",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 124,
                "subjectid": 6,
                "description": "Кафе | доставка еды и обедов | спорт-бар | пиццерия | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, итальянская, русская, японская | кофе с собой | завтрак | летняя веранда | бесплатная доставка | цена бокала пива: 100–300 руб | оплата картой | цена: умеренные цены | минимальная сумма заказа: 600 руб | особенности заведения: закрытие под банкет | спортивные трансляции | меню: суши, сладости, пицца, комплексные обеды",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "меню: суши, сладости, пицца, комплексные обеды",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 125,
                "subjectid": 6,
                "description": "Кафе | банкетный зал | доставка еды и обедов | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, армянская | кофе с собой | особенности заведения: закрытие под банкет | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "банкетный зал",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 126,
                "subjectid": 6,
                "description": "Кафе | банкетный зал | доставка еды и обедов | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, армянская | кофе с собой | особенности заведения: закрытие под банкет | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, кавказская, армянская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 127,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "ресторан",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 908,
                    "name": "Хан-кебаб",
                    "longitude": 37.604841,
                    "latitude": 55.647269,
                    "fax": null,
                    "subjectid": 1291,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Симферопольский бульвар, 22к2",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1068,
                    "name": "Суши Wok",
                    "longitude": 37.625531,
                    "latitude": 55.770559,
                    "fax": null,
                    "subjectid": 1535,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://bar-italy.ru/",
                    "address": "Россия, Москва, Трубная улица, 26, стр. 1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1075,
                    "name": "Суши шоп",
                    "longitude": 37.691707,
                    "latitude": 55.888672,
                    "fax": null,
                    "subjectid": 1625,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://karaoke-club.ru/",
                    "address": "Россия, Москва, Стартовая улица, 12",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1087,
                    "name": "Суши дзен",
                    "longitude": 37.560911,
                    "latitude": 55.727201,
                    "fax": null,
                    "subjectid": 1638,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://golubka-msk.ru/",
                    "address": "Россия, Москва, Большая Пироговская улица, 53-55",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1202,
                    "name": "Рюмочная",
                    "longitude": 37.597824,
                    "latitude": 55.769894,
                    "fax": null,
                    "subjectid": 1780,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://bavarius-kafe.ru/restoran_bavarius_na_sadovoj-triumfalnoj_ulitse/",
                    "address": "Россия, Москва, Тверская улица, 30/2с1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1260,
                    "name": "Рамен-Клаб",
                    "longitude": 37.656789,
                    "latitude": 55.748788,
                    "fax": null,
                    "subjectid": 1842,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.caferukav.ru/",
                    "address": "Россия, Москва, улица Земляной Вал, 59с2",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                }
            ]
        },
        {
            "service": {
                "serviceid": 128,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "бар, паб",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 129,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "ночной клуб",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 130,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, кавказская, русская, азербайджанская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 131,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "специальное меню: постное",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 143,
                "subjectid": 6,
                "description": "Кафе | бар, паб | торты на заказ | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | особенности заведения: бесплатная парковка, барная стойка, закрытие под банкет | цена бокала пива: 130–250 руб | цена: умеренные цены | караоке | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "караоке",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 17421,
                "subjectid": 3062,
                "description": "Кафе | ",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:50:32+00:00",
                "regionid": 102269,
                "name": "Кафе",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 3062,
                "name": "Кафе Бочка",
                "fullname": "Кафе Бочка",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\n\nСсылки: \n#instagram: https://www.instagram.com/cafe_prichal\n#restoclub: https://www.restoclub.ru/msk/place/prichal-4",
                "yandexMapPages": "https://yandex.ru/maps/org/prichal/188755320850/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 2205,
                    "name": "Кафе Бочка",
                    "longitude": 37.580202,
                    "latitude": 55.506199,
                    "fax": null,
                    "subjectid": 3062,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Юго-Западный административный округ, район Южное Бутово, посёлок Липки, Коммунистическая улица, 4/1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (903) 969-12-06"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 132,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "музыка: 80-90-х, dj`s, шансон",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 133,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "фейс-контроль",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 134,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "танцпол",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 135,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | ночной клуб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, кавказская, русская, азербайджанская | кофе с собой | завтрак | летняя веранда | специальное меню: постное | цена бокала пива: 150 руб | оплата картой | цена: умеренные цены | музыка: 80-90-х, dj`s, шансон | фейс-контроль | особенности заведения: закрытие под банкет | танцпол | спортивные трансляции | парковка",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "парковка",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 136,
                "subjectid": 6,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | завтрак | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, русская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 137,
                "subjectid": 6,
                "description": "Кафе | булочная, пекарня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | завтрак | особенности заведения: выпечка | цель посещения: деловой ужин/обед, деловой завтрак, романтическая встреча, семейный ужин, ужин с друзьями | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "булочная, пекарня",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 995,
                    "name": "ТороПицца",
                    "longitude": 37.593408,
                    "latitude": 55.770097,
                    "fax": null,
                    "subjectid": 1389,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.pirogru.com/",
                    "address": "Москва, ул. 1-я Брестская, 13/14",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                },
                {
                    "pointid": 1808,
                    "name": "Кафе-пекарня Paul",
                    "longitude": 37.628234,
                    "latitude": 55.741698,
                    "fax": null,
                    "subjectid": 2638,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://ginza.ru/",
                    "address": "Россия, город Москва, улица Пятницкая, 20",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (495) 775-98-06",
                        "+7 (495) 775-98-07",
                        "+7 (495) 951-42-44",
                        "+7 (495) 959-55-06"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 138,
                "subjectid": 6,
                "description": "Кафе | булочная, пекарня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | завтрак | особенности заведения: выпечка | цель посещения: деловой ужин/обед, деловой завтрак, романтическая встреча, семейный ужин, ужин с друзьями | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "особенности заведения: выпечка",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 139,
                "subjectid": 6,
                "description": "Кафе | булочная, пекарня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | завтрак | особенности заведения: выпечка | цель посещения: деловой ужин/обед, деловой завтрак, романтическая встреча, семейный ужин, ужин с друзьями | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "цель посещения: деловой ужин/обед, деловой завтрак, романтическая встреча, семейный ужин, ужин с друзьями",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 140,
                "subjectid": 6,
                "description": "Кафе | ресторан | банкетный зал | булочная, пекарня | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | завтрак | особенности заведения: закрытие под банкет | оплата картой | цена: умеренные цены | специальное меню: постное, кошерное",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "специальное меню: постное, кошерное",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 141,
                "subjectid": 6,
                "description": "Кафе | бар, паб | торты на заказ | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, русская | кофе с собой | особенности заведения: бесплатная парковка, барная стойка, закрытие под банкет | цена бокала пива: 130–250 руб | цена: умеренные цены | караоке | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "торты на заказ",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 144,
                "subjectid": 6,
                "description": "Кафе | кальян-бар | кофейня | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, смешанная | кофе с собой | завтрак | цена чашки капучино: 250–290 руб | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кальян-бар",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 8138,
                "subjectid": 1308,
                "description": "Кондитерская | торты на заказ | булочная, пекарня | кафе | кофе с собой",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:38:52+00:00",
                "regionid": 102269,
                "name": "кафе",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 1308,
                "name": "Фрау Бротхен",
                "fullname": "Фрау Бротхен",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://pirog-haus-1.guideru.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кондитерская\nторты на заказ\nбулочная, пекарня\nкафе\nкофе с собой",
                "yandexMapPages": "https://yandex.ru/maps/org/pirog_khauz/65272008838/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 924,
                    "name": "Фрау Бротхен",
                    "longitude": 37.656829,
                    "latitude": 55.833132,
                    "fax": null,
                    "subjectid": 1308,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://pirog-haus-1.guideru.ru/",
                    "address": "Россия, Москва, Малахитовая улица, 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (905) 559-29-89"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 146,
                "subjectid": 6,
                "description": "Кафе | кальян-бар | кофейня | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: европейская, смешанная | кофе с собой | завтрак | цена чашки капучино: 250–290 руб | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, смешанная",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 147,
                "subjectid": 6,
                "description": "Кафе | суши-бар | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: китайская, итальянская, тайская, японская | особенности заведения: закрытие под банкет | летняя веранда | оплата картой | роллы филадельфия: 397 руб | цена: умеренные цены | специальное меню: детское",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "суши-бар",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 1308,
                    "name": "Поминальная Трапеза",
                    "longitude": 37.623548,
                    "latitude": 55.822149,
                    "fax": null,
                    "subjectid": 1901,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.makimaki.ru/",
                    "address": "Россия, Москва, улица Академика Королёва, 8А",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (495) 728-00-00"
                    ]
                },
                {
                    "pointid": 1470,
                    "name": "Островок Суши",
                    "longitude": 37.662596,
                    "latitude": 55.846133,
                    "fax": null,
                    "subjectid": 2188,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://planetsushi.ru/",
                    "address": "Россия, Москва, проспект Мира, 211, корп. 2, ТЦ Золотой Вавилон (2 уровень, Западная площадь, у фонтана)",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (499) 270-57-26"
                    ]
                },
                {
                    "pointid": 1587,
                    "name": "Маяк",
                    "longitude": 37.601879,
                    "latitude": 55.690278,
                    "fax": null,
                    "subjectid": 2344,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.wokmania.ru/",
                    "address": "Россия, Москва, Большая Черёмушкинская улица, 1, ТЦ Рио, ТЦ Рио",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (495) 255-57-57"
                    ]
                },
                {
                    "pointid": 2592,
                    "name": "Баварская Кухня Бирфест",
                    "longitude": 37.851799,
                    "latitude": 55.700557,
                    "fax": null,
                    "subjectid": 3573,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://www.sushi-city.com/",
                    "address": "Россия, Москва, Лермонтовский проспект, 10, корп. 1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                }
            ]
        },
        */
        {
            "service": {
                "serviceid": 148,
                "subjectid": 6,
                "description": "Кафе | суши-бар | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: китайская, итальянская, тайская, японская | особенности заведения: закрытие под банкет | летняя веранда | оплата картой | роллы филадельфия: 397 руб | цена: умеренные цены | специальное меню: детское",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "кухня: китайская, итальянская, тайская, японская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 149,
                "subjectid": 6,
                "description": "Кафе | суши-бар | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: китайская, итальянская, тайская, японская | особенности заведения: закрытие под банкет | летняя веранда | оплата картой | роллы филадельфия: 397 руб | цена: умеренные цены | специальное меню: детское",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:52+00:00",
                "regionid": 102269,
                "name": "роллы филадельфия: 397 руб",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 150,
                "subjectid": 6,
                "description": "Кафе | суши-бар | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб | кухня: китайская, итальянская, тайская, японская | особенности заведения: закрытие под банкет | летняя веранда | оплата картой | роллы филадельфия: 397 руб | цена: умеренные цены | специальное меню: детское",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "специальное меню: детское",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 151,
                "subjectid": 6,
                "description": "Кафе | бар, паб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1000 руб/сутки | кухня: русская, восточная | кофе с собой | оплата картой | цена бокала пива: 100–300 руб/сутки",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: русская, восточная",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 72,
                    "name": "Pomodoro Royal",
                    "longitude": 37.537381,
                    "latitude": 55.794274,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Ленинградский проспект, 39, стр. 41",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 508-71-82",
                        "+7 (495) 508-71-82",
                        "+7 (925) 372-06-26"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 152,
                "subjectid": 6,
                "description": "Кафе | бар, паб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1100 руб | кухня: американская | кофе с собой | завтрак | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: американская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 153,
                "subjectid": 6,
                "description": "Кафе | ресторан | бар, паб | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: грузинская, европейская, кавказская, русская | оплата картой | цена бокала пива: 120 руб | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: грузинская, европейская, кавказская, русская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 154,
                "subjectid": 6,
                "description": "Кафе | детские игровые залы и площадки | кофейня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, восточная | кофе с собой | завтрак | летняя веранда | специальное меню: блинное, детское | оплата картой | цена: умеренные цены | цена чашки капучино: 150–300 руб | особенности заведения: проводят мастер-классы, бесплатная парковка, детская анимация, закрытие под банкет | цель посещения: произвести впечатление, деловой ужин/обед, проведение банкетов, романтическая встреча, свадьба, семейный ужин, ужин с друзьями | спортивные трансляции | детская комната",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "детские игровые залы и площадки",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 155,
                "subjectid": 6,
                "description": "Кафе | детские игровые залы и площадки | кофейня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, восточная | кофе с собой | завтрак | летняя веранда | специальное меню: блинное, детское | оплата картой | цена: умеренные цены | цена чашки капучино: 150–300 руб | особенности заведения: проводят мастер-классы, бесплатная парковка, детская анимация, закрытие под банкет | цель посещения: произвести впечатление, деловой ужин/обед, проведение банкетов, романтическая встреча, свадьба, семейный ужин, ужин с друзьями | спортивные трансляции | детская комната",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, итальянская, восточная",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 156,
                "subjectid": 6,
                "description": "Кафе | детские игровые залы и площадки | кофейня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, восточная | кофе с собой | завтрак | летняя веранда | специальное меню: блинное, детское | оплата картой | цена: умеренные цены | цена чашки капучино: 150–300 руб | особенности заведения: проводят мастер-классы, бесплатная парковка, детская анимация, закрытие под банкет | цель посещения: произвести впечатление, деловой ужин/обед, проведение банкетов, романтическая встреча, свадьба, семейный ужин, ужин с друзьями | спортивные трансляции | детская комната",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "специальное меню: блинное, детское",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 157,
                "subjectid": 6,
                "description": "Кафе | детские игровые залы и площадки | кофейня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, восточная | кофе с собой | завтрак | летняя веранда | специальное меню: блинное, детское | оплата картой | цена: умеренные цены | цена чашки капучино: 150–300 руб | особенности заведения: проводят мастер-классы, бесплатная парковка, детская анимация, закрытие под банкет | цель посещения: произвести впечатление, деловой ужин/обед, проведение банкетов, романтическая встреча, свадьба, семейный ужин, ужин с друзьями | спортивные трансляции | детская комната",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "особенности заведения: проводят мастер-классы, бесплатная парковка, детская анимация, закрытие под банкет",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 158,
                "subjectid": 6,
                "description": "Кафе | детские игровые залы и площадки | кофейня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, восточная | кофе с собой | завтрак | летняя веранда | специальное меню: блинное, детское | оплата картой | цена: умеренные цены | цена чашки капучино: 150–300 руб | особенности заведения: проводят мастер-классы, бесплатная парковка, детская анимация, закрытие под банкет | цель посещения: произвести впечатление, деловой ужин/обед, проведение банкетов, романтическая встреча, свадьба, семейный ужин, ужин с друзьями | спортивные трансляции | детская комната",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "цель посещения: произвести впечатление, деловой ужин/обед, проведение банкетов, романтическая встреча, свадьба, семейный ужин, ужин с друзьями",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 159,
                "subjectid": 6,
                "description": "Кафе | детские игровые залы и площадки | кофейня | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, восточная | кофе с собой | завтрак | летняя веранда | специальное меню: блинное, детское | оплата картой | цена: умеренные цены | цена чашки капучино: 150–300 руб | особенности заведения: проводят мастер-классы, бесплатная парковка, детская анимация, закрытие под банкет | цель посещения: произвести впечатление, деловой ужин/обед, проведение банкетов, романтическая встреча, свадьба, семейный ужин, ужин с друзьями | спортивные трансляции | детская комната",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "детская комната",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 160,
                "subjectid": 6,
                "description": "Кафе | банкетный зал | ресторан | доставка еды и обедов | праздничное агентство | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, русская, украинская, азербайджанская, морская, смешанная | кофе с собой | завтрак | корпоративные мероприятия | бесплатная доставка | оплата картой | цена: умеренные цены | особенности заведения: кинопоказы, меню на английском, DJ, настольные игры, выпечка, живая музыка, проводят мастер-классы, шоу-программа, бесплатная парковка, барная стойка, детская анимация, танцпол | цель посещения: девичник, произвести впечатление, деловой ужин/обед, after-party, мальчишник, деловой завтрак, pre-party, потанцевать, познакомиться, проведение банкетов, романтическая встреча, свадьба, семейный ужин, весело напиться, поздний завтрак, ужин с друзьями | спортивные трансляции | организация свадеб | меню: гриль, сладости, комплексные обеды, домашняя еда, выпечка, шашлыки",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "праздничное агентство",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 161,
                "subjectid": 6,
                "description": "Кафе | банкетный зал | ресторан | доставка еды и обедов | праздничное агентство | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, русская, украинская, азербайджанская, морская, смешанная | кофе с собой | завтрак | корпоративные мероприятия | бесплатная доставка | оплата картой | цена: умеренные цены | особенности заведения: кинопоказы, меню на английском, DJ, настольные игры, выпечка, живая музыка, проводят мастер-классы, шоу-программа, бесплатная парковка, барная стойка, детская анимация, танцпол | цель посещения: девичник, произвести впечатление, деловой ужин/обед, after-party, мальчишник, деловой завтрак, pre-party, потанцевать, познакомиться, проведение банкетов, романтическая встреча, свадьба, семейный ужин, весело напиться, поздний завтрак, ужин с друзьями | спортивные трансляции | организация свадеб | меню: гриль, сладости, комплексные обеды, домашняя еда, выпечка, шашлыки",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, итальянская, русская, украинская, азербайджанская, морская, смешанная",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 234,
                "subjectid": 29,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 600 руб | кухня: американская, тайская, смешанная | кофе с собой | завтрак | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кофе с собой",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 29,
                "name": "Pizzeria Del Toro",
                "fullname": "Pizzeria Del Toro",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://milescafe.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 600 руб\nкухня: американская, тайская, смешанная\nкофе с собой\nзавтрак\nлетняя веранда\nоплата картой\nцена: умеренные цены\nСсылки: \n#facebook: https://www.facebook.com/cafe-miles-moscow-1768506443428999\n#instagram: https://www.instagram.com/miles_restaurant_bar_pool\n#delivery-club: https://www.delivery-club.ru/srv/Miles_msk?utm_medium=cpa&utm_source=yandexmaps\n#foodfox: https://www.foodfox.ru/restaurant/Cafe_Miles?utm_campaign=rest_card&utm_medium=cpa&utm_source=yandex_maps",
                "yandexMapPages": "https://yandex.ru/maps/org/miles/40392862792/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 81,
                    "name": "Pizzeria Del Toro",
                    "longitude": 37.602176,
                    "latitude": 55.74513,
                    "fax": null,
                    "subjectid": 29,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://milescafe.ru/",
                    "address": "Россия, Москва, Гоголевский бульвар, 2/18",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (916) 800-79-42"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 162,
                "subjectid": 6,
                "description": "Кафе | банкетный зал | ресторан | доставка еды и обедов | праздничное агентство | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–1500 руб | кухня: европейская, итальянская, русская, украинская, азербайджанская, морская, смешанная | кофе с собой | завтрак | корпоративные мероприятия | бесплатная доставка | оплата картой | цена: умеренные цены | особенности заведения: кинопоказы, меню на английском, DJ, настольные игры, выпечка, живая музыка, проводят мастер-классы, шоу-программа, бесплатная парковка, барная стойка, детская анимация, танцпол | цель посещения: девичник, произвести впечатление, деловой ужин/обед, after-party, мальчишник, деловой завтрак, pre-party, потанцевать, познакомиться, проведение банкетов, романтическая встреча, свадьба, семейный ужин, весело напиться, поздний завтрак, ужин с друзьями | спортивные трансляции | организация свадеб | меню: гриль, сладости, комплексные обеды, домашняя еда, выпечка, шашлыки",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "корпоративные мероприятия",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 163,
                "subjectid": 6,
                "description": "Кафе | бильярдный клуб | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–600 руб | кухня: грузинская, европейская | кофе с собой | оплата картой | цена: умеренные цены | игра в бильярд: 400–500 руб",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "бильярдный клуб",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 164,
                "subjectid": 6,
                "description": "Кафе | бильярдный клуб | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–600 руб | кухня: грузинская, европейская | кофе с собой | оплата картой | цена: умеренные цены | игра в бильярд: 400–500 руб",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: грузинская, европейская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 165,
                "subjectid": 6,
                "description": "Кафе | бильярдный клуб | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–600 руб | кухня: грузинская, европейская | кофе с собой | оплата картой | цена: умеренные цены | игра в бильярд: 400–500 руб",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "игра в бильярд: 400–500 руб",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 166,
                "subjectid": 6,
                "description": "Кафе | магазин подарков и сувениров | книжный магазин | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–600 руб | кухня: европейская, кавказская, русская, домашняя, смешанная | кофе с собой | завтрак | летняя веранда | оплата картой | цена: умеренные цены | учебная литература",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "магазин подарков и сувениров",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 167,
                "subjectid": 6,
                "description": "Кафе | магазин подарков и сувениров | книжный магазин | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–600 руб | кухня: европейская, кавказская, русская, домашняя, смешанная | кофе с собой | завтрак | летняя веранда | оплата картой | цена: умеренные цены | учебная литература",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "книжный магазин",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 168,
                "subjectid": 6,
                "description": "Кафе | магазин подарков и сувениров | книжный магазин | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–600 руб | кухня: европейская, кавказская, русская, домашняя, смешанная | кофе с собой | завтрак | летняя веранда | оплата картой | цена: умеренные цены | учебная литература",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, кавказская, русская, домашняя, смешанная",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 169,
                "subjectid": 6,
                "description": "Кафе | магазин подарков и сувениров | книжный магазин | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–600 руб | кухня: европейская, кавказская, русская, домашняя, смешанная | кофе с собой | завтрак | летняя веранда | оплата картой | цена: умеренные цены | учебная литература",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "учебная литература",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 170,
                "subjectid": 6,
                "description": "Кафе | банкетный зал | столовая | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "столовая",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_2.jpg"
                },
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_3.jpg"
                }
            ],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        /*
        {
            "service": {
                "serviceid": 171,
                "subjectid": 6,
                "description": "Кафе | банкетный зал | столовая | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | летняя веранда | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, кавказская, русская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 6,
                "name": "Pomodoro Royal",
                "fullname": "Pomodoro Royal",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nдоставка еды и обедов\nспорт-бар\nпиццерия\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–1000 руб\nкухня: европейская, итальянская, русская, японская\nкофе с собой\nзавтрак\nлетняя веранда\nбесплатная доставка\nцена бокала пива: 100–300 руб\nоплата картой\nцена: умеренные цены\nминимальная сумма заказа: 600 руб\nособенности заведения: закрытие под банкет\nспортивные трансляции\nменю: суши, сладости, пицца, комплексные обеды\nСсылки: \n#instagram: http://instagram.com/cafe_therm/\n#vkontakte: http://vk.com/cafetherm\n#facebook: http://www.facebook.com/CafeTheRM\n#leclick: http://leclick.ru/restaurant/russia/moscow/TheRedMachine\n#lookoncity: http://lookoncity.ru/Card/4231-The_Red_Machine_Red_Mashin\n#menu_ru: http://menu.ru/places/show/place/633619\n#resto: http://resto.ru/place/9157\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/26684_otzyvy-the-red-machine-moscow-russia\n#zakazaka: https://zakazaka.ru/restaurants/menu/redmachine\n#link: https://www.rm-pizza.moscow/menu/",
                "yandexMapPages": "https://yandex.ru/maps/org/the_red_machine/1169988388/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": []
        },
        {
            "service": {
                "serviceid": 172,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "Кафе",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 173,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "бизнес-ланч",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 7371,
                "subjectid": 1199,
                "description": "Пиццерия | доставка еды | средний счёт: 1100–1150 руб | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:38:09+00:00",
                "regionid": 102269,
                "name": "доставка еды",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 1199,
                "name": "Чайхана Атлас",
                "fullname": "Чайхана Атлас",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://www.premierpizza.ru/",
                "email": "premier_pizza@mail.ru",
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Пиццерия\nдоставка еды\nсредний счёт: 1100–1150 руб\nцена: умеренные цены\nСсылки: \n#delivery-club: https://www.delivery-club.ru/srv/Prjemjer_Pizza?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/premyer_pitstsa/146455092814/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 846,
                    "name": "Чайхана Атлас",
                    "longitude": 37.540757,
                    "latitude": 55.792281,
                    "fax": null,
                    "subjectid": 1199,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://www.premierpizza.ru/",
                    "address": "Россия, Москва, Ленинградский проспект, 37",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (495) 221-07-17",
                        "+7 (495) 505-77-66"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 174,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "доставка еды",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 175,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, кавказская, русская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 176,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кофе с собой",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 177,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "завтрак",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 178,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "особенности заведения: живая музыка, бесплатная парковка, танцпол",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 179,
                "subjectid": 22,
                "description": "Кафе | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: европейская, кавказская, русская | кофе с собой | завтрак | особенности заведения: живая музыка, бесплатная парковка, танцпол | оплата картой | цена: умеренные цены | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "спортивные трансляции",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 22,
                "name": "Point Coffee&Food",
                "fullname": "Point Coffee&Food",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "http://nabasmannoi.ru/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: европейская, кавказская, русская\nкофе с собой\nзавтрак\nособенности заведения: живая музыка, бесплатная парковка, танцпол\nоплата картой\nцена: умеренные цены\nспортивные трансляции\nСсылки: \n#leclick: http://leclick.ru/restaurant/russia/moscow/kafe-na-basmannoi\n#leclick: http://leclick.ru/restaurant/russia/moscow/na-basmannoi\n#lookoncity: http://lookoncity.ru/Card/2744-Na_Basmannoy\n#menu_ru: http://menu.ru/places/show/place/2339\n#resto: http://resto.ru/place/161\n#traveltipz_restaurants: http://traveltipz.ru/trips/restaurants/id/19569_otzyvy-na-basmannoj-moscow-russia\n#restoclub: https://www.restoclub.ru/msk/place/na-basmannoj\n#link: http://nabasmannoi.ru/меню.html",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_na_basmannoy/1006029559/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 74,
                    "name": "Point Coffee&Food",
                    "longitude": 37.668759,
                    "latitude": 55.768886,
                    "fax": null,
                    "subjectid": 22,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "http://nabasmannoi.ru/",
                    "address": "Россия, Москва, Старая Басманная улица, 34",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 338-63-64",
                        "+7 (499) 261-92-41",
                        "+7 (499) 261-45-73"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 180,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "Кафе",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 181,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "пиццерия",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 182,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "суши-бар",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 183,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "магазин пива",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 184,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "бизнес-ланч",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 185,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "доставка еды",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 186,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: итальянская, японская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 187,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кофе с собой",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 17422,
                "subjectid": 3062,
                "description": "Кафе | ",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:50:32+00:00",
                "regionid": 102269,
                "name": "",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 3062,
                "name": "Кафе Бочка",
                "fullname": "Кафе Бочка",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\n\nСсылки: \n#instagram: https://www.instagram.com/cafe_prichal\n#restoclub: https://www.restoclub.ru/msk/place/prichal-4",
                "yandexMapPages": "https://yandex.ru/maps/org/prichal/188755320850/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 2205,
                    "name": "Кафе Бочка",
                    "longitude": 37.580202,
                    "latitude": 55.506199,
                    "fax": null,
                    "subjectid": 3062,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Юго-Западный административный округ, район Южное Бутово, посёлок Липки, Коммунистическая улица, 4/1",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (903) 969-12-06"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 188,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "завтрак",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 189,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "роллы филадельфия: 250 руб",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 190,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "спортивные трансляции",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 191,
                "subjectid": 23,
                "description": "Кафе | пиццерия | суши-бар | магазин пива | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–700 руб | кухня: итальянская, японская | кофе с собой | завтрак | оплата картой | роллы филадельфия: 250 руб | цена: умеренные цены | спортивные трансляции | крафтовое пиво",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "крафтовое пиво",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 23,
                "name": "Point 242",
                "fullname": "Point 242",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": "https://крафткафе.рф/",
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nпиццерия\nсуши-бар\nмагазин пива\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–700 руб\nкухня: итальянская, японская\nкофе с собой\nзавтрак\nоплата картой\nроллы филадельфия: 250 руб\nцена: умеренные цены\nспортивные трансляции\nкрафтовое пиво\nСсылки: \n#vkontakte: https://vk.com/cc.beerbochka\n#delivery-club: https://www.delivery-club.ru/srv/Kraft_kafje?utm_medium=cpa&utm_source=yandexmaps",
                "yandexMapPages": "https://yandex.ru/maps/org/kraft_kafe/226931925618/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 75,
                    "name": "Point 242",
                    "longitude": 37.500114,
                    "latitude": 55.831524,
                    "fax": null,
                    "subjectid": 23,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": "https://крафткафе.рф/",
                    "address": "Россия, Москва, Нарвская улица, 1А, корп. 3",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (985) 539-97-03",
                        "+7 (495) 928-34-13"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 192,
                "subjectid": 24,
                "description": "Кафе | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–800 руб | кухня: европейская, американская, русская | кофе с собой | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "Кафе",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 24,
                "name": "Plovbox.ru",
                "fullname": "Plovbox.ru",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nресторан\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–800 руб\nкухня: европейская, американская, русская\nкофе с собой\nоплата картой\nцена: умеренные цены\nСсылки: \n#facebook: https://www.facebook.com/foodman.gft/\n#instagram: https://www.instagram.com/foodman_gastro_lab",
                "yandexMapPages": "https://yandex.ru/maps/org/foodman_gastro_lab/1566581874/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 76,
                    "name": "Plovbox.ru",
                    "longitude": 37.647812,
                    "latitude": 55.728798,
                    "fax": null,
                    "subjectid": 24,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Кожевническая улица, 18",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 365-07-27"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 193,
                "subjectid": 24,
                "description": "Кафе | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–800 руб | кухня: европейская, американская, русская | кофе с собой | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "ресторан",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 24,
                "name": "Plovbox.ru",
                "fullname": "Plovbox.ru",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nресторан\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–800 руб\nкухня: европейская, американская, русская\nкофе с собой\nоплата картой\nцена: умеренные цены\nСсылки: \n#facebook: https://www.facebook.com/foodman.gft/\n#instagram: https://www.instagram.com/foodman_gastro_lab",
                "yandexMapPages": "https://yandex.ru/maps/org/foodman_gastro_lab/1566581874/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 76,
                    "name": "Plovbox.ru",
                    "longitude": 37.647812,
                    "latitude": 55.728798,
                    "fax": null,
                    "subjectid": 24,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Кожевническая улица, 18",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 365-07-27"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 194,
                "subjectid": 24,
                "description": "Кафе | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–800 руб | кухня: европейская, американская, русская | кофе с собой | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "бизнес-ланч",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 24,
                "name": "Plovbox.ru",
                "fullname": "Plovbox.ru",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nресторан\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–800 руб\nкухня: европейская, американская, русская\nкофе с собой\nоплата картой\nцена: умеренные цены\nСсылки: \n#facebook: https://www.facebook.com/foodman.gft/\n#instagram: https://www.instagram.com/foodman_gastro_lab",
                "yandexMapPages": "https://yandex.ru/maps/org/foodman_gastro_lab/1566581874/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 76,
                    "name": "Plovbox.ru",
                    "longitude": 37.647812,
                    "latitude": 55.728798,
                    "fax": null,
                    "subjectid": 24,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Кожевническая улица, 18",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 365-07-27"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 195,
                "subjectid": 24,
                "description": "Кафе | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–800 руб | кухня: европейская, американская, русская | кофе с собой | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "доставка еды",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 24,
                "name": "Plovbox.ru",
                "fullname": "Plovbox.ru",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nресторан\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–800 руб\nкухня: европейская, американская, русская\nкофе с собой\nоплата картой\nцена: умеренные цены\nСсылки: \n#facebook: https://www.facebook.com/foodman.gft/\n#instagram: https://www.instagram.com/foodman_gastro_lab",
                "yandexMapPages": "https://yandex.ru/maps/org/foodman_gastro_lab/1566581874/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 76,
                    "name": "Plovbox.ru",
                    "longitude": 37.647812,
                    "latitude": 55.728798,
                    "fax": null,
                    "subjectid": 24,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Кожевническая улица, 18",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 365-07-27"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 196,
                "subjectid": 24,
                "description": "Кафе | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–800 руб | кухня: европейская, американская, русская | кофе с собой | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кухня: европейская, американская, русская",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 24,
                "name": "Plovbox.ru",
                "fullname": "Plovbox.ru",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nресторан\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–800 руб\nкухня: европейская, американская, русская\nкофе с собой\nоплата картой\nцена: умеренные цены\nСсылки: \n#facebook: https://www.facebook.com/foodman.gft/\n#instagram: https://www.instagram.com/foodman_gastro_lab",
                "yandexMapPages": "https://yandex.ru/maps/org/foodman_gastro_lab/1566581874/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 76,
                    "name": "Plovbox.ru",
                    "longitude": 37.647812,
                    "latitude": 55.728798,
                    "fax": null,
                    "subjectid": 24,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Кожевническая улица, 18",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 365-07-27"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 197,
                "subjectid": 24,
                "description": "Кафе | ресторан | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–800 руб | кухня: европейская, американская, русская | кофе с собой | оплата картой | цена: умеренные цены",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "кофе с собой",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 24,
                "name": "Plovbox.ru",
                "fullname": "Plovbox.ru",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nресторан\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–800 руб\nкухня: европейская, американская, русская\nкофе с собой\nоплата картой\nцена: умеренные цены\nСсылки: \n#facebook: https://www.facebook.com/foodman.gft/\n#instagram: https://www.instagram.com/foodman_gastro_lab",
                "yandexMapPages": "https://yandex.ru/maps/org/foodman_gastro_lab/1566581874/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 76,
                    "name": "Plovbox.ru",
                    "longitude": 37.647812,
                    "latitude": 55.728798,
                    "fax": null,
                    "subjectid": 24,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, Кожевническая улица, 18",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": [
                        "+7 (925) 365-07-27"
                    ]
                }
            ]
        },
        {
            "service": {
                "serviceid": 198,
                "subjectid": 25,
                "description": "Кафе | банкетный зал | кальян-бар | Wi-Fi | бизнес-ланч | доставка еды | средний счёт: 500–800 руб | кухня: европейская, восточная | кофе с собой | завтрак | особенности заведения: DJ, настольные игры, выпечка, живая музыка, шоу-программа, бесплатная парковка, барная стойка, танцпол | цель посещения: произвести впечатление, деловой ужин/обед, мальчишник, деловой завтрак, потанцевать, познакомиться, проведение банкетов, романтическая встреча, свадьба, семейный ужин, поздний завтрак, ужин с друзьями | летняя веранда | детская комната | цена: умеренные цены | тип заведения: гриль-бар, стейк-хаус, закусочная, пивной ресторан, бар-клуб | специальное меню: постное, сезонное, блинное, гриль, детское, диетическое, кошерное | спортивные трансляции",
                "pricemin": null,
                "pricemax": null,
                "deleted": false,
                "subjecttype": 1,
                "deletedcascade": null,
                "datepublication": "2018-08-21T16:29:53+00:00",
                "regionid": 102269,
                "name": "Кафе",
                "numberofdisplay": 0,
                "rating": 5
            },
            "company": {
                "companyid": 25,
                "name": "Pizzoff.ru",
                "fullname": "Pizzoff.ru",
                "tin": null,
                "regionid": 102269,
                "userid": null,
                "website": null,
                "email": null,
                "ismaster": null,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": 5,
                "ratingclient": 5,
                "description": "Кафе\nбанкетный зал\nкальян-бар\nWi-Fi\nбизнес-ланч\nдоставка еды\nсредний счёт: 500–800 руб\nкухня: европейская, восточная\nкофе с собой\nзавтрак\nособенности заведения: DJ, настольные игры, выпечка, живая музыка, шоу-программа, бесплатная парковка, барная стойка, танцпол\nцель посещения: произвести впечатление, деловой ужин/обед, мальчишник, деловой завтрак, потанцевать, познакомиться, проведение банкетов, романтическая встреча, свадьба, семейный ужин, поздний завтрак, ужин с друзьями\nлетняя веранда\nдетская комната\nцена: умеренные цены\nтип заведения: гриль-бар, стейк-хаус, закусочная, пивной ресторан, бар-клуб\nспециальное меню: постное, сезонное, блинное, гриль, детское, диетическое, кошерное\nспортивные трансляции\nСсылки: \n#vkontakte: http://vk.com/sadbargcafe\n#facebook: https://www.facebook.com/sadbargcafe",
                "yandexMapPages": "https://yandex.ru/maps/org/kafe_sadbarg/1760262471/"
            },
            "images": [],
            "categories": [
                {
                    "categoryid": 1,
                    "categoryname": "Кафе, пиццерии, суши-бары",
                    "parentid": 15,
                    "description": null,
                    "img": null
                }
            ],
            "points": [
                {
                    "pointid": 77,
                    "name": "Pizzoff.ru",
                    "longitude": 37.61238,
                    "latitude": 55.709698,
                    "fax": null,
                    "subjectid": 25,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Россия, Москва, 2-я Рощинская улица, 10",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1,
                    "phones": []
                }
            ]
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
                "name": "бла-бла",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
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
                "name": "Услуга в Воронеже",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
            "points": []
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
                "name": "Четвертая услуга в воронеже",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
            "points": []
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
                "name": "Забегу на самую высокую гору в мире.",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
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
                },
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
                "name": "4.1 услуга в воронее",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
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
                "name": "Третья услуга в воронеже",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
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
                "serviceid": 55,
                "subjectid": 6,
                "description": "Професссиональный носильщик душ",
                "pricemin": 10,
                "pricemax": 100000000,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-13T16:34:39+00:00",
                "regionid": 1,
                "name": "Унесу ваши души",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
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
                }
            ]
        },
        {
            "service": {
                "serviceid": 63,
                "subjectid": 6,
                "description": "Професиональный уборщик",
                "pricemin": 10,
                "pricemax": 1009,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-15T11:48:14+00:00",
                "regionid": 1,
                "name": "Уберу все",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
            "points": [
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
                "serviceid": 65,
                "subjectid": 6,
                "description": "Укажу дорогу до достопримечательности (любой) Воронежа",
                "pricemin": 100,
                "pricemax": 500,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-16T22:02:40+00:00",
                "regionid": 1,
                "name": "Укажу дорогу",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
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
                }
            ]
        },
        {
            "service": {
                "serviceid": 66,
                "subjectid": 6,
                "description": "Трам-тараам",
                "pricemin": 0,
                "pricemax": 0,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-16T22:09:22+00:00",
                "regionid": 83184,
                "name": "Трам-тараам",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [],
            "points": [
                {
                    "pointid": 36,
                    "name": "Губкин",
                    "longitude": 37.534748,
                    "latitude": 51.283644,
                    "fax": null,
                    "subjectid": 6,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Белгородская область, Губкин, улица Мира",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 0,
                    "phones": []
                }
            ]
        },
        {
            "service": {
                "serviceid": 105,
                "subjectid": 6,
                "description": "Делаю крутые картинки и все такое прочее.",
                "pricemin": 100,
                "pricemax": 500,
                "deleted": false,
                "subjecttype": 0,
                "deletedcascade": null,
                "datepublication": "2018-08-17T14:30:56+00:00",
                "regionid": 102269,
                "name": "Сделаю крутые картинки",
                "numberofdisplay": 0,
                "rating": 5
            },
            "Userinfo": {
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
                    "categoryid": 17,
                    "categoryname": "Грузчик",
                    "parentid": null,
                    "description": "Ну  так все ясно",
                    "img": null
                },
                {
                    "categoryid": 14,
                    "categoryname": "Мобильная разработка",
                    "parentid": 20,
                    "description": "Создание мобильных приложений",
                    "img": null
                },
                {
                    "categoryid": 11,
                    "categoryname": "Ремонт и строительство",
                    "parentid": null,
                    "description": "Ремонт всякой всячины и строительство другой всячины",
                    "img": null
                },
                {
                    "categoryid": 18,
                    "categoryname": "Организация мероприятий",
                    "parentid": 15,
                    "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                    "img": null
                }
            ],
            "images": [
                {
                    "imageid": 105,
                    "serviceid": 105,
                    "imagepath": "/img/services/105_1.jpg"
                }
            ],
            "points": []
        }*/
    ]
    let autocomplete = ﻿[{"type":"point", "name":"Левая точка", "id": 12, "address": "Москва, Шелапутинский переулок, 6с5"},{"type":"company", "name":"Левая компания", "id": 11},{"type":"point", "name":"Правая точка", "id": 45, "address": "Москва, улица Александра Невского"},{"type":"category", "name":"Перевоза левых грузов", "id": 19},{"type":"service", "name":"Украду для вас ключи", "id": 105},{"type":"company", "name":"Бочка Ромы", "id": 84},{"type":"company", "name":"Четвертый вокзал", "id": 3},{"type":"service", "name":"Помою машину", "id": 45}]
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