

var clockDisplay_el = document.querySelector('#clock')

var container_el = document.querySelector('.container')

// container_el.style.backgroundColor = "red"; //set background color background red 

var hexColor_el = document.querySelector('#hexColor')


setInterval(function(){

var containerStyle = window.getComputedStyle(container_el).getPropertyValue("background-color");
// console.log(containerStyle)

var currentTime = new Date();

// console.log(typeof currentTime)
// console.log(currentTime)

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// console.log(hours)

clockDisplay_el.innerHTML = hours + ":" + minutes + ":" + seconds

// hexColor_el.innerHTML = redRgb + ":" + greenRgb + ":" + blueRgb



// will have to separate the hex color into section like above and selecting the hexColor id 

// console.log(clockDisplay_el.innerHTML)

// console.log([container_el])
// console.log(container_el)

var r = Math.round(hours/60*255)
var g = Math.round(minutes/60*255)
var b = Math.round(seconds/60*255)

container_el.style.backgroundColor = "rgb(255,"+ g + "," + b +")";
},1000)

var changeHex 

//convert number to hexa decimals 

// var hexColorDisplay = 

// var hours = Math.round(hours/60*255)
// var minutes = Math.round(minutes/60*255)
// var seconds = Math.round(seconds/60*225)

// var redRgb = (hours/60*255).toString(16)
// var greenRgb = (minutes/60*255).toString(16)
// var blueRgb = (seconds/60*255).toString(16)

// console.log(redRgb)



// hexColor_el.style.backgrounColor = ""



 

