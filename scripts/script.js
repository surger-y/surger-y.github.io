const backRight = document.querySelector('.backRight')
const leftSide = document.querySelector('.left-wrapper')
const rightSide = document.querySelector('.right-wrapper')

const loadMainLeft = () => {
  fetch('https://raw.githubusercontent.com/surger-y/surger-y.github.io/main/pages/main-left.html')
    .then(response => response.text())
    .then(result => leftSide.innerHTML = result)
}

const loadMainRight = () => {
  fetch('https://raw.githubusercontent.com/surger-y/surger-y.github.io/main/pages/main-right.html')
    .then(response => response.text())
    .then(result => rightSide.innerHTML = result)
}

loadMainLeft();
loadMainRight();
const image = document.querySelector('img')

//backRight.addEventListener('mousedown', () => {
 // loadMainRight()
//})

image.addEventListener('mousedown', () => {
  fetch('https://raw.githubusercontent.com/surger-y/surger-y.github.io/main/pages/blog/blog001.html')   
   .then(response => response.text())
   .then(result => rightSide.innerText = result);

})


