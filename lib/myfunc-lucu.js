import baileys from "@adiwajshing/baileys";
const { proto, getContentType, downloadContentFromMessage } = baileys;
import axios from "axios";

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

  /**
  * Serialize Message
  * @param {WAConnection} conn 
  * @param {Object} m 
  * @param {Boolean} hasParent 
  */ 
export const smsg = async (conn, m, hasParent) => {
if (!m) return m
let M = proto.WebMessageInfo
m = M.fromObject(m)
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || false
m.chat = conn.decodeJid(m.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
m.now = m.messageTimestamp
m.isGroup = m.chat.endsWith('@g.us')
m.sender = conn.decodeJid(m.key.fromMe && conn.user.id || m.participant || m.key.participant || m.chat || '')
m.fromMe = m.key.fromMe || areJidsSameUser(m.sender, conn.user.id)
m.from  = m.key.remoteJid
m.groupMetadata = (m.isGroup ?  (conn.chats[m.from] || {}).metadata : {}) || {}
m.groupName =  (m.isGroup ? m.groupMetadata.subject : []) || []
m.groupId =  (m.isGroup ? m.groupMetadata.Jid : []) || []
m.groupMembers = (m.isGroup ? m.groupMetadata.participants : []) || []
m.groupDesc =  (m.isGroup ? m.groupMetadata.desc : []) || []
m.groupOwner =  (m.isGroup ? m.groupMetadata.owner : []) || []
const user = (m.isGroup ? m.groupMembers.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? m.groupMembers.find(u => conn.decodeJid(u.id) == conn.user.jid) : {}) || {} // Your Data
m.isRAdmin = user && user.admin == 'superadmin' || false
m.isAdmin = m.isRAdmin || user && user.admin == 'admin' || false 
m.isBotAdmin = bot && bot.admin == 'admin' || false // Are you Admin?  
}
  
  
	
if (m.message) {
let mtype = Object.keys(m.message)
m.mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype[0]) && mtype[0]) || 
(mtype.length >= 3 && mtype[1] !== 'messageContextInfo' && mtype[1]) || mtype[mtype.length - 1] 
m.type = getContentType(m.message)
m.content = JSON.stringify(m.message)
m.botNumber = conn.user.id ? conn.user.id.split(":")[0]+"@s.whatsapp.net" : conn.user.jid
m.senderNumber = m.sender.split("@")[0]
m.pushname = m.pushName || "No Name"
m.itsMe = m.sender == m.botNumber ? true : false
m.mentionByTag = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
m.mentionByReply = m.type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : "" 
m.users = m.mentionByReply? m.mentionByReply : m.mentionByTag[0]
m.budy = (m.type === 'conversation') ? m.message.conversation : (m.type === 'extendedTextMessage') ? m.message.extendedTextMessage.text : '' 
m.body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
m.args = m.body.trim().split(/ +/).slice(1) 
m.numberQuery = m.args.join(' ').replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	 
  
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.type])
if (m.chat == 'status@broadcast' && ['protocolMessage', 'senderKeyDistributionMessage'].includes(m.mtype)) m.chat = (m.key.remoteJid !== 'status@broadcast' && m.key.remoteJid) || m.sender
if (m.mtype == 'protocolMessage' && m.msg.key) {
if (m.msg.key.remoteJid == 'status@broadcast') m.msg.key.remoteJid = m.chat
if (!m.msg.key.participant || m.msg.key.participant == 'status_me') m.msg.key.participant = m.sender
m.msg.key.fromMe = conn.decodeJid(m.msg.key.participant) === conn.decodeJid(conn.user.id)
if (!m.msg.key.fromMe && m.msg.key.remoteJid === conn.decodeJid(conn.user.id)) m.msg.key.remoteJid = m.sender
}
  
m.myButton = m.isGroup && (m.type == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.contextInfo.participant !== m.botNumber
|| m.type == 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.contextInfo.participant !== m.botNumber
|| m.type == 'listResponseMessage' && m.message.listResponseMessage.contextInfo.participant !== m.botNumber)


try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

m.virtex = m.type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000 ||  m.type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || m.type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || m.budy.length > 8000 && !m.fromMe  || m.type == "extendedTextMessage" && virus > 8000 && !m.fromMe ||  m.type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !m.fromMe

// m.msg.text || m.msg.caption || m.msg.contentText || m.msg || ''
m.text =  m.body

