//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let services = [
    {
        "service": {
            "serviceid": 4,
            "subjectid": 21,
            "description": "Новое свежее предложение.",
            "pricemin": 0,
            "pricemax": 500,
            "deleted": true,
            "subjecttype": 1,
            "deletedcascade": null,
            "datepublication": "2018-07-23T11:58:17+00:00",
            "regionid": 1,
            "name": " "
        },
        "company": [
            {
                "companyid": 21,
                "name": "Храмово",
                "fullname": "ООО Храмово",
                "tin": null,
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": false
            }
        ],
        "categories": [],
        "points": []
    },
    {
        "service": {
            "serviceid": 10,
            "subjectid": 54,
            "description": "Предложение с точками оказания услуг",
            "pricemin": 0,
            "pricemax": 500,
            "deleted": false,
            "subjecttype": 1,
            "deletedcascade": null,
            "datepublication": "2018-07-25T10:25:55+00:00",
            "regionid": 1,
            "name": " "
        },
        "company": [
            {
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
                "deletedcascade": null
            }
        ],
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
                "pointid": 1,
                "name": "Главная точка",
                "longitude": 36.595487310396,
                "latitude": 50.581499805984,
                "fax": null,
                "subjectid": 54,
                "time": null,
                "email": null,
                "usermanager": null,
                "website": null,
                "address": null,
                "deleted": false,
                "deletedcascade": null,
                "subjecttype": 1
            }
        ]
    },
    {
        "service": {
            "serviceid": 11,
            "subjectid": 54,
            "description": "Предложение с регионом",
            "pricemin": 0,
            "pricemax": 500,
            "deleted": false,
            "subjecttype": 1,
            "deletedcascade": null,
            "datepublication": "2018-07-25T10:32:10+00:00",
            "regionid": 1,
            "name": " "
        },
        "company": [
            {
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
                "deletedcascade": null
            }
        ],
        "categories": [
            {
                "categoryid": 18,
                "categoryname": "Организация мероприятий",
                "parentid": 15,
                "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                "img": null
            }
        ],
        "points": []
    },
    {
        "service": {
            "serviceid": 5,
            "subjectid": 54,
            "description": "Новое свежее предложение.",
            "pricemin": 0,
            "pricemax": 500,
            "deleted": false,
            "subjecttype": 1,
            "deletedcascade": null,
            "datepublication": "2018-07-23T11:58:24+00:00",
            "regionid": 1,
            "name": " "
        },
        "company": [
            {
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
                "deletedcascade": null
            }
        ],
        "categories": [
            {
                "categoryid": 18,
                "categoryname": "Организация мероприятий",
                "parentid": 15,
                "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                "img": null
            }
        ],
        "points": []
    },
    {
        "service": {
            "serviceid": 22,
            "subjectid": 57,
            "description": "Профессиональный носильщик колец. Могу донести даже до Ородруина.",
            "pricemin": 100,
            "pricemax": 500000,
            "deleted": false,
            "subjecttype": 1,
            "deletedcascade": false,
            "datepublication": "2018-08-03T12:53:36+00:00",
            "regionid": 1,
            "name": " "
        },
        "company": [
            {
                "companyid": 57,
                "name": "Кольцо",
                "fullname": "ОАО \"Кольцо\"",
                "tin": "1234567890",
                "regionid": 1,
                "userid": 9,
                "website": "http://ring.ru",
                "email": "ring@d.ds",
                "ismaster": false,
                "deleted": false,
                "deletedcascade": false
            }
        ],
        "categories": [
            {
                "categoryid": 14,
                "categoryname": "Мобильная разработка",
                "parentid": 20,
                "description": "Создание мобильных приложений",
                "img": null
            },
            {
                "categoryid": 13,
                "categoryname": "Web-разработка",
                "parentid": 20,
                "description": "Разработка и верстка сайтов и прочее и бла-бла",
                "img": null
            }
        ],
        "points": [
            {
                "pointid": 5,
                "name": "Начало пути.",
                "longitude": 36.58035063374,
                "latitude": 50.568459640885,
                "fax": null,
                "subjectid": 57,
                "time": null,
                "email": null,
                "usermanager": null,
                "website": null,
                "address": null,
                "deleted": false,
                "deletedcascade": false,
                "subjecttype": 1
            }
        ]
    },
    {
        "service": {
            "serviceid": 20,
            "subjectid": 57,
            "description": "Отнесу ваше дорогущее кольцо куда-нибудь подальше.",
            "pricemin": 0,
            "pricemax": 50000,
            "deleted": false,
            "subjecttype": 1,
            "deletedcascade": false,
            "datepublication": "2018-08-01T14:22:45+00:00",
            "regionid": 1,
            "name": " "
        },
        "company": [
            {
                "companyid": 57,
                "name": "Кольцо",
                "fullname": "ОАО \"Кольцо\"",
                "tin": "1234567890",
                "regionid": 1,
                "userid": 9,
                "website": "http://ring.ru",
                "email": "ring@d.ds",
                "ismaster": false,
                "deleted": false,
                "deletedcascade": false
            }
        ],
        "categories": [
            {
                "categoryid": 14,
                "categoryname": "Мобильная разработка",
                "parentid": 20,
                "description": "Создание мобильных приложений",
                "img": null
            },
            {
                "categoryid": 13,
                "categoryname": "Web-разработка",
                "parentid": 20,
                "description": "Разработка и верстка сайтов и прочее и бла-бла",
                "img": null
            }
        ],
        "points": [
            {
                "pointid": 5,
                "name": "Начало пути.",
                "longitude": 36.58035063374,
                "latitude": 50.568459640885,
                "fax": null,
                "subjectid": 57,
                "time": null,
                "email": null,
                "usermanager": null,
                "website": null,
                "address": null,
                "deleted": false,
                "deletedcascade": false,
                "subjecttype": 1
            },
            {
                "pointid": 6,
                "name": "Конец пути (е-хе-хе)",
                "longitude": 36.58035063374,
                "latitude": 50.568459640885,
                "fax": null,
                "subjectid": 57,
                "time": null,
                "email": null,
                "usermanager": null,
                "website": null,
                "address": null,
                "deleted": true,
                "deletedcascade": false,
                "subjecttype": 1
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