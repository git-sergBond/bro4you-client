import axios from 'axios';
import UserInfo from './UserInfo.js'
/*
 * Класс отзыв
 */
export default class Review{
    constructor(parseReview){
        try{
            this.reviewid = parseReview.review.reviewid
            this.textreview = parseReview.review.textreview
            this.reviewdate = parseReview.review.reviewdate
            this.rating = parseReview.review.rating
            this.binderid = parseReview.review.binderid
            this.executor = parseReview.review.executor
            this.bindertype = parseReview.review.bindertype
            //обратные связи
            this.userinfo = new UserInfo(parseReview.userinfo);
        }catch(e){
            console.log("class Review.constructor() : " + e.message)
        }
    }
    /*
     * ЗАПРОСЫ
     */
    //запрос на получение списка категорйи
    static async get___wahat(){
        
    }
}