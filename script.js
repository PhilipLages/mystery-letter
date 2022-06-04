const styles = ['newspaper', 'magazine1', 'magazine2'];

const sizes = ['medium', 'big', 'reallybig'];

const rotations = ['rotateleft', 'rotateright'];

const inclinations = ['skewleft', 'skewright'];

function chooseRandomStyle() {
  const whichStyle = Math.floor(Math.random() * 3);
  let chosenStyle;
  for (let style = 0; style < styles.length; style += 1) {
    chosenStyle = styles[whichStyle];
  }
  return chosenStyle;
}

function chooseRandomSize() {
  const whichSize = Math.floor(Math.random() * 3);
  let chosenSize;
  for (let size = 0; size < sizes.length; size += 1) {
    chosenSize = sizes[whichSize];
  }
  return chosenSize;
}

function chooseRandomRotation() {
  const whichRotation = Math.floor(Math.random() * 2);
  let chosenRotation;
  for (let rotation = 0; rotation < rotations.length; rotation += 1) {
    chosenRotation = rotations[whichRotation];
  }
  return chosenRotation;
}

function chooseRandomInclination() {
  const whichInclination = Math.floor(Math.random() * 2);
  let chosenInclination;
  for (let inclination = 0; inclination < inclinations.length; inclination += 1) {
    chosenInclination = inclinations[whichInclination];
  }
  return chosenInclination;
}

function generateClasses() {
  const classes = `${chooseRandomStyle()} ${chooseRandomSize()} ${chooseRandomRotation()} ${chooseRandomInclination()}`; return classes;
}

const input = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');
const generateBtn = document.getElementById('criar-carta');
const counter = document.getElementById('carta-contador');

function changeLetterStyles(e) {
  e.target.className = ' ';
  e.target.className = generateClasses();
}

function generateLetter() {
  letter.innerHTML = ' ';
  if (input.value.length === 0 || input.value === ' ') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const words = input.value.split(' ');
    counter.innerText = words.length;
    for (let word = 0; word < words.length; word += 1) {
      const span = document.createElement('span');
      span.className = generateClasses();
      span.addEventListener('click', changeLetterStyles);
      letter.appendChild(span);
      letter.lastElementChild.innerText = words[word];
    }
  }
}

function addBtnEvents() {
  generateBtn.addEventListener('click', generateLetter);
}
addBtnEvents();
