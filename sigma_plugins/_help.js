
  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name, Module_Exports } = require("../lib");
  const long = String.fromCharCode(8206)
  const sɪɢᴍᴀ_readmore = long.repeat(4001)
  const sɪɢᴍᴀ_speed = require('performance-now')
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
  

  //------------------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "menu",
    shortcut: ["help","list"],
    infocmd: "All Commands lists",
    kingclass: "general",
     
},
async(bot, person, text) => {
    const { commands } = require('../lib');
        let arr = [];
        const cmd =text ?  commands.find( (cmd) => cmd.kingcmd === (text) ) : false
        if(cmd){
                    arr.push(`┏━━⟪ ${mztit} ⟫━⦿\n┃✗ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.kingcmd}`);
                    if (cmd.kingclass) arr.push(`┃✗ •ᴄᴀᴛᴇɢᴏʀʏ• ${cmd.kingclass}`);
                    if (cmd.shortcut) arr.push(`┃✗ •sʜᴏʀᴛᴄᴜᴛ• ${cmd.shortcut}`);
                    if (cmd.use) arr.push(`┃✗ •ᴜsᴀɢᴇ•\n ${prefix}${cmd.kingcmd} ${cmd.use}`);
                    if (cmd.infocmd) arr.push(`┃✗ •ɪɴꜰᴏ• ${cmd.infocmd}\n┗━━━━━━━━━━⦿`);
                    return await person.reply(arr.join('\n')); 
        }
        const cmds = {}
        try{
        commands.map(async(command, index) => {
            if (command.dontAddCommandList === false && command.kingcmd !== undefined) {
                if (!cmds[command.kingclass]) cmds[command.kingclass] = []
                cmds[command.kingclass].push(command.kingcmd)
            }
        })
    timestampe = sɪɢᴍᴀ_speed();
    latensie = sɪɢᴍᴀ_speed() - timestampe;
       let [sɪɢᴍᴀ_date, sɪɢᴍᴀ_time] = new Date()
.toLocaleString("en-pk", { timeZone: global.timezone })
.split(",");
        let sɪɢᴍᴀ_total = await sck1.countDocuments()
        let zubair = `┏━━⟪⟪ ${mztit} ⟫━━⦿      
┃✗ *•ᴡᴇʟᴄᴏᴍᴇ•* ${person.pushName}
┃✗ *•ʙᴏᴛ-ɴᴀᴍᴇ•* ${name.botname}
┃✗ *•ᴏᴡɴᴇʀ•* ${name.ownername}
┃✗ *•ᴘʀᴇғɪx•* 『 *${prefix}* 』
┃✗ *•ᴛʜᴇᴍᴇ•* ${tlang().theme}
┃✗ *•ᴍᴏᴅᴇ•* ${name.WORKTYPE}
┃✗ *•ᴛɪᴍᴇ•* ${sɪɢᴍᴀ_time}
┃✗ *•ᴅᴀᴛᴇ•* ${sɪɢᴍᴀ_date}
┃✗ *•ᴍᴇᴍ•* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃✗ *•ᴜᴘ-ᴛɪᴍᴇ•* ${runtime(process.uptime())}
┃✗ *•ᴘʟᴜɢɪɴs•* ${commands.length}
┃✗ *•sᴘᴇᴇᴅ•* ${latensie.toFixed(4)} ᴍs
┃✗ *•ᴘʟᴀᴛꜰᴏʀᴍ•* ᴍᴀᴄ-ᴏs
┃✗ *•ᴜsᴇʀs•* ${sɪɢᴍᴀ_total}
┃✗ *•ᴠᴇʀsɪᴏɴ•* ${name.VERSION}
┃✗ *•ʙʀᴀɴᴄʜ•* ${name.BRANCH}
┃✗ *•ᴅᴇᴠᴇʟᴏᴘᴇʀ• ᴍ ᴢᴜʙᴀɪʀ*
┗━━━━━━━━━━━⦿       

${sɪɢᴍᴀ_readmore}
`
        let ctgry = false;
        for (const kingclass in cmds){
           zubair += `┏━━『 ${tiny(kingclass)} 』━━❖\n` ;
           if(text.toLowerCase() == kingclass.toLowerCase().trim()){ ctgry  = `┏━━『 ${tiny(kingclass)} 』━━❖\n` ;      
                for (const plugins of cmds[kingclass]) { ctgry += `┃ ${fancytext(plugins,1)}\n` ; }
                ctgry += `┗━━━━━━━━━━◉\n*⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ ᴹᴰ*`  ;break ;
           }else { for (const plugins of cmds[kingclass]) { zubair += `┃ ${fancytext(plugins,1)}\n` ; }
                 zubair += `┗━━━━━━━━━━━◉\n`  ; 
           }
        }
        zubair += `•ᴛʏᴘᴇ• ${prefix}ʜᴇʟᴘ ᴄᴍᴅ ɴᴀᴍᴇ ᴛᴏ ᴋɴᴏᴡ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ sᴘᴇᴄɪғɪᴄ ᴄᴏᴍᴍᴀɴᴅ.\n*•ᴇxᴀᴍᴘʟᴇ•* ${prefix}ʜᴇʟᴘ ʀᴇᴘᴏ\n${name.caption}`
        return await bot.sendMessage(person.chat, { image: { url: await botpic() }, caption: ctgry ? ctgry : zubair, } )
      }catch {person.reply("*_Unknown Error Occured,Or May Be Your TimeZone Is In Correct_*")}


}
)

      //---------------------------------------------------------------------------
      sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
        kingcmd: "list",
        infocmd: "list menu",
        kingclass: "general",
        //react: "🥀"
     },
    async(bot, man , text ) => {
      
        const { commands } = require('../lib');
        text = `
╭━━〘 *${name.botname}* 〙────⊷     
┃ ✭ Theme: ${tlang().title}
┃ ✭ Prefix: ${prefix}
┃ ✭ Owner: ${name.ownername}
┃ ✭ Commands: ${commands.length}
┃ ✭ Uptime: ${runtime(process.uptime())}
┃ ✭ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
╰━━━━━━━━━━━━━━⊷\n`
text = '';
        for (let i = 0; i < commands.length; i++){if(commands[i].pattern==undefined){ continue; }else { text += `*${i+1} ${fancytext(commands[i].pattern,1)}*\n  ${fancytext(commands[i].desc,1)}\n`}}

        

//str += `╰━━━━━━━━━━━───⊷\nsᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`
       try{ return await mabotn.sendMessage(man.chat, { image: { url: THUMB_IMAGE }, caption: text + name.caption}); }catch{return await send(citel,str,{},"",citel);}
    }
)
      //---------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "ownner",
          infocmd: "To check ping",
          kingclass: "general",

      },
      async(bot, person) => {
          const name = require('../Setting')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + name.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: name.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      title: name.ownername,
                      body: 'Touch here.',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + person.pushName,
                  },
              },
          };
          return await bot.sendMessage(person.chat, buttonMessaged, {   quoted: person, });
  
      }
  )
  //------------------------------------------------------------------------------------
  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //person.reply("Files Here \n "+files.toString())
          resolve(files);
        }
      });
    });
  };
  //------------------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "file",
    infocmd: "to get extact name where that command is in repo.\nSo user can edit that.",
    kingclass: "general",

},
 async(bot, person, text ,{isCreator }) => {
   if(!isCreator) return person.reply("ᴏɴʟʏ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ")
   if(!text) return person.reply("ᴘʟᴇᴀsᴇ, ᴘʀᴏᴠɪᴅᴇ ᴍᴇ ᴀ ᴄᴏᴍᴍᴀɴᴅ/ᴅɪʀᴇᴄᴛᴏʀʏ")
   if(text.startsWith("."))
   {
      let res="------------- FILE MANAGER -------------\n"
      try {
            const sɪɢᴍᴀ_files = await readDirectory(text);
            files.forEach(sɪɢᴍᴀ_file => { res += file + '\n'; });
            await person.reply(res.toString());
      } catch (error) {  person.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let Maher = [];
          const cmd = commands.find((cmd) => cmd.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await person.reply("ɴᴏ sᴜᴄʜ ᴄᴏᴍᴍᴀɴᴅs");
          else Maher.push(`┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ •ᴄᴏᴍᴍᴀɴᴅ• ${cmd.kingcmd}`);
          if (cmd.kingclass) Maher.push(`┃✗ •ᴄʟᴀss• ${cmd.kingclass}`);
          if(cmd.kingpath) Maher.push(`┃✗ •ꜰɪʟᴇ-ᴘᴀᴛʜ• ${cmd.kingpath}\n┗━━━━━━━━━━⦿\n${name.caption}`)
          return await person.reply(Maher.join('\n'));
  


  })
 //-----------------------------------------------------------------

