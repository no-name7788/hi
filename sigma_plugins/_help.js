
  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name } = require("../lib");
  const long = String.fromCharCode(8206)
  const readmore = long.repeat(4001)
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')

  //------------------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "help",
    shortcut: ["menu"],
    infocmd: "Help list",
    kingclass: "general",
    // react: "👀",
    kingpath: __filename
  },
  async(Void, citel, text) => {
  
    const commands = require('../lib')
  
    if(text.split(' ')[0]) {
      let arr = [];
      const Module_Exports = commands.find(c => c.kingcmd === text.split(' ')[0].toLowerCase());
      if (Module_Exports) {
        arr.push("*🍁Command:* " + Module_Exports.kingcmd);
        if (Module_Exports.kingclass) arr.push("*🧩Category:* " + Module_Exports.kingclass); 
        if (Module_Exports.infocmd) arr.push("*🧩Description:* " + Module_Exports.infocmd);
        if (Module_Exports.shortcut) arr.push("*🧩Alias:* " + prefix + Module_Exports.kingcmd + ' ' + Module_Exports.shortcut);
        return await citel.reply(arr.join('\n'));
      }
    }
  
    var up_up,up_mid,up_btm,ctgry_L,ctgry_R,cmd_L,ctgry_end;
    let default_menu = 0;
    if (name.menu == '') {
      default_menu = Math.floor(Math.random() * 3) + 1; 
    }
  
    if (default_menu == 1 || name.menu.toLowerCase().startsWith('1') || name.menu.toLowerCase().includes('aztec')) {
      up_up = '┏━━⟪ *'+name.botname+'* ⟫━━⦿';
      up_mid = '┃ ✗'; 
      up_btm = '┗━━━━━━━━━━━━━━━⦿';
      ctgry_L = '┃';
      ctgry_R = '┃';
      cmd_L = '┃ ';
      ctgry_end = '┃\n┗━━━━━━━━━━━━━━━⦿';
  
    } else if (default_menu == 2 || name.menu.toLowerCase().startsWith('2') || name.menu.toLowerCase().includes('boxy')) {
      up_up = '┏━━━━━━━[ *'+name.botname+'* ]━━━━━━━⟪';  
      up_mid = '⬡│▸';
      up_btm = '┗━━━━━━━━━━━━━━━━━┻';
      ctgry_L = '┌───〈';
      ctgry_R = '〉';
      cmd_L = '⬡│▸ '; 
      ctgry_end = '⬡│▸\n│╰────────────···▸▸\n└───────────────···▸';
  
    } else {
      up_up = '╭────《 *'+name.botname+'* 》───◆';
      up_mid = '│ │';
      up_btm = '╰━━━━━━━━━━━━━━━◆';
      ctgry_L = '╭────❏'; 
      ctgry_R = '❏';
      cmd_L = '│';
      ctgry_end = '┬│▸\n│╰────────────···▸\n└──────────────◉';
    }
  
    const cmds = {};

    events.commands.map(async (command, index) => {
      if (command.dontAddCommandList !== true && command.kingcmd !== undefined) {
        if (!cmds[command.kingclass]) cmds[command.kingclass] = [];
        cmds[command.kingclass].push(command.kingcmd);
      }
    })
  
    const time = moment(moment()).tz('Asia/Karachi').format('HH:mm:ss')
    moment.tz.setDefault("Asia/Karachi")['locale']('id');
    const date = moment.tz('Asia/karachi').format('DD/MM/YYYY')
  
    let total = await sck1.countDocuments(),
    str = `${up_up}\n${up_mid} Language: ${tlang().title}\n${up_mid} Owner: ${name.ownername}\n${up_mid}  Plugins: ${commands.size}\n${up_mid} Uptime: ${runtime(process.uptime())}\n${up_mid} Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}\n${up_mid} Time: ${time}\n${up_mid} Date: ${date}\n${up_btm}\n\n`;
  
    for (const kingclass in cmds) {
      str += `${ctgry_L} *${tiny(kingclass)}* ${ctgry_R}\n`;
      
      if (text.toLowerCase() == kingclass.toLowerCase()) {
        str = `${ctgry_L} *${tiny(kingclass)}* ${ctgry_R}\n`;
        for (const plugins of cmds[kingclass]) {
          str += `${cmd_L} ${fancytext(plugins, 1)}\n`;
        }
        str += `${ctgry_end}\n`;
        break;
      } else {
        for (const plugins of cmds[kingclass]) {
          str += `${cmd_L} ${fancytext(plugins, 1)}\n`;
        }
        str += `${ctgry_end}\n`;
      }
  
    }
  
    str += name.footer;
  
    let buttonMessaged = {
      image: { url: await botpic() },
      caption: str,
      footer: tlang().footer,
      headerType: 4
    }
  
    return await Void.sendMessage(citel.chat, buttonMessaged, {quoted: citel});
  
  })
      //---------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
              kingcmd: "list",
              infocmd: "list menu",
              kingclass: "general",
              react: "🥀"
           },
          async(Void, citel) => {
              const { commands } = require('../lib');
              let str = `
  ╭━━〘 *${name.botname}* 〙────⊷     
  ┃ ✭ Theme: ${tlang().title}
  ┃ ✭ Prefix: ${prefix}
  ┃ ✭ Owner: ${name.ownername}
  ┃ ✭ Commands: ${commands.length}
  ┃ ✭ Uptime: ${runtime(process.uptime())}
  ┃ ✭ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
  ╰━━━━━━━━━━━━━━⊷\n`
  
              for (let i = 0; i < commands.length; i++) 
              {
                   if(commands[i].kingcmd==undefined) continue
                   str +=       `╭ ${i+1} *${fancytext(commands[i].kingcmd,1)}*\n`                // ${i+1} 
                   str += `╰➛ ${fancytext(commands[i].infocmd,1)}\n`
              }
  
              
   
   //str += `╰━━━━━━━━━━━───⊷\nsᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`
              return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str + name.caption ,footer: tlang().footer, headerType: 4 })
          }
      )
      //---------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "owner",
          infocmd: "To check ping",
          kingclass: "general",
          react: "💜",
          kingpath: __filename
      },
      async(Void, citel) => {
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
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + citel.pushName,
                  },
              },
          };
          return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });
  
      }
  )
  //------------------------------------------------------------------------------------
  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //citel.reply("Files Here \n "+files.toString())
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
      //react: "✨",
      kingpath: __filename
  },
  async(Void, citel, text ,{isCreator }) => {
   if(!isCreator) return citel.reply("*Ahh Sorry, Only Owner Can Use This Cmd*")
   if(!text) return citel.reply("*Uhh PLease, Provide A Command/Directory*")
   if(text.startsWith("."))
   {
      let res="*------------- FILE MANAGER -------------*\n"
      try {
            const files = await readDirectory(text);
            files.forEach(file => { res += file + '\n'; });
            await citel.reply(res.toString());
      } catch (error) {  citel.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let arr = [];
          const Module_Exports = commands.find((Module_Exports) => Module_Exports.kingcmd === (text.split(" ")[0].toLowerCase()))
          if (!Module_Exports) return await citel.reply("*❌No Such commands.*");
          else arr.push(`*🍁Command:* ${Module_Exports.kingcmd}`);
          if (Module_Exports.kingclass) arr.push(`*🧩Type:* ${Module_Exports.kingclass}`);
          if(Module_Exports.kingpath) arr.push(`✨FileName: ${Module_Exports.kingpath}`)
          return await citel.reply(arr.join('\n'));
  
  
  })
  
