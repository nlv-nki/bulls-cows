// let secretCode = '9305';  hardcoded value
let secretCode = numGen().toString();

function getBullsAndCows (secretCode, assumption) {
  let cows = 0;
  let bulls = 0;
  let victoryMsg = 'You won! Congrats :D ';
  if (validateInput(+assumption)) {
    assumption = assumption.split('');

    for (let i = 0; i < assumption.length; i++) {
      if (~secretCode.indexOf(assumption[i])) {
        cows++;
        if (assumption[i] == secretCode[i]) {
          bulls++;
          cows--;
        }
      }
    }

    let notification = assumption.join('') + ' ' + bulls + ' bull(s) ' + cows + ' cow(s)';
    addProgressMessage(notification);

    if (bulls == 4) {
      clearAssumptionContainer();
      addProgressMessage(victoryMsg, true);
    }

    clearInput('assumption');
  } else {
    alert('Ошибка: не верный формат числа')
  }
}

function addProgressMessage (str, victoryState) {
  let chat = document.getElementById('assumptions-list');
  let item = document.createElement('div');
  item.classList = 'assumptions-list-item';

  if (victoryState) {
    item.classList = 'assumptions-list-item assumptions-list-item-success';
  }

  item.textContent = str;
  chat.appendChild(item);
}

function clearAssumptionContainer () {
  let el = document.getElementById('assumptions-list');
  let fc = el.firstChild;

  while (fc) {
    el.removeChild(fc);
    fc = el.firstChild;
  }
}

function clearInput (id) {
  let userInput = document.getElementById(id);
  userInput.value = '';
}

function validateInput (value) {
  /*
    Validation goes here (maybe some time later)

    TODO:
      ** only nubmers
      ** only 4 digits
      ** all different digits

  */

  return !isNaN(parseFloat(value)) && isFinite(value) && value.toString().length === 4;
}

function numGen () {
  return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}
