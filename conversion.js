// var Promise = require('promise');
class Conversion {

    mToKm(data) {
        return new Promise((resolve, reject) => {
            if (data > 0) {
                let ans = data * 0.001;
                resolve(ans + " km");
            } else {
                reject("error is there");
            }
        });
        // return data*0.001;
    }


    mToFt(data) {
        return (data / 0.3048);
    }

    kmToM(data) {
        return data * 1000;
    }

    kmToFt(data) {
        return data * 3280.84
    }

    ftToM(data) {
        return data * 0.3048;
    }

    ftToKm(data) {
        return data / 3280.84;
    }

    ltToGallons(data) {
        return data * 0.264;
    }

    liToMl(data) {
        return data * 1000;
    }

    gaToLitres(data) {
        return data / 0.264;
    }
    gaToMililitres(data) {
        return data * 3785.41;
    }

    mlToLitres(data) {
        return data * 0.001;
    }
    mlToGallons(data) {
        return data / 3785.41;
    }
}
module.exports = new Conversion();