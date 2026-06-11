/* ── TRANSLATIONS ──────────────────────────────── */
const translations = {
  en: {
    "nav.home": "Home",
    "nav.bikes": "Bikes",
    "nav.book": "Book Now",
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
    "bikes.booked": "Currently Booked",
    "form.title": "Book a Bike",
    "form.name": "Full Name",
    "form.name.ph": "Your full name",
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
    "form.licence": "Upload Driving Licence",
    "form.licence.hint": "Upload a photo or scan of your valid driving licence (JPG, PNG, PDF)",
    "form.submit": "Submit Booking",
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
    "bikes.booked": "अभी बुक है",
    "form.title": "बाइक बुक करें",
    "form.name": "पूरा नाम",
    "form.name.ph": "आपका पूरा नाम",
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
    "form.proof.hint": "भुगतान का स्क्रीनशॉट या फोटो अपलोड करें (JPG, PNG, PDF)",
    "form.licence": "ड्राइविंग लाइसेंस अपलोड करें",
    "form.licence.hint": "अपने वैध ड्राइविंग लाइसेंस की फोटो अपलोड करें (JPG, PNG, PDF)",
    "form.submit": "बुकिंग जमा करें",
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

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

/* ── INIT ──────────────────────────────────────── */
window.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("language");
  if (langSelect) {
    langSelect.value = currentLang;
    applyLanguage(currentLang);
  }

  // Set minimum date to today
  const dateEl = document.getElementById("date");
  if (dateEl) {
    const today = new Date().toISOString().split("T")[0];
    dateEl.min = today;
  }

  loadBikeAvailability();
  setInterval(loadBikeAvailability, 60000);
});

/* ── API URL ───────────────────────────────────── */
// ⚠️ IMPORTANT: Replace this URL with your latest Apps Script deployment URL
const API_URL = "https://script.google.com/macros/s/AKfycbyLfXICBxbBozLdSxnshdE6tCQbtMqB9PoSYE56yBM8kSVYyk9R33vWORYLl0bNY7rL9Q/exec";

/* ── PRICE CALCULATION ─────────────────────────── */
function calcPrice(hours) {
  if (!hours || hours < 1) return 0;
  return 100 + Math.max(0, hours - 1) * 50;
}

const hoursEl = document.getElementById("hours");
const totalEl = document.getElementById("totalPrice");
const startEl = document.getElementById("start");
const endEl   = document.getElementById("end");

function timeToMinutes(t) {
  if (!t) return 0;
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function recalcFromTime() {
  const s = startEl && startEl.value;
  const e = endEl && endEl.value;
  if (s && e) {
    const diff = (timeToMinutes(e) - timeToMinutes(s)) / 60;
    if (diff > 0) {
      const h = Math.ceil(diff);
      if (hoursEl) hoursEl.value = h;
      if (totalEl) totalEl.value = "₹ " + calcPrice(h);
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
  document.getElementById("qrBox").style.display    = method === "QR"   ? "block" : "none";
  document.getElementById("cardForm").style.display = method === "Card" ? "block" : "none";
}

/* ── HELPERS ───────────────────────────────────── */
function parseTime(val) {
  if (!val) return null;
  const s = String(val).trim();
  // Already "HH:MM"
  if (/^\d{1,2}:\d{2}$/.test(s)) {
    return s.length === 4 ? "0" + s : s;
  }
  // ISO string / Date serialised
  if (s.includes("T") || s.includes("1970") || s.length > 10) {
    const d = new Date(s);
    if (!isNaN(d)) {
      return String(d.getHours()).padStart(2, "0") + ":" +
             String(d.getMinutes()).padStart(2, "0");
    }
  }
  return null;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result.split(",")[1]);
    reader.onerror = () => reject(new Error("File read failed"));
    reader.readAsDataURL(file);
  });
}

/* ── PAST-TIME VALIDATION ─────────────────────── */
function isPastTime(dateVal, startVal) {
  if (!dateVal || !startVal) return false;
  const now   = new Date();
  const today = now.toISOString().split("T")[0];
  if (dateVal !== today) return false;
  const [sh, sm]   = startVal.split(":").map(Number);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const startMin   = sh * 60 + sm;
  return startMin < nowMinutes;
}

/* ── SLOT CONFLICT CHECK ──────────────────────── */
async function validateTimeSlot() {
  try {
    const res      = await fetch(API_URL);
    const bookings = await res.json();

    if (!Array.isArray(bookings)) return true; // can't validate — allow

    const bike     = document.getElementById("bikeType").value;
    const date     = document.getElementById("date").value;
    const start    = document.getElementById("start").value;
    const end      = document.getElementById("end").value;
    const startMin = timeToMinutes(start);
    const endMin   = timeToMinutes(end);

    for (const b of bookings) {
      if (b.status === "Cancelled" || b.status === "Rejected") continue;
      if (b.bike !== bike) continue;
      const bookingDate = new Date(b.date).toISOString().split("T")[0];
      if (bookingDate !== date) continue;
      const bStartStr = parseTime(b.start);
      const bEndStr   = parseTime(b.end);
      if (!bStartStr || !bEndStr) continue;
      const bStart = timeToMinutes(bStartStr);
      const bEnd   = timeToMinutes(bEndStr);
      if (startMin < bEnd && endMin > bStart) {
        alert("This bike is already booked for that time slot. Please choose a different time.");
        return false;
      }
    }
    return true;
  } catch (err) {
    console.warn("Slot check failed (allowing anyway):", err);
    return true;
  }
}

/* ── FORM SUBMIT ───────────────────────────────── */
document.getElementById("bookingForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const btn      = document.getElementById("submitBtn");
  const dateVal  = document.getElementById("date").value;
  const startVal = document.getElementById("start").value;
  const endVal   = document.getElementById("end").value;

  // Block past-time bookings (today only)
  if (isPastTime(dateVal, startVal)) {
    alert("You cannot book a time slot that has already passed. Please select a current or future start time.");
    return;
  }

  // End must be after start
  if (startVal && endVal && timeToMinutes(endVal) <= timeToMinutes(startVal)) {
    alert("End time must be after start time.");
    return;
  }

  // Validate required fields
  const nameVal    = document.getElementById("name").value.trim();
  const emailVal   = document.getElementById("email").value.trim();
  const phoneVal   = document.getElementById("phone").value.trim();
  const bikeVal    = document.getElementById("bikeType").value;
  const paymentVal = document.getElementById("payment").value;

  if (!nameVal || !emailVal || !phoneVal || !bikeVal || !dateVal || !startVal || !endVal || !paymentVal) {
    alert("Please fill in all required fields.");
    return;
  }

  btn.disabled    = true;
  btn.textContent = "Checking availability…";

  const valid = await validateTimeSlot();
  if (!valid) {
    btn.disabled    = false;
    btn.textContent = translations[currentLang]["form.submit"] || "Submit Booking";
    return;
  }

  btn.textContent = "Uploading files…";

  // Payment proof → base64
  let proofBase64 = "", proofName = "";
  const proofFile = document.getElementById("proof").files[0];
  if (proofFile) {
    try {
      proofBase64 = await fileToBase64(proofFile);
      proofName   = proofFile.name;
    } catch (err) {
      alert("Failed to read payment proof file. Please try again.");
      btn.disabled    = false;
      btn.textContent = translations[currentLang]["form.submit"] || "Submit Booking";
      return;
    }
  }

  // Driving licence → base64
  let licenceBase64 = "", licenceName = "";
  const licenceFile = document.getElementById("licence").files[0];
  if (licenceFile) {
    try {
      licenceBase64 = await fileToBase64(licenceFile);
      licenceName   = licenceFile.name;
    } catch (err) {
      alert("Failed to read driving licence file. Please try again.");
      btn.disabled    = false;
      btn.textContent = translations[currentLang]["form.submit"] || "Submit Booking";
      return;
    }
  }

  btn.textContent = "Submitting booking…";

  // Build payload — NO student field
  const data = {
    name:         nameVal,
    email:        emailVal,
    phone:        phoneVal,
    bike:         bikeVal,
    date:         dateVal,
    start:        startVal,
    end:          endVal,
    hours:        document.getElementById("hours").value || "",
    price:        document.getElementById("totalPrice").value || "",
    payment:      paymentVal,
    status:       "Pending",
    proofBase64,
    proofName,
    licenceBase64,
    licenceName,
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.error) throw new Error(json.error);

    alert(
      "Booking submitted successfully!\n\n" +
      "A confirmation email has been sent to " + data.email + ".\n" +
      "Please wait for admin approval."
    );
    document.getElementById("bookingForm").reset();
    document.getElementById("qrBox").style.display    = "none";
    document.getElementById("cardForm").style.display = "none";
    loadBikeAvailability();
  } catch (err) {
    alert("Failed to submit booking. Please check your connection and try again.\n\nError: " + err.message);
  }

  btn.disabled    = false;
  btn.textContent = translations[currentLang]["form.submit"] || "Submit Booking";
});

/* ── BIKE AVAILABILITY ─────────────────────────── */
async function loadBikeAvailability() {
  try {
    const res  = await fetch(API_URL);
    const data = await res.json();
    if (Array.isArray(data)) updateBikeAvailability(data);
  } catch (err) {
    console.error("Failed to load availability:", err);
  }
}

function updateBikeAvailability(bookings) {
  const today  = new Date().toISOString().split("T")[0];
  const now    = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll(".bike-card").forEach(card => {
    const bikeName = card.getAttribute("data-bike");

    const isActive = bookings.some(b => {
      if (b.status === "Cancelled" || b.status === "Rejected") return false;
      if (b.bike !== bikeName) return false;
      const bookingDate = new Date(b.date).toISOString().split("T")[0];
      if (bookingDate !== today) return false;
      const bStartStr = parseTime(b.start);
      const bEndStr   = parseTime(b.end);
      if (!bStartStr || !bEndStr) return false;
      const bStart = timeToMinutes(bStartStr);
      const bEnd   = timeToMinutes(bEndStr);
      return nowMin >= bStart && nowMin < bEnd;
    });

    card.classList.toggle("unavailable", isActive);
  });
}
