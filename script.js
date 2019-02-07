import '/style.scss';
console.log(
  'initial local storage',
  window.localStorage.getItem('creatureArray')
);
let creatureList = [];
const formName = document.querySelector('#name');
const formBreed = document.querySelector('#breed');
const testDiv = document.querySelector('#testdiv');
const card = document.querySelector('#card');
const deleteButton = document.querySelector('#delete-button');
const formDescription = document.querySelector('#description');
const button = document.querySelector('button');
let creatureHTML = '';
let cards = '';

if (window.localStorage.getItem('creatureArray')) {
  creatureList = JSON.parse(window.localStorage.getItem('creatureArray'));
  createListFromStorage();
  testDiv ? (testDiv.innerHTML = creatureHTML) : null;
}

function createListFromStorage() {
  creatureList.forEach(
    creature => (creatureHTML += `<li>${creature.name}</li>`)
  );
}
button
  ? button.addEventListener('click', e => {
      e.preventDefault();
      creatureList.unshift({
        name: formName.value,
        breed: formBreed.value,
        description: formDescription.value
      });
      creatureHTML += `<li>${creatureList[0].name}</li>`;
      testDiv ? (testDiv.innerHTML = creatureHTML) : null;

      window.localStorage.setItem(
        'creatureArray',
        JSON.stringify(creatureList)
      );
      window.location.href = 'show-creatures.html';
    })
  : null;

console.log('creature list', creatureList);
function createCardsFromStorage() {
  creatureList.forEach(creature => {
    cards += `<div class="card">
        <h4>Name: ${creature.name}</h4>
        <p>Breed: ${creature.breed}</p>
        <p>Description: ${creature.description}</p>
      </div>`;
    console.log(cards);
  });
}
createCardsFromStorage();
card ? (card.innerHTML = cards) : null;

deleteButton.addEventListener('click', () => {
  window.localStorage.setItem('creatureArray', []);
  createListFromStorage();
  createCardsFromStorage();
  location.reload();
});
