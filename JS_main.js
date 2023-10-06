// PROGRAM IF...ELSE
let bilangan = prompt("Masukkan angka berapapun!");
if (bilangan % 2 == 0) {
    alert("Angka genap nih");
} else {
    alert("Angka ganjil nih");
}

// PROGRAM NESTED IF
let umur = prompt("Masukkan umur anda!");
if (umur > 17) {
    alert("Anda boleh menonton film ini");
} else if (umur >= 13 && umur <= 17) {
    alert("Minta orangtua anda untuk mendampingi saat menonton film ini");
} else {
    alert("Anda belum boleh menonton film ini");
}

// PROGRAM SWITCH CASE
alert('Program "Switch Case". Lihat console');
let kelompok1 = "B";
switch (kelompok1) {
    case "A":
        console.log("Kelompok A hari ini masuk shift pagi");
    break;

    case "B":
        console.log("Kelompok B hari ini masuk shift siang");
    break;

    case "C":
        console.log("Kelompok C hari ini masuk shift malam");
    break;

    default:
        console.log("Tidak ada kelompok tersebut di dalam list");
    break;
}

let kelompok2 = "F";
switch (kelompok2) {
    case "A":
        console.log("Kelompok A hari ini masuk shift pagi");
    break;

    case "B":
        console.log("Kelompok B hari ini masuk shift siang");
    break;

    case "C":
        console.log("Kelompok C hari ini masuk shift malam");
    break;

    default:
        console.log("Tidak ada kelompok tersebut di dalam list");
    break;
}

// PROGRAM FOR STATEMENT
document.write('PROGRAM "FOR STATEMENT"' + '<br>');
document.write('=== BIRTHDAY SONG ===' + '<br>');
let lirik = "Happy birthday to you~";
for (x = 1; x <= 2; x++) {
    document.write(lirik + "<br>");
}
document.write("Happy birthday to Diva~" + "<br>");
document.write("Happy birthday to you~");
document.write('PROGRAM "FOR STATEMENT"' + '<br>');
document.write('BIRTHDAY SONG');

document.write("<br><br><br>");

// PROGRAM WHILE STATEMENT
document.write('PROGRAM "WHILE STATEMENT"' + '<br>');
document.write('=== ANGKA GANJIL 1 SAMPAI 50 ===' + '<br>');
let i = 1;
while (i <= 50) {
    document.write(i + " ");
    i += 2;
}

document.write("<br><br>");

// PROGRAM DO...WHILE STATEMENT
document.write('PROGRAM "WHILE STATEMENT"' + '<br>');
document.write('=== ANGKA GENAP 1 SAMPAI 50 ===' + '<br>');
let v = 0;
do {
    v += 2;
    document.write(v + " ");
}
while (v <= 50);

document.write("<br><br><br>");

// PROGRAM FUNCTION
document.write('PROGRAM "FUNCTION"' + '<br>');
document.write('=== PROGRAM 1 ===' + '<br>');
function biodata(nama, program, kelas, sesi) {
    document.write("Nama: " + nama + "<br>");
    document.write("Program: " + program + "<br>");
    document.write("Kelas: " + kelas + "<br>");
    document.write("Sesi: " + sesi + "<br>");
}
biodata("Diva", "Web", "D", "Morning");
document.write("------------------- <br>");
biodata("Seseorang", "Web", "C", "Morning");

document.write("<br>");

document.write('PROGRAM "FUNCTION"' + '<br>');
document.write('=== PROGRAM 2 ===' + '<br>');
function rumus_persegi_panjang(p, l) {
    return (2*(p+l))
}
document.write("Keliling persegi panjang dengan panjang 5 cm dan lebar 8 cm adalah " + rumus_persegi_panjang(5, 8));