import "./global-config.js"
import baileys from "@adiwajshing/baileys";
const { proto, getContentType, downloadContentFromMessage } = baileys;
import fs from "fs";
import util from "util"; 
import { performance } from "perf_hooks";
import speed from "performance-now";
import os from "os";
import FileType from "file-type";
import { sizeFormatter } from "human-readable";
import { exec, spawn, execSync } from "child_process";
import nodemailer from "nodemailer";
import ms from "parse-ms";
import toMs from "ms";
// import ytdl from "ytdl-core";
import NetworkSpeedCheck from "network-speed";
const test = new NetworkSpeedCheck();
import stringSimilarity from "string-similarity";
import { Aki } from "aki-api";
import cron from "node-cron";
import Jimp from "jimp";
import { v4 } from "uuid";
import fetch from "node-fetch";
import gis from "g-i-s";
import moment from "moment-timezone";
//import knights from "knights-canvas";

import { createRequire } from 'module'
var require = createRequire(import.meta.url) // Bring in the ability to create the 'require' method

// Zippyshare
import { extract } from "zs-extract";
import { lookup } from "mime-types";

// Youtubedl @bochilteam/scraper
import { youtubedlv2 } from "@bochilteam/scraper";

// Speedtest python + exec
import cp from "child_process";
import { promisify } from "util";
const exec2 = promisify(cp.exec).bind(cp)

// Scraping website
import axios from "axios";
import cheerio from "cheerio";

import { ai2d } from "./lib/jadianime.js";
import { smsg, getBuffer, download, sleep, getRandom, parseMention, clockString, jsonformat } from "./lib/myfunc.js";
import { UploadFileUgu, webp2mp4File, TelegraPh } from "./lib/uploader.js";
import { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, addExif } from "./lib/exif.js";

// Function uang, limit dll
import atmnya from "./lib/atm.js";
import limitnya from "./lib/limit.js";
import premiumnya from "./lib/premium.js";
import energinya from "./lib/energi.js";
import levelnya from "./lib/level.js";
import itemnya from "./lib/item.js";
import toolsnya from "./lib/tools.js";
import boxnya from "./lib/item-box.js";
import petnya from "./lib/pet.js";

const { adduang, adduangUser, checkuangUser, confirmuang } = atmnya;
const { addlimit, addlimitUser, checklimitUser } = limitnya;
const { addHeal, addHealUser, checkHealuser, confirmHEAL, addPotion, addPotionUser, checkPotionuser, confirmPOTION } = energinya;
const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId } = levelnya;

// Bagian item
const { addIkan, addIkanUser, checkIkanUser, confirmIkan } = itemnya;
const { addKepiting, addKepitingUser, checkKepitingUser, confirmKepiting } = itemnya;
const { addUdang, addUdangUser, checkUdangUser, confirmUdang } = itemnya;
const { addKayu, addKayuUser, checkKayuUser, confirmKayu } = itemnya;
const { addBibit, addBibitUser, checkBibitUser, confirmBibit } = itemnya;
const { addSampah, addSampahUser, checkSampahUser, confirmSampah } = itemnya;
const { addBesi, addBesiUser, checkBesiUser, confirmBesi } = itemnya;
const { addEmas, addEmasUser, checkEmasUser, confirmEmas } = itemnya;
const { addBatu, addBatuUser, checkBatuUser, confirmBatu } = itemnya;
const { addTiketPet, addTiketPetUser, checkTiketPetUser, confirmTiketPet } = itemnya;

// Bagian pet
const { addPetK, addPetKUser, checkPetKUser, confirmPetK } = petnya;
const { addPetS, addPetSUser, checkPetSUser, confirmPetS } = petnya;
const { addPetA, addPetAUser, checkPetAUser, confirmPetA } = petnya;
const { addNyawaPet, addNyawaPetUser, checkNyawaPetUser, confirmNyawaPet } = petnya;

// Bagian box atau peti hadiah
const { addBoxS, addBoxSUser, checkBoxSUser, confirmBoxS } = boxnya;
const { addBoxE, addBoxEUser, checkBoxEUser, confirmBoxE } = boxnya;
const { addBoxL, addBoxLUser, checkBoxLUser, confirmBoxL } = boxnya;

