
// var clockDiv = document.querySelector('#clock')	


// // $(document).ready(function(){
// // 	// function clockDisplay(){
// 		var currentTime = new Date();

// 			var dateObj2String = currentTime.toTimeString()
// 			console.log(dateObj2String)

// 		var hours = currentTime.getHours();
// 		var minutes = currentTime.getMinutes();
// 		var seconds = currentTime.getSeconds();
// 		console.log(currentTime)

// 		// var clockDiv = document.querySelector('#clock')

// 		clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds
// 	// }

// 	// displayTime();

// // });

var clockDisplay_el = document.querySelector('#clock')

var container_el = document.querySelector('.container')

container_el.style.backgroundColor = "red"; //set background color background red 

var containerStyle = window.getComputedStyle(container_el).getPropertyValue("background-color");
console.log(containerStyle)

var currentTime = new Date();

// console.log(typeof currentTime)
// console.log(currentTime)

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// console.log(hours)

clockDisplay_el.innerHTML = hours + ":" + minutes + ":" + seconds

// console.log(clockDisplay_el.innerHTML)

console.log([container_el])
console.log(container_el)




