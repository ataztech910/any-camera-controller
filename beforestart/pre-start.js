const axios = require('axios')

let jsonData = require('./data.json');
let apiHost = 'http://localhost:1337';

const insertCity = (name) => {
    return axios
        .post(`${apiHost}/cities`, {
            "name": name,
            "published_at": new Date().toISOString(),
            "created_by": "admin",
            "updated_by": "admin"
        });
};

const insertAddress = (name, id) => {
    return axios
        .post(`${apiHost}/addresses`, {
            "name": name,
            "city": id,
            "published_at": new Date().toISOString(),
            "created_by": "admin",
            "updated_by": "admin"
        });
}

const insertCamera = (camera, addressId) => {
    return axios
        .post(`${apiHost}/cameras`, {
            "description": camera.description,
            "address": addressId,
            "uuid": camera.uuid,
            "published_at": new Date().toISOString(),
            "created_by": "admin",
            "updated_by": "admin"
        });
};

const removeCity = city => {
    axios.delete(`${apiHost}/cities/${city.id}`).then(res => console.log(res));
}
const removeCamera = camera => {
    axios.delete(`${apiHost}/cameras/${camera.id}`).then(res => console.log(res));
}
const removeAddress = id => {
    axios.delete(`${apiHost}/addresses/${id}`).then(res => console.log(res));
}

const clearAllAddress = () => {
    axios
        .get(`${apiHost}/addresses`)
        .then(res => {
            if (res) {
                res.data.forEach(addresse => {
                    removeAddress(addresse.id);
                })
            }
        })
        .catch(error => {
            console.error(error)
        });
}
const clearAllCities = () => {
    axios
        .get(`${apiHost}/cities`)
        .then(res => {
            if (res) {
                res.data.forEach(city => {
                    removeCity(city);
                })
            }
        })
        .catch(error => {
            console.error(error)
   });
}
const clearAllCameras = () => {
    axios
        .get(`${apiHost}/cameras`)
        .then(res => {
            if (res) {
                res.data.forEach(camera => {
                    removeCamera(camera);
                })
            }
        })
        .catch(error => {
            console.error(error)
        });
}

// clearAllAddress();
// clearAllCities();
// clearAllCameras();

const cityList = () => {
    return new Promise((resolve, reject) => {
        jsonData.cityList.forEach(element => {
            insertCity(element.cityName).then(cityInserted => {
                element.addressList.forEach(address => {
                    insertAddress(address.addressName, cityInserted.data.id).then( addressInserted => {
                        address.cameraList.forEach(camera => {
                            console.log({ camera, addressInserted });
                            insertCamera(camera, addressInserted.data.id).then(res =>{
                                console.log('camera inserted');
                            })
                        })
                    });
                });
            })
        });
        resolve('Done !');
    });
}

cityList().then(res => console.log('result', res));
