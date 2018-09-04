/*
 * Объект - с общими методоми предназнаенными для работы с картой
 */
export default {
    //Удаление гео объекта с карты    
    delete_geoObject(o,mapInstanse){
        if(!!o) mapInstanse.geoObjects.remove(o);
    },
}