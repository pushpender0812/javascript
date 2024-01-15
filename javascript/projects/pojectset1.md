# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## Solution code

## Project 1 Solution

```javascript
console.log("Pushpender")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  //  console.log(btn);
  btn.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'pink') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 Solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    const suggt = document.querySelector('#weight-guide');

    if (bmi < 18.6) {
      suggt.innerHTML = 'underweight';
    } else if (bmi >= 18.6 && bmi <= 24) {
      suggt.innerHTML = 'Normal Range';
    } else {
      suggt.innerHTML = 'Overweight';
    }
  }
});

```

## Project 3 Solution

```javascript

const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);


```


## Project 4 Solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhigh = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Enter a number greater than 1');
  } else if (guess > 100) {
    alert('Enter a number Less than 100');
  } else {
    prevguess.push(guess);

    if (numguess > 10) {
      displayguess(guess);
      displaymessage(`Game over , random number was ${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displaymessage(`You Won the game as you guessed it right`);
    endgame();
  } else if (guess < randomNumber) {
    displaymessage(`Number is  tooo low`);
  } else if (guess > randomNumber) {
    displaymessage(`Number is  tooo High`);
  }
}

function displayguess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame">Start new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;  
  });
}






```
## Project 5 Solution


```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `<div class = "color">
  <table>
  <tr>
    <th>key</th>
     <th>keyCode </th>
     <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  </div>`;
});




```

## Project 6 Soution 

```javascript

const body = document.querySelector('body');

const randomcolor = function () {
  let hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let setcolor;
document.getElementById('start').addEventListener('click', function () {
  if (!setcolor) {
    setcolor = setInterval(function () {
      body.style.backgroundColor = randomcolor();
    }, 1000);
  }
});

document.getElementById('stop').addEventListener('click', function () {
  clearInterval(setcolor);
  setcolor = null;
});



```