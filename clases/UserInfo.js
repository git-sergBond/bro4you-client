import axios from 'axios';
/*
 * Класс пользователя
 */
export default class UserInfo{
    constructor(parseUser){
        try{
            this.userid = parseUser.userid
            this.firstname = parseUser.firstname
            this.patronymic = parseUser.patronymic
            this.lastname = parseUser.lastname
            this.birthday = parseUser.birthday
            this.male = parseUser.male
            this.about = parseUser.about
            this.ratingexecutor = parseUser.ratingexecutor
            this.ratingclient = parseUser.ratingclient
            this.address = parseUser.address
            this.pathtophoto = parseUser.pathtophoto
        }catch(e){
            console.log("class UserInfo.constructor() : " + e.message)
        }
    }
    /*
     * ЗАПРОСЫ
     */
    //запрос на получение списка категорйи
    static async get___wahat(){
        
    }
}