const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const rgbShowColor = document.querySelectorAll('.rgbShowColor')
const hex = document.getElementById('hex');
const btn = document.getElementById('btn');
const convertColor = document.getElementById('convertColor');

//convert 10 to 16 + 輸入值為正整數，空值預設為0
function convertNumber(colorNumber){
  let hexNumber = '';
  if(!Number.isInteger(Number(colorNumber)) || colorNumber < 0 || colorNumber > 255){
    window.alert('please type positive integer number between 0~255')
    return hexNumber = '';
  }
  hexNumber = Number(colorNumber).toString(16);
  return hexNumber
}

//display HEX number + display color
function displayHexNumber(){
  let hexColor = '';
  hexColor = convertNumber(red.value) + convertNumber(green.value) + convertNumber(blue.value);
  hex.value = hexColor;
  convertColor.style.backgroundColor = `#${hexColor}`
}

//display RGB 旁邊的顏色
function displayRgbColor(){
  rgbShowColor[0].style.backgroundColor = `rgb(${Number(red.value)},0,0)`;
  rgbShowColor[1].style.backgroundColor = `rgb(0,${Number(green.value)},0)`;
  rgbShowColor[2].style.backgroundColor = `rgb(0,0,${Number(blue.value)})`;
  console.log(rgbShowColor[0],rgbShowColor[1],rgbShowColor[2])
}


btn.addEventListener('click',function(){
  displayHexNumber();
  displayRgbColor();
});
