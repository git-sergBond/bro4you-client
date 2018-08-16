export default {
    //получаем информацию о регионах 
    LOC_STORE: null,
    getInfoRegionFromPoint: async function(p,mapInstanse){
        let mapInst = mapInstanse;
        if(this.LOC_STORE== null){
            this.LOC_STORE = ymaps.geoQuery(ymaps.regions.load('RU'));
            await this.LOC_STORE.then((resolve)=>{
                this.LOC_STORE.each(reg => {
                reg.geometry.setMap(mapInst);
                reg.geometry.options.setParent(mapInst.options);
                })
            })
        }
        let region = await this.LOC_STORE.searchContaining(p).get(0)
        const name = region.properties.get('name');
        const osmId = region.properties.get('osmId');
        const obj = {
            name,
            osmId
        }
        return obj;
    }
}