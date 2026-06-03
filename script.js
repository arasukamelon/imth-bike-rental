/* ── TRANSLATIONS ──────────────────────────────── */
const translations = {
  en: {
    "nav.home": "Home",
    "nav.bikes": "Bikes",
    "nav.book": "Book Now",
    "nav.today": "Today",
    "nav.history": "History",
    "hero.title": "Ride Free.<br>Rent Easy.",
    "hero.sub": "Campus bike rentals for students",
    "hero.cta": "Book a Bike",
    "bikes.title": "Our Bikes",
    "bikes.sub": "Simple pricing — ₹100 first hour, ₹50 each hour after",
    "bikes.standard": "Standard Bike",
    "bikes.standard.desc": "Great for short campus trips",
    "bikes.sport": "Sport Bike",
    "bikes.sport.desc": "For the fast-moving student",
    "bikes.electric": "Electric Scooter",
    "bikes.electric.desc": "Eco-friendly & smooth ride",
    "bikes.price": "₹100 / first hr · ₹50 next",
    "bikes.rented": "Currently Rented",
    "form.title": "Book a Bike",
    "form.name": "Full Name",
    "form.name.ph": "Your full name",
    "form.student": "Student ID",
    "form.student.ph": "e.g. 2023001",
    "form.email": "Email",
    "form.email.ph": "you@campus.edu",
    "form.phone": "Phone",
    "form.phone.ph": "+91 ...",
    "form.bike": "Bike Type",
    "form.bike.select": "Select a bike",
    "form.date": "Rental Date",
    "form.start": "Start Time",
    "form.end": "End Time",
    "form.hours": "Duration (hours)",
    "form.hours.ph": "e.g. 2",
    "form.total": "Total Price",
    "form.total.ph": "Auto-calculated",
    "form.payment": "Payment Method",
    "form.payment.select": "Select payment",
    "form.payment.qr": "QR Payment",
    "form.payment.card": "Debit / Credit Card",
    "form.qr.label": "Scan to pay:",
    "form.card.number": "Card Number",
    "form.card.expiry": "Expiry Date (MM/YY)",
    "form.card.cvv": "CVV",
    "form.proof": "Upload Payment Proof",
    "form.proof.hint": "Upload screenshot or photo of your payment (JPG, PNG, PDF)",
    "form.submit": "Submit Booking",
    "schedule.title": "Today's Bookings",
    "history.title": "Booking History",
    "table.bike": "Bike",
    "table.date": "Date",
    "table.time": "Time Slot",
    "table.payment": "Payment",
    "table.status": "Status",
    "cs.label": "CS / Help",
    "status.pending": "Pending",
    "status.confirmed": "Confirmed",
    "status.rejected": "Rejected",
    "status.cancelled": "Cancelled",
  },
  hi: {
    "nav.home": "होम",
    "nav.bikes": "बाइक",
    "nav.book": "अभी बुक करें",
    "nav.today": "आज",
    "nav.history": "इतिहास",
    "hero.title": "स्वतंत्र सवारी।<br>आसान किराया।",
    "hero.sub": "छात्रों के लिए कैंपस बाइक किराया",
    "hero.cta": "बाइक बुक करें",
    "bikes.title": "हमारी बाइक",
    "bikes.sub": "सरल मूल्य — पहले घंटे ₹100, फिर ₹50/घंटे",
    "bikes.standard": "स्टैंडर्ड बाइक",
    "bikes.standard.desc": "छोटी कैंपस यात्राओं के लिए",
    "bikes.sport": "स्पोर्ट बाइक",
    "bikes.sport.desc": "तेज़ छात्रों के लिए",
    "bikes.electric": "इलेक्ट्रिक स्कूटर",
    "bikes.electric.desc": "पर्यावरण के अनुकूल सवारी",
    "bikes.price": "₹100 / पहला घंटा · ₹50 अगला",
    "bikes.rented": "अभी किराए पर",
    "form.title": "बाइक बुक करें",
    "form.name": "पूरा नाम",
    "form.name.ph": "आपका पूरा नाम",
    "form.student": "छात्र आईडी",
    "form.student.ph": "जैसे 2023001",
    "form.email": "ईमेल",
    "form.email.ph": "you@campus.edu",
    "form.phone": "फोन",
    "form.phone.ph": "+91 ...",
    "form.bike": "बाइक प्रकार",
    "form.bike.select": "बाइक चुनें",
    "form.date": "किराया तिथि",
    "form.start": "शुरुआत का समय",
    "form.end": "समाप्ति का समय",
    "form.hours": "अवधि (घंटे)",
    "form.hours.ph": "जैसे 2",
    "form.total": "कुल कीमत",
    "form.total.ph": "स्वतः गणना",
    "form.payment": "भुगतान विधि",
    "form.payment.select": "भुगतान चुनें",
    "form.payment.qr": "QR भुगतान",
    "form.payment.card": "डेबिट / क्रेडिट कार्ड",
    "form.qr.label": "भुगतान के लिए स्कैन करें:",
    "form.card.number": "कार्ड नंबर",
    "form.card.expiry": "समाप्ति तिथि (MM/YY)",
    "form.card.cvv": "CVV",
    "form.proof": "भुगतान प्रमाण अपलोड करें",
    "form.proof.hint": "भुगतान का स्क्रीनशॉट या फोटो अपलोड करें",
    "form.submit": "बुकिंग जमा करें",
    "schedule.title": "आज की बुकिंग",
    "history.title": "बुकिंग इतिहास",
    "table.bike": "बाइक",
    "table.date": "तिथि",
    "table.time": "समय",
    "table.payment": "भुगतान",
    "table.status": "स्थिति",
    "cs.label": "सहायता",
    "status.pending": "प्रतीक्षित",
    "status.confirmed": "स्वीकृत",
    "status.rejected": "अस्वीकृत",
    "status.cancelled": "रद्द",
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const t = translations[lang];

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });
}

