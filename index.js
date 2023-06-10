import "./global-config.js"
import { Boom } from "@hapi/boom";
import pino from "pino";
import fs from "fs";
import FileType from "file-type";
import kyaaa from "./kyaaa.js";
const { default: WASocket, Browsers, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, jidDecode, downloadContentFromMessage, generateWAMessageFromContent, generateForwardMessageContent, getContentType, generateWAMessage, proto } = (await import('@whiskeysockets/baileys')).default
import { smsg, getBuffer, tanggal } from "./lib/myfunc.js";
import { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif } from "./lib/exif.js";
const setting = JSON.parse(fs.readFileSync('./setting.json'));
const { owner } = setting;
import { welkom } from "./lib/welkom.js";
import Jimp from "jimp";

// Membuat server online, cocok buat replit ditambah dengan uptimerobot
/*import { createServer } from "http";
({ createServer }.createServer((_, res) => res.end("Uptime!")).listen(8080));*/

global.db = JSON.parse(fs.readFileSync('./database.json'));
if (global.db)
    global.db = {
        pengguna: {},
        database: {},
        pesan: {},
        pengaturan: {},
        chats: {},
        ...(global.db || {})
    };
    
// Save ke database otomatis
if (global.db) setInterval(async () => {
fs.writeFileSync('./database.json', JSON.stringify(global.db, null, 2))
console.log('Memperbarui database...')
}, 30 * 1000)

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
async function connectToWhatsApp() {
    const { version } = await fetchLatestBaileysVersion();
    const { state, saveCreds } = await useMultiFileAuthState('session');
    const sock = WASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: Browsers.macOS('Desktop'),
        auth: state,
        version,

/*
            // Biar button sama listnya keliatan
            patchMessageBeforeSending: (message) => {
                const requiresPatch = !!(
                    message.buttonsMessage ||
                    message.templateMessage ||
                    message.listMessage
                );
                if (requiresPatch) {
                    message = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 2,
                                    deviceListMetadata: {},
                                },
                                ...message,
                            },
                        },
                    };
                }

                return message;
            },
            */
      
    });
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'connecting') {
            console.log('Menghubungkan...');
        }
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            if (reason === DisconnectReason.badSession) {
                console.log(`File session buruk, hapus dan scan kembali!`);
                process.exit();
            }
            else if (reason === DisconnectReason.connectionClosed) {
                console.log("Koneksi terputus, menghubungkan kembali...");
                connectToWhatsApp();
            }
            else if (reason === DisconnectReason.connectionLost) {
                console.log("Koneksi terputus dari server, menghubungkan kembali...");
                connectToWhatsApp();
            }
            else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Koneksi diganti, session baru lainnya dibuka, harap tutup session saat ini terlebih dahulu");
                process.exit();
            }
            else if (reason === DisconnectReason.loggedOut) {
                console.log(`Perangkat keluar, hapus file session dan scan kembali`);
                process.exit();
            }
            else if (reason === DisconnectReason.restartRequired) {
                console.log("Diperlukan mulai ulang, mulai ulang...");
                connectToWhatsApp();
            }
            else if (reason === DisconnectReason.timedOut) {
                console.log("Waktu koneksi habis, menghubungkan kembali...");
                connectToWhatsApp();
            }
            else {
                console.log(`Terputus, alasan tidak diketahui: ${reason}|${connection}`);
                connectToWhatsApp();
            }
        }
        else if (connection === 'open') {
            console.log('Terhubung ke server');
            sock.sendMessage(`${owner}@s.whatsapp.net`, { text: `Terhubung` });
        }
    });
    
// Online jadi lebih lama??
const unhandledRejections = new Map();
  process.on("unhandledRejection", (reason, promise) => {
    unhandledRejections.set(promise, reason);
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
  });
  process.on("rejectionHandled", (promise) => {
    unhandledRejections.delete(promise);
  });
  process.on("Something went wrong", function (err) {
    console.log("Caught exception: ", err);
  });
    
    sock.ev.on('messages.upsert', async (chatUpdate) => {
        // console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0];
            if (!mek.message)
                return;
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === 'status@broadcast')
                return;
            if (!sock.public && !mek.key.fromMe && chatUpdate.type === 'notify')
                return;
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16)
                return;
            const m = smsg(sock, mek, store);
            kyaaa(sock, m, mek, chatUpdate, store);
        }
        catch (err) {
            console.log(err);
        }
    });
    
/*
sock.ev.on('group-participants.update', async (anu) => {
welkom(sock, anu)
})
*/

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
sock.ev.on('group-participants.update', async (anu) => {

let metadata = await sock.groupMetadata(anu.id)
let participants = anu.participants

for (let num of participants) {

try {
var ppuser = await sock.profilePictureUrl(num, 'image')
} catch {
var ppuser = 'https://telegra.ph/file/78757a3eb7a7da1a3cdb7.jpg'
}

// Function ini saya dapatkan dari Danta
async function ppWelkom(sock) {
   let font = await Jimp.loadFont('./name.fnt')
     let mask = await Jimp.read('https://i.imgur.com/552kzaW.png')
     let welcome = await Jimp.read("./asset/welkom/" + gmbrWrn) // Bisa pakai path bisa juga pakai url
     let avatar = await Jimp.read(ppuser)
     // let status = (await sock.fetchStatus(sender).catch(console.log) || {}).status?.slice(0, 30) || 'Tidak terdeteksi'
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     return await welcome.composite(avatar, 500, 230).getBufferAsync('image/png') 
}

let fotoProfil = await ppWelkom(sock)
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

})
    
    sock.decodeJid = (jid) => {
        if (!jid)
            return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        }
        else
            return jid;
    };
    sock.public = true;
    sock.ev.on('creds.update', saveCreds);
    
 /**
   * sendMessage v2
   * @param {String} chatId
   * @param {import('@whiskeysockets/baileys').AnyMessageContent} message
   * @param {import('@whiskeysockets/baileys').MiscMessageGenerationOptions} options
   * @returns
   */
 sock.sendMessageV2 = async (chatId, message, options = {}) => {
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await sock.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

    sock.cMod = (jid, copy, text = '', sender = sock.user.id, options = {}) => {
        // let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === sock.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    sock.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await sock.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }
    
      /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    sock.sendText = (jid, text, quoted = '', options) => sock.sendMessage(jid, { text: text, ...options }, { quoted })
  
    /**
   *
   * @param {*} message
   * @param {*} filename
   * @param {*} attachExtension
   * @returns
   */
    sock.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
        // save to file
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
    };
    sock.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

      /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    sock.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    sock.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await sock.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
}

// menjalankan
connectToWhatsApp();