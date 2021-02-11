
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
        return new Promise((resolve, reject) => {
            if (data > 0) {
                let ans = data * 0.001;
                resolve(ans + " Lt");
            } else {
                reject("error is there");
            }
        });
        
    }
    
    mlToGallons(data) {
        return data / 3785.41;
    }
    
   cToKelvin(data)
    {
         return new Promise((resolve, reject) => {
            if (data > 0) {
                let kel=273.15;
                let ans = ((data/1)+kel);
                 resolve(ans + " K");
                console.log(ans);
             } else {
                reject("error is there");
            }
        });
    }

    cToFahrenheit(data){
        let answer=(5 * (data + 32))/9;
        return answer;
    }

    kToCelcius(data)
    {
        return data - 273.15;
    }
    kToFahrenheit(data)
    {
        let answer=((5*(data - 32 ))/9 + 273.15);
        return answer;
    }
    fToCelcius(data)
    {
        let answer=(5 * (data - 32))/9;
        return answer;
    }
    fToKelvin(data)
    {
        let answer=((5*(data + 32))/9 + 273.15);
        return answer;
    }
}
module.exports = new Conversion();
