import "./global-config.js"
import baileys from "@whiskeysockets/baileys";
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
import yts from "yt-search";
//import knights from "knights-canvas";
import { Configuration, OpenAIApi } from "openai";
import { createTraceMoeAPIWrapper, MediaSize, SearchError } from "trace-moe-api";

const traceMoeAPIWrapper = createTraceMoeAPIWrapper();
// const traceMoeAPIWrapper = createTraceMoeAPIWrapper({ apiKey });

import { createRequire } from 'module'
var require = createRequire(import.meta.url) // Bring in the ability to create the 'require' method
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
import { smsg, getBuffer, download, sleep, getRandom, parseMention, clockString, jsonformat, tanggal } from "./lib/myfunc.js";
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
const { owner, bot, nomorOwner, namaOwner, namaBot, sabar, erorOwner, keyopenai } = setting;

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
     // let status = (await sock.fetchStatus(sender).catch(console.log) || {}).status?.slice(0, 30) || 'Tidak terdeteksi'
     let nomor = sender.replace('@s.whatsapp.net', '')
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight())
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

// Mengurangi limit
const confirmlimit = (sender, amount) => {
    if (isPremium) { // Premium mah bebas :v
        return false;
    }
    reply(`Limit digunakan sebesar ${amount} limit`)
    let position = false;
    Object.keys(limit).forEach((i) => {
        if (limit[i].id == sender) {
            position = i;
        }
    });
    if (position !== false) {
        limit[position].limit -= amount;
        fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
    }
};

const point = Math.floor(Math.random() * 1) + 0

// Cek limit
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegister) {
const checklimit = checklimitUser(sender)
try {
if (checklimit === undefined) addlimit(sender)
addlimitUser(sender, point)
} catch (err) {
console.error(err)
}
}
      
// Cek uang
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegister) {
const checkuang = checkuangUser(sender)
try {
if (checkuang === undefined) adduang(sender)
adduangUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek ikan
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkIkan = checkIkanUser(sender)
try {
if (checkIkan === undefined) addIkan(sender)
addIkanUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek Kepiting
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkKepiting = checkKepitingUser(sender)
try {
if (checkKepiting === undefined) addKepiting(sender)
addKepitingUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek udang
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkUdang = checkUdangUser(sender)
try {
if (checkUdang === undefined) addUdang(sender)
addUdangUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek ikan
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkKayu = checkKayuUser(sender)
try {
if (checkKayu === undefined) addKayu(sender)
addKayuUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek Bibit
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkBibit = checkBibitUser(sender)
try {
if (checkBibit === undefined) addBibit(sender)
addBibitUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek sampah
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkSampah = checkSampahUser(sender)
try {
if (checkSampah === undefined) addSampah(sender)
addSampahUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek besi
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkBesi = checkBesiUser(sender)
try {
if (checkBesi === undefined) addBesi(sender)
addBesiUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek emas
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkEmas = checkEmasUser(sender)
try {
if (checkEmas === undefined) addEmas(sender)
addEmasUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek batu
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkBatu = checkBatuUser(sender)
try {
if (checkBatu === undefined) addBatu(sender)
addBatuUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek tiket pet
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkTiketPet = checkTiketPetUser(sender)
try {
if (checkTiketPet === undefined) addTiketPet(sender)
addTiketPetUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek pedang
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkPedang = checkPedangUser(sender)
try {
if (checkPedang === undefined) addPedang(sender)
addPedangUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek beliung
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkBeliung = checkBeliungUser(sender)
try {
if (checkBeliung === undefined) addBeliung(sender)
addBeliungUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek kapak
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkKapak = checkKapakUser(sender)
try {
if (checkKapak === undefined) addKapak(sender)
addKapakUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek pancing
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkPancing = checkPancingUser(sender)
try {
if (checkPancing === undefined) addPancing(sender)
addPancingUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek potion
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkPotion = checkPotionuser(sender)
try {
if (checkPotion === undefined) addPotion(sender)
addPotionUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek box-sedang
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkBoxS = checkBoxSUser(sender)
try {
if (checkBoxS === undefined) addBoxS(sender)
addBoxSUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek box-elit
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkBoxE = checkBoxEUser(sender)
try {
if (checkBoxE === undefined) addBoxE(sender)
addBoxEUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek box-langka
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkBoxL = checkBoxLUser(sender)
try {
if (checkBoxL === undefined) addBoxL(sender)
addBoxLUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek pet-kucing
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkPetK = checkPetKUser(sender)
try {
if (checkPetK === undefined) addPetK(sender)
addPetKUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek pet-serigala
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkPetS = checkPetSUser(sender)
try {
if (checkPetS === undefined) addPetS(sender)
addPetSUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek pet-anjing
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkPetA = checkPetAUser(sender)
try {
if (checkPetA === undefined) addPetA(sender)
addPetAUser(sender, point)
} catch (err) {
console.error(err)
}
}

// Cek nyawa-pet
if (global.db.pengguna[m.sender].registered === true) {
// if (isRegistered) {
const checkNyawaPet = checkNyawaPetUser(sender)
try {
if (checkNyawaPet === undefined) addNyawaPet(sender)
addNyawaPetUser(sender, point)
} catch (err) {
console.error(err)
}
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
        // reply(`Hai ${pushname}, sepertinya kamu belum terdaftar di database bot.\nSilahkan ketik *${prefix}daftar emailmu* terlebih dahulu`)
        let blumdaftar = `Hai ${pushname}, sepertinya kamu belum terdaftar di database bot.\n\n*Silahkan ketik:*\n- ${prefix}daftar emailmu terlebih dahulu\n(Menggunakan email)\n\n- ${prefix}daftardaftarnowa\n(Pakai no whatsapp)\n\n*Catatan:*\nKetik ${prefix}notifdaftar off\n(Untuk menonaktifkan pesan peringatan belum daftar)`
        sock.sendMessage(m.sender, { text: blumdaftar }, { quoted: m });
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

async function tebakanime() {
    let limit = Math.floor(Math.random() * (500 - 1 + 1) + 1)
    let html = await (await axios.get('https://myanimelist.net/character.php?limit=' + limit)).data
    let $ = cheerio.load(html)
    let collect = { r: [], anime: [] }
    $('table > tbody > tr > td').each(function (i, e) {
        let txt = $(e).find('a').text().trim()
        let url = $(e).find('img').attr('data-srcset') ? $(e).find('img').attr('data-srcset') : $(e).find('a').attr('href')
        let low = url ? url.replace('https://', '').split('/')[1] : ''
        collect[low]?.push({ text: txt.replace(',', ''), url })
    })
    let rand = Math.floor(Math.random() * collect.r.length)
    let r = collect.r[rand]
    let anime = collect.anime[rand]
    return { 
     status: true, 
     name: r.text, 
     anime: anime.text != null ? anime.text : '', 
     img: r.url.split(',')[1].trim().split(' ')[0]
    }
}

// By FarelAE
function igstalk1(nama) {
const url = `https://www.inststalk.com/search?user=${nama}`
return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('.info').each(function(a, p) {
hasil.push({
nama: $(p).find('.user-name').text().trim()
})
})
resolve(hasil)
}).catch(reject)
})
}

// By FarelAE
function igstalk2(nama) {
const url = `https://www.inststalk.com/user/${nama}/`
return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('.user-information').each(function(a, p) {
hasil.push({
gambar: $(p).find('figure > img').attr('src'),
nama1: $(p).find('.title > h1').text().trim(),
nama2: $(p).find('.title > h2').text().trim(),
deskripsi: $(p).find('.description > p').text().trim()
})
})
resolve(hasil)
}).catch(reject)
})
}

// By FarelAE
function igstalk3(nama) {
const url = `https://www.inststalk.com/user/${nama}/`
return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('.number-box').each(function(a, p) {
hasil.push({
nomor: $(p).find('.count').text().trim(),
teks: $(p).find('.name').text().trim()
})
})
resolve(hasil)
}).catch(reject)
})
}

// By FarelAE
function igstalk4(nama) {
const url = `https://www.inststalk.com/user/${nama}/`
return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('.general-card').each(function(a, p) {
hasil.push({
gambar: $(p).find('img').attr('data-src'),
deskripsi: $(p).find('.description').text().trim()
})
})
resolve(hasil)
}).catch(reject)
})
}

// By FarelAE
function animenews() {
const url = 'https://www.inststalk.com/user/otaku_anime_indonesia/'
return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('.general-card').each(function(a, p) {
hasil.push({
gambar: $(p).find('img').attr('data-src'),
deskripsi: $(p).find('.description').text().trim()
})
})
resolve(hasil)
}).catch(reject)
})
}

// By FarelAE
function otakudesubaru() { // By FarelAE
const url = 'https://otakudesu.lol/ongoing-anime/'
return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('.thumb').each(function(a, p) {
hasil.push({
gambar: $(p).find('img').attr('src'),
judul: $(p).find('.thumbz > h2').text().trim(),
link: $(p).find('a').attr('href')
})
})
resolve(hasil)
}).catch(reject)
})
}

function otakudesucari(text) { // By FarelAE
const url = `https://otakudesu.lol/?s=${text}&post_type=anime`
return new Promise((resolve, reject) => {
axios.get(url)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('#venkonten > div > div.venser > div > div > ul > li').each(function(a, p) {
hasil.push({
gambar: $(p).find('img').attr('src'),
judul: $(p).find('h2 > a').text().trim(),
link: $(p).find('h2 > a').attr('href')
})
})
resolve(hasil)
}).catch(reject)
})
}
	
function otakudesueps(link) { // By @ihsanafajar
return new Promise((resolve, reject) => {
axios.get(link)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = []
$('#venkonten > div.venser > div:nth-child(8) > ul > li').each(function(a, p) {
hasil.push({
judul: $(p).find('span:nth-child(1) > a').text(),
link: $(p).find('span:nth-child(1) > a').attr('href')
})
})
resolve(hasil)
}).catch(reject)
})
}

function otakudeslinkudown(link) { // By @ihsanafajar
return new Promise((resolve, reject) => {
axios.get(link)
.then(({ data }) => {
const $ = cheerio.load(data)
const hasil = {}
hasil.title = $('#venkonten > div.venser > div.venutama > div.download > h4').text()
hasil.download = {}
$('#venkonten > div.venser > div.venutama > div.download > ul > li').each(function(a, b){
let quality = $(b).find('strong').text().split(' ').find(s => s.endsWith('p'))
hasil.download['q_' + quality] = {}
$(b).find('a').each(function(){
hasil.download['q_' + quality].name ? hasil.download['q_' + quality] : hasil.download['q_' + quality].name = quality
hasil.download['q_' + quality][$(this).text().toLowerCase().trim()] = $(this).attr('href')
})
})
resolve(hasil)
}).catch(reject)
})
}

async function pinterest(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "Terjadi kesalahan" }
	  gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'chibot',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}

