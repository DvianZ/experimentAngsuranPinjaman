console.log('javascript ready...')

//! responsive navigation bar 
function showMobileNav() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navibar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navibar";
    }
}

function submitForm() {
    var name = document.getElementById("name").value;
    var url = "https://script.google.com/macros/s/AKfycbw6uNSUGlvlxRij9TyMOOd-ZTCHdfJMOwSxfUud8o-QJwuS30wU3BwaLZn7F7SHlJe9aw/exec"; // Ganti dengan Web App URL kamu

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        installment: document.getElementById("installment").value
      }),
      mode: "no-cors"
    })
    .then(data => {
      document.getElementById("name").value = ""; // Reset input setelah submit
      document.getElementById("installment").value = "";
    })
    .catch(error => console.error("Error:", error));
}