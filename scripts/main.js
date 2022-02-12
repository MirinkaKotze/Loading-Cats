// CREATE SEARCH SECTION
function searchArea() {
    const searchContiainer = document.createElement('div');
    searchContiainer.classList.add('search__container');

    const searchHeader = document.createElement('h1');
    searchHeader.classList.add('search__header');
    searchHeader.innerHTML = ' Search for a cat breed!!';

    const searchWrapper = document.createElement('div');
    searchWrapper.classList.add('search__wrapper');

    const searchInput = document.createElement('textarea');
    searchInput.setAttribute('placeholder', 'Enter the cat breed...');    
    searchInput.classList.add('search__input');

    const searchButton = document.createElement('button');
    searchButton.classList.add('search__button');
    searchButton.innerText = 'SEARCH';  
    searchButton.addEventListener('click', function()  { //function saving the input breed and sending it to the createURL function
        const searchBreed = searchInput.value
        createURL(searchBreed)
        })

    searchWrapper.appendChild(searchInput);
    searchWrapper.appendChild(searchButton);

    searchContiainer.appendChild(searchWrapper);   
    
    entryPoint.appendChild(searchContiainer);
}

  function showBreeds(data) {
    if (data.length == 0) {
      return
    }
    data.forEach(createAndShowBreed);
  }


// LOADING CATS DATA AND INSERTING IT INTO HTML
function createAndShowBreed(breed) {
    
    const catsContainer = document.createElement('div');
    catsContainer.classList.add('info__container');      
        
    const catsTitle = document.createElement('h4');
    catsTitle.classList.add('info__title');  
    catsTitle.innerText = `Title: ${breed.name}`;
  
    const catDescription = document.createElement('p');
    catDescription.classList.add('info__details'); 
    catDescription.innerText = `Description: ${breed.description}`;
  
    const catAdaptability = document.createElement('p');
    catAdaptability.classList.add('info__details'); 
    catAdaptability.innerText = `Adaptability: ${breed.adaptability}`;
  
    const catAffectionlevel = document.createElement('p');
    catAffectionlevel.classList.add('info__details'); 
    catAffectionlevel.innerText = `Affectionlevel: ${breed.affectionlevel}`;

    const catTemperament = document.createElement('p');
    catTemperament.classList.add('info__details'); 
    catTemperament.innerText = `Temperament: ${breed.temperament}`;

    const catLink = document.createElement('a');
    catLink.classList.add('info__details'); 
    catLink.textContent = 'More information';
    catLink.href = `${breed.vcahospitals_url}`;
          
    catsContainer.appendChild(catsTitle);
    catsContainer.appendChild(catDescription);
    catsContainer.appendChild(catAdaptability);
    catsContainer.appendChild(catAffectionlevel);
    catsContainer.appendChild(catTemperament);
    catsContainer.appendChild(catLink);
  
    entryPoint.appendChild(catsContainer)
    }  
    
// FETCHCALL FUNCTION(COPIED FROM ALEX'S CODE)
function fetchCb(url, cb) {
    fetch(url,  {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '06c19bd0-c9a6-410b-a3be-5d0a1450e1d9'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        cb(data);
      
      });
  }

// CREATE URL
  function createURL(searchBreed) {
    const searchURL = `https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`
    fetchCb(searchURL, showBreeds)
}

// ADD SEARCH FUNCTION AS SOON AS PAGE IS LOADED
  window.addEventListener('DOMContentLoaded', searchArea);