async function zerochan(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "Terjadi kesalahan" }
	  gis({ searchTerm: query + ' site:zerochan.net', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'Chibot & FarelAE',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

const teksakinator = `
Ketik nomor berikut untuk menjawab!

1.) Iya
2.) Tidak
3.) Tidak tahu
4.) Mungkin
5.) Mungkin tidak
6.) Kembali

Untuk membatalkan sesi akinator ini, ketik ${prefix}batalakinator`
// By FarelAE
      
    if (global.db.pengguna[m.sender].registered === true && from in akinator && !isCmd && !isNaN(budy)) { // By zidni
            try {
                let ans = Math.floor(Number(budy))
                if (ans > 0 && ans < 7) {
                    if (ans == 6){
                        if (akinator[from].currentStep == 0) return reply(`Kamu belum menjawab pertanyaan apapun`)
                        await akinator[from].back()
                    } else await akinator[from].step(ans - 1)
    
                    if (akinator[from].progress >= 83 || akinator[from].currentStep >= 78){
                        await akinator[from].win()
                        sock.sendMessage(from, { image: { url: akinator[from].answers[0].absolute_picture_path }, caption: `Menurut saya itu adalah *${akinator[from].answers[0].name}* dari *${akinator[from].answers[0].description}*\n` }, { quoted: m })
                        delete akinator[from]
                        return
                    }
                    let teks = `${akinator[from].question}\n\nPertanyaan ke: ${akinator[from].currentStep}\nProgress: ${akinator[from].progress.toFixed(2)}%\n\n${teksakinator}`
                    reply(teks)
                     }
            } catch (err) { 
            delete akinator[from]
            reply('Terjadi error, sesi game akinator telah dibatalkan')
            console.log(err)
            }
        }
        
// List menu coy
const listmenu = [
    {
	title: "MENU UMUM",
	rows: [
	    {title: "Umum", rowId: `CMD 1`, description: "Fitur mengenai informasi bot"},
	    {title: "Pengaturan", rowId: `CMD 2`, description: "Mengaktifkan atau menonaktifkan fitur atau sistem yang tersedia"},
	]
    },
    {
	title: "MENU PEMBUAT",
	rows: [
	    {title: "Sticker", rowId: `CMD 3`, description: "Membuat stiker dan mengubah stiker menjadi foto ataupun video"},
	]
    },
    {
	title: "MENU ANIME",
	rows: [
	    {title: "Anime", rowId: `CMD 4`, description: "Beberapa fitur seperti download, cek anime terbaru, dan mencari anime dari website otakudesu"},
	]
    },
    {
	title: "MENU PENCARIAN",
	rows: [
	    {title: "Foto", rowId: `CMD 5`, description: "Mencari gambar di website berdasarkan kata kunci"},
	]
    },
    {
	title: "MENU BERSENANG SENANG",
	rows: [
	    {title: "Game", rowId: `CMD 6`, description: "Kamu juga dapat bermain game loh, mau tau apa saja gamenya? gasss cek fiturnya!!!"},
	]
    },
    {
	title: "MENU DOWNLOAD",
	rows: [
	    {title: "Downloader", rowId: `CMD 7`, description: "Beberapa fitur seperti download video atau audio dari youtube dan lain lain"},
	]
    },
    {
	title: "MENU INFORMASI",
	rows: [
	    {title: "Informasi", rowId: `CMD 8`, description: "Beberapa fitur untuk mengetahui informasi dari berbagai website ataupun aplikasi lainnya"},
	]
    },
]

  const listmsgmenu = {
  text: `Silahkan klik menu, di bawah chat ini`,
  footer: ``,
  title: ``,
  buttonText: `Menu`,
  sections: listmenu
}

let nomor = 0
const txtumum = `
[ 📝 ] *MENU UMUM* [ 📝 ]

${nomor+=1}. ${prefix}fitur
Info: cek jumlah fitur yang tersedia
Cara: ketik ${prefix}fitur
`

const textsetting = `
[ ⚙️ ] *MENU PENGATURAN* [ ⚙️ ]

${nomor+=1}. ${prefix}notifsholat
Info: mengaktifkan atau menonaktifkan fitur untuk mengingatkan ketika datang waktu sholat
Cara:
- ketik ${prefix}notifsholat [private/grup] untuk mengaktifkan 
- untuk menonaktifkan, ketik ulang ${prefix}notifsholat [private/grup]

${nomor+=1}. ${prefix}infoanim
Info: mengaktifkan atau menonaktifkan fitur untuk memberikan informasi atau berita berita anime terbaru
Cara:
- ketik ${prefix}infoanim [private/grup] untuk mengaktifkan 
- untuk menonaktifkan, ketik ulang ${prefix}infoanim [private/grup]
`

const txtbuat = `
[ 🎨 ]️ *MENU PEMBUAT* [ 🎨 ]

${nomor+=1}. ${prefix}sticker
Info: membuat stiker dari foto yang dikirimkan
Cara: kirim/balas pesan foto/video dengan caption ${prefix}sticker

${nomor+=1}. ${prefix}toimg
Info: mengubah stiker menjadi foto
Cara: balas pesan sticker dengan caption ${prefix}toimg

${nomor+=1}. ${prefix}tomp4
Info: mengubah stiker bergerak menjadi foto
Cara: balas pesan sticker bergerak dengan caption ${prefix}tomp4

${nomor+=1}. ${prefix}qc
Info: membuat sticker dengan gaya pesan
Cara:
- ketik ${prefix}qc teks --putih/hitam
- balas pesan sticker atau image dengan caption ${prefix}qc teks --putih/hitam
`

const txtanim = `
[ 🇯🇵️ ] *MENU ANIME* [ 🇯🇵 ]

${nomor+=1}. Otakudesu
Info: download, cek anime terbaru, dan mencari anime dari website otakudesu
CMD:
- ${prefix}anime
(mengecek anime terbaru atau sedang rilis di website otakudesu)

- ${prefix}anime judul anime
(mencari anime di website otakudesu berdasarkan judul)

${nomor+=1}. ${prefix}quotesanime
Info: mengirimkan random quotes anime
Cara: ketik ${prefix}quotesanime

${nomor+=1}. ${prefix}jadianime
Info: mengubah foto menjadi anime style
Cara: kirim/balas pesan foto dengan caption ${prefix}jadianime atau ketik ${prefix}jadianime2 jika command yang pertama eror
`

const txtcari = `
[ 🔍 ] *MENU PENCARIAN* [ 🔍 ]

${nomor+=1}. ${prefix}pinterest
Info: mencari gambar dari website pinterest
Cara:
- ketik ${prefix}pinterest kata kunci
- ketik ${prefix}pinterest kata kunci --jumlah

${nomor+=1}. ${prefix}yts
Info: mencari video youtube beserta informasi dan linknya
Cara: ketik ${prefix}yts nama video yutube
`

const txtgame = `
[ 🎮 ] *MENU GAME* [ 🎮 ]

${nomor+=1}. ${prefix}akinator
Info: akinator bisa membaca pikiran anda dan menebak karakter yang anda pikirkan!
Cara: ketik ${prefix}akinator
`

const txtdown = `
[ 📥 ] *MENU DOWNLOADER* [ 📥 ]

${nomor+=1}. ${prefix}ytmp3
Info: download audio dari video youtube melalui link
Cara: ketik ${prefix}ytmp3 link video youtube

${nomor+=1}. ${prefix}ytmp4
Info: download video youtube melalui link
Cara: ketik ${prefix}ytmp4 link video youtube

${nomor+=1}. ${prefix}gitclone
Info: download repository dari link github
Cara: ketik ${prefix}gitclone link repository github
`

const txtinfo = `
[ ℹ️ ] *MENU INFORMASI* [ ℹ️ ]

${nomor+=1}. ${prefix}animeinfo
Info: memberikan informasi per-anime-an dari akun instagram @otaku_anime_indonesia
Cara: ketik ${prefix}animeinfo
`

const txtrpg = `
[ 🗡 ] *MENU ADVENTURE* [ 🗡 ]

${nomor+=1}. ${prefix}adventure
Info: menjelajah dan kalahkan monsternya!!
Cara: ketik ${prefix}adventure

${nomor+=1}. ${prefix}mancing
Info: memancing dan menangkap hewan yang ada di air
Cara: ketik ${prefix}mancing

${nomor+=1}. ${prefix}nebang
Info: kamu dapat menebang pohon agar mendapatkan kayu untuk dijual
Cara: ketik ${prefix}nebang

${nomor+=1}. ${prefix}nambang
Info: untuk mencari emas, besi atau semacamnya
Cara: ketik ${prefix}nambang

${nomor+=1}. ${prefix}lawan
Info: bertarung dengan bos
Cara: ketik ${prefix}lawan nama bos

${nomor+=1}. ${prefix}inventory
Info: untul mengecek item yang sudah kamu dapatkan
Cara: ketik ${prefix}inventory

${nomor+=1}. ${prefix}use
Info: untuk menggunakan item, seperti potion
Cara: ketik ${prefix}use <nama item> <jumlah>
Catatan: tanda < > tidak usah diikuti karena cuma sebagai pembatas saja

${nomor+=1}. ${prefix}beli
Info: beli sesuatu di toko adventure bot
Cara: ketik ${prefix}beli <nama item> <jumlah item>
Catatan: khusus untuk pembelian tools seperti pedang atau sacamnya, tidak usah diikuti dengan jumlah item yang akan di beli

${nomor+=1}. ${prefix}jual
Info: untuk menjual item yang sudah kamu dapatkan
Cara: ketik ${prefix}jual <nama item> <jumlah item>

${nomor+=1}. ${prefix}buka
Info: untuk membuka box yang telah kamu dapatkan
Cara: ketik ${prefix}buka <nama box>

${nomor+=1}. ${prefix}peliharaan
Info: untuk mengecek peliharaan yang kamu punya, peliharaan dapat kamu dapatkan dengan membuka box
Cara: ketik ${prefix}peliharaan

${nomor+=1}. ${prefix}profile
Info: untuk mengecek progres kamu
Cara: ketik ${prefix}profile

${nomor+=1}. ${prefix}leaderboard
Info: untuk mengecek peringkat 10 besar para pengguna bot
Cara: ketik ${prefix}leaderboard
`

const teksmenuall = `${txtumum}\n${textsetting}\n${txtbuat}\n${txtanim}\n${txtcari}\n${txtgame}\n${txtdown}\n${txtinfo}\n${txtrpg}`

/*
const teksmenuall = `
Hai kak ${pushname}, ini adalah list menu yang tersedia di ${namaBot}

[1]. Menu umum
[2]. Menu pengaturan
[3]. Menu pembuat
[4]. Menu anime
[5]. Menu pencarian
[6]. Menu game
[7]. Menu downloader
[8]. Menu informasi
[9]. Menu adventure

Cara penggunaan [ ! ]
ketik: CMD *nomor* yang tersedia di list menu

Contoh penggunaan [ ! ]
Ketik: CMD 1
`
*/

if (body.includes('CMD 1')) {
sock.sendMessage(from, { text: txtumum })
}

if (body.includes('CMD 2')) {
sock.sendMessage(from, { text: textsetting })
}

if (body.includes('CMD 3')) {
sock.sendMessage(from, { text: txtbuat })
}

if (body.includes('CMD 4')) {
sock.sendMessage(from, { text: txtanim })
}

if (body.includes('CMD 5')) {
sock.sendMessage(from, { text: txtcari })
}

if (body.includes('CMD 6')) {
sock.sendMessage(from, { text: txtgame })
}

if (body.includes('CMD 7')) {
sock.sendMessage(from, { text: txtdown })
}

if (body.includes('CMD 8')) {
sock.sendMessage(from, { text: txtinfo })
}

if (body.includes('CMD 9')) {
sock.sendMessage(from, { text: txtrpg })
}

// Pesan terkirim apabila belum mendaftar
// if (isCmd && !isRegister) return belumdaftar()
if (isCmd && global.db.pengguna[m.sender].registered === false && !budy.match(`daftar`) && !body.match(`daftarnowa`) && !body.match(`konfirdaftar`) && !body.match(`notifdaftar`)) return belumdaftar()

cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.pengguna)
for (let jid of user) global.db.pengguna[jid].chatpertama = false
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

const jampet = ['06 00', '12 00', '18 00', '00 00']
for (let nganu of jampet) {
cron.schedule(nganu+' * * *', () => {
let userpet = Object.keys(global.db.pengguna)
for (let jid of userpet)
if (checkNyawaPetUser(jid) >= 100) {
confirmNyawaPet(jid, 50)
sock.sendMessage(jid, { text: `Pet kamu sepertinya ingin makan, beri pet kamu makan supaya pet kamu tidak kelaparan`})
}
if (checkNyawaPetUser(jid) <= 0) {
sock.sendMessage(jid, { text: `Jangan lupa beri makan pet milikmu`})
}
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
}

async function frifayer() {
let updateinfo = await animenews()
let infoanime = updateinfo[Math.floor(Math.random() * updateinfo.length)]
let teks = `*ANIME INFO*\n\n${infoanime.deskripsi}\n`
    for (let waw of animeingfo) {
    await sleep(5000)
    await sendFileFromUrl(waw, infoanime.gambar, teks)
    }
    }
const jamanimingfo = ['00 07', '00 09', '00 11', '00 13', '00 15', '00 17', '00 19', '00 21']
for (let yow of jamanimingfo) {
cron.schedule(yow+' * * *', () => {
sleep(5000)
frifayer()
  }, {
    scheduled: true,
    timezone: "Asia/Jakarta"
  });
}

const jamwaifu = ['00 07', '00 08', '00 10', '00 12', '00 14', '00 16', '00 18', '00 20', '00 22']
for (let yow of jamwaifu) {
cron.schedule(yow+' * * *', () => {
let siapa = Object.keys(global.db.pengguna)
for (x of siapa) {
sleep(5000)
sock.sendMessage(x, { text: acakpengingat })
  }
  }, {
    scheduled: true,
    timezone: "Asia/Jakarta"
  });
}

cron.schedule('40 04 * * *', () => {
    for (x of jadwalsholat) {
        sock.sendMessage(x, { text: `*JAM MASUK SHOLAT SUBUH*\n\nMemasuki waktu sholat SUBUH daerah kota Jakarta dan sekitarnya pukul: ${timeWib}\n\n\n${wm}`})
    }
  }, {
    scheduled: true,
    timezone: "Asia/Jakarta"
  });

const jamsholat = ['02 12', '09 15', '06 18', '16 19']
for (let i of jamsholat) {
cron.schedule(i+' * * *', () => {
    const namaS = i == '02 12' ? 'ZUHUR' : i == '09 15' ? 'ASAR' : i == '06 18' ? 'MAGRIB' : i == '16 19' ? 'ISYA' : 'UKNOWN'  
    for (x of jadwalsholat) {
        sleep(5000)
        sock.sendMessage(x, { text: `*JAM MASUK SHOLAT ${namaS}*\n\nMemasuki waktu sholat ${namaS} daerah kota Jakarta dan kekitarnya pukul: ${timeWib}\n\n\n${wm}`})
    }
  }, {
    scheduled: true,
    timezone: "Asia/Jakarta"
  });
}

// Pesan terkirim apabila baru pertama kali memakai bot
if (m.message && pemakai && pemakai.chatpertama === false && !body.match('menu') && !body.match('help') && !body.match('notifdaftar')) {
/*
  let updateinfo = await animenews()
  let infoanime = updateinfo[Math.floor(Math.random() * updateinfo.length)]
  let newanime = await otakudesubaru()
*/
  if (global.db.pengguna[m.sender].registered === true) { // Kalau pengguna sudah mendaftar
  await sleep(5000)
  let tes = await sock.sendMessage(sender, { image: gambar, caption: teksucapan, mentions: parseMention(teksucapan) })
  await sock.sendMessage(sender, listmsgmenu, { quoted: tes })
  }
/*
  await sleep(5000)
  if (global.db.pengguna[m.sender].registered === true) { // Kalau pengguna sudah mendaftar
  let nomor = 0
  let teks = `*ANIME INFO*\n\n${infoanime.deskripsi}\n${readMore}\n*ANIME TERBARU*\n\n`
        for (let pe of newanime) {
        teks += `${nomor+=1}. ${pe.judul}\n`
        }
        sock.sendMessage(from, { image: { url: infoanime.gambar }, caption: teks })
  }
*/
  pemakai.chatpertama = true
}

/*sock.ev.on('group-participants.update', async (anu) => {

let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants

for (let num of participants) {

try {
var ppuser = await sock.profilePictureUrl(num, 'image')
} catch {
var ppuser = 'https://telegra.ph/file/78757a3eb7a7da1a3cdb7.jpg'
}

// Function ini saya dapatkan dari Danta
async function ppWelkom(sock, m) {
   let font = await Jimp.loadFont('./name.fnt')
     let mask = await Jimp.read('https://i.imgur.com/552kzaW.png')
     let welcome = await Jimp.read("./asset/welkom/" + gmbrWrn) // Bisa pakai path bisa juga pakai url
     let avatar = await Jimp.read(ppuser)
     // let status = (await sock.fetchStatus(sender).catch(console.log) || {}).status?.slice(0, 30) || 'Tidak terdeteksi'
     let nomor = sender.replace('@s.whatsapp.net', '')
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     return await welcome.composite(avatar, 500, 230).getBufferAsync('image/png') 
}

let fotoProfil = await ppWelkom(sock, m)
let chat = global.db.chats[anu.id] || {}

if (anu.action == 'add') {
console.log('welkom')
let teks = (chat.setWelcome || '*Selamat datang di grup @subject*\n─────────────────\n*Nama: @user*\n*Pada: @tanggal*\n\n*Jangan lupa baca rules/deskripsi grup*\n─────────────────\n@desc').replace(/@subject/g, metadata.subject).replace(/@user/g, `@${num.split('@')[0]}`).replace(/@tanggal/g, `${tanggal(new Date())}`).replace(/@desc/g, `${metadata.desc}`).replace(/undefined/g, `Tidak ada deskripsi grup`)
sock.sendMessage(anu.id, { image: await resize(fotoProfil, 480, 270), caption: teks, mentions : [num]})
} else if (anu.action == 'remove') {
console.log('waduh')
let teks = (chat.setLeave || '*Sayonara* 👋\n─────────────────\n*Nama: @user*\n*Pada: @tanggal*\n\nTelah meninggalkan grup @subject').replace(/@subject/g, metadata.subject).replace(/@user/g, `@${num.split('@')[0]}`).replace(/@tanggal/g, `${tanggal(new Date())}`).replace(/@desc/g, `${metadata.desc}`)
sock.sendMessage(anu.id, { image: { url: ppuser }, caption: teks, mentions : [num]})
}
}

})*/

		// Role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt.General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt.General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt.General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt.General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythic VII 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythic VIII 上帝'
        } else if (levelRole <= 8000) {
            role = 'Mythic IX 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythic X 上帝'
        } else if (levelRole <= 10000) {
            role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	         role = 'End level 程度❗'
	    }
	    
			const hearts = checkHealuser(sender)
			var heartbars = `💛💛💛💛💛💛💛💛💛💛`
			if (hearts <= 0) {

				heartbars = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 5) {

				heartbars = `💔🖤🖤🖤🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 10) {

				heartbars = `❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 15) {

				heartbars = `❤️💔🖤🖤🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 20) {

				heartbars = `❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 25) {

				heartbars = `❤️❤️💔🖤🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 30) {

				heartbars = `❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 35) {

				heartbars = `❤️❤️❤️💔🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 40) {

				heartbars = `❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤`

			} else if (hearts <= 45) {

				heartbars = `❤️❤️❤️❤️💔🖤🖤🖤🖤🖤`

			} else if (hearts <= 50) {

				heartbars = `❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤`

			} else if (hearts <= 55) {

				heartbars = `❤️❤️❤️❤️❤️💔🖤🖤🖤🖤`

			} else if (hearts <= 60) {

				heartbars = `❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤`

			} else if (hearts <= 65) {

				heartbars = `❤️❤️❤️❤️❤️❤️💔🖤🖤🖤}`

			} else if (hearts <= 70) {

				heartbars = `❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤`

			} else if (hearts <= 75) {

				heartbars = `❤️❤️❤️❤️❤️❤️❤️💔🖤🖤`

			} else if (hearts <= 80) {

				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤`

			} else if (hearts <= 85) {

				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️💔🖤`

			} else if (hearts <= 90) {

				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤`

			} else if (hearts <= 95) {

				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️💔`

			} else if (hearts <= 200) {

				heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`

			} else if (hearts <= 150) {

				heartbars = `♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️`

			} else if (hearts <= 300) {

				heartbars = `💖💖💖💖💖💖💖💖💖💖`

			} else if (hearts <= 400) {

				heartbars = `💗💗💗💗💗💗💗💗💗💗`

			} else if (hearts <= 1000) {

				heartbars = `💝💝💝💝💝💝💝💝💝💝`

			} else if (hearts <= 2000) {

				heartbars = `💓💓💓💓💓💓💓💓💓💓`

			} else if (hearts <= 3000) {

				heartbars = `💘💘💘💘💘💘💘💘💘💘`

			}
			
			const pedangs = checkPedangUser(sender)
			var infopdng = `${pedangs}`
			if (pedangs <= 0) {

				infopdng = `Tidak punya`

			} else if (pedangs <= 10) {

				infopdng = `10%`

			} else if (pedangs <= 20) {

				infopdng = `20%`

			} else if (pedangs <= 30) {

				infopdng = `30%`

			} else if (pedangs <= 40) {

				infopdng = `40%`

			} else if (pedangs <= 50) {

				infopdng = `50%`

			} else if (pedangs <= 60) {

				infopdng = `60%`

			} else if (pedangs <= 70) {

				infopdng = `70%`

			} else if (pedangs <= 80) {

				infopdng = `80%`

			} else if (pedangs <= 90) {

				infopdng = `90%`
				
			} else if (pedangs <= 100) {

				infopdng = `Full coy`
				
			}
			
			const beliungs = checkBeliungUser(sender)
			var infopcke = `${beliungs}`
			if (beliungs <= 0) {

				infopcke = `Tidak punya`

			} else if (beliungs <= 10) {

				infopcke = `10%`

			} else if (beliungs <= 20) {

				infopcke = `20%`

			} else if (beliungs <= 30) {

				infopcke = `30%`

			} else if (beliungs <= 40) {

				infopcke = `40%`

			} else if (beliungs <= 50) {

				infopcke = `50%`

			} else if (beliungs <= 60) {

				infopcke = `60%`

			} else if (beliungs <= 70) {

				infopcke = `70%`

			} else if (beliungs <= 80) {

				infopcke = `80%`

			} else if (beliungs <= 90) {

				infopcke = `90%`
				
			} else if (beliungs <= 100) {

				infopcke = `Full coy`
				
			}
			
			const kapaks = checkKapakUser(sender)
			var infokpak = `${kapaks}`
			if (kapaks <= 0) {

				infokpak = `Tidak punya`

			} else if (kapaks <= 10) {

				infokpak = `10%`

			} else if (kapaks <= 20) {

				infokpak = `20%`

			} else if (kapaks <= 30) {

				infokpak = `30%`

			} else if (kapaks <= 40) {

				infokpak = `40%`

			} else if (kapaks <= 50) {

				infokpake = `50%`

			} else if (kapaks <= 60) {

				infokpak = `60%`

			} else if (kapaks <= 70) {

				infokpak = `70%`

			} else if (kapaks <= 80) {

				infokpak = `80%`

			} else if (kapaks <= 90) {

				infokpak = `90%`
				
			} else if (kapaks <= 100) {

				infokpak = `Full coy`
				
			}
			
			const pancings = checkPancingUser(sender)
			var infopncing = `${pancings}`
			if (pancings <= 0) {

				infopncing = `Tidak punya`

			} else if (pancings <= 10) {

				infopncing = `10%`

			} else if (pancings <= 20) {

				infopncing = `20%`

			} else if (pancings <= 30) {

				infopncing = `30%`

			} else if (pancings <= 40) {

				infopncing = `40%`

			} else if (pancings <= 50) {

				infopncinge = `50%`

			} else if (pancings <= 60) {

				infopncing = `60%`

			} else if (pancings <= 70) {

				infopncing = `70%`

			} else if (pancings <= 80) {

				infopncing = `80%`

			} else if (pancings <= 90) {

				infopncing = `90%`
				
			} else if (pancings <= 100) {

				infopncing = `Full coy`
				
			}
			
			const petk = checkPetKUser(sender)
			var infopetk = `${petk}`
			if (petk <= 0) {

				infopetk = `Tidak punya`

			} else if (petk <= 1) {

				infopetk = `Punya`
				
			}
			
			const pets = checkPetSUser(sender)
			var infopets = `${pets}`
			if (pets <= 0) {

				infopets = `Tidak punya`

			} else if (pets <= 1) {

				infopets = `Punya`
				
			}
			
			const peta = checkPetAUser(sender)
			var infopeta = `${pets}`
			if (peta <= 0) {

				infopeta = `Tidak punya`

			} else if (peta <= 1) {

				infopeta = `Punya`
				
			}
			
			const nyawapet = checkNyawaPetUser(sender)
			var infonyawapet = `${nyawapet}`
			if (nyawapet <= 0) {

				infonyawapet = `Tidak punya`

			} else if (nyawapet <= 10) {

				infonyawapet = `10%`

			} else if (nyawapet <= 20) {

				infonyawapet = `20%`

			} else if (nyawapet <= 30) {

				infonyawapet = `30%`

			} else if (nyawapet <= 40) {

				infonyawapet = `40%`

			} else if (nyawapet <= 50) {

				infonyawapet = `50%`

			} else if (nyawapet <= 60) {

				infonyawapet = `60%`

			} else if (nyawapet <= 70) {

				infonyawapet = `70%`

			} else if (nyawapet <= 80) {

				infonyawapet = `80%`

			} else if (nyawapet <= 90) {

				infonyawapet = `90%`
				
			} else if (nyawapet <= 100) {

				infonyawapet = `Full coy`
				
			}
			
		    var status = 'Terdaftar (✅)'
			if (global.db.pengguna[m.sender].registered === true) {
				status = 'Terdaftar (✅)'
			} 
			if (isAdmins) {
				status = 'Admin grup (☕)'
			} 
			if (isPremium) {
				status = 'Premium/spesial (💗)'
			} 
			if (isOwner) {
				status = 'Owner bot (👨‍💻)'
			}
			
	        // Function leveling
            if (isGroup && global.db.pengguna[m.sender].registered === true) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 1) + 0
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    addlimitUser(sender, 10)
                    let tekslevelup = `
[ *LEVEL UP* ]

Nama: @${sender.split("@")[0]}
Xp: ${getLevelingXp(sender)}
Role: ${role}
Level: ${getLevel} -> ${getLevelingLevel(sender)}

Anda mendapatkan +10 limit gratis setiap level up
`
            sock.sendMessage(m.chat, { text: tekslevelup, mentions: parseMention(tekslevelup) }, { quoted: m })
                }
            } catch (err) {
                console.log(err)
            }
        }