// Bagian tools
const { addPedang, addPedangUser, checkPedangUser, confirmPedang } = toolsnya;
const { addBeliung, addBeliungUser, checkBeliungUser, confirmBeliung } = toolsnya;
const { addKapak, addKapakUser, checkKapakUser, confirmKapak } = toolsnya;
const { addPancing, addPancingUser, checkPancingUser, confirmPancing } = toolsnya;

// Database ribet
const register = JSON.parse(fs.readFileSync('./database/user/register.json'));
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
const limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
const fitur = JSON.parse(fs.readFileSync('./database/fitur.json'));
const animeingfo = JSON.parse(fs.readFileSync('./database/animeinfo.json'));
const jadwalsholat = JSON.parse(fs.readFileSync('./database/jadwalsholat.json'));

const setting = JSON.parse(fs.readFileSync('./setting.json'));
const { owner, bot, nomorOwner, namaOwner, namaBot, sabar, erorOwner } = setting;

const hargalimit = 20 // Harga 1 limit
const hargatools1 = 1 // Harga 1 pedang
const hargaikan = 50 // Harga 1 ikan
const hargakepiting = 65 // Harga 1 kepiting
const hargaudang = 85 // Harga 1 kepiting
const healperPotion = 10 // Berapa nyawa yang ditambahkan ketika menggunakan potion
const hargakayu = 55 // Harga 1 kayu
const hargabibit = 50 // Harga 1 bibit
const hargasampah = 15 // Harga 1 sampah
const hargabesi = 75 // Harga 1 besi
const hargaemas = 100 // Harga 1 emas
const hargabatu = 35 // Harga 1 batu
const hargapotion = 50 // Harga 1 potion

const hour_now = moment.tz('Asia/Jakarta').format('HH')
var ucapanWaktu = 'Selamat pagi'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = 'Selamat pagi'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = 'Selamat siang'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = 'Selamat sore'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = 'Selamat petang'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = 'Selamat malam'
} else {
ucapanWaktu = 'Selamat malam'
}

const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')

