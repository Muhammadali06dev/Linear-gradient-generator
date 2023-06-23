const color1 = document.querySelector('#color-selector-1')
const color2 = document.querySelector('#color-selector-2')
const body = document.querySelector('body')
const board = document.querySelector('#gradient__pointer')
const colorPointer1 = document.getElementById('color-pointer-1')
const colorPointer2 = document.getElementById('color-pointer-2')
const range = document.getElementById('rotation-range')
const rotationPointer = document.getElementById('rotation-pointer')

function pointGradient() {
   body.style.background = `linear-gradient(${range.value}deg ,${color1.value},${color2.value})`
   board.style.background = `linear-gradient(${range.value}deg ,${color1.value},${color2.value})`
}

color1.addEventListener('input', () => {
   if (color1.value != '#000000' || color2.value != '#000000'){
      colorPointer1.value = color1.value;
   } else {
      pointGradient()
      
   }
   
}) 
color2.addEventListener('input', () => {
   if (color1.value == '#000000' || color2.value == '#000000'){
      
   } else {
      colorPointer2.value = color2.value;
      pointGradient()
      
   }
   
}) 

range.addEventListener('input', () => {
   if (color1.value == '#000000' || color2.value == '#000000'){
      alert("Choose both of colors!")
   }else {
      pointGradient()
      rotationPointer.value = `${range.value}deg`
   }
   
})