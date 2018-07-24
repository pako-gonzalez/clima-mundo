const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=d3a2b997e7e514f2948b31673ac7297c`);

    if (resp.data.cod !== 200) {
        throw new Error(`No hay resultados para ${lat}, ${lng}`);
    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}