const { Function,sck,sck1,hentai,Module_Exports, getAdmin, tlang, prefix,fancytext,name,fetchJson,GIFBufferToVideoBuffer} = require('../lib')

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
    const response = await fetchJson('https://raw.githubusercontent.com/Meharking07/hi/main/Media/SIGMA-MD%20NSFW/Porn_Gif.json')
    let random = response[Math.floor(Math.random() * response.length)]
    const buffer = Buffer.from(response.data, "utf-8");
    let gif = await GIFBufferToVideoBuffer(buffer);

    sigma.sendMessage(person.chat, { video: gif, gifPlayback: true,url:random.SIGMS_NSFW} , { quoted: person })
    
}
)