if (budy.includes('@daftar')) {
            if (isRegister) return sudahdaftar()
            register.push(sender)
              fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
adduangUser(sender, 1000)
addlimitUser(sender, 20)
addHealUser(sender, 100)
            suksesdaftar()
}

                   if (deteksidaftar) {
                   if (global.db.pengguna[m.sender].registered === true) return sudahdaftar()
global.db.pengguna[m.sender].registered = true
adduangUser(sender, 1000)
addlimitUser(sender, 20)
addHealUser(sender, 100)
addHeal(sender)
addLevelingId(sender)

  if (animeingfo.includes(m.chat)) { // kalo 2x command bakal hapus ini
    animeingfo.splice(animeingfo.indexOf(m.chat), 1)
    fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  } else {
  animeingfo.push(m.chat)
  fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  }

let nihh = `*Pendaftaran berhasil*
Nama: ${pushname}
Tag: @${sender.split("@")[0]}

*Hadiah yang didapat*
Limit: +20
Uang: +100

Total pengguna bot: ${Object.keys(global.db.pengguna).length}

Terimakasih telah mendaftar ke database bot`
                sock.sendMessage(m.chat, { text: nihh, mentions: parseMention(nihh) }, { quoted: m })
                }
                
// Auto hapus pengguna premium
premiumnya.expiredCheck(premium)

if (body.startsWith('=>')) {
    if (!isOwner)
        return untukowner();
    function Return(sul) {
        sat = JSON.stringify(sul, null, 2);
        bang = util.format(sat);
        if (sat == undefined) {
            bang = util.format(sul);
        }
        return reply(bang);
    }
    try {
        reply(util.format(eval(`(async () => { return ${body.slice(3)} })()`)));
    }
    catch (e) {
        reply(String(e));
    }
}
if (body.startsWith('>')) {
    if (!isOwner)
        return untukowner();
    try {
        let evaled = await eval(body.slice(2));
        if (typeof evaled !== 'string')
            evaled = util.inspect(evaled);
        await reply(evaled);
    }
    catch (err) {
        await reply(String(err));
    }
}
if (body.startsWith('$')) {
    if (!isOwner)
        return untukowner();
    exec(body.slice(2), (err, stdout) => {
        if (err)
            return reply(err);
        if (stdout)
            return reply(stdout);
    });
}

        switch (command) {
case 'whatanime':
if (!isMedia) return stiktutor2()
if (!quoted) return stiktutor2()
if (/webp/.test(mime)) return stiktutor2()
try {
tunggu()
await sleep(1000)
let anu = await sock.downloadAndSaveMediaMessage(quoted, 'tourl');
let mediaURL = await TelegraPh(anu);
const response = await traceMoeAPIWrapper.searchForAnimeSceneWithMediaURL(mediaURL);
// const response = await traceMoeAPIWrapper.searchForAnimeSceneWithMediaAtPath(mediaPath);
const result = response.results[0];
console.log(result);
      } catch (e) {
         console.log(e)
         return reply(`Informasi tidak ditemukan`)
      }
break
        
	    case 'yts': case 'ytsearch': {
                if (!text) return kosong('Wielino salto');
                let search = await yts(text)
                let teks = '*YOUTUBE SEARCH*\n\n❏ *Result From :* '+text+'\n'
                let no = 1
                for (let i of search.all) {
                    teks += `\n❏ *No :* ${no++}\n❏ *Type :* ${i.type}\n❏ *Video ID :* ${i.videoId}\n❏ *Title :* ${i.title}\n❏ *Views :* ${i.views}\n❏ *Duration :* ${i.timestamp}\n❏ *Upload At :* ${i.ago}\n❏ *Author :* ${i.author.name}\n❏ *Url :* ${i.url}\n─────────────────────`
                }
                sock.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
/*
// Versi list message
await sleep(5000)
let sections = []   
  for (let i of search.all) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `[🎵] ${i.title}\n\n`, 
	     rowId: `${prefix}ytmp3 ${i.url}`,
	     description: `${i.url}`
	    },{
	     title: `[▶️] ${i.title}\n\n`, 
	     rowId: `${prefix}ytmp4 ${i.url}`,
	     description: `${i.url}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  miku.sendMessage(
      from, 
      {
       text: "Silahkan klik menu list di bawah ini",
       footer: wm,
       title: "YouTube Search",
       buttonText: "Klik disini",
       sections
      }, { quoted : m }
    )
    */
    
            }
            break
        // By Sansekai
        case "ai": case "openai": 
          try {
            if (keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: keyopenai,
            });
            const openai = new OpenAIApi(configuration);

            /*const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0, // Higher values means the model will take more risks.
              max_tokens: 2048, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
              top_p: 1, // alternative to sampling with temperature, called nucleus sampling
              frequency_penalty: 0.3, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
              presence_penalty: 0 // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
          });
            m.reply(`${response.data.choices[0].text}`);*/
            const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          m.reply(`${response.data.choices[0].message.content}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
        case "img": case "ai-img": case "image": case "images":
          try {
            if (keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            //client.sendImage(from, response.data.data[0].url, text, mek);
            sock.sendMessage(from, { image: { url: response.data.data[0].url }, caption: `Nih` }, { quoted: m })
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
          
case 'jadianime': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return tutorfoto()
         try {
            let img = await sock.downloadAndSaveMediaMessage(quoted)
            let image = await TelegraPh(img)
            let socks = await(await fetch("https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks5&timeout=10000&country=ID")).text()
            let Res = socks.split('\n')
            //let acakip = Res[Math.floor(Math.random() * Res.length)]
            let acakip = `172.105.247.104:8080`
            console.log(acakip)
                tunggu()
                await sleep(1000)
await ai2d(image, {
  /*
  proxy: {
    url: "socks5://" + acakip,
    chinese: true,
    image: false,
  }, // support http & socks
  */
  crop: "SINGLE",
}).then(async (hasil) => {
            // if (!result || result.constructor.name != 'String') return reply(`gagal:V`)
            // miku.sendFile(m.chat, h, ``, `*Anjai jadi Animeh :v*`, m)
            sock.sendMessage(m.chat, { image: hasil }, { quoted: m })
           })
      } catch (e) {
         console.log(e)
         return reply(`Muka tidak terdeteksi`)
      }
      }
      break
                    case 'jadianime2': { // By FarelAE
            if (!isPremium && checklimitUser(sender) <= 0) return limithabis()
              if (!isMedia) return stiktutor2()
              if (!quoted) return stiktutor2()
              if (/webp/.test(mime)) return stiktutor2()
              try {
                tunggu()
                await sleep(1000)
                const media = await quoted.download()
                
function signV1(obj) { // By Sansekai
  function o(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
  }
  function i(e, t, n, r, i, a) {
    return o(((a = o(o(t, e), o(r, a))) << (i = i)) | (a >>> (32 - i)), n);
  }
  function a(e, t, n, r, o, a, s) {
    return i((t & n) | (~t & r), e, t, o, a, s);
  }
  function s(e, t, n, r, o, a, s) {
    return i((t & r) | (n & ~r), e, t, o, a, s);
  }
  function u(e, t, n, r, o, a, s) {
    return i(t ^ n ^ r, e, t, o, a, s);
  }
  function l(e, t, n, r, o, a, s) {
    return i(n ^ (t | ~r), e, t, o, a, s);
  }
  function c(e, t) {
    var n, r, i, c;
    (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
    for (var f = 1732584193, p = -271733879, d = -1732584194, h = 271733878, v = 0; v < e.length; v += 16)
      (f = a((n = f), (r = p), (i = d), (c = h), e[v], 7, -680876936)),
        (h = a(h, f, p, d, e[v + 1], 12, -389564586)),
        (d = a(d, h, f, p, e[v + 2], 17, 606105819)),
        (p = a(p, d, h, f, e[v + 3], 22, -1044525330)),
        (f = a(f, p, d, h, e[v + 4], 7, -176418897)),
        (h = a(h, f, p, d, e[v + 5], 12, 1200080426)),
        (d = a(d, h, f, p, e[v + 6], 17, -1473231341)),
        (p = a(p, d, h, f, e[v + 7], 22, -45705983)),
        (f = a(f, p, d, h, e[v + 8], 7, 1770035416)),
        (h = a(h, f, p, d, e[v + 9], 12, -1958414417)),
        (d = a(d, h, f, p, e[v + 10], 17, -42063)),
        (p = a(p, d, h, f, e[v + 11], 22, -1990404162)),
        (f = a(f, p, d, h, e[v + 12], 7, 1804603682)),
        (h = a(h, f, p, d, e[v + 13], 12, -40341101)),
        (d = a(d, h, f, p, e[v + 14], 17, -1502002290)),
        (f = s(f, (p = a(p, d, h, f, e[v + 15], 22, 1236535329)), d, h, e[v + 1], 5, -165796510)),
        (h = s(h, f, p, d, e[v + 6], 9, -1069501632)),
        (d = s(d, h, f, p, e[v + 11], 14, 643717713)),
        (p = s(p, d, h, f, e[v], 20, -373897302)),
        (f = s(f, p, d, h, e[v + 5], 5, -701558691)),
        (h = s(h, f, p, d, e[v + 10], 9, 38016083)),
        (d = s(d, h, f, p, e[v + 15], 14, -660478335)),
        (p = s(p, d, h, f, e[v + 4], 20, -405537848)),
        (f = s(f, p, d, h, e[v + 9], 5, 568446438)),
        (h = s(h, f, p, d, e[v + 14], 9, -1019803690)),
        (d = s(d, h, f, p, e[v + 3], 14, -187363961)),
        (p = s(p, d, h, f, e[v + 8], 20, 1163531501)),
        (f = s(f, p, d, h, e[v + 13], 5, -1444681467)),
        (h = s(h, f, p, d, e[v + 2], 9, -51403784)),
        (d = s(d, h, f, p, e[v + 7], 14, 1735328473)),
        (f = u(f, (p = s(p, d, h, f, e[v + 12], 20, -1926607734)), d, h, e[v + 5], 4, -378558)),
        (h = u(h, f, p, d, e[v + 8], 11, -2022574463)),
        (d = u(d, h, f, p, e[v + 11], 16, 1839030562)),
        (p = u(p, d, h, f, e[v + 14], 23, -35309556)),
        (f = u(f, p, d, h, e[v + 1], 4, -1530992060)),
        (h = u(h, f, p, d, e[v + 4], 11, 1272893353)),
        (d = u(d, h, f, p, e[v + 7], 16, -155497632)),
        (p = u(p, d, h, f, e[v + 10], 23, -1094730640)),
        (f = u(f, p, d, h, e[v + 13], 4, 681279174)),
        (h = u(h, f, p, d, e[v], 11, -358537222)),
        (d = u(d, h, f, p, e[v + 3], 16, -722521979)),
        (p = u(p, d, h, f, e[v + 6], 23, 76029189)),
        (f = u(f, p, d, h, e[v + 9], 4, -640364487)),
        (h = u(h, f, p, d, e[v + 12], 11, -421815835)),
        (d = u(d, h, f, p, e[v + 15], 16, 530742520)),
        (f = l(f, (p = u(p, d, h, f, e[v + 2], 23, -995338651)), d, h, e[v], 6, -198630844)),
        (h = l(h, f, p, d, e[v + 7], 10, 1126891415)),
        (d = l(d, h, f, p, e[v + 14], 15, -1416354905)),
        (p = l(p, d, h, f, e[v + 5], 21, -57434055)),
        (f = l(f, p, d, h, e[v + 12], 6, 1700485571)),
        (h = l(h, f, p, d, e[v + 3], 10, -1894986606)),
        (d = l(d, h, f, p, e[v + 10], 15, -1051523)),
        (p = l(p, d, h, f, e[v + 1], 21, -2054922799)),
        (f = l(f, p, d, h, e[v + 8], 6, 1873313359)),
        (h = l(h, f, p, d, e[v + 15], 10, -30611744)),
        (d = l(d, h, f, p, e[v + 6], 15, -1560198380)),
        (p = l(p, d, h, f, e[v + 13], 21, 1309151649)),
        (f = l(f, p, d, h, e[v + 4], 6, -145523070)),
        (h = l(h, f, p, d, e[v + 11], 10, -1120210379)),
        (d = l(d, h, f, p, e[v + 2], 15, 718787259)),
        (p = l(p, d, h, f, e[v + 9], 21, -343485551)),
        (f = o(f, n)),
        (p = o(p, r)),
        (d = o(d, i)),
        (h = o(h, c));
    return [f, p, d, h];
  }
  function f(e) {
    for (var t = "", n = 32 * e.length, r = 0; r < n; r += 8) t += String.fromCharCode((e[r >> 5] >>> r % 32) & 255);
    return t;
  }
  function p(e) {
    var t = [];
    for (t[(e.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
    for (var n = 8 * e.length, r = 0; r < n; r += 8) t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
    return t;
  }
  function d(e) {
    for (var t, n = "0123456789abcdef", r = "", o = 0; o < e.length; o += 1) (t = e.charCodeAt(o)), (r += n.charAt((t >>> 4) & 15) + n.charAt(15 & t));
    return r;
  }
  function h(e) {
    return unescape(encodeURIComponent(e));
  }
  function v(e) {
    return f(c(p((e = h(e))), 8 * e.length));
  }
  function g(e, t) {
    return (function (e, t) {
      var n,
        r = p(e),
        o = [],
        i = [];
      for (o[15] = i[15] = void 0, 16 < r.length && (r = c(r, 8 * e.length)), n = 0; n < 16; n += 1) (o[n] = 909522486 ^ r[n]), (i[n] = 1549556828 ^ r[n]);
      return (t = c(o.concat(p(t)), 512 + 8 * t.length)), f(c(i.concat(t), 640));
    })(h(e), h(t));
  }
  function y(e, t, n) {
    return t ? (n ? g(t, e) : d(g(t, e))) : n ? v(e) : d(v(e));
  }

  function ss(e, t, n) {
    if (!t) return "";
    var r,
      i,
      a = "string" == typeof e ? e : JSON.stringify(e);
    return (
      (a = e ? ((r = a), (i = encodeURIComponent(r).match(/%[89ABab]/g)), r.length + (i ? i.length : 0)) : 0),
      "v1" === t ? ((r = n), (i = a), y("" + r + i + "HQ31X02e")) : "v2" === t ? ((n = n), (a = a), y("90A599D6" + n.split("").reverse().join("") + a)) : ""
    );
  }

  return ss(obj, "v1", "https://h5.tu.qq.com");
}

async function jadianime(media) {
  const imgData = await Buffer.from(media).toString('base64')

  const obj = {
    busiId: "different_dimension_me_img_entry",
    extra: JSON.stringify({
      face_rects: [],
      version: 2,
      platform: "web",
      data_report: {
        parent_trace_id: v4(),
        root_channel: "",
        level: 0,
      },
    }),
    images: [imgData],
  };

  const response = await axios.request({
    method: "POST",
    url: "https://ai.tu.qq.com/overseas/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process",
    data: obj,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-HK,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      Connection: "keep-alive",
      "Content-Type": "application/json",
      Host: "ai.tu.qq.com",
      Origin: "https://h5.tu.qq.com",
      Referer: "https://h5.tu.qq.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "x-sign-value": signV1(obj),
      "x-sign-version": "v1",
    },
    timeout: 30000,
  });

  return response.data;
};

let wow = await jadianime(media)
if (!wow.extra){
reply(`Gagal convert, pastikan foto tidak pudar`) // Jika terjadi eror
}
let hasil = JSON.parse(wow.extra).img_urls[0]
//------> sock.sendMessage(m.chat, { image: { url: hasil } }, { quoted: m })
let waduh = await Jimp.read(hasil)
sock.sendMessage(from, { image: await resize(waduh, 144, 200), caption: `Hasil HD: ${hasil}` }, { quoted: m })
                confirmlimit(sender, 1) // Memakai 1 limit
              } catch (err) {
                console.log(err);
              }
                }
                break
          case 'logo': {
    if (!text.includes("/"))
        return m.reply(`Masukkan teks!
*Contoh:* ${prefix + command} gura/text

*List logo*
gura
loli
loli2
neko
catboy
ghoul`);
    let jeo = args.join(" ");
    let jenis = jeo.split("/")[0];
    let texts = jeo.split("/")[1];
    let texts2 = jeo.split("/")[2];
    var pathh = 'out.png';
    if (jenis === 'ghoul') {
        let haha = async () => {
            var image = await new knights.Gfx1()
                .setName(texts)
                .toAttachment();
            let data = image.toBuffer();
            await fs.writeFileSync(pathh, data);
            await sock.sendMessage(m.chat, { image: { url: pathh } }, { quoted: m });
            await fs.unlinkSync(pathh);
        };
        haha();
    }
    else if (jenis === 'gura') {
        let haha = async () => {
            var image = await new knights.Gura()
                .setName(texts)
                .toAttachment();
            let data = image.toBuffer();
            await fs.writeFileSync(pathh, data);
            await sock.sendMessage(m.chat, { image: { url: pathh } }, { quoted: m });
            await fs.unlinkSync(pathh);
        };
        haha();
    }
    else if (jenis === 'loli') {
        let haha = async () => {
            var image = await new knights.Gfx2()
                .setName(texts)
                .toAttachment();
            let data = image.toBuffer();
            await fs.writeFileSync(pathh, data);
            await sock.sendMessage(m.chat, { image: { url: pathh } }, { quoted: m });
            await fs.unlinkSync(pathh);
        };
        haha();
    }
    else if (jenis === 'catboy') {
        if (!text.includes("/"))
            return m.reply(`Masukkan teks!\n*Contoh:* ${prefix + command} ${jenis}/teks/teks`);
        if (texts2 === undefined)
            return m.reply(`Masukkan teks!\n*Contoh:* ${prefix + command} ${jenis}/teks/teks`);
        let haha = async () => {
            var image = await new knights.Gfx3()
                .setText1(texts)
                .setText2(texts2)
                .toAttachment();
            let data = image.toBuffer();
            await fs.writeFileSync(pathh, data);
            await sock.sendMessage(m.chat, { image: { url: pathh } }, { quoted: m });
            await fs.unlinkSync(pathh);
        };
        haha();
    }
    else if (jenis === 'neko') {
        if (!text.includes("/"))
            return m.reply(`Masukkan teks!\n*Contoh:* ${prefix + command} ${jenis}/teks/teks`);
        if (texts2 === undefined)
            return m.reply(`Masukkan teks!\n*Contoh:* ${prefix + command} ${jenis}/teks/teks`);
        let haha = async () => {
            var image = await new knights.Gfx4()
                .setText1(texts)
                .setText2(texts2)
                .toAttachment();
            let data = image.toBuffer();
            await fs.writeFileSync(pathh, data);
            await sock.sendMessage(m.chat, { image: { url: pathh } }, { quoted: m });
            await fs.unlinkSync(pathh);
        };
        haha();
    }
    else if (jenis === 'loli2') {
        let haha = async () => {
            var image = await new knights.Gfx5()
                .setText(texts)
                .toAttachment();
            let data = image.toBuffer();
            await fs.writeFileSync(pathh, data);
            await sock.sendMessage(m.chat, { image: { url: pathh } }, { quoted: m });
            await fs.unlinkSync(pathh);
        };
        haha();
    }
    else {
        m.reply(`Logo *${args[0]}* tidak tersedia\n*Contoh:* ${prefix}logo gura/teks

*List logo*
gura
loli
loli2
neko
catboy
ghoul`);
    }
}
break;
case 'qc': {
if (!isMedia && !isQuotedImage && text) {

var warna = `#FFFFFF`
if (text.includes('--hitam')) {
warna = `#323338`
} else if (text.includes('--putih')) {
warna = `#FFFFFF`
} else if (text.includes('-- hitam')) {
warna = `#323338`
} else if (text.includes('-- putih')) {
warna = `#FFFFFF`
}

try {
var linkppuserp = await sock.profilePictureUrl(sender, 'image')
} catch {
var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
}

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": warna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": pushname,
        "photo": {
          "url": linkppuserp
        }
      },
      "text": `${text.replace('--putih', '').replace('--hitam', '').replace('-- putih', '').replace('-- hitam', '')}`,
      "replyMessage": {}
    }
  ]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: `Created by`, author: wm }
