// INDEXOF(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

//
const startBtn = document.querySelector('#startBtn')
const letterBtns = document.querySelectorAll('.letterBtns')
const animalBtn = document.querySelector('#animalBtn')
const acivityBtn = document.querySelector('#activityBtn')
const codingBtn = document.querySelector('#codingBtn')
const categoryBtns = document.querySelectorAll('.categoryBtns')
const category = document.querySelector('#category')
const categoryDisplay = document.querySelector('#categoryDisplay')
const winOrLose = document.querySelector('#winLoseDisplay')
const wrongGuess = document.querySelector('#incorrect')
const allFish = document.querySelectorAll('.fish')
const fish1 = document.querySelector('#fish1')
const fish2 = document.querySelector('#fish2')
const fish3 = document.querySelector('#fish3')
const fish4 = document.querySelector('#fish4')
const fish5 = document.querySelector('#fish5')
const fishBar = document.querySelector('#mistakeFish')
const shark = document.querySelector('#shark')
const yourWordWas = document.querySelector('#yourWordWas')
const sharkBite = document.querySelector('#sharkBite')
//Getters ^^
//
fish1.innerText = '🐟'
fish2.innerText = '🐟'
fish3.innerText = '🐟'
fish4.innerText = '🐟'
fish5.innerText = '🐟'
let wordStatus = null
const wordBankAnimal = [
  'DOG',
  'CAT',
  'HORSE',
  'FISH',
  'SNAKE',
  'LIZARD',
  'COW',
  'BIRD',
  'LLAMA',
  'DEER'
]
const wordBankActivity = [
  'BASKETBALL',
  'EXERCISE',
  'DRIVING',
  'SLEEPING',
  'COOKING',
  'CODING',
  'BASEBALL',
  'GAMES',
  'EATING'
]
const wordBankCoding = [
  'JAVASCRIPT',
  'FUNCTION',
  'VUE',
  'HTML',
  'CSS',
  'PYTHON',
  'DJANGO',
  'SWITCH',
  'CLASS',
  'MONGO',
  'VARIABLE',
  'METHOD',
  'ARRAY',
  'OPERATOR'
]
let difficulty = 0
let displayed = ''
let incorrect = 6
let clickedLetters = []
//Global variables and Arrays ^^
//
letterBtns.forEach((button) => {
  button.disabled = true
})
startBtn.disabled = true
categoryBtns.disabled = true
category.disabled = true
//Start With Disabled Buttons ^^
//
animalBtn.onclick = () => {
  categoryDisplay.innerText = 'Animal'
  categoryBtns.forEach((button) => {
    button.disabled = true
  })
  category.disabled = false
  startBtn.disabled = false
  difficulty = 1
}
activityBtn.onclick = () => {
  categoryDisplay.innerText = 'Activity'
  categoryBtns.forEach((button) => {
    button.disabled = true
  })
  category.disabled = false
  startBtn.disabled = false
  difficulty = 2
}
codingBtn.onclick = () => {
  categoryDisplay.innerText = 'Coding'
  categoryBtns.forEach((button) => {
    button.disabled = true
  })
  category.disabled = false
  startBtn.disabled = false
  difficulty = 3
}
//Category Selection^^
//
const randomWord = () => {
  if (difficulty === 1) {
    displayed =
      wordBankAnimal[Math.floor(Math.random() * wordBankAnimal.length)]
    console.log(displayed)
  } else if (difficulty === 2) {
    displayed =
      wordBankActivity[Math.floor(Math.random() * wordBankActivity.length)]
  } else if (difficulty === 3) {
    displayed =
      wordBankCoding[Math.floor(Math.random() * wordBankCoding.length)]
  }
}
//Random Word Generator ^^
//
const displayHidden = () => {
  wordStatus = displayed
    .split('')
    .map((letter) => (clickedLetters.indexOf(letter) >= 0 ? letter : ' _ '))
    .join('')

  winOrLose.innerText = wordStatus
}
//Replaces "_" with the letter if it is there ^^
//
const checkWin = () => {
  if (wordStatus === displayed) {
    winOrLose.innerText = 'YOU WON!'
    yourWordWas.innerText = displayed
    shark.innerText = '💭'
    letterBtns.forEach((button) => {
      button.disabled = true
    })
  }
}
//Check if player won ^^
//
const checkLoss = () => {
  if (incorrect === 0) {
    winOrLose.innerText = 'YOU LOST!'
    yourWordWas.innerText = displayed
    winOrLose.style.backgroundColor = 'red'
    fishBar.style.backgroundColor = 'red'
    letterBtns.forEach((button) => {
      button.disabled = true
    })
  }
}
//Check if player lost ^^
//
const checkIncorrect = (letter) => {
  if (displayed.indexOf(letter) === -1) {
    incorrect -= 1
    wrongGuess.innerText = incorrect
  }
  if (incorrect === 5) {
    fish1.style.display = 'none'
  } else if (incorrect === 4) {
    fish2.style.display = 'none'
  } else if (incorrect === 3) {
    fish3.style.display = 'none'
  } else if (incorrect === 2) {
    fish4.style.display = 'none'
  } else if (incorrect === 1) {
    fish5.style.display = 'none'
  }
}
//Check if letter is NOT in word ^^
//
letterBtns.forEach((button) => {
  button.onclick = () => {
    button.disabled = true
    clickedLetters.push(button.value)
    displayHidden()
    checkIncorrect(button.value)
    checkWin()
    checkLoss()
  }
})
//On click of letter buttons, push value, disable button, run check functions ^^
//
startBtn.onclick = () => {
  letterBtns.forEach((button) => {
    button.disabled = false
  })
  displayed = ''
  categoryBtns.disabled = false
  winOrLose.style.backgroundColor = 'rgb(0, 132, 255)'
  fishBar.style.backgroundColor = 'rgb(0, 132, 255)'
  startBtn.innerText = 'New Word'
  clickedLetters = []
  yourWordWas.innerText = ''
  fish1.style.display = 'inline'
  fish2.style.display = 'inline'
  fish3.style.display = 'inline'
  fish4.style.display = 'inline'
  fish5.style.display = 'inline'
  incorrect = 6
  shark.innerText = '🦈'
  wrongGuess.innerText = incorrect
  randomWord()
  displayHidden()
}
//Start/New Word/Reset ^^
//
category.onclick = () => {
  categoryBtns.forEach((button) => {
    button.disabled = false
  })
  letterBtns.forEach((button) => {
    button.disabled = true
  })
  startBtn.disabled = true
  startBtn.innerText = 'Begin!'
}
//Choose Category^^
//
