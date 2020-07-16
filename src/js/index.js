var countriesList = [];
var favoritesCountriesList = [];

window.addEventListener("load", () => {
    getCountries();
});

async function getCountries() {

    let response = await fetch("https://restcountries.eu/rest/v2/all");
    if (response.ok) {
        console.log(response);
        let data = await response.json();

        countriesList = data.map(country => {
            const { name, population, flag, numericCode } = country;

            return {
                id: numericCode,
                flag,
                name,
                population
            }
        });

        renderCountries();
    } else {
        console.log("Error to search countries");
    }
}

function renderCountries() {

    countriesList.forEach(country => {

        let { name, flag, population } = country;

        let divCountry = document.createElement("div");
        divCountry.className = "country"

        let divFlag = document.createElement("div");

        let img = document.createElement("img");
        img.src = flag;
        img.alt = name;
        img.className = "img";

        divFlag.appendChild(img);

        let divInfo = document.createElement("div");

        let liName = document.createElement("li");
        liName.innerText = name;

        let liPopulation = document.createElement("li");
        liPopulation.innerText = population;

        let ul = document.createElement("ul");
        ul.appendChild(liName);
        ul.appendChild(liPopulation);

        divInfo.appendChild(ul);

        divCountry.appendChild(divFlag);
        divCountry.appendChild(divInfo);

        let countries = document.querySelector("#countries");
        countries.appendChild(divCountry);
    });

    favoritesCountriesList.forEach(country => {

        let { name, flag } = country;

        let divCountry = document.createElement("div");

        let divFlag = document.createElement("div");

        let img = document.createElement("img");
        img.src = flag;
        img.alt = name;
        img.className = "img";

        divFlag.appendChild(img);

        let divInfo = document.createElement("div");

        let liName = document.createElement("li");
        liName.innerText = name;

        let liPopulation = document.createElement("li");
        liPopulation.innerText = population;

        let ul = document.createElement("ul");
        ul.appendChild(liName);
        ul.appendChild(liPopulation);

        divInfo.appendChild(ul);

        divCountry.appendChild(divFlag);
        divCountry.appendChild(divInfo);

        let countries = document.querySelector("#favorites-countries");
        countries.appendChild(divCountry);
    });


}
