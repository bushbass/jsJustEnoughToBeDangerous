// console.log(
//   'initial local storage',
//   window.localStorage.getItem('creatureArray')
// );

let creatureList = [];
const formName = document.querySelector('#name');
const formBreed = document.querySelector('#breed');
const formDescription = document.querySelector('#description');
const button = document.querySelector('button');

if (window.localStorage.getItem('creatureArray')) {
  creatureList = JSON.parse(window.localStorage.getItem('creatureArray'));
}

button.addEventListener('click', e => {
      e.preventDefault();
      creatureList.unshift({
        name: formName.value,
        breed: formBreed.value,
        description: formDescription.value
      });

      window.localStorage.setItem(
        'creatureArray',
        JSON.stringify(creatureList)
      );
      window.location.href = 'show-creatures.html';
    });

// console.log('creature list', creatureList);
