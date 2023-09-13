const ubahRupiah = (angka)=>{
    let ubah = angka.toString().split('').reverse().join('');
    rupiah = ubah.match(/\d{1,3}/g);
    rupiah = rupiah.join('.').split('').reverse().join('');
    return rupiah;
}
function transaksi() {
    let frm = document.getElementById("tokoForm");
    let nama = frm.nama.value;
    let produk = frm.produk.value;
    let jumlah = frm.jumlah.value;
    let hargaKotor = 0;
    let diskon = 0;
    let ppn = 0;
    let hargaBayar = 0;

    let hargaSatuan = 0;
    switch (produk) {
        case "TV":hargaSatuan = 2000000;break;
        case "AC":hargaSatuan = 3000000;break;
        case "Kulkas":hargaSatuan = 4000000;break;
        default:alert("Tidak Ada Produk");return;
    }

    hargaKotor = hargaSatuan * jumlah;
    diskon = 0;
    ppn = 0;

    if (produk === "Kulkas" && jumlah >= 3) {
        diskon = 0.3 * hargaKotor;
    } else if (produk === "AC" && jumlah >= 3) {
        diskon = 0.2 * hargaKotor;
    } else {
        diskon = 0.1 * hargaKotor;
    }

    ppn = 0.1 * (hargaKotor - diskon);
    hargaBayar = hargaKotor - diskon + ppn;
    swal(`
    Nama Pelangga = ${nama}
    Produk Yang Dibeli = ${produk}
    Harga Satuan = Rp. ${ubahRupiah(hargaSatuan)}
    Jumlah Item Yang Dibeli = ${jumlah}
    Harga Kotor = Rp. ${hargaKotor}
    Diskon = Rp. ${ubahRupiah(diskon)}
    PPN = Rp. ${ubahRupiah(ppn)}
    Harga Bayar = Rp. ${ubahRupiah(hargaBayar)}
    `);
}