import Categori from './Categori.js'
import TradePoint from './TradePoint.js'
export default class Service{
    constructor(parseService,mapIsnt=null,VueContext=null){
        console.log(parseService)
        this.serviceid = parseService.service.serviceid;
        this.subjectid = parseService.service.subjectid;
        this.description = parseService.service.description;
        this.pricemin = parseService.service.pricemin;
        this.pricemax = parseService.service.pricemax;
        this.deleted = parseService.service.deleted;
        this.subjecttype = parseService.service.subjecttype;
        this.deletedcascade = parseService.service.deletedcascade;
        this.datepublication = parseService.service.datepublication;
        this.regionid = parseService.service.regionid;
        this.name = parseService.service.name;
        this.rating = parseService.service.rating;//рейтинг
        this.ratingcount = parseService.ratingcount;//кол-во отзывов 

        this.categories = []
        for(let categori of parseService.categories){
            this.categories.push(new Categori(categori,mapIsnt,VueContext));
        }
        this.points = []
        for(let point of parseService.points){
            this.points.push(new TradePoint(point,[this],mapIsnt,VueContext));
        }

        this.images = parseService.images

        //гуи
        this.mapIsnt = mapIsnt;
        this.VueContext = VueContext;
    }
    drawPoints(mapIsnt=null){
        //console.log(this.points)
        for(let point of this.points){
            point.mapIsnt = mapIsnt
            point.DrawOnMap()
            //point.setActive(true);
        }
    }
    addEvents(events){
        for(let point of this.points){
            point.addEvents(events)
        }
    }
    queryServicesAPIgetServices(){
        //запрос на получение услуг 
    }
}