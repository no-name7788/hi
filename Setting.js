const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923466319114' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mk:mk@new.vxtfxii.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'samsamsun789@gmail.com' ;
global.github = 'https://github.com/SuhailTechInfo/Secktor-Md' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://youtube.com/c/SuhailTechInfo' ; // add your username
global.sudo =  process.env.SUDO || "27718060308" ;
global.devs = "923466319114"; //Dont change it From here
global.mztit = "🅼♥︎❚❚♥︎🆉",
global.Gname = "xxx",
global.waUrl = "https://chat.whatsapp.com/Ckwh1CMUjXV1Vq5JCBycCK",
global.website = 'https://github.com/SuhailTechInfo/Secktor-Md' ; //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZ3NFRZVHBaS0QrTUN3Z0djYjA5RkdHU0xZdGtqb0NDb3NZR0VsUG5WOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHhUZWYxQWphR3U5TjBLa1dOOE1JKzBYbk1GY2ZtZGtzbklySFB0R29CRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RFhuNG02QzBoVnZ4bVZTVm1kT3ByZHdGSkVvZDl3SWJTOEY1cTdCRGw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVeC8ycDVGcWxyWWhDVDN3RzV6a2xSMkQxaGt5dWVERThyL1hMSi9uM2pRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNDZ3BWUm0rb1hxQ2tJYTJMQ0UvMU9vVGxxNzloNHQ0MXJoaFA0bTFYVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik44d3FkSVUrMWhzRDcxamVFbElIT2pQMHVEUGpBMjRRNm1iR1N5clhaUjQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkb3R5SmZVYzNYV2IwT0N6eFRHMG9pemFFdGRub2dSTm9mYWpWdTJWMmxKdlZQanpybElyMmUwR05XTHdnNUw4aitRSGhpdVZpM0dZbERKNTRPd2xoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM3LCJhZHZTZWNyZXRLZXkiOiI2NjZ3VzhJVFl5NHpyWUp0Vy9yUDVNY0FMMFVUV0hwcmNsUlJyemI5cEdvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtendTQ0Z0cVNCZUJ4b3ViWkp1N3NRIiwicGhvbmVJZCI6ImFkNTM4N2QzLTVkOWMtNDE0Ny1iOTAyLTkyMGE4NjRmNTU1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwblJRYXRqZEw2RUp0VStLUFBPazRncUVqTms9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRTNjJ3VkEyY2tXQ05sS3hlQTBjUzlCQ3BqST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPN3k0OEJFUG5hcHFnR0dCVT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkxIcjlKT3RaU21SSzlQTmlEUVpBdEtBNEVTZVNrdCtHY2lWdUplTG9YST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ1JpVzZEak8wSXFxRW5SY092N1VwUVpEVnFFVHlod1owWk9pZ1IrNmFCdWthT0VQNXdROW5wRkttNFJVeWNuZnJURGw2UmlIZ2tuWmVWa3ByQTNmQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJTVWtBUW1Lb0hZbHU0R2t4WFI0RFkyRmdaaysrRXhtZFFuTmRMcW00RldmU3RtMU1TY2h5b1pxVnJUTDJBVXEzdlBuTGZtWkNjdWxIcHd2dVdwS2pRPT0ifSwibWUiOnsiaWQiOiI5MjM0NjYzMTkxMTQ6ODdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZuvCdmbjwnZm98J2ZtiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0NjYzMTkxMTQ6ODdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWnl4Ni9TVHJXVXBrU3ZUellnMEdRTFNnT0JFbmtwTGZobklsYmlYaTZGeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5NTEzMzA1M30=',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'sᴜʜᴀɪʟ²²¹-ᴍᴅ',
  ownername:  process.env.OWNER_NAME || `It'x Suhail`,
  author:  process.env.PACK_AUTHER || '', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "\t   𓅋 ₊₉₂⃗⃗₃₁᩺₈ͦ₄ͪ₄ᷧ₇ͥ₄ᷞ₁⃗₇₆ 𓃮 \n\nᴋɪss ʍᴇ...💋\n\nᴄʟօsᴇ ყσυɾ ᴇყᴇs...👁️🙈\n\nʍɪss ʍᴇ...♥️\n\n\n   -ᴘʟᴇᴀsᴇ ᴅᴏɴ'ᴛ ᴛᴀӄᴇ 🚮 \n\n--- ρυвʟɪᴄ вσт нᴇʀᴇ ---" ,
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'true',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'false' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME|| 'GOKU',
  menu : process.env.MENU || '', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
