function createNewTag(tag, element, value) {         
  const createTag = document.createElement(tag);        
  createTag.setAttribute(element, value);    
  return createTag;
}

function createRandomColors(number) {
  const red = Math.floor(Math.random() * number);
  const green = Math.floor(Math.random() * number);
  const blue = Math.floor(Math.random() * number);
  return 'rgb' + `(${red}, ${green}, ${blue})`;
}

const input = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');
const generateBtn = document.getElementById('criar-carta');

function generateLetter() {
  console.log(letter.value);
  if(letter.value === undefined) {    
    letter.innerText = 'Por favor, digite o conteúdo da carta';
  }
  letter.innerText = input.value;  
}

generateBtn.addEventListener('click', generateLetter);