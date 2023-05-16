import axios from "axios";
import { tanggal } from "./myfunc.js";

export const welkom = async(sock, anu) => {
try {

let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants

for (let num of participants) {

try {
var ppuser = await sock.profilePictureUrl(num, 'image')
} catch {
var ppuser = 'https://telegra.ph/file/78757a3eb7a7da1a3cdb7.jpg'
}
let chat = global.db.chats[anu.id] || {}

if (anu.action == 'add') {
let teks = (chat.setWelcome || '*Selamat datang di grup @subject*\n─────────────────\n*Nama: @user*\n*Pada: @tanggal*\n\n*Jangan lupa baca rules/deskripsi grup*\n─────────────────\n@desc').replace(/@subject/g, metadata.subject).replace(/@user/g, `@${num.split('@')[0]}`).replace(/@tanggal/g, `${tanggal(new Date())}`).replace(/@desc/g, `${metadata.desc}`).replace(/undefined/g, `Tidak ada deskripsi grup`)
sock.sendMessage(anu.id, { image: { url: ppuser }, caption: teks, mentions : [num]})
} else if (anu.action == 'remove') {
let teks = (chat.setLeave || '*Sayonara* 👋\n─────────────────\n*Nama: @user*\n*Pada: @tanggal*\n\nTelah meninggalkan grup @subject').replace(/@subject/g, metadata.subject).replace(/@user/g, `@${num.split('@')[0]}`).replace(/@tanggal/g, `${tanggal(new Date())}`).replace(/@desc/g, `${metadata.desc}`)
sock.sendMessage(anu.id, { image: { url: ppuser }, caption: teks, mentions : [num]})
}

}

} catch (e) {
console.log(e)
}
}