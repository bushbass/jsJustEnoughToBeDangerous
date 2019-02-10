// console.log(
//   'initial local storage',
//   window.localStorage.getItem('creatureArray')
// );

let creatureList = [];
const card = document.querySelector('#card');
const deleteButton = document.querySelector('#delete-button');
let cards = '';

if (window.localStorage.getItem('creatureArray')) {
  creatureList = JSON.parse(window.localStorage.getItem('creatureArray'));
}

// console.log('creature list', creatureList);
function createCardsFromStorage() {
  creatureList.forEach(creature => {
    cards += `<div class="card">
        <h4>Name: ${creature.name}</h4>
        <p>Breed: ${creature.breed}</p>
        <p>Description: ${creature.description}</p>
      </div>`;
  });
}
createCardsFromStorage();
card.innerHTML = cards;

deleteButton.addEventListener('click', () => {
  window.localStorage.setItem('creatureArray', []);
//   createListFromStorage();
  createCardsFromStorage();
  window.location.reload();
});
