const { Function,sck,sck1,hentai,Module_Exports, getAdmin, tlang, prefix,fancytext,name,fetchJson} = require('../lib')

Function({
    kingcmd: "pgif",
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
    let anu = await fetchJson('https://raw.githubusercontent.com/Meharking07/hi/main/Media/SIGMA-MD%20NSFW/Porn_Gif.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    let Maher_Zubair = {
        video: {
            url: random.SIGMS_NSFW,
        },
        gifPlayback:true,
        caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,
        footer: sigma.user.name,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: `ᴘɪᴄᴛᴜʀᴇ`,
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