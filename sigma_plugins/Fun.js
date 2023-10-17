//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                         v：1．0．0                                                   // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

const { dare, truth, random_question ,name,tlang } = require('../lib/truth-dare.js')
const axios = require('axios')
const { Module_Exports,sleep } = require('../lib')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "question",
            infocmd: "Random Question.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "truth",
            infocmd: "truth and dare(truth game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "dare",
            infocmd: "truth and dare(dare game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
//--------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 

const response =await  fetch('https://official-joke-api.appspot.com/random_joke');
  const joke= await response.json();
citel.reply( `*𝙹𝙾𝙺𝙴:* ${joke.setup}\n*𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:*  ${joke.punchline}`);

})
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke2",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 
 
         fetch('https://v2.jokeapi.dev/joke/Any?type=single')
         .then(response => response.json())
         .then(data => {
         citel.reply(`*𝙹𝙾𝙺𝙴:* ${data.joke}`); 
  })
  .catch(error => {
     return citel.reply ('Error fetching joke:' + error);
  });
        }
    )

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fact",
        infocmd: "Sends fact in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*𝙵𝙰𝙲𝚃:* ${data.fact}`)   
    }

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "quotes",
        infocmd: "Sends quotes in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, man, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ *•𝙲𝙾𝙽𝚃𝙴𝙽𝚃•* ${quoo.data.quote.body}
┃✗ *•𝙰𝚄𝚃𝙷𝙾𝚁•* ${quoo.data.quote.author}  
┗━━━━━━━━━━⦿ `
return man.reply(replyf)
    }
 
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "define",
        infocmd: "urban dictionary.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            *𝚆𝙾𝚁𝙳:* ${text}
            *𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝙾𝙽:* ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            *𝙴𝚇𝙰𝙼𝙿𝙻𝙴:* ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
//------------------------------------------------------------------------


//---------------------------------------------------------------------------

Module_Exports({

            kingcmd: "hack",

            kingclass: "fun",

            infocmd: "hacking prank",

            use: ' ',

            kingpath: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)

citel.reply("```Injecting malware \n 0%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ 10%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ 20%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ 30%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ 40%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ 50%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ 60%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

citel.reply("```System hyjacking on process.. \n Conecting to Server error to find 404 ```")

await sleep(1000)

citel.reply("```Divice successfully connected... \n Riciving data...```")

await sleep(1000)

citel.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```")

await sleep(1000)

citel.reply("``` HACKING COMPLETED ```")

await sleep(1000)

citel.reply("``` SENDING LOG DOCUMENTS...```")

await sleep(1000)

citel.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected```")

await sleep(1000)

            return citel.reply('*BACKLOGS CLEARED*');

        }

    )

Module_Exports({

kingcmd: "love",
kingclass: "fun",
infocmd: "hacking prank",
use: ' ',
kingpath: __filename,
},
async (Void, citel, text) => {
citel.reply(`𝐇𝐞𝐲 𝐙𝐮𝐛𝐢ˣ𝐅𝐚𝐢𝐫𝐲 ✨🥀`)
await sleep(2000)
citel.reply("𝐅𝐢𝐧𝐝𝐢𝐧𝐠 𝐘𝐨𝐮𝐫 𝐋𝐨𝐯𝐞♥❣💕")
await sleep(1000)
citel.reply("𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 ⏳")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ 𝟸𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ 𝟺𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ █ █ 𝟼𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ █ █ █ █ 𝟾𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ █ █ █ █ █ █ 𝟷𝟶𝟶%")
await sleep(3000)
citel.reply("𝐀𝐡𝐡 𝐖𝐡𝐚𝐭!!!!")
await sleep(4000)
citel.reply("𝐖𝐡𝐲 𝐘𝐨𝐮 𝐅𝐢𝐧𝐝𝐢𝐧𝐠 𝐘𝐨𝐮𝐫 𝐋𝐨𝐯𝐞🥀🌙")
await sleep(5000)
citel.reply("𝐆𝐨 𝐁𝐚𝐜𝐤 𝐍𝐨𝐰!!😒")
await sleep(5000)
citel.reply("𝐍𝐨 𝐎𝐧𝐞 𝐋𝐨𝐯𝐞 𝐘𝐨𝐮 💔💔")
await sleep(8000)
citel.reply("𝐎𝐩𝐬𝐬 𝐒𝐨𝐫𝐫𝐲😁😜🤪\n𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐁𝐞𝐞𝐧 𝐏𝐫𝐚𝐧𝐤𝐞𝐝🤭🤭")
await sleep(4000)
citel.reply("𝐒𝐡𝐨𝐰𝐢𝐧𝐠 𝐘𝐨𝐮 𝐌𝐲 𝐋𝐨𝐯𝐞❣♥")
await sleep(1500)
citel.reply("𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭⏳👉👉")
await sleep(3000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ 𝟸𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ 𝟺𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ █ █ 𝟼𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ █ █ █ █ 𝟾𝟶%")
await sleep(1000)
citel.reply("𝐋𝐨𝐚𝐝𝐢𝐧𝐠 ⏳\n█ █ █ █ █ █ █ █ █ █ 𝟷𝟶𝟶%")
await sleep(3000)
citel.reply("𝐀𝐫𝐞 𝐘𝐨𝐮 𝐒𝐮𝐫𝐞\n𝐘𝐨𝐮 𝐖𝐚𝐧𝐭 𝐓𝐨 𝐒𝐞𝐞🤭🤭")
await sleep(4000)
citel.reply("𝐉𝐮𝐬𝐭 𝐀 𝐒𝐞𝐜 👉👉❣\n𝐂𝐥𝐨𝐬𝐞 𝐘𝐨𝐮𝐫 𝐄𝐲𝐞𝐬 🤭❤💕")
await sleep(7000)
   //let pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/814a5bf1ddf8d09ce1653.jpg'
  let  cap = "𝐇𝐞𝐫𝐞'𝐬 𝐙𝐮𝐛𝐢ˣ𝐅𝐚𝐢𝐫𝐲 ✨🥀\n*Cᴜᴛᴇ Cᴏᴜᴘʟᴇ* ✨🌹💫\n*Sᴀʏ Mᴀsʜᴀᴀʟʟᴀʜ* 😍💞\n*Mᴏsᴛ Bᴇᴀᴜᴛɪғᴜʟ* ❣❣\n*Cᴏᴜᴘʟᴇ Oɴ Eᴀʀᴛʜ* 😍🌹\n*Dᴏɴ'ᴛ Gᴇᴛ Jᴇᴀʟᴏᴜs Oғ Us* 🤟🏻"
        let king = {            
            image: { url: `https://telegra.ph/file/814a5bf1ddf8d09ce1653.jpg`},
            caption: cap,
            //footer: tlang().footer,
            headerType: 4}
return Void.sendMessage(citel.chat,king)

//return citel.reply('');

    
})

// These Fun Commands are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved

