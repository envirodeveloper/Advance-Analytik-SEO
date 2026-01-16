// Initialize map and set view
var map = L.map('map').setView([20, -10], 2);

// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Custom icons for the markers
var customHeadquartersIcon = L.icon({
    iconUrl: '../images/contact images/mapmarkerhq.png',
    iconSize: [42, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

var customCountryIcon = L.icon({
    iconUrl: '../images/contact images/mapmarker.png',
    iconSize: [42, 42],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

// Countries and positions
var countries = [
    { name: "Malaysia", position: [4.2105, 101.9758] },
    { name: "Singapore", position: [1.3521, 103.8198] },
    { name: "Thailand", position: [15.87, 100.9925] },
    { name: "Indonesia", position: [-0.7893, 113.9213] },
    { name: "Chile", position: [-35.6751, -71.543] },
    { name: "UAE", position: [23.4241, 53.8478] },
    { name: "Oman", position: [21.4735, 55.9754] },
    { name: "Saudi Arabia", position: [23.8859, 45.0792] },
    { name: "Kuwait", position: [29.3759, 47.9774] },
    { name: "Qatar", position: [25.3548, 51.1839] },
    { name: "Bahrain", position: [25.9304, 50.6378] },
    // { name: "USA", position: [37.0902, -95.7129] },
    { name: "Mexico", position: [23.6345, -102.5528] },
    { name: "Canada", position: [56.1304, -106.3468] },
    { name: "France", position: [46.6034, 1.8883] },
    { name: "Italy", position: [41.8719, 12.5674] },
    { name: "Spain", position: [40.4637, -3.7492] },
    { name: "South Africa", position: [-30.5595, 22.9375] },
    { name: "Tanzania", position: [-6.369, 34.8888] },
    { name: "Rwanda", position: [-1.9403, 29.8739] },
    { name: "Turkey", position: [38.9637, 35.2433] },
    { name: "Iran", position: [32.4279, 53.688] },
    { name: "India", position: [20.5937, 78.9629] },
    { name: "Hungary  Headquarters", position: [47.1625, 19.5033], isHeadquarters: true,},
    { name: "USA", position: [40.314, -76.787],},
];

// Adding markers to map
countries.forEach(function (country) {
    var marker = L.marker(country.position, {
        icon: country.isHeadquarters ? customHeadquartersIcon : customCountryIcon
    }).addTo(map);

    marker.bindPopup("<b>" + country.name + "</b>");
});


// contact form 

// document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const submitBtn = form.querySelector("button");
//   const loading = document.getElementById("loadingOverlay");
//   const formMessage = document.getElementById("formMessage");

//   const formData = {
//     name: form.name.value,
//     email: form.email.value,
//     number: form.number.value,
//     enquiry: form.enquiry.value,
//   };

//   formMessage.innerText = "";

//   loading.style.display = "flex";
//   submitBtn.disabled = true;

//   try {
//     const response = await fetch("http://182.70.120.34:90/api/content/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       showSuccessPopup();  
//       form.reset();
//     } else {
//       formMessage.innerText = "❌ Error: " + (result.message || "Submission failed");
//     }

//   } catch (error) {
//     formMessage.innerText = "⚠️ Network is slow. Please wait or try again.";
//   } finally {
//     loading.style.display = "none";
//     submitBtn.disabled = false;
//   }
// });













document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector("button");
  const loading = document.getElementById("loadingOverlay");
  const formMessage = document.getElementById("formMessage");

  const formData = {
    name: form.name.value,
    email: form.email.value,
    number: form.number.value,
    enquiry: form.enquiry.value,
  };

  formMessage.innerText = "";

  loading.style.display = "flex";
  submitBtn.disabled = true;

  try {
    const response = await fetch("http://localhost:5000/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      showSuccessPopup();  
      form.reset();
    } else {
      formMessage.innerText = "❌ Error: " + (result.message || "Submission failed");
    }

  } catch (error) {
    formMessage.innerText = "⚠️ Network is slow. Please wait or try again.";
  } finally {
    loading.style.display = "none";
    submitBtn.disabled = false;
  }
});


function showSuccessPopup() {
  const popup = document.getElementById("successPopup");
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2500);
}
