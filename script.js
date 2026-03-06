window.onload = function(){

alert("Welcome to IMTH Bike Rental")

}

const priceMap = {
    "Standard Bike": 120,
    "Sport Bike": 200,
    "Electric Scooter": 90
}

const bikeType = document.getElementById("bikeType")
const hours = document.getElementById("hours")
const totalPrice = document.getElementById("totalPrice")

function calculatePrice(){
const price = priceMap[bikeType.value]
const duration = hours.value

if(price && duration){

totalPrice.value = "₹ " + (price * duration)

}

}

bikeType.addEventListener("change",calculatePrice)
hours.addEventListener("input",calculatePrice)

document.getElementById("bookingForm")
.addEventListener("submit",async function(e){

e.preventDefault()

const data = {

name:document.getElementById("name").value,
student:document.getElementById("student").value,
email:document.getElementById("email").value,
phone:document.getElementById("phone").value,
bike:bike.value,
hours:hours.value,
total:total.value,
payment:"uploaded"

}

await fetch("https://script.google.com/macros/s/AKfycbyhcIdhHB8aX2Mjz_ANFpYPtzweD7bAozyE7ewmMjZlR5MpzcOzOGRZ53fZ7CInYk2X/exec",{

method:"POST",
body:JSON.stringify(data)

})

alert("Booking submitted successfully")

})

