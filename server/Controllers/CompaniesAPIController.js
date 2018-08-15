//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let companies = 
/*
[
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
    },
    {
        "companyid": 22,
        "name": "Молокозавод",
        "fullname": "ООО Молокозавод",
        "tin": null,
        "regionid": null,
        "userid": 6,
        "website": null,
        "email": null,
        "ismaster": false,
        "deleted": false,
        "deletedcascade": null
    },
    {
        "companyid": 23,
        "name": "qweqweqw",
        "fullname": "qrerew",
        "tin": null,
        "regionid": null,
        "userid": 6,
        "website": null,
        "email": null,
        "ismaster": false,
        "deleted": false,
        "deletedcascade": null
    },
    {
        "companyid": 25,
        "name": "МагаданПоволжье",
        "fullname": "ООО \"МагаданПоволжье\"",
        "tin": "123431431431",
        "regionid": null,
        "userid": 6,
        "website": null,
        "email": null,
        "ismaster": false,
        "deleted": false,
        "deletedcascade": null
    },
    {
        "companyid": 27,
        "name": "Хело",
        "fullname": "ОАО Хело",
        "tin": null,
        "regionid": null,
        "userid": 6,
        "website": null,
        "email": null,
        "ismaster": false,
        "deleted": false,
        "deletedcascade": null
    },
    {
        "companyid": 30,
        "name": "Ололо",
        "fullname": "ОАО Ололо",
        "tin": null,
        "regionid": null,
        "userid": 6,
        "website": null,
        "email": null,
        "ismaster": false,
        "deleted": false,
        "deletedcascade": null
    },
    {
        "companyid": 31,
        "name": "Маролон",
        "fullname": "ОАО Маролон",
        "tin": null,
        "regionid": null,
        "userid": 6,
        "website": null,
        "email": null,
        "ismaster": false,
        "deleted": false,
        "deletedcascade": null
    },
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
    },
    {
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
    }
]*/
[
        {
            "company": {
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
                "deletedcascade": false,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 22,
                "name": "Молокозавод",
                "fullname": "ООО Молокозавод",
                "tin": null,
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 23,
                "name": "qweqweqw",
                "fullname": "qrerew",
                "tin": null,
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 24,
                "name": "qweqweqw",
                "fullname": "qrerew",
                "tin": "werwerwe",
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 25,
                "name": "МагаданПоволжье",
                "fullname": "ООО \"МагаданПоволжье\"",
                "tin": "123431431431",
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 27,
                "name": "Хело",
                "fullname": "ОАО Хело",
                "tin": null,
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 30,
                "name": "Ололо",
                "fullname": "ОАО Ололо",
                "tin": null,
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 31,
                "name": "Маролон",
                "fullname": "ОАО Маролон",
                "tin": null,
                "regionid": null,
                "userid": 6,
                "website": null,
                "email": null,
                "ismaster": false,
                "deleted": false,
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
            "company": {
                "companyid": 56,
                "name": "Нож в сердце",
                "fullname": "ОАО \"Ножи в спину\"",
                "tin": "1234567890",
                "regionid": 1,
                "userid": 6,
                "website": "http://wdqdwq.ru",
                "email": "qwe@d.ds",
                "ismaster": false,
                "deleted": false,
                "deletedcascade": false,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": []
        },
        {
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
                "deletedcascade": null,
                "logotype": null,
                "ratingexecutor": "5",
                "ratingclient": "5"
            },
            "points": [
                {
                    "pointid": 20,
                    "name": "Точка в Воронеже",
                    "longitude": "39.175144362495",
                    "latitude": "51.647905633633",
                    "fax": null,
                    "subjectid": 55,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Воронеж, улица Моисеева, 75",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1
                }
            ]
        },
        {
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
                "deletedcascade": false,
                "logotype": "/img/companies/54_1.jpg",
                "ratingexecutor": "5",
                "ratingclient": "4"
            },
            "points": [
                {
                    "pointid": 18,
                    "name": "Космос",
                    "longitude": "36.578380986816",
                    "latitude": "50.573351965536",
                    "fax": null,
                    "subjectid": 54,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Белгород, улица Королёва, 5",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1
                },
                {
                    "pointid": 29,
                    "name": "назовите метку",
                    "longitude": "39.19473917456",
                    "latitude": "51.659779074494",
                    "fax": null,
                    "subjectid": 54,
                    "time": null,
                    "email": null,
                    "usermanager": null,
                    "website": null,
                    "address": "Воронеж, улица Свободы, 16",
                    "deleted": false,
                    "deletedcascade": null,
                    "subjecttype": 1
                }
            ]
        }
    ]
//Контроллер для компаний
module.exports =  {
    //Возвращает точки предоставления услуг назначенные текущему пользователю
    getCompanies(request, response){
        console.log("// "+new Date + " GET /CompaniesAPI/getCompanies");
        console.log("data: ")
        console.log(request.body)
        console.log(companies)
        return sendJSON(200, {
            status: "OK",
            companies: companies
        }, response)
    },
}