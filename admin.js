let pelajarList = [];

// CREATE + READ
document.getElementById("formPelajar").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;

    if(nama === "" || email === "") {
        alert("Isi semua maklumat!");
        return;
    }

    let pelajar = {
        id: Date.now(),
        nama: nama,
        email: email
    };

    pelajarList.push(pelajar);
    paparkan();
});

// READ
function paparkan() {
    let output = "";

    pelajarList.forEach(p => {
        output += `
            <div class="card">
                <h3>${p.nama}</h3>
                <p>${p.email}</p>

                <button onclick="padam(${p.id})">Padam</button>
            </div>
        `;
    });

    document.getElementById("senarai").innerHTML = output;
}

// DELETE
function padam(id) {
    pelajarList = pelajarList.filter(p => p.id !== id);
    paparkan();
}