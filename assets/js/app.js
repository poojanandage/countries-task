

let cl = console.log;

let countryData1 = document.getElementById('countryData');
let searchbox = document.getElementById('searchBtn');
let nameBtn = document.getElementById('name');
let capitalBtn = document.getElementById('capital');
let populationBtn = document.getElementById('population');
let flag = true;

const countryTemplating = (arr) =>{
    let result = '';
    arr.forEach(ele => {
        result += `
        <div class="col-md-3 mb-5">
        <div class="card">
            <div class="card-body">
                <figure class="countries-img">
                    <div class="flag-img mb-3">
                        <img src="${ele.flag}" alt="countries-image" class="img-fluid">
                    </div>
                    <figcaption>
                        <div class="text-center">
                            <h1 class="name-heading text-warning">${ele.name}</h1>
                        </div>
                              <div class="mb-3 lang">
                                <h4 class="heads">
                                        capital
                                    
                                </h4>
                                     <span class=" l-head">
                                       ${ele.capital}
                                     </span>
                                </div>
                                <div class="mb-3 lang">
                                    <h4 class="heads">
                                        languages
                                    </h4> 
                                    <span class=" l-head">
                                    ${ele.languages}
                                   
                                  </span>
                                  
                                    </div>
                                    <div class="mb-3">
                                        <h4 class="heads">
                                               population
                                            
                                        </h4>
                                             <span class=" l-head">
                                                ${ele.population}
                                             </span>
                                        </div>
                        </figcaption>
                </figure>
            </div>
        </div>
    </div>
        `
    })
    countryData1.innerHTML = result;
}


    countryTemplating(countries)

    const onkeyupCountry = (e) =>{
        cl('trrigger')

        let searchCountry = e.target.value;
        cl(searchCountry)

        let filterCountryArr = countries.filter(ele => ele.name.includes(searchCountry));
        countryTemplating(filterCountryArr)
    }
    const onclickName = (e) => {
        let sortName = countries.sort((country1,country2)=> {
            let x = country1.name.toLowerCase();
            let y = country2.name.toLowerCase();
            if ( x < y){
                return -1
            }if( x > y){
                return 1
            }
            return 0
        })
         if( flag === true){
             countryTemplating(sortName)
            flag = false;
        }else{
            countryTemplating(sortName.reverse())
            flag = true;
        }
        
    }
    const onclickcapital = (e) => {
        let capitalClick = countries.sort((c1,c2) =>{
            let x = c1.capital;
            let y = c2.capital;
            if( x < y ){
                return -1
            }if( x > y){
                return 1
            }
            return 0
        })
        if( flag === true){
            countryTemplating(capitalClick)
            flag = false;
        }else{
            countryTemplating(capitalClick.reverse())
            flag = true;
        }
    }
    
    const onclickpopulation = (e) => {
        let populationClick = countries.sort((p1,p2) =>{
            let x = p1.population;
            let y = p2.population;
            if( x < y ){
                return -1
            }if( x > y ){
                return 1
            }
            return 0
        })
        if( flag === true){
            countryTemplating(populationClick)
            flag = false;
        }else{
            countryTemplating(populationClick.reverse())
            flag = true;
        }
    }




searchbox.addEventListener('keyup',onkeyupCountry);
nameBtn.addEventListener('click',onclickName)
capitalBtn.addEventListener('click',onclickcapital)
populationBtn.addEventListener('click',onclickpopulation)


