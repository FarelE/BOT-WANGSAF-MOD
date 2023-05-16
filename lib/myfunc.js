import baileys from "@adiwajshing/baileys";
const { proto, getContentType, downloadContentFromMessage } = baileys;
import axios from "axios";
import moment from "moment-timezone";

export const tanggal = (numer) => {
	            let myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				let myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				var bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
};
export const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
};
export const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
};
export const clockString = (ms) => {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
};
export const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
};
export const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
};
export const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
export const download = async (message) => {
    let mimes = (message.msg || message).mimetype || '';
    let messageType = mimes.split('/')[0].replace('application', 'document') ? mimes.split('/')[0].replace('application', 'document') : mimes.split('/')[0];
    let extension = mimes.split('/')[1];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
};
export const smsg = (sock, m, store) => {
    if (!m)
        return m;
    let M = proto.WebMessageInfo;
    if (m.key) {
        m.id = m.key.id;
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16;
        m.chat = m.key.remoteJid;
        m.fromMe = m.key.fromMe;
        m.isGroup = m.chat.endsWith('@g.us');
        m.sender = sock.decodeJid(m.fromMe && sock.user.id || m.participant || m.key.participant || m.chat || '');
        if (m.isGroup)
            m.participant = sock.decodeJid(m.key.participant) || '';
    }
    if (m.message) {
        m.mtype = getContentType(m.message);
        m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype]);
        m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text;
        let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null;
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
        if (m.quoted) {
            let type = getContentType(quoted);
            m.quoted = m.quoted[type];
            if (['productMessage'].includes(type)) {
                type = getContentType(m.quoted);
                m.quoted = m.quoted[type];
            }
            if (typeof m.quoted === 'string')
                m.quoted = {
                    text: m.quoted
                };
            m.quoted.mtype = type;
            m.quoted.id = m.msg.contextInfo.stanzaId;
            m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
            m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false;
            m.quoted.sender = sock.decodeJid(m.msg.contextInfo.participant);
            m.quoted.fromMe = m.quoted.sender === (sock.user && sock.user.id);
            m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || '';
            m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
            m.getQuotedObj = m.getQuotedMessage = async () => {
                if (!m.quoted.id)
                    return false;
                let q = await store.loadMessage(m.chat, m.quoted.id, sock);
                return exports.smsg(sock, q, store);
            };
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            });
            /**
             *
             * @returns
             */
            m.quoted.delete = () => sock.sendMessage(m.quoted.chat, { delete: vM.key });
            /**
             *
             * @param {*} jid
             * @param {*} forceForward
             * @param {*} options
             * @returns
            */
            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => sock.copyNForward(jid, vM, forceForward, options);
            /**
              *
              * @returns
            */
            m.quoted.download = () => sock.downloadMediaMessage(m.quoted);
        }
    }
    if (m.msg.url)
        m.download = () => sock.downloadMediaMessage(m.msg);
    m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || '';
    /**
    * Reply to this message
    * @param {String|Object} text
    * @param {String|false} chatId
    * @param {Object} options
    */
    m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? sock.sendMedia(chatId, text, 'file', '', m, { ...options }) : sock.sendText(chatId, text, m, { ...options });
    /**
    * Copy this message
    */
    m.copy = () => exports.smsg(sock, M.fromObject(M.toObject(m)));
    /**
     *
     * @param {*} jid
     * @param {*} forceForward
     * @param {*} options
     * @returns
     */
    m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => sock.copyNForward(jid, m, forceForward, options);
    return m;
};
