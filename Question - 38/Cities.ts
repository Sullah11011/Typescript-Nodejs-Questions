function describe_city(city: string, country: string = 'Unknown') {
     console.log(`${city} is in ${country}.`);
 }
 
 describe_city('Karachi', 'Pakistan');
 describe_city('Paris', 'France');
 describe_city('Tokyo');
 