//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let companies = 
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