const API_URL = "https://script.google.com/macros/s/AKfycbziLsagcSq1NvyBy4dRrIvSia3j5fbBxXVeFJ1mCD6HTdGBjvLK9fO-q9vWU32DDgrBjA/exec"


// FORMAT TANGGAL
function formatDate(dateString){

const date = new Date(dateString)

const day = String(date.getDate()).padStart(2,"0")
const month = String(date.getMonth()+1).padStart(2,"0")
const year = date.getFullYear()

return `${day}/${month}/${year}`

}


// FORMAT JAM
function formatTime(timeString){

const date = new Date(timeString)

const hours = String(date.getHours()).padStart(2,"0")
const minutes = String(date.getMinutes()).padStart(2,"0")

return `${hours}:${minutes}`

}



async function loadData(){

const res = await fetch(API_URL)
const data = await res.json()

const table = document.getElementById("bookingTable")

table.innerHTML = ""

let totalBookings = 0
let revenueToday = 0

const today = new Date().toISOString().split("T")[0]


data.forEach(row=>{

// skip cancelled booking
if(row.status === "Cancelled") return

totalBookings++


// hitung revenue hari ini
const bookingDate = new Date(row.date).toISOString().split("T")[0]

if(bookingDate === today){

const price = parseInt(row.price.replace(/[^\d]/g,""))
revenueToday += price

}


// buat row tabel
let tr = document.createElement("tr")

tr.innerHTML = `
<td>${row.name || "-"}</td>
<td>${row.bike || "-"}</td>
<td>${formatDate(row.date)} ${formatTime(row.start)} - ${formatTime(row.end)}</td>
<td>${row.hours || "-"}</td>
<td>${row.price || "-"}</td>
`

table.appendChild(tr)

})


// update statistik dashboard
document.getElementById("totalBookings").innerText =
"Total Bookings: " + totalBookings

document.getElementById("todayRevenue").innerText =
"Revenue Today: ₹" + revenueToday

}


loadData()
