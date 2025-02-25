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

//! Button function checking
function showNotification(params) {
	alert(params.toString())
	return
}

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz0YnQH-fl-RxVGnoSVlOU8fsbgXpQl8KJvafrVEahNnW4fekTOF5ohtQF6E-yIr0MV/exec";

console.log("Memanggil URL:", WEB_APP_URL);

    function loadNames() {
      fetch(WEB_APP_URL, {
        method: "GET",
        headers: {
            "Accept": "application/json"
          }
      })
        .then(response => {
          console.log("Status respons:", response.status);
          return response.json();
        })
        .then(names => {
          console.log("Nama yang diterima:", names); // Debugging
          let select = document.getElementById("nameSelect");
          select.innerHTML = "";

          if (names.length === 0) {
            let option = document.createElement("option");
            option.textContent = "Tidak ada nama tersedia";
            option.disabled = true;
            select.appendChild(option);
            return;
          }

          names.forEach(name => {
            let option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            select.appendChild(option);
          });
        })
        .catch(error => console.error("Gagal mengambil data:", error));
    }

    function submitData() {
      let name = document.getElementById("nameSelect").value;
      let value = document.getElementById("inputValue").value;

      if (!name || !value) {
        alert("Harap pilih nama dan masukkan angka.");
        return;
      }

      let data = JSON.stringify({ name, value });

      fetch(WEB_APP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
        mode: "no-cors"
      })
      .then(response => response.text())
      .then(result => {
        alert(result);
        document.getElementById("inputValue").value = "Berhasil Input Data";
      })
      .catch(error => console.error("Gagal mengirim data:", error));
    }

    window.onload = loadNames;