/* ── DARK MODE ─────────────────────────────────── */
function toggleDark(on) {
  document.body.classList.toggle("dark", on);
  localStorage.setItem("dark", on ? "1" : "0");
}

/* ── INIT ──────────────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {
  // Restore language
  const langSelect = document.getElementById("language");
  if (langSelect) {
    langSelect.value = currentLang;
    applyLanguage(currentLang);
  }

  // Restore dark mode
  const darkOn = localStorage.getItem("dark") === "1";
  const darkToggle = document.getElementById("darkMode");
  if (darkToggle) {
    darkToggle.checked = darkOn;
    document.body.classList.toggle("dark", darkOn);
  }

  loadBookings();
});

/* ── PRICE CALCULATION ─────────────────────────── */
// ₹100 first hour, ₹50 each subsequent hour
function calcPrice(hours) {
  if (!hours || hours < 1) return 0;
  return 100 + Math.max(0, hours - 1) * 50;
}

const bikeTypeEl = document.getElementById("bikeType");
const hoursEl    = document.getElementById("hours");
const totalEl    = document.getElementById("totalPrice");
const startEl    = document.getElementById("start");
const endEl      = document.getElementById("end");

function recalcFromTime() {
  const s = startEl && startEl.value;
  const e = endEl && endEl.value;
  if (s && e) {
    const diff = (timeToMinutes(e) - timeToMinutes(s)) / 60;
    if (diff > 0 && hoursEl) {
      hoursEl.value = Math.ceil(diff);
      if (totalEl) totalEl.value = "₹ " + calcPrice(Math.ceil(diff));
    }
  }
}

function recalcFromHours() {
  const h = parseInt(hoursEl && hoursEl.value);
  if (h > 0 && totalEl) totalEl.value = "₹ " + calcPrice(h);
}

if (hoursEl) hoursEl.addEventListener("input", recalcFromHours);
if (startEl) startEl.addEventListener("change", recalcFromTime);
if (endEl)   endEl.addEventListener("change", recalcFromTime);

/* ── PAYMENT TOGGLE ───────────────────────────── */
function showPayment() {
  const method = document.getElementById("payment").value;
  document.getElementById("qrBox").style.display   = method === "QR"   ? "block" : "none";
  document.getElementById("cardForm").style.display = method === "Card" ? "block" : "none";
}

/* ── HELPERS ───────────────────────────────────── */
function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(ts) {
  const d = new Date(ts);
  return String(d.getHours()).padStart(2,"0") + ":" + String(d.getMinutes()).padStart(2,"0");
}

function formatDate(ds) {
  const d = new Date(ds);
  return String(d.getDate()).padStart(2,"0") + "/" +
         String(d.getMonth()+1).padStart(2,"0") + "/" +
         d.getFullYear();
}

function statusBadge(status) {
  const map = {
    Pending:   { color: "#f59e0b", label: translations[currentLang]["status.pending"]   || "Pending"   },
    Confirmed: { color: "#16a34a", label: translations[currentLang]["status.confirmed"] || "Confirmed" },
    Rejected:  { color: "#dc2626", label: translations[currentLang]["status.rejected"]  || "Rejected"  },
    Cancelled: { color: "#6b7280", label: translations[currentLang]["status.cancelled"] || "Cancelled" },
  };
  const s = map[status] || map["Pending"];
  return `<span style="background:${s.color};color:#fff;padding:3px 10px;border-radius:20px;font-size:0.78rem;font-weight:600">${s.label}</span>`;
}

/* ── API ───────────────────────────────────────── */
const API_URL = "https://script.google.com/macros/s/AKfycbyZoXCrJdUyzFfms_NNeTXYh7rB-JnmYXkw7WEGn4Z3WkqjYBk4tTqp62Qy8mCG5hSMEQ/exec";

