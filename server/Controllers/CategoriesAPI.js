function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let categories = [
    {
        "id": 17,
        "name": "Грузчик",
        "description": "Ну  так все ясно",
        "img": null,
        "child": []
    },
    {
        "id": 20,
        "name": "ИТ",
        "description": "Все, что связано с ИТ",
        "img": null,
        "child": [
            {
                "id": 13,
                "name": "Web-разработка",
                "description": "Разработка и верстка сайтов и прочее и бла-бла",
                "img": null,
                "child": [],
                "check": false
            },
            {
                "id": 14,
                "name": "Мобильная разработка",
                "description": "Создание мобильных приложений",
                "img": null,
                "child": [],
                "check": false
            }
        ]
    },
    {
        "id": 11,
        "name": "Ремонт и строительство",
        "description": "Ремонт всякой всячины и строительство другой всячины",
        "img": null,
        "child": []
    },
    {
        "id": 12,
        "name": "Строительство домов",
        "description": "Строительство домов - важная отрасль услуг для тех, у кого все еще нет дома",
        "img": null,
        "child": []
    },
    {
        "id": 15,
        "name": "Развлечение и отдых",
        "description": "Работа, связанная с развлечениями. Большая редкость",
        "img": null,
        "child": [
            {
                "id": 18,
                "name": "Организация мероприятий",
                "description": "Удивительно, но \"ехха\" эта крайне неблагодарная отрасль связана с развлечениями.",
                "img": null,
                "child": [],
                "check": false
            }
        ]
    },
    {
        "id": 16,
        "name": "Курьерские услуги",
        "description": "Работа \"на побегушках\"",
        "img": null,
        "child": []
    },
    {
        "id": 10,
        "name": "Бытовые услуги",
        "description": "Всякие бытовые услуги",
        "img": null,
        "child": []
    }
]
//Контроллер категорий
module.exports =  {
    //Отдает дерево категорий
    getCategoriesForSite(request, response){
        console.log("// "+new Date + " GET /CategoriesAPI/getCategoriesForSite");
        console.log("data: ")
        console.log(request.body)
        return sendJSON(200, {
            status: "OK",
            categories
        }, response)
    }
}
