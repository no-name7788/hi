const { sck, sck1,Module_Exports, jsonformat, botpic, TelegraPh, RandomXP,fancytext, name, tlang, warndb, sleep,getAdmin,getBuffer, prefix,parsedJid } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fs = require('fs-extra')
const Jimp = require("jimp");
const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
const hrs = new Date().getHours({ timeZone: 'Asia/Karachi' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

Module_Exports({
    kingcmd: "devnum",
shortcut: ["dnum"],
    infocmd: "sends developer number for contact",
    kingclass: "developer",
    kingpath: __filename,
},
async(Void, citel, text,) => {

    await Void.sendMessage(citel.chat, {
       // image: `${devp}`,
        text: `┏━━⟪⟪ 🅼♥︎❚❚♥︎🆉 ⟫━⦿\n┃✗ *•ᴅᴇᴠᴇʟᴏᴘᴇʀ ɴᴀᴍᴇ•* \n┃✗ *•ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ•* \n┃✗ *•ɴᴜᴍʙᴇʀ•* https://wa.me/923466319114\n┃✗ *•sᴀᴠᴇ ᴍʏ ɴᴜᴍʙᴇʀ•*\n┃✗ *•ʙᴇғᴏʀᴇ ᴍᴇssᴀɢᴇ•*\n┗━━━━━━━━━━⦿\n*⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ ᴹᴰ*`,
    contextInfo: {
        externalAdReply: {
            title: `ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ`,
            body: "ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ᴍᴇssᴀɢᴇ ᴍᴇ",
            thumbnail: log0,
            mediaType: 4,
            mediaUrl: '',
            sourceUrl: `https://wa.me/923466319114`,}}})
    });

    //--------------------------------------------------------------
    Module_Exports({
        kingcmd: "timenow",
    shortcut: ["tnow"],
        infocmd: "Show Live Time Of Pakistan",
        kingclass: "general",
          kingpath: __filename,
        use: '<group link.>',
    },
    async(Void, citel, text) => {
var sigma_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Karachi' }).split(' ')[1]
var sigma_date = new Date().toLocaleDateString(get_localized_date)
var sigma_wish = ''
if (hrs < 12) sigma_wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅'
if (hrs >= 12 && hrs <= 16) sigma_wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞'
if (hrs >= 16 && hrs <= 20) sigma_wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥'
if (hrs >= 20 && hrs <= 24) sigma_wish = 'ʙᴇᴅ ᴛɪᴍᴇ 🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
const Zubair= [`ᴋɪɴɢ,ᴢᴜʙɪ,ᴍᴢ,ᴍᴋ,ᴅᴇᴠ,ᴍᴀʜᴇʀ,ᴍᴜsʟɪᴍ`]
const king = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
    "orderMessage": {
       "itemCount" : Zubair[Math.floor(8*Math.random())],
       "status": 1,
       "surface" : 1,
       "message": `❏ ${name.botname}\nᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ʙʏ ᴍᴀʜᴇʀ ᴢᴜʙᴀɪʀ`,
       "orderTitle": "alive",
       "sellerJid": '923466319114@s.whatsapp.net' 
    }
  }
}

let Maher =`
╭────────────╮
│    *${sigma_wish}* 
│    *ᴛɪᴍᴇ* ⌚ ${sigma_time} ${am_pm}
│    *ᴅᴀᴛᴇ* 🗓️  ${sigma_date} 
╰────────────╯
`
return await Void.sendMessage(citel.chat, { text:Maher }, { quoted : king } )
})