async function validateTimeSlot() {
  try {
    const res = await fetch(API_URL);
    const bookings = await res.json();

    const bike  = document.getElementById("bikeType").value;
    const date  = document.getElementById("date").value;
    const start = document.getElementById("start").value;
    const end   = document.getElementById("end").value;
    const startMin = timeToMinutes(start);
    const endMin   = timeToMinutes(end);

    for (let b of bookings) {
      if (b.status === "Cancelled" || b.status === "Rejected") continue;
      if (b.bike !== bike) continue;
      const bookingDate = new Date(b.date).toISOString().split("T")[0];
      if (bookingDate !== date) continue;
      const bStart = timeToMinutes(formatTime(b.start));
      const bEnd   = timeToMinutes(formatTime(b.end));
      if (startMin < bEnd && endMin > bStart) {
        alert("This bike is already booked for that time slot. Please choose a different time.");
        return false;
      }
    }
    return true;
  } catch {
    return true; // allow submit if API is unreachable
  }
}

/* Convert file to base64 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ── FORM SUBMIT ───────────────────────────────── */
document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  btn.disabled = true;
  btn.textContent = "Checking availability…";

  const valid = await validateTimeSlot();
  if (!valid) {
    btn.disabled = false;
    btn.textContent = translations[currentLang]["form.submit"] || "Submit Booking";
    return;
  }

  btn.textContent = "Uploading…";

  const proofFile = document.getElementById("proof").files[0];
  let proofBase64 = "";
  let proofName   = "";
  if (proofFile) {
    proofBase64 = await fileToBase64(proofFile);
    proofName   = proofFile.name;
  }

  const data = {
    name:       document.getElementById("name").value,
    student:    document.getElementById("student").value,
    email:      document.getElementById("email").value,
    phone:      document.getElementById("phone").value,
    bike:       document.getElementById("bikeType").value,
    date:       document.getElementById("date").value,
    start:      document.getElementById("start").value,
    end:        document.getElementById("end").value,
    hours:      document.getElementById("hours").value,
    price:      document.getElementById("totalPrice").value,
    payment:    document.getElementById("payment").value,
    status:     "Pending",
    proofBase64,
    proofName,
  };

  try {
    await fetch(API_URL, { method: "POST", body: JSON.stringify(data) });
    alert("Booking submitted! Please wait for admin confirmation.");
    document.getElementById("bookingForm").reset();
    document.getElementById("qrBox").style.display   = "none";
    document.getElementById("cardForm").style.display = "none";
    loadBookings();
  } catch {
    alert("Failed to submit. Please check your connection and try again.");
  }

  btn.disabled = false;
  btn.textContent = translations[currentLang]["form.submit"] || "Submit Booking";
});

/* ── LOAD BOOKINGS ─────────────────────────────── */
async function loadBookings() {
  try {
    const res  = await fetch(API_URL);
    const data = await res.json();

    const scheduleBody = document.querySelector("#scheduleTable tbody");
    const historyBody  = document.querySelector("#historyTable tbody");
    if (scheduleBody) scheduleBody.innerHTML = "";
    if (historyBody)  historyBody.innerHTML  = "";

    const today = new Date().toISOString().split("T")[0];

    data.forEach(b => {
      if (b.status === "Cancelled") return;
      const time        = (b.start ? formatTime(b.start) : "--") + " – " + (b.end ? formatTime(b.end) : "--");
      const bookingDate = new Date(b.date).toISOString().split("T")[0];

      if (scheduleBody && bookingDate === today) {
        scheduleBody.innerHTML += `
          <tr>
            <td>${b.bike}</td>
            <td>${time}</td>
            <td>${statusBadge(b.status || "Pending")}</td>
          </tr>`;
      }

      if (historyBody) {
        historyBody.innerHTML += `
          <tr>
            <td>${b.bike}</td>
            <td>${formatDate(b.date)}</td>
            <td>${time}</td>
            <td>${b.payment}</td>
            <td>${statusBadge(b.status || "Pending")}</td>
          </tr>`;
      }
    });

    updateBikeAvailability(data);
  } catch (err) {
    console.error("Failed to load bookings", err);
  }
}

/* ── BIKE AVAILABILITY ─────────────────────────── */
function updateBikeAvailability(bookings) {
  const today = new Date().toISOString().split("T")[0];
  const now   = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll(".bike-card").forEach(card => {
    const bikeName = card.querySelector("h3").innerText.trim();
    const isActive = bookings.some(b => {
      if (b.status === "Cancelled" || b.status === "Rejected") return false;
      if (b.bike !== bikeName) return false;
      const bookingDate = new Date(b.date).toISOString().split("T")[0];
      if (bookingDate !== today) return false;
      // currently rented = overlaps now
      const bStart = timeToMinutes(formatTime(b.start));
      const bEnd   = timeToMinutes(formatTime(b.end));
      return nowMin >= bStart && nowMin < bEnd;
    });

    card.classList.toggle("unavailable", isActive);
  });
}
