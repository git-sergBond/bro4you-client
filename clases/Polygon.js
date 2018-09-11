/*
 * Класс - полигон
 */
export default class Polygon{
    constructor(arrayPoints,mapInstanse){
        try{
            //Данные 
            this.mapInstanse = mapInstanse;
            //ГУИ
            //Создает новый полигон
            let p = new ymaps.Polygon([arrayPoints], {}, {
                fillColor: '#0000FF',// Цвет заливки.
                strokeColor: '#0000FF',// Цвет обводки.
                opacity: 0.5,// Общая прозрачность (как для заливки, так и для обводки).
                strokeWidth: 3,// Ширина обводки.
            });
            this.mapInstanse.geoObjects.add(p);// Добавляем многоугольник на карту.
        }catch(e){
            console.log("class Polygon.constructor() : " + e.message)
        }
    }
    
    
    mouseup_event_DrawPolygonByFinger(event){
        if (this.stateApp === 2) {
            if(this.lineStringGeometry.getLength()>2){
                this.stateApp = 1;
                this.Send_Polygon();
            }
        }
    }
}