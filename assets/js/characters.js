const container = document.getElementById('charactersContainer');
window.onload = function(){
	searchBtn.addEventListener('click', searchCharacters);
}
$(document).ready( () => {
	dohvatiCharacters();
//	dropdown();
	$(".sort-elementAZ").click(onSortCharactersAZ);
	$(".sort-elementZA").click(onSortCharactersZA);
  setTimeout(() => {
    alertify.prompt('Metro Exodus Survey', 'What is your favourite character?', '', (evt, value) => {
      if (value != "") {
        alertify.notify('Thank you :)  ', 'customSuccess', 2)
      } else {
        alertify.notify('Ah :( okay, next time', 'customDanger', 2)
      }

    }, () => {
      alertify.notify('Ah :( okay, next time', 'customDanger', 2)
    })
  }, 10000)
})

// characters
//get
function dohvatiCharacters(){
  $.ajax({
    url : "data/characters.json",
    method : "GET",
    type : "json",
    success : function(characters) {
      prikaziCharacters(characters);
      console.log("characters ti radi majstore");
    },
    error : function(xhr, error, status) {
      console.log("characters ti ne radi bednice");
    }
  });
}
// set
function prikaziCharacters(characters){
  let htmlIspis = "";
  for (let i of characters){
    htmlIspis += `<div class="column game is-one-third">
			<div class="${i.class}">
				<div class="card-image">
					<figure>
						<img class="equal" src="${i.images.src}" alt="${i.images.alt}">
					</figure>
				</div>
				<div class="card-content has-text-centered">
					<h1>${i.title}</h1>
					<p>${i.description}</p>
				</div>
				<div class="content has-text-centered crdBtn">
					<a class="button forModal is-uppercase gBtn is-small has-text-weight-bold" data-game-id="${i.id}">Read more</a>
				</div>
			</div>
		</div>`
  }

  document.querySelector("#charactersContainer").innerHTML = htmlIspis;
}

/* SEARCH */
let searchBtn = document.querySelector('#searchBtn')
let searchCharacters = () => {
  let searchTerm = document.querySelector('#searchField')
  if (searchTerm.value.toLowerCase()) {
    $.ajax({
      url: `data/characters.json`,
      dataType: 'json',
      success: (data) => {
        let result = data.filter(character => character.title.toLowerCase().startsWith(searchTerm.value.toLowerCase()))
        let content = ``
        container.innerHTML = ''
        result.forEach(character => {
          container.innerHTML += `
					<div class="column game is-one-third">
						<div class="${character.class}">
							<div class="card-image">
								<figure>
									<img class="equal" src="${character.images.src}" alt="${character.images.alt}">
								</figure>
							</div>
							<div class="card-content has-text-centered">
								<h1>${character.title}</h1>
								<p>${character.description}</p>
							</div>
							<div class="content has-text-centered crdBtn">
								<a class="button forModal is-uppercase gBtn is-small has-text-weight-bold" data-game-id="${character.id}">Read more</a>
							</div>
						</div>
					</div>
            `
        })
      }
    })
  } else {
    alertify.set('notifier', 'position', 'bottom-right');
    alertify.notify('No result. Please try again', 'customDanger', 2)
 }
}

// SORTIRANJE
// AZ
function onSortCharactersAZ(){
    $.ajax({
        url: "data/characters.json",
        method: "GET",
        success: (data) => {
            sortCharactersAZ(data);
						prikaziCharacters(data);
						saveLocalStorage();
        }
    });
}

function sortCharactersAZ(data){
	 data.sort((a,b) =>{
		 if(a.title < b.title)
     return -1;
		 if(a.title > b.title)
		 return 1;
		 return 0;
	 });
 }

// ZA
 function onSortCharactersZA(){
     $.ajax({
         url: "data/characters.json",
         method: "GET",
         success: (data) => {
            sortCharactersZA(data);
 						prikaziCharacters(data);
         }
     });
 }

 function sortCharactersZA(data){
 	 data.sort((a,b) =>{
 		 if(a.title > b.title)
 		 return -1;
 		 if(a.title < b.title)
 		 return 1;
 		 return 0;
 	 });
  }

function backgroundChange(){
	var checked = document.getElementById("switchRoundedWarning");
	var bgdChange = document.querySelector("#characters-exodus");
	if (checked.checked == true) {
			bgdChange.style.backgroundImage = "url('/assets/images/canvas.jpg')";
			localStorage.setItem('bgdChange', bgdChange);
	}
	else {
		  bgdChange.style.backgroundImage = "none";
			bgdChange.style.backgroundColor = "#242424";
			localStorage.setItem('bgdChange', JSON.stringify(bgdChange));
			let ajde = JSON.parse(localStorage.getItem('bgdChande'));
			console.log(ajde);
	}
	rememberColor();
}
/*
function rememberColor(){
	let ajde;
	if(ajde = null){
		bgdChange.style.backgroundImage = "url('/assets/images/canvas.jpg')";
	}
	else{
		bgdChange.style.backgroundImage = "none";
		bgdChange.style.backgroundColor = "#242424";
	}
}*/
