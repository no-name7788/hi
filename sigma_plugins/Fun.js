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
  kingcmd: "mz",
   kingclass: "fun",
   infocmd: "hacking prank",
   use: ' ',
   kingpath: __filename,
   },
   async (sigma, person, text) => {
    //var first = new Date().getTime();
    const { key } = await sigma.sendMessage(person.chat, {text: '_Checking ping!!!_'});
   await sleep(5000)
   await sigma.sendMessage(person.chat, {text: 'hello ', edit: key});
       await sleep(3000)
let  cap = "𝐇𝐞𝐫𝐞'𝐬 𝐙𝐮𝐛𝐢ˣ𝐌𝐨𝐧𝐢 ✨🥀\n*Cᴜᴛᴇ Cᴏᴜᴘʟᴇ* ✨🌹💫\n*Sᴀʏ Mᴀsʜᴀᴀʟʟᴀʜ* 😍💞\n*Mᴏsᴛ Bᴇᴀᴜᴛɪғᴜʟ* ❣❣\n*Cᴏᴜᴘʟᴇ Oɴ Eᴀʀᴛʜ* 😍🌹\n*Dᴏɴ'ᴛ Gᴇᴛ Jᴇᴀʟᴏᴜs Oғ Us* 🤟🏻"
          // let pic = [{"https://telegra.ph/file/814a5bf1ddf8d09ce1653.jpg","https://i.pinimg.com/564x/d5/43/ae/d543aef3523502743b376db380cebff3.jpg"}]
       let mzpic =   [
{"mz": "https://i.pinimg.com/564x/d5/43/ae/d543aef3523502743b376db380cebff3.jpg"},
{"mz": "https://i.pinimg.com/564x/ed/83/9b/ed839b04efc10c9ef27050266be8dbd9.jpg"},
{"mz": "https://i.pinimg.com/564x/32/ac/df/32acdff5d75f0de1239414a10d8178a6.jpg"},
{"mz": "https://i.pinimg.com/564x/c5/a9/4b/c5a94b1c9b5e4ba381e1223762066c83.jpg"},
{"mz": "https://i.pinimg.com/564x/7c/35/ed/7c35ed596356ddc31ef3d926df97243b.jpg"},
{"mz": "https://i.pinimg.com/564x/f7/c1/21/f7c1219f9cd57d13b393442d6254b4e7.jpg"
     }] 
          let random = mzpic[Math.floor(Math.random() * mzpic.length)]
       let king = {            
               image: {url:random.mz },
               caption: cap,
               headerType: 4}
               return await sigma.sendMessage(person.chat,king);
   })
//--------------------------------------------------------------------------------
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


// These Fun Commands are Developed By @Maher-Zubair
// Whatsapp +923466319114
// Usage And CopyRights Are Reserved

