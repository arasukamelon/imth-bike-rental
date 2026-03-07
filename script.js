window.onload = function(){
alert("Welcome to IMTH Bike Rental")
}

const priceMap = {
"Standard Bike":120,
"Sport Bike":200,
"Electric Scooter":90
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
bike:document.getElementById("bikeType").value,
date:document.getElementById("date").value,
start:document.getElementById("start").value,
end:document.getElementById("end").value,
hours:document.getElementById("hours").value,
price:document.getElementById("totalPrice").value,
payment:document.getElementById("payment").value
}

await fetch("https://script.google.com/macros/s/AKfycbziLsagcSq1NvyBy4dRrIvSia3j5fbBxXVeFJ1mCD6HTdGBjvLK9fO-q9vWU32DDgrBjA/exec",{

method:"POST",
body:JSON.stringify(data)

})

alert("Booking submitted successfully")
document.getElementById("bookingForm").reset()
loadBookings()
})

async function checkAvailability(){

const response = await fetch(API_URL)
const bookings = await response.json()

const selectedDate = document.getElementById("date").value

const unavailable = bookings.filter(
b => b.date === selectedDate
)

if(unavailable.length > 0){

alert("Some time slots already booked")

}

}

async function loadSchedule(){

const res = await fetch(API_URL)
const data = await res.json()

const table = document.getElementById("scheduleTable")

data.forEach(b=>{

table.innerHTML += `
<tr>
<td>${b.name}</td>
<td>${b.bike}</td>
<td>${b.start} - ${b.end}</td>
</tr>
`

})

}

function loadHistory(data){

const table = document.getElementById("historyTable")

data.forEach(b=>{
table.innerHTML += `
<tr>
<td>${b.name}</td>
<td>${b.bike}</td>
<td>${formatDate(b.date)}</td>
</tr>
`
})

}

function payNow(){

var options = {

key:"RAZORPAY_KEY",
amount: totalPrice * 100,
currency:"INR",
name:"IMTH Bike Rental"

}

var rzp = new Razorpay(options)

rzp.open()

}

function login(){

const u = document.getElementById("user").value
const p = document.getElementById("pass").value

if(u==="admin" && p==="imth123"){

window.location="dashboard.html"

}else{

alert("Invalid login")

}

}

function showPayment(){

const method = document.getElementById("payment").value
const qr = document.getElementById("qrBox")
const card = document.getElementById("cardForm")

qr.style.display = "none"
card.style.display = "none"

if(method === "QR"){

qr.style.display = "block"

}

if(method === "Card"){

card.style.display = "block"

}

}

const API_URL = "https://script.google.com/macros/s/AKfycbziLsagcSq1NvyBy4dRrIvSia3j5fbBxXVeFJ1mCD6HTdGBjvLK9fO-q9vWU32DDgrBjA/exec"

function formatTime(timeString){

const date = new Date(timeString)

const hours = String(date.getHours()).padStart(2,"0")
const minutes = String(date.getMinutes()).padStart(2,"0")

return `${hours}:${minutes}`

}

function formatDate(dateString){

const date = new Date(dateString)

const day = String(date.getDate()).padStart(2,"0")
const month = String(date.getMonth()+1).padStart(2,"0")
const year = date.getFullYear()

return `${day}/${month}/${year}`

}
async function loadBookings(){

const res = await fetch(API_URL)
const data = await res.json()

const scheduleBody = document.querySelector("#scheduleTable tbody")
const historyBody = document.querySelector("#historyTable tbody")

scheduleBody.innerHTML=""
historyBody.innerHTML=""

const today = new Date().toISOString().split("T")[0]

data.filter(b => b.status !== "Cancelled").forEach(b => {

const time = formatTime(b.start) + " - " + formatTime(b.end)

// Today's bookings
const bookingDate = new Date(b.date).toISOString().split("T")[0]

if(bookingDate === today){

scheduleBody.innerHTML += `
<tr>
<td>${b.bike}</td>
<td>${time}</td>
</tr>
`

}

// Booking history
historyBody.innerHTML += `
<tr>
<td>${b.bike}</td>
<td>${formatDate(b.date)}</td>
<td>${time}</td>
<td>${b.payment}</td>
</tr>
`
})

}

window.addEventListener("load", () => {
loadBookings()
})

function updateBikeAvailability(bookings){

const bikes = document.querySelectorAll(".bike-card")

bikes.forEach(card=>{

const bikeName = card.querySelector("h3").innerText

const booked = bookings.some(
b => b.bike === bikeName && b.status !== "Cancelled"
)

if(booked){

card.style.opacity = "0.4"
card.style.pointerEvents = "none"
card.innerHTML += "<p style='color:red'>Currently Rented</p>"

}

})

}

updateBikeAvailability(data)