function showSection(section) {
    document.getElementById("home").style.display = "none";
    document.getElementById("pelajar").style.display = "none";
    document.getElementById("daftar").style.display = "none";

    document.getElementById(section).style.display = "block";
}

// GET API
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    let pelajarLocal = JSON.parse(localStorage.getItem("pelajar")) || [];
    let allPelajar = data.concat(pelajarLocal.map(p => ({ name: p.nama, email: p.email })));
    let output = "";

    allPelajar.forEach(p => {
        output += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>${p.email}</p>
            </div>
        `;
    });

    document.getElementById("dataPelajar").innerHTML = output;
});

// FORM DAFTAR PELAJAR
document.getElementById("formDaftar").addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("namaDaftar").value;
    const email = document.getElementById("emailDaftar").value;
    if (nama && email) {
        // Simpan ke localStorage sebagai contoh
        let pelajar = JSON.parse(localStorage.getItem("pelajar")) || [];
        pelajar.push({ nama, email });
        localStorage.setItem("pelajar", JSON.stringify(pelajar));
        document.getElementById("message").innerHTML = "<p>Pelajar berjaya didaftar!</p>";
        document.getElementById("formDaftar").reset();
    } else {
        document.getElementById("message").innerHTML = "<p>Sila isi semua medan.</p>";
    }
});