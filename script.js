function pindah(halaman) {
    window.location.href = halaman;
}

function kirimKeWA() {
    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;

    if (!nama || !pesan) {
        alert("Nama dan pesan harus diisi ya 💙");
        return;
    }

    // 🔴 GANTI DENGAN NOMOR WHATSAPP KAMU
    const nomorWA = "6285959552751";

    const text = `Halo 💙\n\nDari: ${nama}\nPesan:\n${pesan}`;
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}
