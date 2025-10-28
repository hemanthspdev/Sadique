// Sign in / Sign up toggle
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

if (signupBtn) {
  signupBtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.add("active");
    signinBtn.classList.remove("active");
  };
}

if (signinBtn) {
  signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.remove("active");
    signinBtn.classList.add("active");
  };
}

// Fake auth using localStorage
if (document.getElementById("authForm")) {
  const form = document.getElementById("authForm");
  form.addEventListener("submit", (e) => e.preventDefault());
}

// Estimate fare
function calculateFare() {
  const distance = document.getElementById("distance").value;
  if (!distance || distance <= 0) {
    alert("Enter valid distance");
    return;
  }
  const rate = 20; // ₹20/km
  const fare = distance * rate;
  document.getElementById("fareOutput").innerText = "Estimated Fare: ₹" + fare;
  localStorage.setItem("fare", fare);
}

// Show fare in confirmation page
const fare = localStorage.getItem("fare");
if (fare && document.getElementById("confirmFare")) {
  document.getElementById("confirmFare").innerText = fare;
}
