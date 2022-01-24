fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v2/all');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    localStorage['jsonData'] = JSON.stringify(myJson);

    debugger


    for(var i=0; i<myJson.length; i++) {
        const div = document.createElement('div');
        div.classList.add('country-item');
    
        const img = document.createElement('img');
        img.classList.add('flag');
        img.setAttribute('src',myJson[i].flag);
    
        const h3 = document.createElement('h3');
        h3.textContent = myJson[i].name;
        
        var li_list = ["Population", "Region", "Capital"];
        var li_values = [myJson[i].population, myJson[i].region, myJson[i].capital];

        const ul = document.createElement('ul');
        
        for(var j=0; j<li_list.length; j++) {
            const li = document.createElement('li');
            li.textContent = li_list[j] + ": " + li_values[j];
            ul.appendChild(li);
        }

    
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(ul);

        div.addEventListener('click',function(e){
            displayCountryDetails(e, myJson);
        })
    
        var c_box = document.querySelector('#countries-box');
        c_box.appendChild(div);

            // if(i===10){
            //     return;
            // }
    }


    // do something with myJson

    // var c_name = document.querySelectorAll('#country-item')[0].children[1];
    // c_name.textContent = "pode dei";

    // const div = document.createElement('div');
    // div.classList.add('country-item');

    // const img = document.createElement('img');
    // img.classList.add('flag');

    // const h3 = document.createElement('h3');
    // // const ul = document.createElement('ul');

    // div.appendChild(img);
    // div.appendChild(h3);

    // var c_box = document.querySelector('#countries-box');
    // c_box.appendChild(div);

    console.log(c_box);
    

}

// fetchCountries();

// function filterCountries(){
//     debugger
//     var input = document.getElementById('search');
//     var searchText = input.value.toLowerCase();

//     var country_names = document.getElementsByTagName('h3');

//     for(var i=0; i< country_names.length; i++){
        
//         if(country_names[i].innerText.includes(searchText)){
//             country_names[i].parentElement.style.display = "block";
//         }else{
//             country_names[i].parentElement.style.display = "none";
//         }
//     }

//     console.log(country_names);

// }

debugger
const search = document.forms['input-form'].querySelector('input');
search.addEventListener('keyup', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const countries = document.getElementsByTagName('h3');

    document.getElementById('regions').selectedIndex = 0;

    Array.from(countries).forEach(function(country){
        if(country.innerText.toLowerCase().indexOf(searchTerm)!=-1){
            country.parentElement.style.display = "block"; 
        }else{
            country.parentElement.style.display = "none"; 
        }
    })
})

function selectRegions(){
    const list = document.getElementById('regions');
    debugger

    document.getElementById('search').value = "";

    const selected_region = list.options[list.selectedIndex].text.toLowerCase();

    const regions = document.getElementsByTagName('li');

    for(var i=1; i< regions.length; i+=3){
        if(regions[i].innerText.toLowerCase().indexOf(selected_region) != -1){
            regions[i].parentElement.parentElement.style.display = "block";
        }else{
            regions[i].parentElement.parentElement.style.display = "none";
        }
    }

    // Array.from(regions).forEach(function(region){
        
    // })

    console.log(list);
}

function toggleTheme(){
    // alert('clicked');
    debugger

    var currentTheme = document.documentElement.getAttribute('data-theme');
    var text = document.getElementById('dark-mode-text');

    if(currentTheme === 'light'){
        targetTheme = 'dark';
        text.innerText = "Light Mode";
        document.getElementsByTagName('ion-icon')[0].setAttribute('name','sunny-outline');
    }else if(currentTheme === 'dark'){
        targetTheme = 'light';
        text.innerText = "Dark Mode";
        document.getElementsByTagName('ion-icon')[0].setAttribute('name','moon-outline');
    }

    document.documentElement.setAttribute('data-theme', targetTheme);

}


function displayCountryDetails(e, myJson){
    // window.open("https://www.w3schools.com");
    console.log(myJson);
    // localStorage['jsonData'] = myJson;

    var main = document.getElementsByClassName('main');

    debugger
    if(e.target.tagName === "IMG" || e.target.tagName === "H3" || e.target.tagName === "UL"){
        var parent = e.target.parentElement;
        var children = parent.children;
        // console.log("JSON"+ myJson);
        main[0].style.display = "none";
        // window.open("details.html");
        // alert(children[1].innerText)
    }else if(e.target.tagName === "LI"){
        var parent = e.target.parentElement.parentElement;
        var children = parent.children;
        main[0].style.display = "none";
        // window.open("details.html");
        // alert(children[1].innerText)
    }   
    
}