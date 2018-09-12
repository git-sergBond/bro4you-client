export default class Polyline{
    constructor(lineString, mapInstanse, getResult=null){
        try{
            this.mapInstanse = mapInstanse;
            this.lineStringGeometry = new ymaps.geometry.LineString(lineString);
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
            this.mapInstanse.events.add("mousemove", this.mousemoveDraw);
            this.stateDrawing = -1;//состояние рисования линии
            //this.getResult = getResult;//функция, вызывающаяся при отправке результатов
            
        } catch(e){
            console.log("error Polyline.constructor() : ",e.message)
        }
    }
    //событие начала рисования
    startDraw(){
        console.log(11)
        try{
            /*
            this.positionsOnPoligon = [];//очищаем полигон в декартовой систме
            */
            if (this.stateDrawing === 0) this.stateDrawing = 1;
        }catch(e){
            console.log('error Polyline.startDraw : ')
        }
    }
    //событие момента рисования
    mousemoveDraw(event){
        let context = this
        try{
            console.log(context)
            if (this.stateDrawing !== 1) return;
            const point = event.get('coords');
            /*
            const position = event.get('position');
            this.positionsOnPoligon.push(position);//добавляем точки для нахождения первого пересечения
            */
            const length = this.lineStringGeometry.getLength();
            this.lineStringGeometry.insert(length, point);
        }catch(e){
            console.log('error Polyline.mousemoveDraw : ',e.message)
        }
    }
    //конец рисования
    endDraw(){
        console.log(33)
        try{
            if (this.stateDrawing === 1 && this.lineStringGeometry.getLength()>2) {
                this.stateDrawing = 0;
                this.getResult();
            }
        }catch(e){
            console.log('error Polyline.endDraw : ',e.message)
        }
    }
    //делегат для отправки данных о линии
    getResult(){
        try{
            console.log(this.lineStringGeometry)
        }catch(e){
            console.log('error Polyline.getResult : ',e.message)
        }
    }
}