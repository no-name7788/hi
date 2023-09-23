const { Function,sck,sck1,hentai,Module_Exports, getAdmin, tlang, prefix,fancytext,name,fetchJson} = require('../lib')
/*
kingcmd: "18+",
kingclass:"no",
*/






//---------------------------------------------
Function({
    kingcmd: "cum",
    kingclass: "18+",
    infocmd: "Sends cum pics.",
    use: " ",
},
async(sigma, person, memo,{isCreator}) => {
    if (!isCreator) return person.reply(tlang().admin)
    let zerogroup = (await sck.findOne({
        id: person.chat,
    })) || (await new sck({
            id: person.chat,
        })
        .save());
    let mongoschemas = zerogroup.nsfw || "false";
    if (mongoschemas == "false") return person.reply("*_NSFW is not Active_*");
    let anu = await fetchJson('https://raw.githubusercontent.com/Ali-Ahmad77/hi/main/Media/SIGMA-MD%20NSFW/cum.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    let Maher_Zubair = {
        image: {
            url: random,
        },
        caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,
        footer: sigma.user.name,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: `cum ᴘᴏʀɴ ᴘɪᴄᴛᴜʀᴇ`,
                body: `sɪɢᴍᴀ ᴹᴰ-ɴsғᴡ`,
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: ``,
                sourceUrl: ``,
            },
        },
    };
    sigma.sendMessage(person.chat, Maher_Zubair , { quoted: person })
    
}
)