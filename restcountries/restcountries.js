const getAllCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showCountry(data))
}
getAllCountries()

const showCountry = countries =>{
    const allCountryNamen = document.getElementById("all-country-namen")
    countries.forEach(contry => {
        const div =document.createElement('div')
        div.className='country'
        div.innerHTML=`
        <h1>Name: ${contry.name.common}<h1>
        <h3>official Name: ${contry.name.official}<h1>
        <button onclick="countrydetal('${contry.name.common}') " >Click Now</button>
        `
        allCountryNamen.appendChild(div)
        // console.log(contry)
    });
}

const countrydetal = countryName =>{
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayCountryDetal(data))
}

const displayCountryDetal = display =>{
    const counteyDetails = document.getElementById('countey-details')
    display.forEach(displayName => {
        
        const div = document.createElement('div')
        div.innerHTML=`
        <h3> Name: ${displayName.name.common}</h3>
        <h3> capital: ${displayName.capital}</h3>
        <img src="${displayName.flags.png}">
        `
        counteyDetails.appendChild(div)
        console.log(displayName)
    });
}