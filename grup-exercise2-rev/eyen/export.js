//export menggunakan spread operator untuk array
let anggota =["nat","mia","hen","enji","cher"]
console.log(anggota) //ini untuk memunculkan anggota tanpa membuatnya spread
console.log(...anggota) //ini cara untuk spread anggota 
let anggota2 = [...anggota] //ini untuk menduplikasi anggota, dan menamainya anggota 2
anggota.push("sher") //ini untuk menambah 1 string kedalam anggota
console.log(`anggota2 = ${anggota2}`) //ini untuk memastikan bahwa saat string di push ke anggota, maka anggota2 tidak akan terpengaruh

export {anggota} //export anggota