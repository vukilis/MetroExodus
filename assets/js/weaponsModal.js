// modal
$(document).ready(function () {
  $(document).on("click", ".forModal", showModal)
})
let modal = document.querySelector('.gameModal')

let hideModal = () => {
  modal.classList.remove('is-active')
  modal.classList.remove('opacityActive')
}
let showModal = (e) => {
  let id = parseInt(e.target.attributes[1].textContent)
  // ajax call
  // modal is-active
  // filter => id
  $.ajax({
		url : "data/weapons.json",
    method : "GET",
    type : "json",
    success: (weapons) => {
      //filter
      let weapon = weapons.filter(weapon => id === weapon.id)[0]
      // show in modal
      let content = `
                   <div class="modal-background" onclick="hideModal()"></div>
                    <div class="modal-card">
                    <section class="modal-card-body">

                      <button class="delete is-pulled-right modal-delete" onclick="hideModal()" aria-label="close"></button>
                      <div class="top">
                        <div>
                            <h1 class="title">${weapon.modalTitle}</h1>
                            <h2 class="subtitle">${weapon.mText}</h2>
                        </div>
                      <hr>
                      <div class="characters-gallery">
                          <img src="${weapon.mImages}">
                      </div>
                    </section>
                  </div>
                      `
      modal.innerHTML = content
      modal.classList.add('is-active')
      setTimeout(() => {
        modal.classList.add('opacityActive')
      }, 100)
    }
  })
}