sock.sendImageAsSticker(from, buffer, m, opt)
});
} else if (isMedia && text) {

var warna = `#FFFFFF`
if (text.includes('--hitam')) {
warna = `#323338`
} else if (text.includes('--putih')) {
warna = `#FFFFFF`
} else if (text.includes('-- hitam')) {
warna = `#323338`
} else if (text.includes('-- putih')) {
warna = `#FFFFFF`
}

try {
var linkppuserp = await sock.profilePictureUrl(sender, 'image')
} catch {
var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
}

let anu = await sock.downloadAndSaveMediaMessage(quoted);
let ffcoy = await exec(`ffmpeg -i ${anu} ./${sender}-qc.png`, (err) => {
if (err) return reply(`${err}`)
})
tunggu()
await sleep(1000)
let mdiaGmbr = await TelegraPh(`${sender}-qc.png`);
fs.unlinkSync(`./${sender}-qc.png`)

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": warna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "media": {
        "url": mdiaGmbr
      },
      "avatar": true,
      "from": {
        "id": 1,
        "name": pushname,
        "photo": {
          "url": linkppuserp
        }
      },
      "text": `${text.replace('--putih', '').replace('--hitam', '').replace('-- putih', '').replace('-- hitam', '')}`,
      "replyMessage": {}
    }
  ]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
var opt = { packname: `Created by`, author: wm }
sock.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${command} text atau reply pesan dengan perintah ${command}`)
}
}
break
case 'awoaw':
let ongonging = await otakudesubaru()
console.log(ongonging[0].gambar)
break
        case 'anime': {
if (!text) { // Ketika menggunakan command tanpa kata kunci
        let ongonging = await otakudesubaru()
        let acakgmbr = ongonging[Math.floor(Math.random() * ongonging.length)]
        //let gmbrnya = await exec(`curl https://api.cloudinary.com/v1_1/demo/image/create_collage -X POST --data 'public_id=test_collage&resource_type=image&manifest_json={"template": "grid","width": 500,"height": 500,"columns": 3,"rows": 3, "spacing": 1,"color": "blue","assetDefaults": { "kind": "upload", "crop": "fill", "gravity": "auto"},"assets": [{ "media": "${ongonging[0].gambar}" }, { "media": "${ongonging[1].gambar}" },{ "media": "${ongonging[2].gambar}" }, { "media": "${ongonging[3].gambar}" },{ "media": "${ongonging[4].gambar}" },{ "media": "${ongonging[5].gambar}" }, { "media": "${ongonging[6].gambar}" }, { "media": "${ongonging[7].gambar}" },{ "media": "${ongonging[8].gambar}" }]}&timestamp=173719931&api_key=436464676&signature=a781d61f86a6f818af'`)
        let randh = getRandom('.jpg')
        let resImage = `./${randh}`
        exec(`montage "${ongonging[0].gambar}" "${ongonging[1].gambar}" "${ongonging[2].gambar}" "${ongonging[3].gambar}" "${ongonging[4].gambar}" "${ongonging[5].gambar}" "${ongonging[6].gambar}" "${ongonging[7].gambar}" "${ongonging[8].gambar}" "${ongonging[9].gambar}" "${ongonging[10].gambar}" "${ongonging[11].gambar}" \ -geometry 340x480+5+5 '${resImage}'`, async(err) => {
        let inihasil = fs.readFileSync(resImage)
        await sleep(5000)
        let resImagebuf = await Jimp.read(resImage)
        let kurangres = await resize(resImagebuf, 360, 360)
        let nomor = 0
        let teksanim = `*ANIME TERBARU*\n\n`
        let textandown = `*SILAHKAN SALIN TEKS DI BAWAH INI UNTUK MENDOWNLOAD*`
        for (let oy of ongonging) {
        teksanim += `${nomor+=1}. ${oy.judul}\n`
        }
        teksanim += `\n${textandown}`
        const quotedanim = await sock.sendMessage(from, { image: kurangres, caption: teksanim }, { quoted: m })
        await fs.unlinkSync(resImage)
/*let list_rows = [];
for (let ha of ongonging) {
list_rows.push({
title: ha.judul, rowId: `${prefix}anime2 ${ha.link}`})
}
const sections = [
    {
	title: wm,
	rows: list_rows
	 },]
   const listMessage = {
  text: tkslist,
  footer: "",
  // title: "",
  buttonText: teksbutlist,
  sections
}
await sleep(5000)
sock.sendMessage(m.sender, listMessage, { quoted: quotedanim })*/

for (let ha of ongonging) {
sleep(5000)
reply(`${prefix}anime2 ${ha.link}`)
}

})
        }
if (text) { // Ketika menggunakan command dengan kata kunci
let carianime = await otakudesucari(text)
/*let list_rows = [];
for (let otakudesu of carianime) {
list_rows.push({
title: otakudesu.judul, rowId: `${prefix}anime2 ${otakudesu.link}`})
}
const sections = [
    {
	title: wm,
	rows: list_rows
	 },]
   const listMessage = {
  text: tkslist,
  footer: "",
  // title: "",
  buttonText: teksbutlist,
  sections
}
sock.sendMessage(m.sender, listMessage, { quoted: m })*/

reply('*SILAHKAN SALIN TEKS DI BAWAH INI UNTUK MENDOWNLOAD*')
await sleep(3000)
for (let otakudesu of carianime) {
sleep(5000)
reply(`${prefix}anime2 ${otakudesu.link}`)
}

        }
        }
        break
case 'anime2': {
let epsanime = await otakudesueps(text)
/*let list_rows = [];
for (let otakudesu of epsanime) {
list_rows.push({
title: otakudesu.judul, rowId: `${prefix}anime3 ${otakudesu.link}`})
}
const sections = [
    {
	title: wm,
	rows: list_rows
	 },]
   const listMessage = {
  text: tkslist,
  footer: "",
  // title: "",
  buttonText: teksbutlist,
  sections
}
sock.sendMessage(m.sender, listMessage, { quoted: m })*/

let teksanim = `*LINK EPISODE*\n\nSilahkan ketik ${prefix}anime3 <url>\n\nContoh:\n.anime3 https://otakudesu.lol/episode/wpoiec-episode-1063-sub-indo/\n\n------------------------------------------------------------------\n\n`
for (let otakudesu of epsanime) {
teksanim += `${otakudesu.link}\n\n`
}
reply(teksanim)
}
break
case 'anime3': {
let downanime = await otakudeslinkudown(text)
/*const listresolusi = [
    {
	title: "Download resolusi 360p",
	rows: [
	    {title: `${downanime.title} 360p`, rowId: `${prefix}animdl ${text} 360p`, description: ""},
	]
    },
    {
	title: "Download resolusi 480p",
	rows: [
	    {title: `${downanime.title} 480p`, rowId: `${prefix}animdl ${text} 480p`, description: ""},
	]
    },
    {
	title: "Download resolusi 720p",
	rows: [
	    {title: `${downanime.title} 720p`, rowId: `${prefix}animdl ${text} 720p`, description: ""},
	]
    },
    {
	title: "Download resolusi 1080p",
	rows: [
	    {title: `${downanime.title} 1080p`, rowId: `${prefix}animdl ${text} 1080p`, description: ""},
	]
    },
]

  const listmsgresolusi = {
  text: tkslist,
  footer: ``,
  title: ``,
  buttonText: teksbutlist,
  sections: listresolusi
}
await sock.sendMessage(m.sender, listmsgresolusi, { quoted: m })*/

reply(`${prefix}animdl ${text} 360p`)
sleep(5000)
reply(`${prefix}animdl ${text} 480p`)
sleep(5000)
reply(`${prefix}animdl ${text} 720p`)
sleep(5000)
reply(`${prefix}animdl ${text} 1080p`)
sleep(3000)
reply(`Jika resolusi 1080p tidak berfungsi, cobalah resolusi 720p atau yang lainnya`)

}
break
/*
case 'animdl': {
async function downAnim(link) {
try {
    let res = await extract(link)
    let mimetype = await lookup(res.download)
    sock.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
    } catch {
        reply(`Maaf kak, link download tidak tersedia`)
    }
}
const aku = await otakudeslinkudown(args[0])
if (args[1] === '360p') {
let anu = await fetch(aku.download.q_360p.zippy ? aku.download.q_360p.zippy : aku.download.q_360p.zippyshare)
await downAnim(anu.url)
} else if (args[1] === '480p') {
let anu = await fetch(aku.download.q_480p.zippy ? aku.download.q_480p.zippy : aku.download.q_480p.zippyshare)
await downAnim(anu.url)
} else if (args[1] === '720p') {
let anu = await fetch(aku.download.q_720p.zippy ? aku.download.q_720p.zippy : aku.download.q_720p.zippyshare)
await downAnim(anu.url)
} else if (args[1] === '1080p') {
let anu = await fetch(aku.download.q_1080p.zippy ? aku.download.q_1080p.zippy : aku.download.q_1080p.zippyshare)
await downAnim(anu.url)
}
}
break
*/

/*
{
  name: '360p',
  otakufiles: 'https://desudrive.com/link/?id=eVYzczJaUk9LU0lMM0VhR0pzRDdYUVI2MkZkUmk1aEtlcVdIaVFGYU5zbVZsdytqWUk1RmJBOEY1dE1EOE5GYnp0a2dibnFVY1A2a29MakNNektDUkpqK2kzakd6cVdKUUE9PQ==',
  pdrain: 'https://desudrive.com/link/?id=eVYzczJaUk9LU0lVd1YrSVA4TGdVQWhuMkZwYmtwaGVZNjJQb25JUEJwU0Y=',
  acefile: 'https://desudrive.com/link/?id=eVYzczJaUk9LU0lGeTBLTE9zcjNId0ptMlY4YnhvQVNlL2pjMHdWR0k5T1dqUURvU29sUktoWU83LzhUcEpCSGtLdFZCUXYwZE9QNXZlVHROQT09',
  racaty: 'https://desudrive.com/link/?id=eVYzczJaUk9LU0lXeVVTTUo5KzhXQTRta1V4Y2pJZGNKdjZIMEZRVA==',
  mega: 'https://desudrive.com/link/?id=eVYzczJaUk9LU0lKelVDTWZjam9IZ2RnbWx3YnlOa2ZmcWV5b1haS1BkREdnajYvYUo1aVRrMGo3TWxQdHZWYWt1VlNjQ0tXTFlEYm84cnVkVWlBWXZuNXFYeWVsZUN6ZFE9PQ==',
  megaup: 'https://desudrive.com/link/?id=eVYzczJaUk9LU0lKelVDTUp0YThYd1I5MlF0T3g5SmNZNFNjZ1Z3Y0tNS0VrMXZnUUpaN1FpQlAwSkpiODQwRi9iVlRCQ1RwTDZPOQ==',
  kfiles: 'https://desudrive.com/link/?id=eVYzczJaUk9LU0lQMmthR05zajBXQTFzaFJkWGtOb0VPcUtObHhnTkZPcVExei8rVGE5U0tCd0k3OFZZdHNsWnpnPT0='
}
*/