m.mentionedJid = m.msg?.contextInfo?.mentionedJid?.length && m.msg.contextInfo.mentionedJid || []
let quoted = m.quoted = m.msg?.contextInfo?.quotedMessage ? m.msg.contextInfo.quotedMessage : null
		  if (m.quoted) {
			  let type = Object.keys(m.quoted)[0]
			  m.quoted = m.quoted[type]
			  if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
			  m.quoted.mtype = type
			  m.quoted.id = m.msg.contextInfo.stanzaId
			  m.quoted.chat = conn.decodeJid(m.msg.contextInfo.remoteJid || m.chat || m.sender)
			  m.quoted.isBaileys = m.quoted.id && m.quoted.id.length === 16 || false
			  m.quoted.sender = conn.decodeJid(m.msg.contextInfo.participant)
			  m.quoted.fromMe = m.quoted.sender === conn.user.jid
			  
			  m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.contentText || ''
			  m.quoted.name = conn.getName(m.quoted.sender)
			  m.quoted.mentionedJid = m.quoted.contextInfo?.mentionedJid?.length && m.quoted.contextInfo.mentionedJid || []
			  let vM = m.quoted.fakeObj = M.fromObject({
				  key: {
					  fromMe: m.quoted.fromMe,
					  remoteJid: m.quoted.chat,
					  id: m.quoted.id
				  },
				  message: quoted,
				  ...(m.isGroup ? { participant: m.quoted.sender } : {})
			  })
			  m.getQuotedObj = m.getQuotedMessage = async () => {
				  if (!m.quoted.id) return null
				  let q = M.fromObject(await conn.loadMessage(m.quoted.id) || vM)
				  return exports.smsg(conn, q)
			  }
			  if (m.quoted.url || m.quoted.directPath) m.quoted.download = (saveToFile = false) => conn.downloadM(m.quoted, m.quoted.mtype.replace(/message/i, ''), saveToFile)
			  
			  /**
			   * Reply to quoted message
			   * @param {String|Object} text
			   * @param {String|false} chatId
			   * @param {Object} options
			   */
			  m.quoted.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, vM, options)
			  m.quoted.replys = (text, chatId, options) => conn.replys(chatId ? chatId : m.chat, text, vM, options)
			  /**
			   * Copy quoted message
			   */
			  m.quoted.copy = () => exports.smsg(conn, M.fromObject(M.toObject(vM)))
  
			  /**
			   * Forward Quoted Message
			   * @param {String} jid
			   * @param {Boolean} forceForward
			   */
			  m.quoted.forward = (jid, forceForward = false) => conn.forwardMessage(jid, vM, forceForward)
  
			  /**
			   * Exact Forward quoted message
			   * @param {String} jid
			   * @param {Boolean|Number} forceForward
			   * @param {Object} options
			  */
			  m.quoted.copyNForward = (jid, forceForward = true, options = {}) => conn.copyNForward(jid, vM, forceForward, options)
  
			  /**
			   * Modify quoted Message
			   * @param {String} jid
			   * @param {String} tex
			   * @param {String} sender
			   * @param {Object} options
			   */
			  m.quoted.cMod = (jid, text = '', sender = m.quoted.sender, options = {}) => conn.cMod(jid, vM, text, sender, options)
  
			  /**
			   * Delete quoted message
			   */
			  m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })
		  }
	  }
	  m.name = !nullish(m.pushName) && m.pushName || conn.getName(m.sender)
	  if (m.msg && m.msg.url) m.download = (saveToFile = false) => conn.downloadM(m.msg, m.mtype.replace(/message/i, ''), saveToFile)
   
	  /**
	   * Reply to this message
	   * @param {String|Object} text
	   * @param {String|false} chatId
	   * @param {Object} options
	   */
	  m.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, m, options)
	  m.replys = (text, chatId, options) => conn.replys(chatId ? chatId : m.chat, text, m, options)
	  /**
	   * Exact Forward this message
	   * @param {String} jid
	   * @param {Boolean} forceForward
	   * @param {Object} options
	   */
	  m.copyNForward = (jid = m.chat, forceForward = true, options = {}) => conn.copyNForward(jid, m, forceForward, options)
	  /**
	   * Modify this Message
	   * @param {String} jid 
	   * @param {String} text 
	   * @param {String} sender 
	   * @param {Object} options 
	   */
	  m.cMod = (jid, text = '', sender = m.sender, options = {}) => conn.cMod(jid, m, text, sender, options)
  
	  /**
	   * Delete this message
	   */
	  m.delete = () => conn.sendMessage(m.chat, { delete: m.key })
	  try {
		 // conn.saveName(m.sender, m.name)
		  conn.pushMessage(m)
		 // if (m.isGroup) conn.saveName(m.chat)
		  if (m.msg && m.mtype == 'protocolMessage') conn.ev.emit('message.delete', m.msg.key)
	  } catch (e) {
		  console.error(e)
	  }
	  return m
  }
