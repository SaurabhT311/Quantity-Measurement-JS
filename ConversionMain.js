let Util = require('../Conversion/conversion');
var readlineSync = require('readline-sync');


class ConversionMain {
    async quantity() {
        var choice = readlineSync.question(`Welcome to Quantity Measurement 
        L -> for length operation 
        V -> for volume
        T -> for Temperature
        Enter your choice: `);

        switch (choice) {
            case "L":
                var operation = readlineSync.question(`Enter the choice you want to convert FROM : 
                m-> for meter  
                km-> for km  
                ft-> for feet 
                Enter you choice: `);

                switch (operation) {
                    case "m":
                        let mValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        km-> into kilometer 
                        ft-> into feet 
                        Enter your choice: `);

                        switch (mValue) {
                            case "km":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                try {
                                    await Util.mToKm(value).then((resolve) => {
                                        console.log(resolve);
                                        //  return resolve;

                                    }).catch((error) => {
                                        console.log(error);
                                    });

                                } catch (error) {
                                    console.log(error);
                                }

                                break;

                            case "ft":
                                let value1 = readlineSync.question("Enter the data you want to convert: ");
                                let answer1 = Util.mToFt(value1);
                                console.log(answer1 + " ft");
                                break;

                            default:
                                console.log("Enter valid option");
                                break;
                        }


                    case "km":
                        let kmValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        m-> into meter 
                        ft-> into feet 
                        Enter your choice: `);

                        switch (kmValue) {
                            case "m":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                let answer = Util.kmToM(value);
                                console.log(answer + " m");
                                break;

                            case "ft":
                                let ftvalue = readlineSync.question("Enter the data you want to convert: ");
                                let ftanswer = Util.kmToFt(ftvalue);
                                console.log(ftanswer + " ft");
                                break;

                            default:
                                console.log("Enter Valid option");
                                break;
                        }

                    case "ft":
                        let ftValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        m-> into meter 
                        km-> into kilometer 
                        Enter your choice: `);

                        switch (ftValue) {
                            case "m":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                let answer = Util.ftToM(value);
                                console.log(answer + " m");
                                break;

                            case "km":
                                let kmvalue = readlineSync.question("Enter the data you want to convert: ");
                                let kmanswer = Util.ftToKm(kmvalue);
                                console.log(kmanswer + " km");
                                break;

                            default:
                                console.log("Enter valid option");
                        }

                    default:
                        console.log("Enter valid option");

                }
                break;

            case "V":
                var operation = readlineSync.question(`Enter the choice you want to convert FROM : 
                lt-> for liter  
                ga-> for gallons  
                ml-> for mililiter 
                Enter you choice: `);

                switch (operation) {
                    case "lt":
                        let liValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        ga-> into gallons 
                        ml-> into mililiter 
                        Enter your choice: `);

                        switch (liValue) {
                            case "ga":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                let answer = Util.ltToGallons(value);
                                console.log(answer + " liquid gallons");
                                break;

                            case "ml":
                                let mlValue = readlineSync.question("Enter the data you want to convert: ");
                                let mlAnswer = Util.ltToMl(mlValue);
                                console.log(mlAnswer + " ml");
                                break;

                            default:
                                console.log("Enter valid option");
                        }

                    case "ga":
                        let gaValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        lt-> into litres 
                        ml-> into millilitre 
                        Enter your choice: `);

                        switch (gaValue) {
                            case "lt":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                let answer = Util.gaToLitres(value);
                                console.log(answer + " lt.");
                                break;

                            case "ml":
                                let mlValue = readlineSync.question("Enter the data you want to convert: ");
                                let mlAnswer = Util.gaToMililitres(mlValue);
                                console.log(mlAnswer + " ml");
                                break;

                            default:
                                console.log("Please enter Valid option ");
                        }

                    case "ml":
                        let mlValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        lt-> into Litres 
                        ga-> into Gallons 
                        Enter your choice: `);

                        switch (mlValue) {
                            case "lt":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                try {
                                    await Util.mlToLitres(value).then((resolve) => {
                                        console.log(resolve);

                                    }).catch((error) => {
                                        console.log(error);
                                    });

                                } catch (error) {
                                    console.log(error);
                                }
                                break;

                            case "ga":
                                let gaValue = readlineSync.question("Enter the data you want to convert: ");
                                let gAnswer = Util.mlToGallons(gaValue);
                                console.log(gAnswer + " ga");
                                break;

                            default:
                                console.log("Enter valid option");
                        }

                }

                break;

            case "T":
                var operation = readlineSync.question(`Enter the choice you want to convert FROM : 
                C-> for Celcius  
                K-> for Kelvin  
                F-> for Fahrenheit 
                Enter you choice: `);

                switch (operation) {
                    case "C":
                        let CValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        K-> into Kelvin 
                        F-> into Fahrenheit 
                        Enter your choice: `);

                        switch (CValue) {
                            case "K":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                try {
                                    await Util.cToKelvin(value).then((resolve) => {
                                        console.log(resolve);

                                    }).catch((error) => {
                                        console.log(error);
                                    });
                                } catch (error) {
                                    console.log(error);
                                }
                                break;

                            case "F":
                                let Fvalue = readlineSync.question("Enter the data you want to convert: ");
                                let Fanswer = Util.cToFahrenheit(Fvalue);
                                console.log(Fanswer + " F");
                                break;

                            default:
                                console.log("Enter valid option");
                        }

                    case "K":
                        let KValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        C-> into Degree 
                        F-> into Fahrenheit 
                        Enter your choice: `);

                        switch (KValue) {
                            case "C":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                let answer = Util.kToCelcius(value);
                                console.log(answer + " K");
                                break;

                            case "F":
                                let Fvalue = readlineSync.question("Enter the data you want to convert: ");
                                let Fanswer = Util.kToFahrenheit(Fvalue);
                                console.log(Fanswer + " F");
                                break;

                            default:
                                console.log("Enter valid option");
                        }

                    case "F":
                        let FValue = readlineSync.question(`Enter the choice you want to convert INTO 
                        C-> into Degree 
                        K-> into Kelvin 
                        Enter your choice: `);

                        switch (FValue) {
                            case "C":
                                let value = readlineSync.question("Enter the data you want to convert: ");
                                let answer = Util.fToCelcius(value);
                                console.log(answer + " C");
                                break;

                            case "K":
                                let Kvalue = readlineSync.question("Enter the data you want to convert: ");
                                let Kanswer = Util.fToKelvin(Kvalue);
                                console.log(Kanswer + " K");
                                break;

                            default:
                                console.log("Please enter valid option");
                        }
                        break;
                }

        }

    }
}

var co = new ConversionMain();
co.quantity();
