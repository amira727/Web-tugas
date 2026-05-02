// kunjungan
let jumlahKunjungan = localStorage.getItem("kunjungan");

if (jumlahKunjungan === null) {
    jumlahKunjungan = 1;
} else {
    jumlahKunjungan = parseInt(jumlahKunjungan) + 1;
}

localStorage.setItem("kunjungan", jumlahKunjungan);

document.getElementById("kunjungan").textContent =
    "Anda sudah mengunjungi profil ini " + jumlahKunjungan + " kali";

// dark/light dan local
const tombolMode = document.getElementById("toggleMode");

const temaTersimpan = localStorage.getItem("tema");

if (temaTersimpan === "dark") {
    document.body.classList.add("dark");
    tombolMode.textContent = "☀️ Light Mode";
}

tombolMode.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
        tombolMode.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("tema", "light");
        tombolMode.textContent = "🌙 Dark Mode";
    }
});

// SHOW HIDE HOBI
const tombolHobi = document.getElementById("btnHobi");
const dataHobi = document.getElementById("dataHobi");

tombolHobi.addEventListener("click", function () {
    if (dataHobi.style.display === "none" || dataHobi.style.display === "") {
        dataHobi.style.display = "block";
        tombolHobi.textContent = "Sembunyikan Hobi";
    } else {
        dataHobi.style.display = "none";
        tombolHobi.textContent = "Lihat Hobi Saya";
    }
});

// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        document.getElementById("hasil").textContent = "Semua field harus diisi!";
        document.getElementById("hasil").style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        document.getElementById("hasil").textContent = "Email tidak valid!";
        document.getElementById("hasil").style.color = "red";
        return;
    }

    document.getElementById("hasil").textContent = "Pesan berhasil dikirim!";
    document.getElementById("hasil").style.color = "green";

    form.reset();
});