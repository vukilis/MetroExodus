const container = document.getElementById('weaponsContainer');
window.onload = function(){
  searchBtn.addEventListener('click', searchWeapons);
}

$(document).ready( () => {
	dohvatiWeapons();
	$(".sort-elementAZ").click(onSortWeaponsAZ);
	$(".sort-elementZA").click(onSortWeaponsZA);
  setTimeout(() => {
    alertify.prompt('Metro Exodus Survey', 'What is your favourite weapon?', '', (evt, value) => {
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


// weapons
//get
function dohvatiWeapons(){
  $.ajax({
    url : "data/weapons.json",
    method : "GET",
    type : "json",
    success : function(weapons) {
      prikaziWeapons(weapons);
      console.log("characters ti radi majstore");
    },
    error : function(xhr, error, status) {
      console.log("characters ti ne radi bednice");
    }
  });
}
// set
function prikaziWeapons(weapons){
  let htmlIspis = "";
  for (let i of weapons){
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

  document.querySelector("#weaponsContainer").innerHTML = htmlIspis;
}

/* SEARCH */
let searchBtn = document.querySelector('#searchBtn')
let searchWeapons = () => {
  let searchTerm = document.querySelector('#searchField')
  if (searchTerm.value.toLowerCase()) {
    $.ajax({
      url: `data/weapons.json`,
      dataType: 'json',
      success: (data) => {
        let result = data.filter(weapon => weapon.title.toLowerCase().startsWith(searchTerm.value.toLowerCase()))
        let content = ``
        container.innerHTML = ''
        result.forEach(weapon => {
          container.innerHTML += `
					<div class="column game is-one-third">
						<div class="${weapon.class}">
							<div class="card-image">
								<figure>
									<img class="equal" src="${weapon.images.src}" alt="${weapon.images.alt}">
								</figure>
							</div>
							<div class="card-content has-text-centered">
								<h1>${weapon.title}</h1>
								<p>${weapon.description}</p>
							</div>
							<div class="content has-text-centered crdBtn">
								<a class="button forModal is-uppercase gBtn is-small has-text-weight-bold" data-game-id="${weapon.id}">Read more</a>
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
function onSortWeaponsAZ(){
    $.ajax({
        url: "data/weapons.json",
        method: "GET",
        success: (data) => {
            sortWeaponsAZ(data);
						prikaziWeapons(data);
        }
    });
}

function sortWeaponsAZ(data){
	 data.sort((a,b) =>{
		 if(a.title < b.title)
     return -1;
		 if(a.title > b.title)
		 return 1;
		 return 0;
	 });
 }

// ZA
 function onSortWeaponsZA(){
     $.ajax({
         url: "data/weapons.json",
         method: "GET",
         success: (data) => {
            sortWeaponsZA(data);
 						prikaziWeapons(data);
         }
     });
 }

 function sortWeaponsZA(data){
 	 data.sort((a,b) =>{
 		 if(a.title > b.title)
 		 return -1;
 		 if(a.title < b.title)
 		 return 1;
 		 return 0;
 	 });
  }
