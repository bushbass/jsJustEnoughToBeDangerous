import '/style.scss';

const creatureList = [];

const formName = document.querySelector('#name')
const formBreed = document.querySelector('#breed')
const formDescription = document.querySelector('#description')
const button = document.querySelector('button')


button.addEventListener('click', (e)=>{
    e.preventDefault();
    creatureList.push({
        name:formName.value,
        breed: formBreed.value,
        description: formDescription.value})
    console.log(creatureList)
})


window.localStorage.setItem=JSON.stringify(creatureList)


let test = JSON.parse(window.localStorage.getItem(creatureList))
console.log('test',test)