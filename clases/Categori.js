import axios from 'axios';
export default class Categori{
    constructor(parseCategori=null,mapIsnt=null,VueContext=null){
        try{
            this.queries = queries;
            if(!!parseCategori){
                this.categoryid = parseCategori.categoryid;
                this.categoryname = parseCategori.categoryname;
                this.parentid = parseCategori.parentid;
                this.description = parseCategori.description;
                this.img
            //гуи
            this.mapIsnt = mapIsnt;
            this.VueContext = VueContext
            }
        }catch(e){
            alert(e.message)
        }
    }
}
const queries = {
    //запрос на получение списка категорйи
    async getCategoriesForSite(){
        let res = await axios({url: 'CategoriesAPI/getCategoriesForSite', method: 'GET' })
        let treeCategories = {
            name:"Категории", 
            child: res.data.categories,
            root: true
        }
        return treeCategories
    }
}