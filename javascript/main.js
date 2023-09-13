let frm = document.getElementById('form');
let skalaPilih = [0,1,2,3,4,5,6,7,8];
let pilihan = `<option value=""> Pilihan Skala ---</option>`;
for(let p in skalaPilih){
    pilihan += `<option value="${skalaPilih[p]}">${skalaPilih[p]}</option>`;
}
frm.skala.innerHTML = pilihan;

class Gempa{
    constructor(lokasi, skala){
        this.lokasi = lokasi;
        this.skala = skala;
    }
}

function Dampak(){
    this.lokasi = frm.lokasi.value;
    this.skala = frm.skala.value;
    let dampak = 0;
    if(this.skala < 0 || this.skala <= 2)dampak = "Tidak Terasa";
    else if(this.skala <= 4)dampak = "Bangunan Retak - Retak";
    else if(this.skala <= 6)dampak = "Bangunan Roboh";
    else if(this.skala > 6)dampak = "Bangunan Roboh dan Berpotensi Tsunami";
    else dampak = " ";

    swal(`
    Lokasi Gempa : ${this.lokasi}
    Skala Gempa : ${this.skala}
    Dampak Gempa : ${dampak}
    `);
}