export default async (sock, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '';
        var budy = (typeof m.text == 'string' ? m.text : '');
        const prefix = /^[./~!#%^&=\,;:()]/.test(body) ? body.match(/^[./~!#%^&=\,;:()]/gi) : '#';
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1);
        const text = args.join(" ");
        const pushname = m.pushName || "Tidak ada nama";
        const from = m.chat;
        const botNumber = await sock.decodeJid(sock.user.id);
        const isGroup = m.key.remoteJid.endsWith('@g.us');
        // const isGroup = m.key.remoteJid.includes('120363098202856064@g.us');
        const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid;
        const isOwner = nomorOwner.includes(sender);
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const qmsg = (quoted.msg || quoted)
	    
	    const isRegister = register.includes(m.sender)
	    const isPremium = premiumnya.checkPremiumUser(sender, premium)
	    const tagwea = '0@s.whatsapp.net'
	    const fiturada = fitur.includes(command)
	    const akinator = global.db.database.akinator
	    
// Group
const getGroupAdmins = function(lala){
    let admins = []
	for (let i of lala) {
		i.admin !== null ? admins.push(i.id) : ''
	}
	return admins
}

        const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	    
	    /*const groupBot = await sock.groupMetadata("120363098202856064@g.us").catch(e => {})
	    const gcBot = await groupBot.participants
	    const isJoin = await gcBot.map(u => u.id).includes(m.sender)*/
	    
        const type = Object.keys(m.message)[0]
        const content = JSON.stringify(m.message)
        
        // APA COBA 😅
const isImage = (m.mtype === 'imageMessage')
const isVideo = (m.mtype === 'videoMessage')
const isSticker = (m.mtype == 'stickerMessage')
const isAudio = (m.mtype == 'audioMessage')
const isText = (m.mtype == 'conversation')
const isReaction = (m.mtype == 'reactionMessage')
// const isMedia = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isViewOnce = (m.mtype == 'viewOnceMessage')
const isAllMedia = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage' || m.mtype === 'stickerMessage' || m.mtype === 'audioMessage' || m.mtype === 'contactMessage' || m.mtype === 'locationMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = m.mtype === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = m.mtype === 'extendedTextMessage' && content.includes('viewOnceMessage')
	    
    // Database simple
    const isNumber = x => typeof x === 'number' && !isNaN(x)
    const pemakai = global.db.pengguna[m.sender]
    if (typeof pemakai !== 'object') global.db.pengguna[m.sender] = {}
    if (pemakai) {
      if (!('chatpertama' in pemakai)) pemakai.chatpertama = false
      if (!('registered' in pemakai)) pemakai.registered = false
      if (!('notifdaftar' in pemakai)) pemakai.notifdaftar = false
      if (!isNumber(pemakai.lastclaim)) pemakai.lastclaim = 0
      if (!('namapet' in pemakai)) pemakai.namapet = ''
    } else global.db.pengguna[m.sender] = {
      chatpertama: false,
      registered: false,
      notifdaftar: false,
      lastclaim: 0,
    }
    
    // Database pengaturan
    const setting = global.db.pengaturan[botNumber]
    if (typeof setting !== 'object') global.db.pengaturan[botNumber] = {}
    if (setting) {
      if (!('publik' in setting)) pengaturan.publik = true
      if (!('autoread' in setting)) pengaturan.autoread = false
      if (!('autoketik' in setting)) pengaturan.autoketik = false
      if (!('autorecord' in setting)) pengaturan.autorecord = false
      if (!('autoonline' in setting)) pengaturan.autoonline = false
      if (!('autooffline' in setting)) pengaturan.autooffline = false
    } else global.db.pengaturan[botNumber] = {
      publik: true,
      autoread: false,
      autoketik: false,
      autorecord: false,
      autoonline: false,
      autooffline: false,
    }
    
    // Database fitur simpan pesan
    const dbPesan = global.db.pesan
    const database = global.db.database
      if (database) {
      if (!('akinator' in database)) database.akinator = {}
    } else global.db.database = {
      akinator: {},
    }
    
    // Database chats
    const chats = global.db.pengguna[m.chat]
    if (typeof chats !== 'object') global.db.pengguna[m.chat] = {}
    if (chats) {
      // Database welcome
      if (!('setWelcome' in chats)) chats.setWelcome = ''
      if (!('setLeave' in chats)) chats.setLeave = ''
    } else global.db.pengguna[m.chat] = {

    }
    
const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
    
// Kode untuk mendaftar
const pw = [
"165310", 
"177978", 
"211759",  
"212643", 
"229540", 
"111074",
"211519", 
"256097", 
"163478", 
"915005", 
"792880", 
"260629", 
"128051", 
"239536",
"121310",
"202019",
"250029"]

// Acak pw
const kodedaftar = pw[Math.floor(Math.random() * pw.length)]
const deteksidaftar = /165310|177978|211759|212643|229540|111074|211519|256097|163478|915005|792880|260629|128051|239536|121310|202019|250029/.test(budy)

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const toFirstCase = (str) =>{
let first = str.split(" ") // Memenggal nama menggunakan spasi
.map(nama => 
nama.charAt(0).toUpperCase() + 
nama.slice(1)) // Ganti huruf besar kata-kata pertama
.join(" ");
return first
}

// Supaya ukuran gambar tidak terlalu besar
async function resize(buffer, ukur1, ukur2) {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

const acakgwarn = ["biru.jpg","pink.jpg"]
const gmbrWrn = acakgwarn[Math.floor(Math.random() * acakgwarn.length)]

// Function ini saya dapatkan dari Danta
async function genProfile(sock, m) {
   let font = await Jimp.loadFont('./name.fnt')
     let mask = await Jimp.read('https://i.imgur.com/552kzaW.png')
     let welcome = await Jimp.read("./asset/" + gmbrWrn) // Bisa pakai path bisa juga pakai url
     let avatar = await Jimp.read(await sock.profilePictureUrl(sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
     let status = (await sock.fetchStatus(sender).catch(console.log) || {}).status?.slice(0, 30) || 'Tidak terdeteksi'
     let nomor = sender.replace('@s.whatsapp.net', '')
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     await welcome.print(font, 600, 180, 'Nama:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 600, 340, 'Bio:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 600, 500, 'Nomor:') 
     await welcome.print(font, 650, 575, nomor) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}

// Function ini saya dapatkan dari Danta
async function ppWelkom(sock, m) {
   let font = await Jimp.loadFont('./name.fnt')
     let mask = await Jimp.read('https://i.imgur.com/552kzaW.png')
     let welcome = await Jimp.read("./asset/welkom/" + gmbrWrn) // Bisa pakai path bisa juga pakai url
     let avatar = await Jimp.read(await sock.profilePictureUrl(sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
     let status = (await sock.fetchStatus(sender).catch(console.log) || {}).status?.slice(0, 30) || 'Tidak terdeteksi'
     let nomor = sender.replace('@s.whatsapp.net', '')
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     await welcome.print(font, 500, 700, m.pushName.slice(0, 25)) 
     return await welcome.composite(avatar, 500, 230).getBufferAsync('image/png') 
}

const generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}

// Function kirim email menggunakan modul nodemailer
const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result
}
const sendMail = (untuk, teks) => {
var transporter1 = nodemailer.createTransport({
            service: 'gmail',
            auth: {
        user: "mikuchantik18@gmail.com", // generated ethereal user
        pass: "vdjquwuabmzkchil", // generated ethereal password
    },
    debug: false,
    logger: true  // <---highly recommend this one here
});
var mailOptions = {
    from: 'mikuchantik18@gmail.com',
    to: untuk,
    subject: makeid(5),
    text: teks
};
transporter1.sendMail(mailOptions, function(err, data) { 
    if(err) { 
         eror();
     } 
});
}

// Function hitung semua fitur
const totalFitur = () =>{
var mytext = fs.readFileSync("./kyaaa.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

/*
const sendFileFromUrl = async (from, url, caption, mek, men) => {
    let mime = '';
    let res = await axios.head(url);
    mime = res.headers['content-type'];
    if (mime.split("/")[1] === "gif") {
        return sock.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' }, { quoted: m });
    }
    let type = mime.split("/")[0] + "Message";
    if (mime === "application/pdf") {
        return sock.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : [] }, { quoted: m });
    }
    if (mime.split("/")[0] === "image") {
        return sock.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : [] }, { quoted: m });
    }
    if (mime.split("/")[0] === "video") {
        return sock.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4' }, { quoted: m });
    }
    if (mime.split("/")[0] === "audio") {
        return sock.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg' }, { quoted: m });
    }
};
*/

const sendFileFromUrl = async (anunya, url, caption, men) => {
    let mime = '';
    let res = await axios.head(url);
    mime = res.headers['content-type'];
    if (mime.split("/")[1] === "gif") {
        return sock.sendMessage(anunya, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' });
    }
    let type = mime.split("/")[0] + "Message";
    if (mime === "application/pdf") {
        return sock.sendMessage(anunya, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : [] });
    }
    if (mime.split("/")[0] === "image") {
        return sock.sendMessage(anunya, { image: await getBuffer(url), caption: caption, mentions: men ? men : [] });
    }
    if (mime.split("/")[0] === "video") {
        return sock.sendMessage(anunya, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4' });
    }
    if (mime.split("/")[0] === "audio") {
        return sock.sendMessage(anunya, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg' });
    }
};

/*
// DOWNLOAD YTMP4
const downloadMp4 = async (Link) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await sock.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!", gifPlayback: false}, {quoted: m})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
reply(`${err}`)
}
}

// DOWNLOAD YTMP3
const downloadMp3 = async (Link) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await sock.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mpeg' }, { quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}
*/

if (!command && !m.key.fromMe && !/webp/.test(mime) && /image/.test(mime)) {

                let media = await quoted.download()
                let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: namaBot, author: namaOwner })
                await fs.unlinkSync(encmedia)

}

if (!commad && !m.key.fromMe && !/webp/.test(mime) && /video/.test(mime)) {
//if (qmsg.seconds > 10) return reply('Minimal 10 Detik')

                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal video untuk dijadikan sticker adalah 10 detik!')
                let media = await quoted.download()
                let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: namaBot, author: namaOwner })
                await fs.unlinkSync(encmedia)

}

      const gambar = fs.readFileSync(`./tamnel.jpg`)
      const imgowner = fs.readFileSync(`./owner.jpg`)
      const teksucapan = `(￣▽￣)ゞ Hai @${sender.split("@")[0]}\n\nKenalin nih aku ${namaBot}\n\nUntuk melihat fitur apa yang aku punya\n*Ketik ${prefix}menu yah*\n\n\nBot ini sepenuhnya dijalankan oleh komputer atau sistem otomatis`
      const teksbutlist = `Klik disini kak`
      const wm = `A K U - F A R E L`
      const tkslist = `Silahkan klik list di bawah ini`
      const waifuku = ['Udah makan belum kak?', 'Udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹']
      const acakpengingat = waifuku[Math.floor(Math.random() * (waifuku.length))]
      const emotkucing = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"]
      const petkucing = emotkucing[Math.floor(Math.random() * (emotkucing.length))]
      
      const more = String.fromCharCode(8206)
      const readMore = more.repeat(4001)

        const pickRandom= (list) => {
        return list[Math.floor(Math.random() * list.length)]
        }

      const reply = (teks) => {
        sock.sendMessage(from, { text: teks }, { quoted: m });
      };
      function kosong(teks) {
        reply(`*Contoh:* ${prefix + command} ${teks}`);
      }
      function tunggu() {
      let sebentar = sabar[Math.floor(Math.random() * (sabar.length))]
        reply(sebentar)
      }
      function stiktutor1() { // Balas pesan stiker
        reply(`Balas pesan stiker dengan caption ${prefix + command}`)
      }
      function stiktutor2() { // Balas atau kirim foto atau video
        reply(`Balas atau kirim pesan foto atau video dengan caption ${prefix + command}`)
      }
      function tutorfoto() {
      reply(`Balas atau kirim pesan foto dengan caption ${prefix + command}`)
      }
      // Function daftar
      function sudahdaftar() {
        reply(`Kamu sudah terdaftar sebelumnya!`)
      }
      function belumdaftar() {
      if (!global.db.pengguna[m.sender].notifdaftar) {
        reply(`Hai ${pushname}, sepertinya kamu belum terdaftar di database bot.\nSilahkan ketik *${prefix}daftar emailmu* terlebih dahulu`)
const buttons = [
  {buttonId: `${prefix}daftarnowa`, buttonText: {displayText: 'Menggunakan nomor WA'}, type: 1},
  {buttonId: `${prefix}daftar`, buttonText: {displayText: 'Menggunakan email'}, type: 1},
  {buttonId: `${prefix}notifdaftar off`, buttonText: {displayText: 'Jangan tampilkan pesan ini lagi'}, type: 1}
]
const buttonMessage = {
    text: `Silahkan pilih metode pendaftaran di bawah ini`,
    footer: wm,
    buttons: buttons,
    headerType: 1
}

setTimeout(() => {
sock.sendMessage(from, buttonMessage)
}, 5000)
      }
      }
      function suksesdaftar() {
        reply(`Berhasil mendaftar dan mendapatkan:\n\n*Uang:* 1000\n*Limit:* 20`)
      }
      function limithabis() {
        reply(`OwO limit kamu sudah habis!\nSilahkan ketik ${prefix}claim untuk mendapatkan 20 limit harian`)
      }
      function harusangka() {
        reply(`Jumlah harus berupa angka!`)
      }
      function uangkurang() {
        reply(`Maaf, sepertinya uang kamu belum cukup`)
      }
      function itemkurang(text) {
        reply(`Maaf, sepertinya ${text} kamu belum cukup`)
      }
      function untukowner() {
        reply(`Fitur ini hanya bisa digunakan oleh owner saja`)
      }
      function untukadmin() {
        reply(`Fitur ini hanya bisa digunakan oleh admin grup saja`)
      }
      function untukgc() {
        reply(`Fitur ini hanya bisa digunakan di grup saja`)
      }
      function botbknadmin() {
        reply(`Jadikan bot menjadi admin terlebih dahulu sebelum menggunakan fitur ini`)
      }
      function untukpc() {
        reply(`Fitur ini hanya bisa digunakan di private chat saja`)
      }
      function untukprem() {
        reply(`Fitur ini hanya bisa digunakan oleh pengguna premium saja`)
      }
      function berhasil() {
        reply(`Yeeey, berhasil!!`)
      }
      function linkeror() {
        reply(`Maaf, sepertinya link yang kamu kirimkan eror!`)
      }
      function gadalink() {
        reply(`Linknya mana?!\n*Contoh:* ${prefix + command} link`)
      }
      function salahcoy() {
        reply(`Cara penggunaan fitur tersebut salah, silahkan cek kembali di menu bot`)
      }
      function emailmana() {
        reply(`Email kamu mana?\n*Contoh:* ${prefix + command} mikubot@gmail.com`)
      }
      function eror() {
        reply(`Error!`)
      }
      function hanyaemail() {
        reply(`Maaf email tersebut tidak didukung\nSilahkan hubungi owner untuk meminta kode verifikasi`)
      }
      function linksalah() {
        reply(`Link salah!\nCek kembali di menu bot`)
      }
      function simpanfitur(command) {
      if (!fiturada) {
        fitur.push(command)
        fs.writeFileSync('./database/fitur.json', JSON.stringify(fitur))
      }
      }
      
        // Agar pesan muncul di console log
        if (m.message) {
            // console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', budy || m.mtype, '\x1b[1;32mdari\x1b[1;37m', pushname, '\x1b[1;32mdi\x1b[1;37m', groupName ? groupName : 'private chat')
        }
      
        // Public dan self
        if (!global.db.pengaturan[botNumber].publik === true) {
            if (!m.key.fromMe) return
        }
        // auto read
        if (global.db.pengaturan[botNumber].autoread) {
            // sock.sendReadReceipt(m.chat, m.sender, [m.key.id])
            sock.readMessages([m.key])
        }
       // auto ketik 
        if (global.db.pengaturan[botNumber].autoketik) {
            sock.sendPresenceUpdate('composing', m.chat)
        }
        // auto vn
        if (global.db.pengaturan[botNumber].autorecord) {
            sock.sendPresenceUpdate('recording', m.chat)
        }
        // statsu online
        if (global.db.pengaturan[botNumber].autoonline) {
            sock.sendPresenceUpdate('available', m.chat)
        }
        // statsu offline
        if (global.db.pengaturan[botNumber].autooffline) {
            sock.sendPresenceUpdate('unavailable', m.chat)
        }

        switch (command) {
                        case 'toimage': case 'toimg': { // Membutuhkan ffmpeg
                if (!quoted) return stiktutor1()
                if (!/webp/.test(mime)) return stiktutor1()
                          tunggu()
await sleep(1000)
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply(`${err}`)
                    let buffer = fs.readFileSync(ran)
                    sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) return stiktutor1()
                if (!/webp/.test(mime)) return stiktutor1()
            tunggu()
await sleep(1000)
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await sock.sendMessage(m.chat, { video: { url: webpToMp4.result } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
                        case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!isMedia) return stiktutor2()
            if (!quoted) return stiktutor2()
                if (/image/.test(mime)) {
tunggu()
                  await sleep(1000)
                let media = await quoted.download()
                let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: namaBot, author: namaOwner })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
tunggu()
                  await sleep(1000)
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: namaBot, author: namaOwner })
                await fs.unlinkSync(encmedia)
            } else {
                stiktutor2()
                }
            }
            break
            case 'colong': case 'take': case 'swm': case 'takestick': case 'takestik':
            if (!quoted) return stiktutor2()
			if (!/webp/.test(mime)) return stiktutor2()
			let setinga = await quoted.download()
			sock.sendImageAsSticker(m.chat, setinga, m, { packname: text.split("|")[0] ? text.split("|")[0] : namaBot, author: text.split("|")[1] ? text.split("|")[1] : namaOwner })
			break
         default:
         /*
if (isCmd) {
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), fitur)
reply(`Fitur *${prefix + command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix + matches.bestMatch.target.toLowerCase()}*`)
}*/

} // Akhir switch (command)

        } catch (err) {
        console.log(util.format(err));
        sock.sendMessage(`${owner}@s.whatsapp.net`, { text: erorOwner + util.format(err) });
    }
}
