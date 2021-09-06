let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefoxIcon.png') {
      myImage.setAttribute('src','images/firefoxNew.png');
    } else {
      myImage.setAttribute('src','images/firefoxIcon.png');
    }
}

let myB1 = document.querySelector('button');
let myH1 = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {                                       
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myH1.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myH1.textContent = 'Mozilla is cool, ' + storedName;
  }

  myB1.onclick = function() {
    setUserName();
  }

  