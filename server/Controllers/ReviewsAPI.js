function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
var reviews = 
[
    
];
//Контроллер акций
module.exports =  {
    //Отдает список акций
    getShares(request, response){
        console.log("// "+new Date + " GET /SharesAPI/getShares");
        console.log("data: ")
        console.log(request.body)
        return sendJSON(200, {
            status: "OK",
            shares
        }, response)
    }
}