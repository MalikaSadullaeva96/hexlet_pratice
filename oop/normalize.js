const countries = [
    { name: 'istanbul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStanbul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' },
  ];


  const normalize = (arr) => {
    let result = {}
  
    arr.forEach((item) => {
      const countryName = item.country.toLowerCase().trim()
      const cityName = item.name.toLowerCase().trim()
  
      if(Object.keys(result).includes(countryName)){
        if(!result[countryName].includes(cityName)){
          result[countryName].push(cityName);
        }
      }
      else{
        
        result[countryName] = [cityName]
      }
    })


    result = Object.entries(result).map(([country,name])=> [country,name.sort()]).sort();
    const obj = Object.fromEntries(result)
    return obj;

}


normalize(countries);