case 'animdl': { // By FarelAE
const aku = await otakudeslinkudown(args[0])
if (args[1] === '360p') {
let anu = await aku.download.q_360p
reply(util.format(anu).replace(/{/g, "").replace(/}/g, "").replace(/  name: '360p',/g, "").replace(/ /g, "").replace(/',/g, "\n").replace(/'/g, "\n"))
} else if (args[1] === '480p') {
let anu = await aku.download.q_480p
reply(util.format(anu).replace(/{/g, "").replace(/}/g, "").replace(/  name: '480p',/g, "").replace(/ /g, "").replace(/',/g, "\n").replace(/'/g, "\n"))
} else if (args[1] === '720p') {
let anu = await aku.download.q_720p
reply(util.format(anu).replace(/{/g, "").replace(/}/g, "").replace(/  name: '720p',/g, "").replace(/ /g, "").replace(/',/g, "\n").replace(/'/g, "\n"))
} else if (args[1] === '1080p') {
let anu = await aku.download.q_1080p
reply(util.format(anu).replace(/{/g, "").replace(/}/g, "").replace(/  name: '1080p',/g, "").replace(/ /g, "").replace(/',/g, "\n").replace(/'/g, "\n"))
}
}
break
case 'gitclone':
try {
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return gadalink()
if (!regex.test(text)) return linkeror()
let [, user, repos] = text.match(regex) || []
let repo = repos.replace(/.git$/, '')
let Url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(Url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
tunggu()
await sleep(1000)
sock.sendMessage(from, { document: { url: Url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m })
} catch (err){
eror()
}
break
case 'berita': {
const resp = await axios.get(
  "https://scraping-berita.vercel.app/",
  {}
 ).then(res => {
 console.log(res.data.api[0]);

let list_rows = [];
for (let berita of res.data.api) {
list_rows.push({
title: berita.name, rowId: `${prefix}berita2 ${berita.all}`})
}
const sections = [
    {
	title: wm,
	rows: list_rows
	 },]
   const listMessage = {
  text: tkslist,
  footer: "",
  // title: "",
  buttonText: teksbutlist,
  sections
}
sock.sendMessage(m.sender, listMessage, { quoted: m })

 });
}
break
case 'berita2': {
const resp = await axios.get(
  `https://scraping-berita.vercel.app/${text}`,
  {}
 ).then(res => {
 console.log(res.data);

let list_rows = [];
for (let berita of res.data) {
list_rows.push({
title: berita.title, rowId: `${prefix}berita3 ${berita.image_full} ${berita.title}\n\n\n${berita.time}`})
}
const sections = [
    {
	title: wm,
	rows: list_rows
	 },]
   const listMessage = {
  text: tkslist,
  footer: "",
  // title: "",
  buttonText: teksbutlist,
  sections
}
sock.sendMessage(m.sender, listMessage, { quoted: m })

 });
}
break
case 'berita3': {
let teksberita = text.replace(`${args[0]}`, ``)
sock.sendMessage(from, { image: { url: `${args[0]}` }, caption: teksberita }, { quoted: m })
}
break
case 'imgprompt': {
            let text1 = text.split("|")[0]
            let text2 = text.split("|")[1]
            const apikey = `Rs-ChichiRahayu`
const resp = await axios.get(
  `https://api.itsrose.site/image/lexica?prompt=${text1}&negative_prompt=${text2}&ratio=1%3A1&cfg=7&hiresFix=true&apikey=${apikey}`,
  {}
 ).then(res => {
 let nganu = res.data.result.images
 console.log(res.data);
  reply(`Berhasil membuat ${nganu.length} gambar...`)
 for (let bebeb of res.data.result.images) {
sleep(1000)
 sock.sendMessage(from, { image: { url: bebeb }, caption: `Nih` }, { quoted: m })
 }
  });
}
break
        case 'zippyshare': { // Websitenya sudah tutup😭
  if (!text) return gadalink()
  if (!text.includes('zippyshare.com/v')) return linksalah()
    try {
tunggu()
await sleep(1000)
  for (let i = 0; i < args.length; i++) {
    if (!args[i].includes('zippyshare.com/v')) continue
    let res = await extract(args[i])
    let mimetype = await lookup(res.download)
    sock.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
  }
    } catch {
        reply(`File telah kedaluwarsa dan tidak ada lagi di server ini`)
    }
}
        break
        case 'testo':
        let anu = await otakudesubaru()
        let tekso = `anu\n\n`
        for (let pe of anu) {
        tekso += `${pe.judul}\n`
        }
        reply(tekso)
        break
        case 'malas':
        let bc = Object.keys(global.db.pengguna)
        for (let anu of bc) {
        reply(anu)
        }
        break
case 'broadcast': case 'bc': {
if (!isOwner) return untukowner();
let anu = Object.keys(global.db.pengguna)

let getGroups = await sock.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anugc = groups.map(v => v.id)

let cc = await smsg(sock, text ? m : m.quoted ? await m.quoted.fakeObj : false || m)
let cck = text ? text : cc.text

for (let i of anu) {
await sleep(1500)
await sock.copyNForward(i, sock.cMod(m.chat, cc, /|broadcast|bcgc/i.test(cck) ? cck : `*Broadcast*\n\n ${cck}`), true).catch(_ => _)
}

for (let i of anugc) {
await sleep(1500)
await sock.copyNForward(i, sock.cMod(m.chat, cc, /|broadcast|bcgc/i.test(cck) ? cck : `*Broadcast*\n\n ${cck}`), true).catch(_ => _)
}

berhasil()
}
break
        case 'kon': {
        let fotoProfil = await genProfile(sock, m)
        sock.sendMessage(m.chat, { image: await resize(fotoProfil, 480, 270) }, { quoted: m })
        }
        break
        case 'pe': {
        let fotoProfil = await ppWelkom(sock, m)
        sock.sendMessage(m.chat, { image: await resize(fotoProfil, 480, 270) }, { quoted: m })
        }
        break
case 'igstalk': {
if (!text) return kosong('nama akun instagram');
try {
let anu = await igstalk1(text)
let sections = []
for (let ig of anu) {
  const list = {title: `${ig.nama}`,
  rows: [
	    {
	     title: `Profile`, 
	     rowId: `${prefix}igstalk2 ${ig.nama}`,
	    },{
	     title: `Postingan`, 
	     rowId: `${prefix}igstalk3 ${ig.nama}`,
	    },
	    ]
     }
     sections.push(list)
     }
  sock.sendMessage(
      m.sender, 
      {
       text: tkslist,
       footer: "",
       // title: "",
       buttonText: teksbutlist,
       sections
      }, { quoted : m }
    )
} catch (err) {
// reply(String(err))
reply(`Akun tidak ditrmukan`)
}
}
break
case 'igstalk2': { // By FarelAE
if (!isPremium && checklimitUser(sender) <= 0) return limithabis()
let anu1 = await igstalk2(text)
let anu2 = await igstalk3(text)
let anu3 = anu1[0]
let baris1 = anu2[0] // Postingan
let baris2 = anu2[1] // Pengikut
let baris3 = anu2[2] // Mengikuti
let teks = `*${anu3.nama1}*\n${anu3.nama2}\n\n*Deskripsi:*\n${anu3.deskripsi}\n\n*• Postingan:* ${baris1.nomor}\n*• Pengikut:* ${baris2.nomor}\n*• Mengikuti:* ${baris3.nomor}\n\n`
sock.sendMessage(from, { image: { url: `${anu3.gambar}` }, caption: teks }, { quoted: m })
confirmlimit(sender, 1) // Memakai 1 limit
}
break
case 'igstalk3': { // By FarelAE
try {
if (!isPremium && checklimitUser(sender) <= 0) return limithabis()
let postingan = await igstalk4(text)
let ig = postingan[Math.floor(Math.random() * postingan.length)]
sock.sendMessage(from, { image: { url: `${ig.gambar}` }, caption: ig.deskripsi }, { quoted: m })
confirmlimit(sender, 1) // Memakai 1 limit
} catch (err) {
reply(`Postingan tidak ditemukan`)
}
}
break
        case 'menu':
        case 'help': {
        let fotoProfil = await genProfile(sock, m)
        let yes = await sock.sendMessage(m.chat, { image: await resize(fotoProfil, 480, 270), caption: teksmenuall, mentions: parseMention(teksmenuall) })
        if (!m.isGroup) {
        await sock.sendMessage(m.sender, listmsgmenu, { quoted: yes })
        }
        }
        break
        case 'tes': // Cek data dari website agar mempermudah dalam membuat scraper
const resp = await axios.get(
  "https://guardiantales.com/news", // Kalau mau ganti link, tempatnya di sini
  {}
 );
 console.log(resp.data);
 reply(util.format(resp.data))
        break
case 'notifdaftar':
if (args[0] === 'off') {
  if (global.db.pengguna[m.sender].notifdaftar) return reply('Sudah nonaktif sebelumnya')
  global.db.pengguna[m.sender].notifdaftar = true
  reply('Berhasil menonaktifkan peringatan daftar')
  } else if (args[0] === 'on') {
  if (!global.db.pengguna[m.sender].notifdaftar) return reply('Sudah aktif sebelumnya')
  global.db.pengguna[m.sender].notifdaftar = false
  reply('Berhasil mengaktifkan peringatan daftar')
  } else {
  salahcoy()
  }
break
case 'notifsholat':
if (args[0] === 'grup') {
if (!m.isGroup) return untukgc()
  if (jadwalsholat.includes(m.chat)) {
    reply('Berhasil (fitur mati)')
    jadwalsholat.splice(jadwalsholat.indexOf(m.chat), 1)
    fs.writeFileSync('./database/jadwalsholat.json', JSON.stringify(jadwalsholat))
  } else {
  jadwalsholat.push(m.chat)
  fs.writeFileSync('./database/jadwalsholat.json', JSON.stringify(jadwalsholat))
  reply('Berhasil mengaktifkan (fitur hidup)')
  }
  } else if (args[0] === 'private') {
if (m.isGroup) return untukpc()
  if (jadwalsholat.includes(m.chat)) {
    reply('Berhasil (fitur mati)')
    jadwalsholat.splice(jadwalsholat.indexOf(m.chat), 1)
    fs.writeFileSync('./database/jadwalsholat.json', JSON.stringify(jadwalsholat))
  } else {
  jadwalsholat.push(m.chat)
  fs.writeFileSync('./database/jadwalsholat.json', JSON.stringify(jadwalsholat))
  reply('Berhasil mengaktifkan (fitur hidup)')
  }
  } else {
  salahcoy()
  }
break
case 'infoanim':
if (args[0] === 'grup') {
if (!m.isGroup) return untukgc()
  if (animeingfo.includes(m.chat)) {
    reply('Berhasil (fitur mati)')
    animeingfo.splice(animeingfo.indexOf(m.chat), 1)
    fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  } else {
  animeingfo.push(m.chat)
  fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  reply('Berhasil mengaktifkan (fitur hidup)')
  }
  } else if (args[0] === 'private') {
if (m.isGroup) return untukpc()
  if (animeingfo.includes(m.chat)) {
    reply('Berhasil (fitur mati)')
    animeingfo.splice(animeingfo.indexOf(m.chat), 1)
    fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  } else {
  animeingfo.push(m.chat)
  fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  reply('Berhasil mengaktifkan (fitur hidup)')
  }
  } else {
  salahcoy()
  }
break
            case 'addpesan': {
                if (!m.quoted) return reply(`Balas pesan yang ingin disimpan ke database`)
                if (!text) return kosong('nama pesan');
                if (text.toLowerCase() in dbPesan) return reply(`${text} sudah ada di database`)
                dbPesan[text.toLowerCase()] = quoted.fakeObj
                reply(`Berhasil menambahkan pesan ${text}\n\nAkses dengan ${prefix}getpesan ${text}\n\nUntuk melihat semua pesan yand disimpan di database, ketik ${prefix}listpesan`)
            }
            break
            case 'getpesan': {
                if (!text) return kosong('nama pesan');
                if (!(text.toLowerCase() in dbPesan)) return reply(`${text} tidak ada di pesan`)
                sock.copyNForward(m.chat, dbPesan[text.toLowerCase()], true)
            }
            break
            case 'listpesan': {
                let seplit = Object.entries(dbPesan).map(([nama, isi]) => { return { nama, ...isi } })
                let teks = '*LIST SEMUA PESAN*\n'
                for (let i of seplit) {
                teks += `\n*Nama:* ${i.nama}\n*Tipe pesan:* ${getContentType(i.message).replace(/Message/i, '')}\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delpesan': {
                if (!(text.toLowerCase() in dbPesan)) return reply(`${text} tidak ada di database`)
                delete dbPesan[text.toLowerCase()]
                fs.writeFileSync('./database.json', JSON.stringify(dbPesan))
                reply(`Berhasil menghapus ${text} dari database`)
            }
	    break
        case 'quotesanime': { // By FarelAE
  let ambilquotes = await quotesAnime()
  let quotesa = ambilquotes[Math.floor(Math.random() * ambilquotes.length)]
  let otakotaku = `*Anime:* ${quotesa.anime}\n*Karakter:* ${quotesa.karakter}\n*Episode:* ${quotesa.episode}\n*Quotes:* ~ ${quotesa.quotes}\n\n*Sumber:* ${quotesa.link}`
  let gambar = await getBuffer(quotesa.gambar)
  sock.sendMessageV2(from, { contextInfo: { externalAdReply: { showAdAttribution: true, title: `${namaBot}`, body: wm, previewType: 'PHOTO', thumbnail: gambar, sourceUrl: `${quotesa.link}` } }, text: otakotaku }, { quoted: m })
        }
        break
        case 'animeinfo': // By FarelAE
  let updateinfo = await animenews()
  let infoanime = updateinfo[Math.floor(Math.random() * updateinfo.length)]
  sock.sendMessage(from, { image: { url: infoanime.gambar }, caption: infoanime.deskripsi }, { quoted: m })
        break
 case 'cancelaki': case 'batalakinator': // By zidni
 if (!akinator[from]) return reply(`Tidak ada sesi game akinator, jika ingin bermain ketik ${prefix}akinator`)
 delete akinator[from]
 reply('Sesi game akinator dibatalkan')
 break
 case'akistart': case 'akinator': { // Jangan hapus we em ;v
       if (from in akinator) return reply(`Masih ada sesi game akinator yang sedang berlangsung`)
            await reply(`Game akinator akan segera dimulai...`)
            akinator[from] = new Aki({ region: "id", childMode: false })
            await akinator[from].start()
            let teks = `${akinator[from].question}\n\nPertanyaan Ke: ${akinator[from].currentStep}\nProgress: ${akinator[from].progress.toFixed(2)}%\n\n${teksakinator}`
            reply(teks)
            }
            break

/*
case 'ytmp3':
if (!isUrl) return reply(`Masukan link`)
try{
tunggu()
await sleep(1000)
let info = await ytdl.getInfo(text);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return reply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(text)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]	
if (res.timestamp.split(":") > "10") return reply(`Tidak bisa mendownload audio lebih dari 10 menit`)
}
downloadMp3(text) 
} catch (err){
console.log(err)
}
break
case 'ytmp4': {
if (!isUrl) return reply(`Masukan link`)
let info = await ytdl.getInfo(text);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if (Number(format.contentLength) > 40000000 ) return reply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if (format.contentLength == "undefined"){
var rus = await yts(text)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return reply(`Tidak bisa mendownload video lebih dari 10 menit`)
}
tunggu()
await sleep(1000)
downloadMp4(text)
}
break
*/

case 'ytmp3': {
if (!text) return gadalink()
if (text.match('watch')) return linkeror();
if (!text.includes('youtu.be') && !text.includes('youtube.com')) return linksalah()
try {
let yt = await youtubedlv2(text)
let get_iimg = await getBuffer(yt.thumbnail)
let linkytdl = await yt.audio['128kbps'].download()
if (yt.audio['128kbps'].fileSize > 10000) return m.reply(`Ukuran melebihi batas maksimal 10 MB\n\n*Link download*\n${linkytdl}`)
tunggu()
await sleep(1000)
sock.sendMessage(m.chat, { document: {url: linkytdl}, mimetype: 'audio/mpeg', fileName: `${yt.title}.mp3`,contextInfo: {externalAdReply: {title: `${yt.title}`, body: namaBot, mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: get_iimg}}}, {}).catch((e) => reply(String(e)))
} catch (err) {
reply(String(err))
}
}
break
case 'ytmp4': {
if (!text) return gadalink()
if (text.match('watch')) return linkeror();
if (!text.includes('youtu.be') && !text.includes('youtube.com')) return linksalah()
try {
let yt = await youtubedlv2(text)
let get_iimg = await getBuffer(yt.thumbnail)
let linkytdl = await yt.video['480p'].download() || await yt.video['360p'].download()
if (yt.video['480p'].fileSize > 20000) return m.reply(`Ukuran melebihi batas maksimal 20 MB\n\n*Link download*\n${linkytdl}`)
tunggu()
await sleep(1000)
sock.sendMessage(m.chat, { document: {url: linkytdl}, mimetype: 'video/mp4', fileName: `${yt.title}.mp4`,contextInfo: {externalAdReply: {title: `${yt.title}`, body: namaBot, mediaUrl: text, sourceUrl: text, mediaType: 2, showAdAttribution: true, thumbnail: get_iimg}}}, {}).catch((e) => reply(String(e)))
} catch (err) {
reply(String(err))
}
}
break
case 'setppbot': {
if (!isOwner) return untukowner()
if (isImage || isQuotedImage) {
if (text == 'full') {
const media = await sock.downloadAndSaveMediaMessage(quoted, makeid(5))
const { img } = await generateProfilePicture(media)
await sock.query({ tag: 'iq',  attrs: { to: botNumber, type: 'set', xmlns: 'w:profile:picture' }, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
berhasil()
} else {
let media = await sock.downloadAndSaveMediaMessage(quoted, makeid(5))
let data =  await sock.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
berhasil()
}
} else {
stiktutor2()
}
}
break
case 'kecepatan': { // Tes kecepatan jaringan tapi tidak sesuai kayaknya
      let old = new Date()
      let download = await getNetworkDownloadSpeed()
      async function getNetworkDownloadSpeed() {
         const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000'
         const fileSizeInBytes = 500000
         const speed = await test.checkDownloadSpeed(baseUrl, fileSizeInBytes)
         return speed
      }
      let upload = await getNetworkUploadSpeed()
      async function getNetworkUploadSpeed() {
         const options = {
            hostname: 'www.google.com',
            port: 80,
            path: os.tmpdir(),
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            }
         }
         const fileSizeInBytes = 2000000
         const speed = await test.checkUploadSpeed(options, fileSizeInBytes)
         return speed
      }
      // bps, kbps, mbps
      let text = '*Download:* ' + download.mbps + ' mbps\n'
      text += '*Upload:* ' + upload.mbps + ' mbps\n'
      text += '*Response:* ' + ((new Date - old) * 1) + ' ms'
      reply(text)
      }
break
            case 'speedtest': {
            reply('Testing speed...')
          let o
          try {
          o = await exec2('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
          case 'metastick': { // Stiker tidak bisa ditambahkan ke favorit
            let img = await quoted.download()
            let stiker = await addExif(img, namaBot, namaOwner)
            sock.sendMessage(from,{ sticker: stiker }, { quoted: m })
          }
            break
case 'ssweb':
if (!text) return gadalink()
if (!isUrl(args[0]) && !args[0].includes('www.')) return linkeror();
let apiflash = `9b9e84dfc18746d4a19d3afe109e9ea4` // Token coy, klo kagak ada mah ga bisa
let link = `https://api.apiflash.com/v1/urltoimage?access_key=${apiflash}&wait_until=page_loaded&url=${text}`
sock.sendMessage(from, {image: {url: link}, caption: `Source: https://api.apiflash.com/v1/`}, {quoted: m})
break
			case 'pinterest':
				if (!text) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
			    var jumlah;
			    if (text.includes('--')) jumlah = text.split('--')[1]
			    pinterest(text.replace('--'+jumlah, '')).then(async(data) => {
				  if (text.includes('--')) {
					if (data.result.length < jumlah) {
					  jumlah = data.result.length
					  reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
					}
					for (let i = 0; i < jumlah; i++) {
					  sock.sendMessage(from, { image: { url: data.result[i] }})
					}
				  }
				  if (text) {
					var but = [{buttonId: `${prefix}${command} ${text}`, buttonText: { displayText: 'Foto selanjutnya' }, type: 1 }]
					sock.sendMessage(from, { caption: `Hasil pencarian dari ${text}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				  }
				})
			    break
/*case 'join':{
if(!isOwner) return reply(mess.only.owner)
let link = q.startsWith("http")
if(!link) return reply(`Kirim perintah ${command} _linkgrup_`)
let Url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(ano)
reply("Sukses join group")
}
break*/
            case 'join': {
                if (!isOwner) return untukowner()
                if (!text) return gadalink()
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return linksalah()
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await sock.groupAcceptInvite(result)
                berhasil()
            }
            break
            case 'leave': {
                if (!isOwner) return untukowner()
                if (!m.isGroup) return untukgc()
                await sock.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            
//━━━━━━━━━━━━━━━[ ADVENTURE BY FARELAE ]━━━━━━━━━━━━━━━━━\\

case 'inventory':
case 'inv': {
let inv = `*I N V E N T O R Y*
------------------------------------------------------------------
*ITEM* (🎒)
------------------------------------------------------------------
[☕] Potion: ${checkPotionuser(sender)}
[🎟️] Tiket peliharaan: ${checkTiketPetUser(sender)}

[🐠] Ikan: ${checkIkanUser(sender)}                    [🪵] Kayu: ${checkKayuUser(sender)}
[🦀] Kepiting: ${checkKepitingUser(sender)}                    [🌳] Bibit pohon: ${checkBibitUser(sender)}
[🦐] Udang: ${checkUdangUser(sender)}                    [🗑️] Sampah: ${checkSampahUser(sender)}

[⛓️] Besi: ${checkBesiUser(sender)}
[🏅] Emas: ${checkEmasUser(sender)}
[🪨] Batu: ${checkBatuUser(sender)}
------------------------------------------------------------------
*PELIHARAAN* (🐾)
------------------------------------------------------------------
[${petkucing}️] Kucing (spesial): ${infopetk}
[🐺] Serigala: ${infopets}
[🐶] Anjing: ${infopeta}

(✏️) Nama: ${pemakai.namapet ? pemakai.namapet : 'Tidak diketahui'}
(❤️) Nyawa: ${infonyawapet}

(ℹ️) *Informasi penting:*
- Kamu hanya dapat memelihara 1 pet saja
- Jangan lupa beri makan pet setiap hari
- Nyawa pet sama saja dengan tingkat kenyang pet
------------------------------------------------------------------
*TOOLS* (🔧)
------------------------------------------------------------------
[🗡️] Pedang: ${infopdng}
[⛏️] Beliung: ${infopcke}
[🪓] Kapak: ${infokpak}
[🎣] Pancing: ${infopncing}

(ℹ️) *Informasi penting:*
- Tools akan berkurang -10% setiap pemakaian
- Tools tidak dapat dibeli apabila tools masih diatas 10%
------------------------------------------------------------------
*PETI HADIAH* (📦)
------------------------------------------------------------------
[💼] box_sedang: ${checkBoxSUser(sender)}
[📦] box_elit: ${checkBoxEUser(sender)}
[🎁] box_spesial: ${checkBoxLUser(sender)}
------------------------------------------------------------------
`
reply(inv)
}
break
case 'gacha': {
if (args[0]) return reply(`Cara penggunaan`)
if (args[0] === 'pet') {
const jumlah = 1
const jumlah2 = 100
if (checkPetKUser(sender) <= jumlah) return reply(`Hanya dapat memelihara 1 pet saja`)
if (checkPetSUser(sender) <= jumlah) return reply(`Hanya dapat memelihara 1 pet saja`)
if (checkPetAUser(sender) <= jumlah) return reply(`Hanya dapat memelihara 1 pet saja`)
if (checkTiketPetUser(sender) < jumlah) return reply(`Kamu tidak memiliki tiket peliharaan`)
let letakpetnya = ["anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala", "kucing", "anjing", "serigala", "anjing", "serigala", "anjing", "serigala"]
let dapatpet = letakpetnya[Math.floor(Math.random() * (letakpetnya.length))]
let gantipet = `${dapatpet.replace("kucing", "addPetKUser(sender, 1)").replace("serigala", "addPetSUser(sender, 1)").replace("anjing", "addPetAUser(sender, 1)")}`
return reply(util.format(JSON.stringify(eval(gantipet),null,'\t')).replace("undefined", `Seekor pet berhasil dipelihara`))
addNyawaPetUser(sender, jumlah2)
confirmTiketPet(sender, jumlah)
}
}
break
case 'peliharaan':
case 'pet': {
if (checkPetKUser(sender) <= jumlah) return reply(`Kamu tidak memiliki pet`)
if (checkPetSUser(sender) <= jumlah) return reply(`Kamu tidak memiliki pet`)
if (checkPetAUser(sender) <= jumlah) return reply(`Kamu tidak memiliki pet`)
if (args[0] === 'makan') {
if (!args[1]) return reply(`Cara penggunaan fitur ini salah, silahkan cek kembali`)
if (checkNyawaPetUser(sender) >= 100) return reply(`Ikan yang kamu gunakan terlalu banyak, energi maksimal pet hanya 100%`) 

let nypet = `50`
let payout = args[1]
let total = nypet * payout
let total2 = payout * 1
if (checkIkanUser(sender) <= total) return itemkurang(args[0])

addNyawaPetUser(sender, total)

confirmIkan(sender, total2)

berhasil()

} else if (args[0] === 'gacha') {
const jumlah = 1
const jumlah2 = 100
if (checkPetKUser(sender) >= jumlah) return reply(`Hanya dapat memelihara 1 pet kucing saja`)
if (checkPetSUser(sender) >= jumlah) return reply(`Hanya dapat memelihara 1 pet serigala saja`)
if (checkPetAUser(sender) >= jumlah) return reply(`Hanya dapat memelihara 1 pet anjing saja`)
if (checkTiketPetUser(sender) < jumlah) return reply(`Kamu tidak memiliki tiket peliharaan`)
let letakpetnya = ["anjing", "kucing", "anjing", "serigala", "anjing", "serigala", "kucing", "serigala", "kucing", "serigala", "anjing", "serigala", "anjing", "serigala", "kucing", "kucing", "anjing", "serigala", "anjing", "serigala", "kucing", "anjing", "serigala", "anjing", "kucing", "anjing", "serigala"]
let dapatpet = letakpetnya[Math.floor(Math.random() * (letakpetnya.length))]
let gantipet = `${dapatpet.replace("kucing", "addPetKUser(sender, 1)").replace("serigala", "addPetSUser(sender, 1)").replace("anjing", "addPetAUser(sender, 1)")}`
return reply(util.format(JSON.stringify(eval(gantipet),null,'\t')).replace("undefined", `Seekor pet berhasil dipelihara`))
addNyawaPetUser(sender, jumlah2)
confirmTiketPet(sender, jumlah)

} else if (args[0] === 'nama') {
if (!args[1]) return reply(`Contoh penggunaan:\n\nKetik ${prefix + command} nama pet`)
global.db.pengguna[m.sender].namapet = args[1]
} else {
const jumlah = 1
let tekspet = `
*KANDANG PELIHARAAN* (🏘️)
------------------------------------------------------------------
Informasi tentang peliharaan:
(✏️) Nama: ${pemakai.namapet ? pemakai.namapet : 'Tidak diketahui'}
(❤️) Nyawa: ${infonyawapet}
------------------------------------------------------------------
Jenis peliharaan yang kamu miliki:
[${petkucing}️] Kucing (spesial): ${infopetk}
[🐺] Serigala: ${infopets}
[🐶] Anjing: ${infopeta}
------------------------------------------------------------------
*C O M M A N D*
------------------------------------------------------------------
1. makan <jumlah ikan>
(membutuhkan 3 ikan untuk 50% nyawa pet)
2. gacha
(membutuhkan tiket peliharaan)
3. nama <nama pet>

Tanda < dan > tidak usah diikuti karena cuma sebagai pembatas saja

(ℹ️) *Contoh penggunaan:*
- ${prefix}peliharaan makan 1
------------------------------------------------------------------
`
let daftarvid = ["1", "2", "3", "4"]
let acakvid = daftarvid[Math.floor(Math.random() * (daftarvid.length))]
let gambarpet = fs.readFileSync(`./asset/kucing/${acakvid}.mp4`)
sock.sendMessage(m.chat, { video: gambarpet, caption: tekspet}, { quoted: m })
}
}
break
case 'adventure':
case 'rpg': {
if (checkHealuser(sender) < 10) return reply(`Nyawa kamu kurang dari 10\nUntuk bermain, player harus memiliki nyawa 10 keatas`)
if (checkPedangUser(sender) < 10) return reply(`Pedang kamu kurang dari 10%\nUntuk bermain, player harus memiliki pedang 10% keatas`)
const dapatuang = Math.ceil(Math.random() * 100)
const dapatxp = Math.ceil(Math.random() * 500)
const dapatpotion = Math.ceil(Math.random() * 5)
const dapatpeti = Math.ceil(Math.random() * 5)

const acakpeti = ["0","1","0","02","0","3","0","4","0","5","0","0","1","0","1","0"]
const hasilpeti = acakpeti[Math.floor(Math.random() * (acakpeti.length))]
// const dapatpeti = hasilpeti * 1

// Nyawa berkurang 10
const kurangnyawa = 10

reply('Tunggu sebentar...')
setTimeout(() => {
reply('Sedang mencari monster...')
}, 1000)
setTimeout(() => {
reply('Kamu menemukan seekor monster, dan mulai membunuhnya\n\nTunggu sebentar...')
}, 10000)
setTimeout(() => {
let menang = `(🗡) *ADVENTURE* (🗡)

Kamu telah mengalahkan monster dan mendapatkan:
(💵) Uang: ${dapatuang}
(✨) EXP: ${dapatxp}
(☕) Potion: ${dapatpotion}
(💼) box_sedang: ${dapatpeti}

Tidak hanya mendapatkan hadiah, beberapa tools dan energi kamu berkurang karena kamu telah melawan monster

Tools dan energi yang berkurang:
(❤️) Energi: -${kurangnyawa}
(🗡️) Pedang: -10%
`
reply(menang)
}, 15000) 

// Hadiah yang didapat
adduangUser(sender, dapatuang)
addLevelingXp(sender, dapatxp)
addPotionUser(sender, dapatpotion)
addBoxSUser(sender, dapatpeti)

// Waduh berkurang
confirmHEAL(sender, kurangnyawa)
confirmPedang(sender, 10)

// Mini boss
if (levelRole <= 500) {

let gmbrmusuh = fs.readFileSync(`./asset/rpg/musuh1.jpeg`) // Gambar bos/musuh
let infomusuh = `⚠️ *BOS LEVEL* ⚠️

Menemukan bos di level ${levelRole}
(✒️) Nama: Ayanokoutod
(❓) Kemampuan: mengelabuhi player, dengan sifatnya yang dingin🥶
(❤) ️Energi: 20

Apakah kamu ingin melawan?
pencet tombol *Ayo aja gw mah* untuk melawan

ℹ️ Catatan:
Disarankan menggunakan potion terlebih dahulu sebelum melawan bos, jika nyawa bos lebih besar dari nyawa player, maka bos yang akan memenangkan pertarungan.
`
setTimeout(() => {
reply('Mencari bos...')
}, 17000)

setTimeout(() => {
                let buttons = [
                    {buttonId: `${prefix}lawan ayano`, buttonText: {displayText: `Ayo aja gw mah😎`}, type: 1},
                    {buttonId: `yasudah`, buttonText: {displayText: `Mamah aku takut😭`}, type: 1}
                ]
                let buttonMessage = {
                    image: gmbrmusuh,
                    caption: infomusuh,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                sock.sendMessage(m.chat, buttonMessage)
}, 20000)

} else if (levelRole <= 1000) {

let gmbrmusuh = fs.readFileSync(`./asset/rpg/musuh2.jpeg`) // Gambar bos/musuh
let infomusuh = `⚠️ *BOS LEVEL* ⚠️

Menemukan bos di level ${levelRole}
(✒️) Nama: beliau Aizen
(❓) Kemampuan: ahlinya mengkritik orang, AWAAS, KENA SATIR!!!
(❤) ️Energi: 40

Apakah kamu ingin melawan?
pencet tombol *Ayo aja gw mah* untuk melawan

ℹ️ Catatan:
Disarankan menggunakan potion terlebih dahulu sebelum melawan bos, jika nyawa bos lebih besar dari nyawa player, maka bos yang akan memenangkan pertarungan.
`
setTimeout(() => {
reply('Mencari bos...')
}, 17000)

setTimeout(() => {
                let buttons = [
                    {buttonId: `${prefix}lawan ayano`, buttonText: {displayText: `Ayo aja gw mah😎`}, type: 1},
                    {buttonId: `yasudah`, buttonText: {displayText: `Mamah aku takut😭`}, type: 1}
                ]
                let buttonMessage = {
                    image: gmbrmusuh,
                    caption: infomusuh,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                sock.sendMessage(m.chat, buttonMessage)
}, 20000)

} else if (levelRole <= 5000) {

} else if (levelRole <= 10000) {

} else if (levelRole <= 50000) {

} else {
}
}
break
case 'mancing': {
if (checkHealuser(sender) < 10) return reply(`Nyawa kamu kurang dari 10\nUntuk bermain, player harus memiliki nyawa 10 keatas`)
if (checkPancingUser(sender) < 10) return reply(`Pancing kamu kurang dari 10%\nUntuk bermain, player harus memiliki pancing 10% keatas`)
if (checkPancingUser(sender) <= 0) return reply(`Kamu tidak memiliki pancingan, sikahkan beli terlebih dahulu`)
const dapatikan = Math.ceil(Math.random() * 10)
const dapatkepiting = Math.ceil(Math.random() * 5)
const dapatudang = Math.ceil(Math.random() * 3)
let txtberlayar = `(🎣) *MEMANCING* (🎣)

Kamu berhasil memancing ikan dan menangkap hewan laut lainnya, kamu mendapatkan:

[🐠] Ikan: ${dapatikan}
[🦀] Kepiting: ${dapatkepiting}
[🦐] Udang: ${dapatudang}

Catatan (ℹ️)
Hewan laut yang telah kamu dapatkan bisa ditukarkan menjadi uang/dijual
`
await sleep(1000)
reply(txtberlayar)

// Bertambah
addIkanUser(sender, dapatikan)
addKepitingUser(sender, dapatkepiting)
addUdangUser(sender, dapatudang)

// Berkurang
confirmPancing(sender, 10)
confirmHEAL(sender, 10)
}
break
case 'nebang': {
if (checkHealuser(sender) < 10) return reply(`Nyawa kamu kurang dari 10\nUntuk bermain, player harus memiliki nyawa 10 keatas`)
if (checkKapakUser(sender) < 10) return reply(`Kapak kamu kurang dari 10%\nUntuk bermain, player harus memiliki kapak 10% keatas`)
if (checkKapakUser(sender) <= 0) return reply(`Kamu tidak memiliki kapak, sikahkan beli terlebih dahulu`)
const dapatkayu = Math.ceil(Math.random() * 3)
const dapatbibit = Math.ceil(Math.random() * 5)
const dapatsampah = Math.ceil(Math.random() * 10)
let txtnebang = `(🪓) *MENEBANG POHON* (🪓)

Kamu selesai menebang pohon dan mendapatkan hasil:

[🪵] Kayu: ${dapatkayu}
[🌳] Bibit pohon: ${dapatbibit}
[🗑️] Sampah: ${dapatsampah}

Catatan (ℹ️)
Hasil yang telah kamu dapatkan bisa ditukarkan menjadi uang/dijual
`

await sleep(1000)
reply(txtnebang)

// Bertambah
addKayuUser(sender, dapatkayu)
addBibitUser(sender, dapatbibit)
addSampahUser(sender, dapatsampah)

// Berkurang
confirmKapak(sender, 10)
confirmHEAL(sender, 10)
}
break
case 'nambang': {
if (checkHealuser(sender) < 10) return reply(`Nyawa kamu kurang dari 10\nUntuk bermain, player harus memiliki nyawa 10 keatas`)
if (checkBeliungUser(sender) < 10) return reply(`Beliung kamu kurang dari 10%\nUntuk bermain, player harus memiliki beliung 10% keatas`)
if (checkBeliungUser(sender) <= 0) return reply(`Kamu tidak memiliki beliung, sikahkan beli terlebih dahulu`)
const dapatbesi = Math.ceil(Math.random() * 5)
const dapatemas = Math.ceil(Math.random() * 3)
const dapatbatu = Math.ceil(Math.random() * 10)
let txtnambang = `(⛏️) *MENAMBANG* (⛏️)

Kamu selesai menambang dan mendapatkan hasil:

[⛓️] Besi: ${dapatbesi}
[🏅] Emas: ${dapatemas}
[🪨] Batu: ${dapatbatu}

Catatan (ℹ️)
Hasil yang telah kamu dapatkan bisa ditukarkan menjadi uang/dijual
`

await sleep(1000)
reply(txtnambang)

// Bertambah
addBesiUser(sender, dapatbesi)
addEmasUser(sender, dapatemas)
addBatuUser(sender, dapatbatu)

// Berkurang
confirmBeliung(sender, 10)
confirmHEAL(sender, 10)
}
break
case 'lawan': {
const txtlawan = `Mau lawan bos apa?

- Ayano
Nyawa: 20

- Aizen
Nyawa: 40
------------------------------------------------------------------
Cara penggunaan:
Ketik ${prefix}lawan <nama bos>

Tanda < > tidak usah diikuti karena cuma sebagai pembatas saja
------------------------------------------------------------------
ℹ️ Catatan:
Disarankan menggunakan potion terlebih dahulu sebelum melawan bos, jika nyawa bos lebih besar dari nyawa player, maka bos yang akan memenangkan pertarungan.`
if (!args[0]) return reply(txtlawan)
if (args[0] === 'ayano') {

if (checkHealuser(sender) < 10) return reply(`Kamu melarikan diri dari pertarungan... karena musuh terlalu kuat😅\n\n*Nyawa kamu belum memenihi persyaratan* 💀`)
if (checkPedangUser(sender) < 10) return reply(`Pedang kamu kurang dari 10%\nUntuk bermain, player harus memiliki pedang 10% keatas`)
const nyawalawan = 20
if (checkHealuser(sender) > nyawalawan) {
const dapatxp = Math.ceil(Math.random() * 500)
const dapatpotion = Math.ceil(Math.random() * 5)
const kuranguang = Math.ceil(Math.random() * 100)
const dapatpeti = Math.ceil(Math.random() * 3)
setTimeout(() => {
reply('Sedang brtarung...')
}, 1000)
setTimeout(() => {
reply(`
Selamat kamu menang pertarungan🎉
dan kamu mendapatkan:

(✨) EXP: ${dapatxp}
(☕) Potion: ${dapatpotion}
(📦) box_elit: ${dapatpeti}

(ℹ️) Info:
Nyawa dan pedang kamu tidak akan berkurang karena kamu telah memenangkan pertarungan.
`)
}, 15000)

// Hadiah
addLevelingXp(sender, dapatxp)
addPotionUser(sender, dapatpotion)
addBoxEUser(sender, dapatpeti)
}
if (checkHealuser(sender) < nyawalawan) {
reply(`
Kamu kalah dalam pertarungan😭
lawan merampas harta yang kamu miliki yaitu:

(💵) Uang: -${kuranguang}
(☕) Potion: -${dapatpotion}
(🗡️) Pedang: -10%

*Catatan:*
Energi kamu juga berkurang sebesar 10 energi

Uang dan potion kamu akan aman jika yang kamu miliki kurang dari:
- Uang: ${kuranguang}
- Potion: ${dapatpotion}
`)

// Berkurang
if (checkuangUser(sender) > kuranguang) return confirmuang(sender, kuranguang)
confirmHEAL(sender, 10)
if (checkPotionuser(sender) > dapatpotion) return confirmPOTION(sender, dapatpotion)
confirmPedang(sender, 10)
}

} else if (args[0] === 'aizen') {

if (checkHealuser(sender) < 10) return reply(`Kamu melarikan diri dari pertarungan... karena musuh terlalu kuat😅\n\n*Nyawa kamu belum memenihi persyaratan* 💀`)
if (checkPedangUser(sender) < 10) return reply(`Pedang kamu kurang dari 10%\nUntuk bermain, player harus memiliki pedang 10% keatas`)
const nyawalawan = 40
if (checkHealuser(sender) > nyawalawan) {
const dapatxp = Math.ceil(Math.random() * 5000)
const dapatpotion = Math.ceil(Math.random() * 10)
const kuranguang = Math.ceil(Math.random() * 100)
const dapatpeti = Math.ceil(Math.random() * 5)
const kurangpotion = Math.ceil(Math.random() * 5)
setTimeout(() => {
reply('Sedang brtarung...')
}, 1000)
setTimeout(() => {
reply(`
Selamat kamu menang pertarungan🎉
dan kamu mendapatkan:

(✨) EXP: ${dapatxp}
(☕) Potion: ${dapatpotion}
(📦) box_elit: ${dapatpeti}

(ℹ️) Info:
Nyawa dan pedang kamu tidak akan berkurang karena kamu telah memenangkan pertarungan.
`)
}, 15000)

// Hadiah
addLevelingXp(sender, dapatxp)
addPotionUser(sender, dapatpotion)
addBoxEUser(sender, dapatpeti)
}
if (checkHealuser(sender) < nyawalawan) {
reply(`
Kamu kalah dalam pertarungan😭
lawan merampas harta yang kamu miliki yaitu:

(💵) Uang: -${kuranguang}
(☕) Potion: -${kurangpotion}
(🗡️) Pedang: -10%

*Catatan:*
Energi kamu juga berkurang sebesar 10 energi

Uang dan potion kamu akan aman jika yang kamu miliki kurang dari:
- Uang: ${kuranguang}
- Potion: ${kurangpotion}
`)

// Berkurang
if (checkuangUser(sender) > kuranguang) return confirmuang(sender, kuranguang)
confirmHEAL(sender, 10)
if (checkPotionuser(sender) > kurangpotion) return confirmPOTION(sender, kurangpotion)
confirmPedang(sender, 10)
}
} else {
reply(txtlawan)
}
}
break
            case 'profile': {
let textprofile = `
------------------------------------------------------------------
[ *PROFILE PENGGUNA* ]
------------------------------------------------------------------
[✒️] *Nama:* ${pushname}
[👤] *Tag:* @${sender.split("@")[0]}
[💞] *Premium:* ${isPremium ? 'iya' : 'tidak'}
[🔰] *Status:* ${status}
[💵] *Uang:* ${checkuangUser(sender)}
[💳️] *Limit:* ${checklimitUser(sender)}
[✨] *EXP:* ${getLevelingXp(sender)}/${reqXp}
[📊] *Level:* ${getLevelingLevel(sender)}
[🏅] *Rank:* ${role}
[❤️] *Energi:* ${checkHealuser(sender)}
(${heartbars})
------------------------------------------------------------------
`
              sock.sendMessage(m.chat, { text: textprofile, mentions: parseMention(textprofile) }, { quoted: m })
            }
            break
            case 'leaderboard':
            case 'lb': {
              uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
              limit.sort((a, b) => (a.limit < b.limit) ? 1 : -1)
              let leaderboarduang = '-----[ *LEADERBOARD UANG* (💵) ]-----\n\n'
              let leaderboardlimit = '-----[ *LEADERBOARD LIMIT* (💳️) ]-----\n\n'
              try {
                for (let i = 0; i < 10; i++) {
                  leaderboarduang += `@${uang[i].id.split('@')[0]}\n[💵] Uang: ${uang[i].uang}\n\n`
                  leaderboardlimit += `@${limit[i].id.split('@')[0]}\n[💳️] Limit: ${limit[i].limit}\n\n`
                }
                sock.sendMessage(m.chat, { text: leaderboarduang, mentions: parseMention(leaderboarduang) }, { quoted: m })
                await sleep(1000) // Kasih delay biar gak nge spam
                sock.sendMessage(m.chat, { text: leaderboardlimit, mentions: parseMention(leaderboarduang) }, { quoted: m })
              } catch (err) {
                reply(`Minimal 10 pengguna bot terdaftar di database, agar bisa mengakses leaderboard`)
              }
            }
            break
            // Leaderboard versi wa.me/simple
            /*case 'leaderboard':
            case 'lb': {
              uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
              limit.sort((a, b) => (a.limit < b.limit) ? 1 : -1)
              let leaderboarduang = '-----[ *LEADERBOARD UANG* ]-----\n\n'
              let leaderboarlimit = '-----[ *LEADERBOARD LIMIT* ]-----\n\n'
              let nom = 0
              try {
                for (let i = 0; i < 10; i++) {
                  leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\nUang: ${uang[i].uang}\n`
                  leaderboardlimit += `*[${nom}]* wa.me/${limit[i].id.replace('@s.whatsapp.net', '')}\nUang: ${limit[i].limit}\n`
                }
                reply(leaderboarduang)
                reply(leaderboarlimit)
              } catch (err) {
                reply(`Minimal 10 user terdaftar di database, untuk bisa mengakses leaderboard`)
              }
            }
            break*/
case 'claim': {
const cooldown = 86400000
    let user = global.db.pengguna[m.sender]
    let __timers = (new Date - user.lastclaim)
    let _timers = (cooldown - __timers)
    let timers = clockString(_timers)
    if (new Date - user.lastclaim > cooldown) {
    addlimitUser(sender, 20)
    adduangUser(sender, 100)
    reply(`Berhasil claim 20 limit harian dan uang sebesar RP.500`)
        global.db.pengguna[m.sender].lastclaim = new Date * 1
    } else {
        reply(`Silahkan tunggu *${timers}* untuk bisa claim lagi`)
    }
}
break
case 'buka':
case 'open': {
if (!args[0]) return reply(`Cara penggunaan:\nKetik ${prefix}buka <nama box>\n\nTanda < > tidak usah diikuti karena cuma sebagai pembatas saja\n\nList box yang bisa kamu ambil hadiahnya:\n\n[💼] box_sedang:\n[📦] box_elit:\n[🎁] box_spesial:`)
if (args[0] == "box_sedang") {
// deteksi punya box ato tdk
const jumlah = 1
if (checkBoxSUser(sender) < jumlah) return reply(`Kamu tidak memiliki box_sedang`)
let data = fs.readFileSync('./lib/box-sedang.js');
let jsonData = JSON.parse(data);
let randIndex = Math.floor(Math.random() * jsonData.length);
let randKey = jsonData[randIndex];
let pu = `${randKey.result.hadiah}`
// mengurangi box
confirmBoxS(sender, jumlah)
reply(pu)
return reply(util.format(JSON.stringify(eval(randKey.result.add),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
return reply(util.format(JSON.stringify(eval(randKey.result.add2),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
return reply(util.format(JSON.stringify(eval(randKey.result.add3),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
} else if (args[0] == "box_elit") {
// deteksi punya box ato tdk
const jumlah = 1
if (checkBoxEUser(sender) < jumlah) return reply(`Kamu tidak memiliki box_elit`)
let data = fs.readFileSync('./lib/box-elit.js');
let jsonData = JSON.parse(data);
let randIndex = Math.floor(Math.random() * jsonData.length);
let randKey = jsonData[randIndex];
let pu = `${randKey.result.hadiah}`
// mengurangi box
confirmBoxE(sender, jumlah)
reply(pu)
return reply(util.format(JSON.stringify(eval(randKey.result.add),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
return reply(util.format(JSON.stringify(eval(randKey.result.add2),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
return reply(util.format(JSON.stringify(eval(randKey.result.add3),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
} else if (args[0] == "box_spesial") {
// deteksi punya box ato tdk
const jumlah = 1
if (checkBoxEUser(sender) < jumlah) return reply(`Kamu tidak memiliki box_spesial`)
let data = fs.readFileSync('./lib/box_spesial.js');
let jsonData = JSON.parse(data);
let randIndex = Math.floor(Math.random() * jsonData.length);
let randKey = jsonData[randIndex];
let pu = `${randKey.result.hadiah}`
// mengurangi box
confirmBoxE(sender, jumlah)
reply(pu)
return reply(util.format(JSON.stringify(eval(randKey.result.add),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
return reply(util.format(JSON.stringify(eval(randKey.result.add2),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
return reply(util.format(JSON.stringify(eval(randKey.result.add3),null,'\t')).replace("undefined", 'Hadiah berhasil ditambahkan'))
}
}
break
		 case 'transfer':
		 case 'tf': {
		 if (!args[0]) return reply(`Cara penggunaan`)
		   if (!m.isGroup) return untukgc()
			  if (args[0] === 'uang') {
              const tujuan = text.substring(0, text.indexOf('|') - 1)
              const jumblah = text.substring(text.lastIndexOf('|') + 1)
			  const jumblah2 = jumblah * 1
              if (isNaN(jumblah)) return harusangka()
              if (jumblah < 5000 ) return reply(`Minimal transfer 5000`)
              if (checkuangUser(sender) < jumblah) return reply(`Uang kamu tidak mencukupi untuk melakukan transfer`)
              const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
              adduangUser(tujuantf, jumblah2)
              confirmuang(sender, jumblah)
              berhasil()
              } else if (args[0] === 'limit') {
              }
              }
              break
		 case 'use':
		 case 'gunakan': {
		 if (!args[0]) return reply(`Cara penggunaan:\nKetik ${prefix}use <item> <jumlah>\n\nTanda < > tidak usah diikuti karena cuma sebagai pembatas saja\n\nList item yang dapat digunakan:\n\n[☕] Potion`)
		 if (!args[1]) return reply(`Cara penggunaan:\nKetik ${prefix}use <item> <jumlah>\n\nTanda < > tidak usah diikuti karena cuma sebagai pembatas saja\n\nList item yang dapat digunakan:\n\n[☕] Potion`)
		   if (args[0] === 'potion') {
				if (args.length == 1) return harusangka()
                let payout = args[1]
				const payoutusepotion = `${payout}`
				if (isNaN(payout)) return await harusangka()
				const totalheal = payoutusepotion * 1
				const totalheal2 = healperPotion * payoutusepotion
				if (checkPotionuser(sender) <= 0) return itemkurang(args[0])
				if (checkHealuser(sender) >= 100) return reply(`Potion yang kamu gunakan terlalu banyak, energi maksimal hanya 100`) 
				confirmPOTION(sender, totalheal)
				addHealUser(sender, totalheal2)
				await reply(`
🎉 *SUKSES* 🎉

Potion dipakai: ${totalheal}
Info: ${healperPotion}/Heal
Energi: ${checkHealuser(sender)}
`)
		   } else{
		   reply(`Cara penggunaan:\nKetik ${prefix}use <item> <jumlah>\n\nTanda < > tidak usah diikuti karena cuma sebagai pembatas saja\n\nList item yang dapat digunakan:\n\n[☕] Potion`)
		   }
}
break
case 'jual':
case 'sell': {
if (args[0] === 'ikan') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargaikan * payout
let total2 = payout * 1
if (checkIkanUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmIkan(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'kepiting') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargakepiting * payout
let total2 = payout * 1
if (checkKepitingUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmKepiting(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'udang') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargaudang * payout
let total2 = payout * 1
if (checkUdangUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmUdang(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'kayu') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargakayu * payout
let total2 = payout * 1
if (checkKayuUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmKayu(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'bibit kayu') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargabibit * payout
let total2 = payout * 1
if (checkBibitUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmBibit(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'sampah') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargasampah * payout
let total2 = payout * 1
if (checkSampahUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmSampah(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'besi') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargabesi * payout
let total2 = payout * 1
if (checkBesiUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmBesi(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'emas') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargaemas * payout
let total2 = payout * 1
if (checkEmasUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmEmas(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else if (args[0] === 'batu') {
if (args.length == 0) return harusangka()
let payout = args[1]
let total = hargabatu * payout
let total2 = payout * 1
if (checkBatuUser(sender) <= total) return itemkurang(args[0])
adduangUser(sender, total)
confirmBatu(sender, total2)
let penjualan = `*Berhasil menjual ${args[0]}*\n\nHarga ${args[0]}: ${total}\nJumlah dijual: ${payout}`
reply(penjualan)
} else {
reply(`
*HARGA JUAL ITEM* (ℹ️)
------------------------------------------------------------------
[🐠] Ikan: ${hargaikan}                    [🪵] Kayu: ${hargakayu}
[🦀] Kepiting: ${hargakepiting}                    [🌳] Bibit kayu: ${hargabibit}
[🦐] Udang: ${hargaudang}                    [🗑️] Sampah: ${hargasampah}

[⛓️] Besi: ${hargabesi}
[🏅] Emas: ${hargaemas}
[🪨] Batu: ${hargabatu}
------------------------------------------------------------------

[❗] *Cara penggunaan:*
Ketik ${prefix}${command} [item yang mau di jual] [jumlah]

[❗] *Catatan:*
Tanda [ dan ] tidak usah diikuti karena cuma sebagai pembatas atau contoh saja
`)
}
}
break
		 case 'beli':
		 case 'buy': {
		   // if (!args[0]) return reply(`Mau beli apa??`)
		   if (args[0] === 'limit') {
              if (args.length == 0) return harusangka()
              let payout = args[1]
              let total = hargalimit * payout
              let total2 = payout * 1
              if (checkuangUser(sender) <= total) return uangkurang()
              confirmuang(sender, total)
              addlimitUser(sender, total2)
              berhasil()
              } else if (args[0] === 'pedang') {
              let payout = 100
              let total = hargatools1 * payout
              let total2 = payout * 1
              if (checkPedangUser(sender) >= 100) return reply(`${args[0]} kamu sudah maksimal`) 
              if (checkuangUser(sender) <= total) return uangkurang()
              confirmuang(sender, total)
              addPedangUser(sender, total2)
              berhasil()
              } else if (args[0] === 'beliung') {
              let payout = 100
              let total = hargatools1 * payout
              let total2 = payout * 1
              if (checkBeliungUser(sender) >= 100) return reply(`${args[0]} kamu sudah maksimal`) 
              if (checkuangUser(sender) <= total) return uangkurang()
              confirmuang(sender, total)
              addBeliungUser(sender, total2)
              berhasil()
              } else if (args[0] === 'kapak') {
              let payout = 100
              let total = hargatools1 * payout
              let total2 = payout * 1
              if (checkKapakUser(sender) >= 100) return reply(`${args[0]} kamu sudah maksimal`) 
              if (checkuangUser(sender) <= total) return uangkurang()
              confirmuang(sender, total)
              addKapakUser(sender, total2)
              berhasil()
		      } else if (args[0] === 'potion') {
              if (args.length == 0) return harusangka()
              let payout = args[1]
              let total = hargapotion * payout
              let total2 = payout * 1
              if (checkuangUser(sender) <= total) return uangkurang()
              confirmuang(sender, total)
              addPotionUser(sender, total2)
              berhasil()
		      } else if (args[0] === 'pancing') {
              if (args.length == 0) return harusangka()
              let payout = 100
              let total = hargatools1 * payout
              let total2 = payout * 1
              if (checkuangUser(sender) <= total) return uangkurang()
              confirmuang(sender, total)
              addPancingUser(sender, total2)
              berhasil()
              } else {
              reply(`
Hai kak ${pushname}
berikut adalah item-item yang di jual di sini:

------------------------------------------------------------------
*T O O L S*
------------------------------------------------------------------
- Pedang (🗡️)
- Beliung (⛏️)
- Kapak (🪓)
- Pancing (🎣)

ℹ️ *Dengan harga:* 100 uang
------------------------------------------------------------------
*L A I N - L A I N*
------------------------------------------------------------------
[💳️] Limit: ${hargalimit}
[☕] Potion: ${hargapotion}
------------------------------------------------------------------

[❗] *Cara penggunaan:*
Ketik ${prefix}${command} [item yang mau di beli] [jumlah]

khusus utuk pembelian tools tidak disertai dengan jumlah item
contoh: ${command} [tools yang mau di beli]

[❗] *Catatan:*
Tanda [ dan ] tidak usah diikuti karena cuma sebagai pembatas atau contoh saja
`)
              }
            }
            break

//━━━━━━━━━━━━━━━[ BATAS ADVENTURE ]━━━━━━━━━━━━━━━━━\\

case 'setwelcome': {
if (!m.isGroup) return untukgc()
if (!isBotAdmins) return botbknadmin()
if (!isAdmins && !isOwner) return untukadmin()
if (!text) return kosong('Selamat datang @user');
global.db.pengguna[m.chat].setWelcome = text
berhasil()
}
break

case 'cekwelcome': {
if (!m.isGroup) return untukgc()
if (!isBotAdmins) return botbknadmin()
if (!isAdmins && !isOwner) return untukadmin()
let chat = global.db.pengguna[from]
let text = chat.setWelcome ? chat.setWelcome : '*Selamat datang di grup @subject*\n─────────────────\n*Nama: @user*\n*Pada: @tanggal*\n\n*Jangan lupa baca rules/deskripsi grup*\n─────────────────\n@desc'
reply('*CEK CAPTION WELCOME*\n\n' + text)
}
break

case 'delwelcome': {
if (!m.isGroup) return untukgc()
if (!isBotAdmins) return botbknadmin()
if (!isAdmins && !isOwner) return untukadmin()
global.db.pengguna[from].setWelcome = ''
berhasil()
}
break
            
case 'setleave': {
if (!m.isGroup) return untukgc()
if (!isBotAdmins) return botbknadmin()
if (!isAdmins && !isOwner) return untukadmin()
if (!text) return kosong('Selamat tinggal @user');
global.db.pengguna[m.chat].setLeave = text
berhasil()
}
break

case 'cekleave': case 'cekleft': {
if (!m.isGroup) return untukgc()
if (!isBotAdmins) return botbknadmin()
if (!isAdmins && !isOwner) return untukadmin()
let chat = global.db.pengguna[from]
let text = chat.setLeave ? chat.setLeave : '*Sayonara* 👋\n─────────────────\n*Nama: @user*\n*Pada: @tanggal*\n\nTelah meninggalkan grup @subject'
reply('*CEK CAPTION LEAVE*\n\n' + text)
}
break

case 'delleave': case 'delleft': {
if (!m.isGroup) return untukgc()
if (!isBotAdmins) return botbknadmin()
if (!isAdmins && !isOwner) return untukadmin()
global.db.pengguna[from].setLeave = ''
berhasil()
}
break

       case 'premium': // format waktunya menggunakan modul ms
              if (!isOwner) return untukowner()
              try {
              if (args[0] === 'tambah') {
              if (m.message.extendedTextMessage != undefined) {
              let mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid

              premiumnya.addPremiumUser(mentioned[0], args[2], premium)
              reply(`*TAMBAH PREMIUM*\n\nNomor: ${mentioned[0]}\nWaktu: ${ms(toMs(args[2])).days} hari ${ms(toMs(args[2])).hours} jam ${ms(toMs(args[2])).minutes} menit`)
                        
              } else {
                            
              premiumnya.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
              reply(`*TAMBAH PREMIUM*\n\nNomor: ${args[1]}@s.whatsapp.net\nWaktu: ${ms(toMs(args[2])).days} hari ${ms(toMs(args[2])).hours} jam ${ms(toMs(args[2])).minutes} menit`)
              }
              } else if (args[0] === 'hapus') {
              if (m.message.extendedTextMessage != undefined) {
              mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
              premium.splice(premiumnya.getPremiumPosition(mentioned[0], premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
              berhasil()
              } else {
              premium.splice(premiumnya.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
              berhasil()
              }
              } else {
              salahcoy()
              }
              } catch (err) {
              salahcoy()
              }
              break
       case 'premiumcheck':
       case 'cekpremium':
              if (!isPremium) return untukprem()
              const cekExp = ms(await premiumnya.getPremiumExpired(sender, premium) - Date.now())
              reply(`*WAKTU PREMIUM*\n\nNomor: ${sender}\nWaktu: ${cekExp.days} hari ${cekExp.hours} jam ${cekExp.minutes} menit`)
              break
       case 'listprem':
       case 'listpremium':
              let txt = `*PENGGUNA PREMIUM*\n\nTotal premium: ${premiumnya.getAllPremiumUser(premium).length}\n\n`
              let men = [];
              for (let i of premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `Nomor: @${i.id.split("@")[0]}\nWaktu: ${checkExp.days} hari ${checkExp.hours} jam ${checkExp.minutes} menit\n\n`
              }
              sock.sendMessage(m.chat, { text: txt, mentions: parseMention(txt) }, { quoted: m })
              break
              /*
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
	        if (!isPremium && checklimitUser(sender) <= 0) return limithabis()
                if (!quoted) return stiktutor1()
                if (!/webp/.test(mime)) return stiktutor1()
            tunggu()
await sleep(1000)
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await sock.sendMessage(m.chat, { video: { url: webpToMp4.result } }, { quoted: m })
                confirmlimit(sender, 1) // Memakai 1 limit
                await fs.unlinkSync(media)
            }
            break
                        case 'sticker': case 's': case 'stickergif': case 'sgif': {
                        if (!isPremium && checklimitUser(sender) <= 0) return limithabis()
            if (!isMedia) return stiktutor2()
            if (!quoted) return stiktutor2()
                if (/image/.test(mime)) {
tunggu()
                  await sleep(1000)
                let media = await quoted.download()
                let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: namaBot, author: namaOwner })
                confirmlimit(sender, 1) // Memakai 1 limit
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
tunggu()
                  await sleep(1000)
                if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: namaBot, author: namaOwner })
                confirmlimit(sender, 1) // Memakai 1 limit
                await fs.unlinkSync(encmedia)
            } else {
                stiktutor2()
                }
            }
            break
            */
            case 'tourl': {
            if (!isPremium && checklimitUser(sender) <= 0) return limithabis()
              if (!isMedia) return stiktutor2()
              if (!quoted) return stiktutor2()
              if (/webp/.test(mime)) return stiktutor2()
              try {
                tunggu()
                await sleep(1000)
                            let anu = await sock.downloadAndSaveMediaMessage(quoted, 'tourl');
              let f1 = await TelegraPh(anu);
                reply(util.format(f1))
                confirmlimit(sender, 1) // Memakai 1 limit
              } catch (err) {
                console.log(err);
              }
                }
                break;
                case 'fitur':
                reply(`Ada ${totalFitur()} fitur`)
                break
                    case 'owner': {
                    const iniowner = `Salam kenal namaku Farel, saya membuat bot wa dengan mengandalkan skill copas dan melihat script orang lain.\n\nSaya tinggal di: Purbalingga, Jawa tengah\nHobi saya adalah: menggambar, menonton anime, main game, dan banyak lagi lainnya`
                    sock.sendMessage(from, { image: imgowner, caption: iniowner }, { quoted: m })
            const vcard =
                'BEGIN:VCARD\n' + // Metadata of the contact card
                'VERSION:3.0\n' +
                `FN:${namaOwner}\n` + // Full name
                `ORG:${namaBot};\n` + // The organization of the contact
                `TEL;type=m;type=CELL;type=VOICE;waid=${nomorOwner[nomorOwner.length - 1].split('@')[0]}:+${nomorOwner[nomorOwner.length - 1].split('@')[0]}\n` + // WhatsApp ID + phone number
                'END:VCARD'
                
                setTimeout(() => {
            sock.sendMessage(from, {
                contacts: {
                    displayName: namaOwner,
                    contacts: [{ vcard }],
                },
            })
            }, 3000)
            }
            break
            case 'ping':
            case 'botstatus':
            case 'statusbot':
                {
                  const formatp = sizeFormatter({
                        std: 'JEDEC',
                        decimalPlaces: 2,
                        keepTrailingZeroes: false,
                        render: (literal, symbol) => `${literal} ${symbol}B`,
                    });
                    const used = process.memoryUsage();
                    const cpus = os.cpus().map(cpu => {
                        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
                        return cpu;
                    });
                    const cpu = cpus.reduce((last, cpu, _, { length }) => {
                        last.total += cpu.total;
                        last.speed += cpu.speed / length;
                        last.times.user += cpu.times.user;
                        last.times.nice += cpu.times.nice;
                        last.times.sys += cpu.times.sys;
                        last.times.idle += cpu.times.idle;
                        last.times.irq += cpu.times.irq;
                        return last;
                    }, {
                        speed: 0,
                        total: 0,
                        times: {
                            user: 0,
                            nice: 0,
                            sys: 0,
                            idle: 0,
                            irq: 0
                        }
                    });
                    let timestamp = speed();
                    let latensi = speed() - timestamp;
                    let respon = `
Kecepatan respon ${latensi.toFixed(4)} detik

💻 *Info server*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*Penggunaan memori NodeJS*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `*Total penggunaan CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*Penggunaan inti CPU (${cpus.length} inti CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim();
                    reply(respon);
                }
                break;
                /*case 'daftarnowa': {
                if (global.db.pengguna[m.sender].registered === true) return sudahdaftar()
const buttons = [
  {buttonId: `${prefix}konfirdaftar`, buttonText: {displayText: 'Konfirmasi'}, type: 1}
]
const buttonMessage = {
    text: `Silahkan konfirmasi terlebih dahulu dengan cara klik tombol dibawah ini`,
    footer: wm,
    buttons: buttons,
    headerType: 1
}
await sock.sendMessage(m.sender, buttonMessage)
                }
                break*/
                case 'konfirdaftar':
                case 'daftarnowa': {
                   if (global.db.pengguna[m.sender].registered === true) return sudahdaftar()
global.db.pengguna[m.sender].registered = true
adduangUser(sender, 1000)
addlimitUser(sender, 20)
addHealUser(sender, 100)

  if (animeingfo.includes(m.chat)) { // kalo 2x command bakal hapus ini
    animeingfo.splice(animeingfo.indexOf(m.chat), 1)
    fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  } else {
  animeingfo.push(m.chat)
  fs.writeFileSync('./database/animeinfo.json', JSON.stringify(animeingfo))
  }

let nihh = `*Pendaftaran berhasil*
Nama: ${pushname}
Tag: @${sender.split("@")[0]}

*Hadiah yang didapat*
Limit: +20
Uang: +100

Total pengguna bot: ${Object.keys(global.db.pengguna).length}

Terimakasih telah mendaftar ke database bot`
                sock.sendMessage(from, { text: nihh, mentions: parseMention(nihh) }, { quoted: m })
                }
                break
                case 'verify': case 'verifikasi': case 'daftar': case 'verif': {
         if (global.db.pengguna[m.sender].registered === true) return sudahdaftar()
         var ge = args.join(" ")
         if (!ge) return emailmana()
         if (!text.match('@gmail.com') && !text.match('@yahoo.com') && !text.match('@outlook.com') && !text.match('@hotmail.com') && !text.match('@livel.com') && !text.match('@aol.com') && !text.match('@icloud.com')) return hanyaemail()
            let nvx = `wa.me/${bot}?text=${kodedaftar}`
            var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
        user: "mikuchantik18@gmail.com", // generated ethereal user
        pass: "vdjquwuabmzkchil", // generated ethereal password
    },
    })
let mailDetails = { 

    from: 'mikuchantik18@gmail.com', 
    to: ge, 
    subject: 'PENDAFTARAN', 
    text: 'verificaton',
    html: `<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Konfirmasi email</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
  /**
   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
   */
  @media screen {
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
    }
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
    }
  }
  /**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
  body,
  table,
  td,
  a {
    -ms-text-size-adjust: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  /**
   * Remove extra space added to tables and cells in Outlook.
   */
  table,
  td {
    mso-table-rspace: 0pt;
    mso-table-lspace: 0pt;
  }
  /**
   * Better fluid images in Internet Explorer.
   */
  img {
    -ms-interpolation-mode: bicubic;
  }
  /**
   * Remove blue links for iOS devices.
   */
  a[x-apple-data-detectors] {
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    color: inherit !important;
    text-decoration: none !important;
  }
  /**
   * Fix centering issues in Android 4.4.
   */
  div[style*="margin: 16px 0;"] {
    margin: 0 !important;
  }
  body {
    width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  /**
   * Collapse table borders to avoid space between cells.
   */
  table {
    border-collapse: collapse !important;
  }
  a {
    color: #1a82e2;
  }
  img {
    height: auto;
    line-height: 100%;
    text-decoration: none;
    border: 0;
    outline: none;
  }
  /* USER - Management */
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .contact-area {
  width: 100%;
  height: 100vh;
  position: relative;
}

.contact {
  position: relative;
  max-width: 420px;
  padding: 40px 20px;
  overflow: hidden;
  margin: 0 auto;
}
.contact main {
  float: left;
  width: 100%;
  position: relative;
}
.contact main section {
  border-radius: 5px;
  float: left;
  width: 100%;
  background-color: #0f0017;
}
.contact main section .content {
  float: left;
  width: 100%;
  padding: 20px 30px 50px 30px;
  position: relative;
  text-align: center;
}
.contact main section .content img {
  display: inline-block;
  width: 140px;
  border-radius: 50%;
}
.contact main section .content aside {
  float: left;
  width: 100%;
  color: #ffffff;
  margin-top: 10px;
}
.contact main section .content aside h1 {
  font-weight: 100;
  font-size: 22px;
  margin-bottom: 10px;
}
.contact main section .content aside p {
  font-size: 14px;
  letter-spacing: .5px;
  line-height: 160%;
}
.contact main .title {
  float: left;
  width: 100%;
  background-color: #c63535;
  max-height: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  -webkit-transition: all 0.55s;
  -moz-transition: all 0.55s;
  -o-transition: all 0.55s;
  transition: all 0.55s;
}
.contact main .title.active {
  max-height: 100px;
  -webkit-transition: all 1.3s;
  -moz-transition: all 1.3s;
  -o-transition: all 1.3s;
  transition: all 1.3s;
}
.contact main .title.active p {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  transition-delay: .2s;
}
.contact main .title p {
  padding: 15px 30px;
  color: #ffffff;
  font-size: 16px;
  display: inline-block;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .5px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}


@media (min-width: 414px) {
  .contact main section .content {
    text-align: left;
  }
  .contact main section .content img {
    float: left;
    width: 30%;
    margin-right: 10%;
  }
  .contact main section .content aside {
    width: 60%;
  }
}
  </style>

</head>
<body style="background-color: #e9ecef;">

  <!-- start preheader -->
  <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
   </div>
  <!-- end preheader -->

  <!-- start body -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">


    <!-- start hero -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="center" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">PENDAFTARAN EMAIL</h1>
            </td>
          </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end hero -->

    <!-- start copy block -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
           </td>
          </tr>
          <!-- end copy -->

          <tr>
            <td align="center" bgcolor="#ffffff" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #ffffff;">
              
          <img src="https://i.imgur.com/wjVlQDy.jpg" width="300" height="300" />
           <h2 style="margin: 0;" id="demo"></h2>
          </td>
          </tr>
        <tr>
            <td align="center" bgcolor="#ffffff" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #ffffff;">
              
           <h2 style="margin: 0;"></h2>
          </td>
          </tr>
          <!-- end button -->

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">Hi ${pushname}!\n </p>
              <p style="margin: 0;">Kode verifikasi kamu adalah <a href= "${nvx}" target="_blank">${kodedaftar}</a></p>
              <h4 style="margin: 0;"><br>Salin atau klik kode tersebut!</h4>
            </td>
          </tr>
          <!-- end copy -->

            <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
              <p style="margin: 0;">Jangan sebarkan kode verifikasi ini ke orang lain!</p>
            </td>
          </tr>
          <!-- end copy -->


        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end copy block -->

    <!-- start footer -->
    <tr>
      <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start permission -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;">Ini adalah pesan yang dikirim secara otomatis oleh sistem, harap jangan dibalas</p>
            </td>
          </tr>
          <!-- end permission -->

          <!-- start unsubscribe -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;"><a href="https://youtube.com/@FarelAE" target="_blank">SUBSCRIBE</a></p>
            </td>
          </tr>
          <!-- end unsubscribe -->

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end footer -->

  </table>
  <!-- end body -->
</body>

</html>
`
}; 

transporter.sendMail(mailDetails, function(err, data) { 
    if (err) { 
    console.log(err)
         eror(); 
    } else { 
   console.log(data)
    }
})
         reply(`Kode verifikasi sudah terkirim ke email, silahkan cek`)
         }
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
