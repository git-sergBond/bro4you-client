export default class Categori{
    constructor(parseCategori,mapIsnt,VueContext){
        this.categoryid = parseCategori.categoryid;
        this.categoryname = parseCategori.categoryname;
        this.parentid = parseCategori.parentid;
        this.description = parseCategori.description;
        this.img
        //гуи
        this.mapIsnt = mapIsnt;
        this.VueContext = VueContext
    }
    queryCategoriesAPI(){
        //запрос на получение списка категорйи 
    }
}