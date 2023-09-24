
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
const _0x3fc31d=_0x40b1;(function(_0x3800cd,_0x3de357){const _0x42bc7c=_0x40b1,_0x480304=_0x3800cd();while(!![]){try{const _0x2c9083=-parseInt(_0x42bc7c(0x1f5))/0x1+parseInt(_0x42bc7c(0x1f1))/0x2*(-parseInt(_0x42bc7c(0x1d9))/0x3)+-parseInt(_0x42bc7c(0x1e6))/0x4+parseInt(_0x42bc7c(0x1e4))/0x5*(parseInt(_0x42bc7c(0x1df))/0x6)+-parseInt(_0x42bc7c(0x1cf))/0x7*(-parseInt(_0x42bc7c(0x1e3))/0x8)+-parseInt(_0x42bc7c(0x1b9))/0x9+parseInt(_0x42bc7c(0x1d2))/0xa;if(_0x2c9083===_0x3de357)break;else _0x480304['push'](_0x480304['shift']());}catch(_0x1c7ec3){_0x480304['push'](_0x480304['shift']());}}}(_0x2d15,0x8ed11));const {commands}=require(_0x3fc31d(0x1db));function _0x2d15(){const _0x3dcbed=['\x20Uptime:-\x20','\x20Theme:-\x20','3IYCGJf','length','../lib','infocmd','╰━━━━━━━━━━━━━━──⊷','kingclass','6ywGack','asia/karachi','*〽️Usage:*\x0a\x20```','Asia/karachi','8zshHwK','655285XBvYXA','*🍁Command:*\x20','2913192pJJFBk','』──❖\x0a','DD/MM/YYYY','\x0a└──────────────◉','freemem','toLowerCase','caption','\x20\x20》────⊷\x0a│\x20╭──────✧❁✧──────◆','```','map','*🧩Category:*\x20','461954NCDnWn','┌──『','kingcmd','\x20Date:-\x20','505551HaJHvT','random','push','join','use','totalmem','\x20Owner:-\x20','6840378BqAqwV','locale','menu','split','a17','format','╭────《\x20\x20','HH:mm:ss','shortcut','sendMessage','botname','*\x20]═──▸\x0a│╭────────────···▸\x0a┴│▸','┬│▸\x0a│╰─────────────···▸\x0a└───────────────···▸','*🧩Description:*\x20','\x20Mem:-\x20','chat','trim','〉───◆\x0a│╭─────────────···▸\x0a┴│▸','ownername','includes','\x20|\x20','aztec','42399CIXGKp','\x20Time:-\x20','setDefault','26727310gDeEPD','title','┌───═[\x20*','│\x20╰──────✧❁✧──────◆\x0a╰══════════════════⊷','*🧩Alias:*\x20'];_0x2d15=function(){return _0x3dcbed;};return _0x2d15();}if(text['split']('\x20')[0x0]){let arr=[];const cmd=commands['find'](_0x522249=>_0x522249[_0x3fc31d(0x1f3)]===text[_0x3fc31d(0x1bc)]('\x20')[0x0][_0x3fc31d(0x1eb)]());if(cmd){arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1e5)+cmd[_0x3fc31d(0x1f3)]);if(cmd['kingclass'])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1f0)+cmd[_0x3fc31d(0x1de)]);if(cmd[_0x3fc31d(0x1c1)])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1d6)+cmd[_0x3fc31d(0x1c1)]);if(cmd[_0x3fc31d(0x1dc)])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1c6)+cmd[_0x3fc31d(0x1dc)]);if(cmd[_0x3fc31d(0x1b6)])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1e1)+prefix+cmd[_0x3fc31d(0x1f3)]+'\x20'+cmd[_0x3fc31d(0x1b6)]+_0x3fc31d(0x1ee));return await citel['reply'](arr[_0x3fc31d(0x1f8)]('\x0a'));}}var up_up,up_mid,up_btm,ctgry_L,ctgry_R,cmd_L,ctgry_end;let default_menu=0x0;name[_0x3fc31d(0x1bb)]===''&&(default_menu=Math['floor'](Math[_0x3fc31d(0x1f6)]()*0x3)+0x1);if(default_menu==0x1||name['menu'][_0x3fc31d(0x1c9)]()['startsWith']('1')||name[_0x3fc31d(0x1bb)]['toLowerCase']()[_0x3fc31d(0x1cc)](_0x3fc31d(0x1ce)))up_up='┏━━⟪\x20*'+name[_0x3fc31d(0x1c3)]+'*\x20⟫━━⦿',up_mid='┃\x20✗',up_btm='┗━━━━━━━━━━━━━━━⦿',ctgry_L=_0x3fc31d(0x1f2),ctgry_R=_0x3fc31d(0x1e7),cmd_L=_0x3fc31d(0x1cd),ctgry_end=_0x3fc31d(0x1e9);else default_menu==0x2||name[_0x3fc31d(0x1bb)][_0x3fc31d(0x1c9)]()['startsWith']('2')||name[_0x3fc31d(0x1bb)][_0x3fc31d(0x1eb)]()[_0x3fc31d(0x1cc)](_0x3fc31d(0x1bd))?(up_up=_0x3fc31d(0x1d4)+name[_0x3fc31d(0x1c3)]+_0x3fc31d(0x1c4),up_mid='⬡│▸',up_btm=_0x3fc31d(0x1c5),ctgry_L='┌───〈',ctgry_R=_0x3fc31d(0x1ca),cmd_L='⬡│▸\x20',ctgry_end='┬│▸\x0a│╰────────────···▸▸\x0a└───────────────···▸'):(up_up=_0x3fc31d(0x1bf)+name[_0x3fc31d(0x1c3)]+_0x3fc31d(0x1ed),up_mid='│\x20│',up_btm=_0x3fc31d(0x1d5),ctgry_L='╭────❏',ctgry_R='❏',cmd_L='│',ctgry_end=_0x3fc31d(0x1dd));const cmds={};function _0x40b1(_0x599b07,_0x844e95){const _0x2d155e=_0x2d15();return _0x40b1=function(_0x40b135,_0x30f28c){_0x40b135=_0x40b135-0x1b6;let _0x909518=_0x2d155e[_0x40b135];return _0x909518;},_0x40b1(_0x599b07,_0x844e95);}commands[_0x3fc31d(0x1ef)](async(_0x423f50,_0xb3d1e7)=>{const _0x4cc0fe=_0x3fc31d;if(_0x423f50['dontAddCommandList']===![]&&_0x423f50[_0x4cc0fe(0x1f3)]!==undefined){if(!cmds[_0x423f50[_0x4cc0fe(0x1de)]])cmds[_0x423f50[_0x4cc0fe(0x1de)]]=[];cmds[_0x423f50[_0x4cc0fe(0x1de)]][_0x4cc0fe(0x1f7)](_0x423f50[_0x4cc0fe(0x1f3)]);}});const time=moment(moment())[_0x3fc31d(0x1be)](_0x3fc31d(0x1c0));moment['tz'][_0x3fc31d(0x1d1)](_0x3fc31d(0x1e2))[_0x3fc31d(0x1ba)]('id');const date=moment['tz'](_0x3fc31d(0x1e0))[_0x3fc31d(0x1be)](_0x3fc31d(0x1e8));let total=await sck1['countDocuments'](),str=up_up+'\x0a'+up_mid+_0x3fc31d(0x1d8)+tlang()[_0x3fc31d(0x1d3)]+'\x0a'+up_mid+_0x3fc31d(0x1b8)+name[_0x3fc31d(0x1cb)]+'\x0a'+up_mid+'\x20Plugins:-\x20'+commands[_0x3fc31d(0x1da)]+'\x0a'+up_mid+_0x3fc31d(0x1d7)+runtime(process['uptime']())+'\x0a'+up_mid+_0x3fc31d(0x1c7)+formatp(os['totalmem']()-os[_0x3fc31d(0x1ea)]())+'/'+formatp(os[_0x3fc31d(0x1b7)]())+'\x0a'+up_mid+_0x3fc31d(0x1d0)+time+'\x0a'+up_mid+_0x3fc31d(0x1f4)+date+'\x0a'+up_btm+'\x0a\x0a';for(const kingclass in cmds){str+=ctgry_L+'\x20*'+tiny(kingclass)+'*\x20'+ctgry_R+'\x0a';if(text[_0x3fc31d(0x1eb)]()==kingclass[_0x3fc31d(0x1eb)]()){str=ctgry_L+'\x20*'+tiny(kingclass)+'*\x20'+ctgry_R+'\x0a';for(const plugins of cmds[kingclass]){str+=cmd_L+'\x20'+fancytext(plugins,0x1)+'\x0a';}str+=ctgry_end+'\x0a';break;}else{for(const plugins of cmds[kingclass]){str+=cmd_L+'\x20'+fancytext(plugins,0x1)+'\x0a';}str+=ctgry_end+'\x0a';}}str+=name[_0x3fc31d(0x1ec)];let buttonMessaged={'image':{'url':await botpic()},'caption':str,'footer':tlang()['footer'],'headerType':0x4};return await Void[_0x3fc31d(0x1c2)](citel[_0x3fc31d(0x1c8)],buttonMessaged,{'quoted':citel});
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
  