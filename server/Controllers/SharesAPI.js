function sendJSON(status, data ,response){
    return response.status(status).send(JSON.stringify(data));
}
var shares = 
[
    {
        coords: [55.05980129774418, 40.562484643066426],
        name: 'Маникюр - 30%',
        imageUrl: 'images/car1.jpg',
        address: 'Белгород, улица Щорса, 123Б',
        phoneNumber: '+ 7 (XXX) XX - 55',
        countReviews: 123,
        stars: 4,
        url: '#1'
    },
    {
        coords: [60.05980129774418, 40.562484643066426],
        name: 'СТО - 30%',
        imageUrl: 'images/car1.jpg',
        address: 'Белгород, улица Щорса, 123Б',
        phoneNumber: '+ 7 (XXX) XX - 55',
        countReviews: 123,
        stars: 3,
        url: '#1'
    },
    {
        coords: [60.05980129774418, 50.562484643066426],
        name: 'Автомойка - 30%',
        imageUrl: 'images/car1.jpg',
        address: 'Белгород, улица Щорса, 123Б',
        phoneNumber: '+ 7 (XXX) XX - 55',
        countReviews: 123,
        stars: 5,
        url: '#1'
    },
    {
        coords: [60.05980129774418, 60.562484643066426],
        name: 'Ногти - 30%',
        imageUrl: 'images/car1.jpg',
        address: 'Белгород, улица Щорса, 123Б',
        phoneNumber: '+ 7 (XXX) XX - 55',
        countReviews: 123,
        stars: 2,
        url: '#1'
    }
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