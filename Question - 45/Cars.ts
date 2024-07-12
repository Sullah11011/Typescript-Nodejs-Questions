function carInfo(manufacturer: string, modelName: string, options: { [key: string]: any } = {}): { manufacturer: string, modelName: string, [key: string]: any } {
     let car = {
         manufacturer: manufacturer,
         modelName: modelName,
         ...options
     };
     return car;
 }
 
 let myCar = carInfo('Toyota', 'Camry', { color: 'Silver', year: 2023 });
 
 console.log(myCar);
 