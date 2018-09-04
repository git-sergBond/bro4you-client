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
    intit_events_DrawPolygonByFinger() {
        this.lineStringGeometry = new ymaps.geometry.LineString([]);
        this.line = new ymaps.GeoObject({
            geometry: this.lineStringGeometry,
        }, {
            // Описываем опции геообъекта.
            fillColor: '#00FF00',// Цвет заливки.
            strokeColor: '#0000FF',// Цвет обводки.
            opacity: 0.5,// Общая прозрачность (как для заливки, так и для обводки).
            strokeWidth: 5,// Ширина обводки.
            strokeStyle: 'shortdash'// Стиль обводки.
        });
        this.mapInstanse.geoObjects.add(this.line); // Создаем инстанцию геообъекта и передаем нашу геометрию
        this.mapInstanse.events.add("mousemove", this.mousemove_event_DrawPolygonByFinger);
    }
    mousedown_event_DrawPolygonByFinger(event){
        this.positionsOnPoligon = [];//очищаем полигон в декартовой систме
        if (this.stateApp === 1) this.stateApp = 2;
    }
    mousemove_event_DrawPolygonByFinger(event){
        if (this.stateApp !== 2) return;
        let point = event.get('coords');
        let position = event.get('position');
        this.positionsOnPoligon.push(position);//добавляем точки для нахождения первого пересечения
        let length = this.lineStringGeometry.getLength();
        this.lineStringGeometry.insert(length, point);
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