function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
let categories = [
    /*
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
    }*/
            {
                "id": 130,
                "name": "Питание",
                "description": null,
                "img": "/images/categories/питание.jpg",
                "child": [
                    {
                        "id": 135,
                        "name": "Кондитерские, торты на заказ",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 136,
                        "name": "Быстрое питание",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 137,
                        "name": "Доставка еды, воды",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 138,
                        "name": "Кейтеринг",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 139,
                        "name": "Другое",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 131,
                        "name": "Рестораны",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 90,
                        "name": "Кафе, пиццерии, суши-бары",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 132,
                        "name": "Бары, пабы",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 133,
                        "name": "Столовые",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 134,
                        "name": "Кофейни",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    }
                ]
            },
            {
                "id": 148,
                "name": "Деловые услуги",
                "description": null,
                "img": "/images/categories/деловые услуги.jpg",
                "child": []
            },
            {
                "id": 149,
                "name": "Курьерские поручения",
                "description": null,
                "img": "/images/categories/курьерские-поручения.jpg",
                "child": [
                    {
                        "id": 151,
                        "name": "Почтовые услуги",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 152,
                        "name": "Доставка цветов",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 153,
                        "name": "Другое",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    },
                    {
                        "id": 150,
                        "name": "Курьерские услуги",
                        "description": null,
                        "img": null,
                        "child": [],
                        "check": false
                    }
                ]
            },
            {
                "id": 154,
                "name": "Бытовые услуги",
                "description": null,
                "img": "/images/categories/бытовые услуги.jpg",
                "child": []
            },
            {
                "id": 155,
                "name": "Клининг",
                "description": null,
                "img": "/images/categories/клининг.jpg",
                "child": []
            },
            {
                "id": 156,
                "name": "Обучение",
                "description": null,
                "img": "/images/categories/обучение.jpg",
                "child": []
            },
            {
                "id": 157,
                "name": "Праздники, мероприятия",
                "description": null,
                "img": "/images/categories/праздники.jpg",
                "child": []
            },
            {
                "id": 158,
                "name": "Животные",
                "description": null,
                "img": "/images/categories/животные.jpg",
                "child": []
            },
            {
                "id": 159,
                "name": "Реклама, полиграфия",
                "description": null,
                "img": "/images/categories/реклама.jpg",
                "child": []
            },
            {
                "id": 160,
                "name": "Сад, благоустройство",
                "description": null,
                "img": "/images/categories/сад.jpg",
                "child": []
            },
            {
                "id": 161,
                "name": "Охрана, безопасность",
                "description": null,
                "img": "/images/categories/охрана.jpg",
                "child": []
            },
            {
                "id": 162,
                "name": "Патронажн, уход",
                "description": null,
                "img": "/images/categories/уход.jpg",
                "child": []
            },
            {
                "id": 163,
                "name": "Друг на час",
                "description": null,
                "img": "/images/categories/друг-на-час.jpg",
                "child": []
            },
            {
                "id": 164,
                "name": "Благотворительность",
                "description": null,
                "img": "/images/categories/благотвортельность.jpg",
                "child": []
            },
            {
                "id": 165,
                "name": "Ритуальные услуги",
                "description": null,
                "img": "/images/categories/ритуальные-услуги.jpg",
                "child": []
            },
            {
                "id": 140,
                "name": "Развлечения и отдых",
                "description": null,
                "img": "/images/categories/развлечения-и-отдых.jpg",
                "child": []
            },
            {
                "id": 141,
                "name": "Авто и перевозки",
                "description": null,
                "img": "/images/categories/авто-и-перевозки.jpg",
                "child": []
            },
            {
                "id": 142,
                "name": "Красота",
                "description": null,
                "img": "/images/categories/красота.jpg",
                "child": []
            },
            {
                "id": 143,
                "name": "Спорт",
                "description": null,
                "img": "/images/categories/спорт.jpg",
                "child": []
            },
            {
                "id": 144,
                "name": "Медицина",
                "description": null,
                "img": "/images/categories/медицина.jpg",
                "child": []
            },
            {
                "id": 145,
                "name": "Недвижимость",
                "description": null,
                "img": "/images/categories/недвижимость.jpg",
                "child": []
            },
            {
                "id": 146,
                "name": "Ремонт и строительство",
                "description": null,
                "img": "/images/categories/ремонт-и-строительство.jpg",
                "child": []
            },
            {
                "id": 147,
                "name": "IT, интернет, телеком",
                "description": null,
                "img": "/images/categories/интернет-и-it.jpg",
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
