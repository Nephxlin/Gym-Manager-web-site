const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
  card.addEventListener("click", function(){
    const videoLink = card.getAttribute("src")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src=`${videoLink}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector('iframe').src=``
})

const cardElement = document.querySelectorAll('.card1')

for (let card of cardElement){
  card.addEventListener("click", function(){
    const job = card.getAttribute("id")
   window.location.href=`/jobs?id=${job}`
  })
}