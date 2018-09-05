// let secretCode = '9305';
// let assumption = prompt('Enter a number that includes 4 different digits', '9012') || '';

// function getBullsAndCows(secretCode, assumption) {
//   let cows = 0;
//   let bulls = 0;
//   let victoryMsg = 'You won! Congrats :D';
//   let motivationMsg = 'Please, try again';

//   assumption = assumption.split('');

//   for (let i = 0; i < assumption.length; i++) {
//     if (~secretCode.indexOf(assumption[i])) {
//       cows++;
//       if (assumption[i] == secretCode[i]) {
//         bulls++;
//         cows--;
//       }
//     }
//   }

//   console.log('You\'ve got ' + bulls + ' bull(s) and ' + cows + ' cow(s)!');

//   if (bulls == 4) {
//     return victoryMsg;
//   }
  
//   return motivationMsg;
// }

// console.log(getBullsAndCows(secretCode, assumption));

let secretCode = '9305';

function getBullsAndCows(secretCode, assumption) {
  clearInput('assumption');

  let cows = 0;
  let bulls = 0;
  let victoryMsg = 'You won! Congrats :D';
  let motivationMsg = 'Please, try again';

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

  let notification = 'You\'ve got ' + bulls + ' bull(s) and ' + cows + ' cow(s)!';
  addProgressMessage(notification);

  if (bulls == 4) {
    addProgressMessage(victoryMsg);
  }
}

function addProgressMessage(str) {
  let chat = document.getElementById('assumptions-list');
  let item = document.createElement('div');
  item.classList = 'assumptions-list-item';
  item.textContent = str;
  chat.appendChild(item);
}

function clearAssumptionContainer() {
  let el = document.getElementById('assumptions-list');
  let fc = el.firstChild;
  while (fc) {
    el.removeChild(fc);
    fc = el.firstChild;
  }
}

function clearInput(id) {
  let userInput = document.getElementById(id);
  userInput.value = '';
}

function validateInput() {
  /**/
}
