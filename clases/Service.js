import Categori from './Categori.js'
import TradePoint from './TradePoint.js'
export default class Service{
    constructor(parseService,mapIsnt,VueContext){
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
        this.categories = []
        for(categori of parseService.categories){
            categories.push(new Categori(categori,mapIsnt,VueContext));
        }
        this.points = []
        for(point of parseService.points){
            points.push(new TradePoint(point,mapIsnt,VueContext));
        }
        //гуи
        this.mapIsnt = mapIsnt;
        this.VueContext = VueContext
    }
    queryServicesAPIgetServices(){
        //запрос на получение точек 
    }
}