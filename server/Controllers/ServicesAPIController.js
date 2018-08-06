//функция отправки данных на клиент
function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
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