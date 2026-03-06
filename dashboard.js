async function loadData(){

const res = await fetch("SHEET_JSON_URL")

const data = await res.json()

const table = document.querySelector("#bookingTable tbody")

data.forEach(row=>{

let tr = document.createElement("tr")

tr.innerHTML = `
<td>${row.name}</td>
<td>${row.bike}</td>
<td>${row.hours}</td>
<td>${row.total}</td>
`

table.appendChild(tr)

})

}

loadData()