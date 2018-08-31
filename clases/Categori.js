import axios from 'axios';
/*
 * Класс категории
 */
export default class Categori{
    constructor(parseCategori){
        try{
            this.id = parseCategori.id; //categoryid
            this.categoryname = parseCategori.categoryname;
            this.parentid = parseCategori.parentid;
            this.description = parseCategori.description;
            this.img
        }catch(e){
            console.log("class Categori.constructor() : " + e.message)
        }
    }
    /*
     * ЗАПРОСЫ
     */
    //запрос на получение списка категорйи
    static async getCategoriesForSite(){
        let treeCategories = null
        try{
            let res = await axios({url: 'CategoriesAPI/getCategoriesForSite', method: 'GET' })
            treeCategories = {
                name:"Категории", 
                child: res.data.categories,
                root: true
            }
        }catch(e){
            console.log("class Categori.getCategoriesForSite() : " + e.message)
        }
        return treeCategories
    }
}