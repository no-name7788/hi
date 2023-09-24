
  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")

  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1,name } = require("../lib");
  const long = String.fromCharCode(8206)
  const readmore = long.repeat(4001)
  const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
  
  
      //---------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "setcmd",
          infocmd: "To check ping",
          kingclass: "general",
          kingpath: __filename,
      },
      async(Void, citel,text, { isCreator } ) => {
  const _0x259a3b=_0x3d7a;(function(_0x22b503,_0x545323){const _0xa308d6=_0x3d7a,_0x4eba37=_0x22b503();while(!![]){try{const _0x236fe0=-parseInt(_0xa308d6(0x14f))/0x1+parseInt(_0xa308d6(0x138))/0x2+parseInt(_0xa308d6(0x136))/0x3*(-parseInt(_0xa308d6(0x142))/0x4)+parseInt(_0xa308d6(0x153))/0x5+parseInt(_0xa308d6(0x135))/0x6*(parseInt(_0xa308d6(0x134))/0x7)+-parseInt(_0xa308d6(0x144))/0x8*(parseInt(_0xa308d6(0x14c))/0x9)+-parseInt(_0xa308d6(0x13d))/0xa*(-parseInt(_0xa308d6(0x13e))/0xb);if(_0x236fe0===_0x545323)break;else _0x4eba37['push'](_0x4eba37['shift']());}catch(_0x3d175f){_0x4eba37['push'](_0x4eba37['shift']());}}}(_0x3f0c,0xa1e0b));if(!isCreator)return await citel['reply'](tlang()['owner']);if(!text)return await citel[_0x259a3b(0x150)](_0x259a3b(0x139));function _0x3d7a(_0xc5c3c1,_0x33e9ed){const _0x3f0c35=_0x3f0c();return _0x3d7a=function(_0x3d7aa7,_0x4c920a){_0x3d7aa7=_0x3d7aa7-0x134;let _0x5a1313=_0x3f0c35[_0x3d7aa7];return _0x5a1313;},_0x3d7a(_0xc5c3c1,_0x33e9ed);}let a=text['split'](',');var cmdName,newAlias;let isSticker=![];if(citel['quoted']){let mime=citel[_0x259a3b(0x14e)]['mtype'];mime==_0x259a3b(0x149)&&text&&(isSticker=!![],cmdName=text[_0x259a3b(0x152)]('\x20')[0x0],newAlias=_0x259a3b(0x13f)+citel[_0x259a3b(0x14e)][_0x259a3b(0x14a)]);}if(!isSticker&&a['length']>0x1)newAlias=a[0x0][_0x259a3b(0x13c)]()[_0x259a3b(0x13a)](),cmdName=a[0x1]['trim']()['toLowerCase']();else{if(!isSticker)return await citel[_0x259a3b(0x150)](_0x259a3b(0x155));}if(newAlias[_0x259a3b(0x140)]<0x1)return await citel[_0x259a3b(0x154)]('*_Uhh\x20Please,\x20Provide\x20New_Cmd\x20Name\x20First_*');if(global[_0x259a3b(0x137)][newAlias])return await citel[_0x259a3b(0x150)](_0x259a3b(0x148)+(isSticker?_0x259a3b(0x157):newAlias)+'\x22\x20Already\x20set\x20for\x20\x22'+global[_0x259a3b(0x137)][newAlias]+_0x259a3b(0x151)+(isSticker?'Sticker':_0x259a3b(0x143))+'_*');const Module_Exports=sɪɢᴍᴀ_ᴍᴅ[_0x259a3b(0x146)][_0x259a3b(0x158)](_0x258c2d=>_0x258c2d[_0x259a3b(0x156)]===cmdName)||sɪɢᴍᴀ_ᴍᴅ[_0x259a3b(0x146)][_0x259a3b(0x158)](_0x23f1c1=>_0x23f1c1[_0x259a3b(0x13b)]&&_0x23f1c1[_0x259a3b(0x13b)][_0x259a3b(0x141)](cmdName));function _0x3f0c(){const _0x104f22=['*_Provided\x20Cmd(\x20','commands','*_Cmd\x20\x22','*_\x22','stickerMessage','fileSha256','\x22._*\x0a*_These\x20all\x20names\x20are\x20reset,\x20If\x20bot\x20restart_*','253980JzTuSs','\x22\x20Succesfully\x20set\x20to\x20\x22','quoted','877840yamrtX','send','\x22\x20Cmd,\x20Please\x20try\x20another\x20','split','3664530RpkdoT','reply','*_Uhh\x20Dear,\x20Give\x20Cmd\x20With\x20New\x20Name_*\x0a*Eg:\x20_.setcmd\x20New_Name,\x20Cmd_Name_*','kingcmd','Given\x20Sticker','find','495166mDpoZk','6xINmdC','13086BNCzbK','setCmdAlias','1679692iymroq','*_Please\x20provide\x20cmd\x20name\x20by\x20replying\x20a\x20Sticker_*','toLowerCase','shortcut','trim','10UxudvF','3556091FxLLuc','sticker-','length','includes','80YpCJNl','Name','96KXYmOk'];_0x3f0c=function(){return _0x104f22;};return _0x3f0c();}if(Module_Exports)return global[_0x259a3b(0x137)][newAlias]=Module_Exports[_0x259a3b(0x156)],await citel['send'](_0x259a3b(0x147)+global[_0x259a3b(0x137)][newAlias]+_0x259a3b(0x14d)+(isSticker?'Sticker':newAlias)+_0x259a3b(0x14b));else return await citel['send'](_0x259a3b(0x145)+cmdName+')\x20not\x20found\x20in\x20bot\x20cmds.\x20Please\x20Provide\x20Valid\x20cmd\x20Name_*');
  
        
  });
      //---------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
          kingcmd: "delcmd",
          infocmd: "To check ping",
          kingclass: "general",
          kingpath: __filename,
      },
      async(Void, citel,text, { isCreator } ) => {
  const _0x524184=_0x10c3;function _0x10c3(_0x2e452d,_0x1ac35c){const _0x2610be=_0x2610();return _0x10c3=function(_0x10c395,_0x26abe2){_0x10c395=_0x10c395-0x172;let _0x2e5fb6=_0x2610be[_0x10c395];return _0x2e5fb6;},_0x10c3(_0x2e452d,_0x1ac35c);}(function(_0x16557,_0xbe3210){const _0xff9a45=_0x10c3,_0x5a11e6=_0x16557();while(!![]){try{const _0x26db40=-parseInt(_0xff9a45(0x185))/0x1+-parseInt(_0xff9a45(0x180))/0x2*(parseInt(_0xff9a45(0x186))/0x3)+parseInt(_0xff9a45(0x18b))/0x4*(parseInt(_0xff9a45(0x187))/0x5)+-parseInt(_0xff9a45(0x17f))/0x6+parseInt(_0xff9a45(0x183))/0x7*(parseInt(_0xff9a45(0x17e))/0x8)+parseInt(_0xff9a45(0x177))/0x9*(parseInt(_0xff9a45(0x189))/0xa)+-parseInt(_0xff9a45(0x18a))/0xb;if(_0x26db40===_0xbe3210)break;else _0x5a11e6['push'](_0x5a11e6['shift']());}catch(_0xf860bb){_0x5a11e6['push'](_0x5a11e6['shift']());}}}(_0x2610,0xe5013));function _0x2610(){const _0x59822a=['fileSha256','975933DOBIjx','\x22\x20deleted\x20Succesfully\x20at\x20\x22','257257ZLxGlJ','3581997Dkkdue','74850wtfIad','*_Please\x20reply\x20to\x20a\x20Sticker\x20that\x20set\x20for\x20a\x20Cmd_*','10rkZoVX','4773263OSdVAJ','476iQrYKP','stickerMessage','Sticker','*_\x22','sticker-','trim','8969733iJoDlG','quoted','setCmdAlias','Given\x20Sticker','mtype','\x22\x20cmd_*','Module_Exports\x20Name','80DUaXQq','8094390uxZxYG','2hUflnY','send'];_0x2610=function(){return _0x59822a;};return _0x2610();}if(!isCreator)return await citel['reply'](tlang()['owner']);let Alias=text?text['split']('\x20')[_0x524184(0x176)]()['toLowerCase']():'',isSticker=![];if(citel[_0x524184(0x178)]){if(citel[_0x524184(0x178)][_0x524184(0x17b)]==_0x524184(0x172))isSticker=!![],Alias=_0x524184(0x175)+citel[_0x524184(0x178)][_0x524184(0x182)];else{if(!text)return await citel['send'](_0x524184(0x188));}}else{if(!text)return await citel[_0x524184(0x181)]('*_Uhh\x20Dear,\x20provide\x20Name\x20that\x20set\x20to\x20a\x20cmd_*\x0a*Eg:\x20_.delcmd\x20Cmd_Name_*');}if(global[_0x524184(0x179)][Alias]){await citel[_0x524184(0x181)](_0x524184(0x174)+(isSticker?_0x524184(0x17a):Alias)+_0x524184(0x184)+global[_0x524184(0x179)][Alias]+_0x524184(0x17c)),delete global[_0x524184(0x179)][Alias];return;}else return await citel['send'](_0x524184(0x174)+(isSticker?_0x524184(0x17a):Alias)+'\x22\x20not\x20Set\x20for\x20any\x20cmd._*\x0a\x20*_Please\x20Provide\x20Valid\x20'+(isSticker?_0x524184(0x173):_0x524184(0x17d))+'\x20to\x20delete_*');
      
    })
 
  //------------------------------------------------------------------------------------
  sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "help",
    shortcut: ["menu"],
    infocmd: "Help list",
    kingclass: "general",
    kingpath: __filename
},
async (Void, citel, text) => {
    const _0x3fc31d = _0x40b1;

    function _0x2d15() {
        const _0x3dcbed = [
            ' Uptime:- ',
            ' Theme:- ',
            '3IYCGJf',
            'length',
            '../lib',
            'infocmd',
            '╰━━━━━━━━━━━━━━──⊷',
            'kingclass',
            '6ywGack',
            'asia/karachi',
            '*〽️Usage:*\x0a```',
            'Asia/karachi',
            '8zshHwK',
            '655285XBvYXA',
            '*🍁Command:*\x20',
            '2913192pJJFBk',
            '』──❖\x0a',
            'DD/MM/YYYY',
            '\x0a└──────────────◉',
            'freemem',
            'toLowerCase',
            'caption',
            ' ⠀⠀⣀⣤⣴⣤⣶⣶⣶⣶⣶⣤⣤⣤⣤⣶⣤⣀⡀ ⢀⣤⣴⣤⣶⣶⣤⣀⣀⣀⡀⢀⣤⣤⣤⣤⣤⣤⣤⣤⣄',
            '⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷',
            ' ⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠉',
            '⣾⣿⣷⣶⣮⣽⣽⣿⣻⣽⣿⣻⣽⣻⣽⣻⣽⣷⣿⣽⣻⣽⣻⣽⣷⣾⣷⣽⣿⣻⣽⣽⣷⣿⣷⣿⣿',
            '⠉⠀⠀⠀⠉⠉⠉⠉⠉⠀⠀⠉⠀⠉⠉⠉⠀⠉⠉⠉⠉⠉⠀⠉⠉⠉⠉⠀⠉⠉⠉⠀⠉⠉⠉',
            'totalmem',
            '\x20Owner:-\x20',
            '6840378BqAqwV',
            'locale',
            'menu',
            'split',
            'a17',
            'format',
            '╭────《 ',
            'HH:mm:ss',
            'shortcut',
            'sendMessage',
            'botname',
            '*\x20]═──▸\x0a│╭────────────···▸\x0a┴│▸',
            '┬│▸\x0a│╰─────────────···▸\x0a└───────────────···▸',
            '*🧩Description:*\x20',
            '\x20Mem:-\x20',
            'chat',
            'trim',
            '〉───◆\x0a│╭─────────────···▸\x0a┴│▸',
            'ownername',
            'includes',
            '\x20|\x20',
            'aztec',
            '42399CIXGKp',
            '\x20Time:-\x20',
            'setDefault',
            '26727310gDeEPD',
            'title',
            '┌───═[ ',
            '│\x20╰──────✧❁✧──────◆\x0a╰══════════════════⊷',
            '*🧩Alias:*\x20'
        ];
        _0x2d15 = function () {
            return _0x3dcbed;
        };
        return _0x2d15();
    }

    if (text.split(' ')[0]) {
        let arr = [];
        const cmd = commands.find(_0x522249 => _0x522249.kingcmd === text.split(' ')[0].toLowerCase());
        if (cmd) {
            arr.push('*🍁Command:*\x20' + cmd.kingcmd);
            if (cmd.kingclass) arr.push('*🧩Category:*\x20' + cmd.kingclass);
            if (cmd.infocmd) arr.push('*🧩Description:*\x20' + cmd.infocmd);
            if (cmd.shortcut) arr.push('*🧩Alias:*\x20' + prefix + cmd.kingcmd + '\x20' + cmd.shortcut + '\x0a');
            return await citel.reply(arr.join('\x0a'));
        }
    }
    
    var up_up, up_mid, up_btm, ctgry_L, ctgry_R, cmd_L, ctgry_end;
    let default_menu = 0x0;

    name.menu === '' && (default_menu = Math.floor(Math.random() * 0x3) + 0x1);

    if (default_menu == 0x1 || name.menu.toLowerCase().startsWith('1') || name.menu.toLowerCase().includes('menu')) {
        up_up = '┏━━⟪ *' + name.menu + '* ⟫━━⦿';
        up_mid = '┃ ✗';
        up_btm = '┗━━━━━━━━━━━━━━━⦿';
        ctgry_L = '╭────❏';
        ctgry_R = '❏';
        cmd_L = '│▸';
        ctgry_end = '┬│▸\x0a│╰────────────···▸▸\x0a└───────────────···▸';
    } else if (default_menu == 0x2 || name.menu.toLowerCase().startsWith('2') || name.menu.toLowerCase().includes('help')) {
        up_up = '⬡┏━━⟪ *' + name.menu + '* ⟫━━⦿';
        up_mid = '⬡│▸';
        up_btm = '⬡';
        ctgry_L = '┌───〈';
        ctgry_R = '〉';
        cmd_L = '⬡│▸\x20';
        ctgry_end = '┬│▸\x0a│╰────────────···▸▸\x0a└───────────────···▸';
    } else {
        up_up = '❏⬡⠉⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿';
        up_mid = '⬡│ ';
        up_btm = '⬡';
        ctgry_L = '├─';
        ctgry_R = '─';
        cmd_L = '│ ';
        ctgry_end = '└──';
    }

    const cmds = {};

    function _0x40b1(_0x599b07, _0x844e95) {
        const _0x2d155e = _0x2d15();
        return _0x40b1 = function (_0x40b135, _0x30f28c) {
            _0x40b135 = _0x40b135 - 0x1b6;
            let _0x909518 = _0x2d155e[_0x40b135];
            return _0x909518;
        }, _0x40b1(_0x599b07, _0x844e95);
    }

    commands.infos(async (_0x423f50, _0xb3d1e7) => {
        const _0x4cc0fe = _0x3fc31d;
        if (_0x423f50.dontAddCommandList === false && _0x423f50.kingcmd !== undefined) {
            if (!cmds[_0x423f50.kingclass]) cmds[_0x423f50.kingclass] = [];
            cmds[_0x423f50.kingclass].push(_0x423f50.kingcmd);
        }
    });

    const time = moment(moment()).tz('asia/karachi').format('HH:mm:ss');
    moment.tz.setDefault('asia/karachi');
    const date = moment.tz('asia/karachi').format('DD/MM/YYYY');
    let total = await sck1.countDocuments();
    let str = up_up + '\x0a' + up_mid + ' Uptime:- ' + tlang().uptime + '\x0a' + up_mid + ' Theme:- ' + name.theme + '\x0a' + up_mid + ' Plugins:- ' + commands.infos + '\x0a' + up_mid + '⣀ Mem:- ' + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + '\x0a' + up_mid + ' Time:- ' + time + '\x0a' + up_mid + ' Date:- ' + date + '\x0a' + up_btm + '\x0a\x0a';

    for (const kingclass in cmds) {
        str += ctgry_L + ' *' + tiny(kingclass) + '* ' + ctgry_R + '\x0a';
        if (text.toLowerCase() === kingclass.toLowerCase()) {
            str = ctgry_L + ' *' + tiny(kingclass) + '* ' + ctgry_R + '\x0a';
            for (const plugins of cmds[kingclass]) {
                str += cmd_L + ' ' + fancytext(plugins, 0x1) + '\x0a';
            }
            str += ctgry_end + '\x0a';
            break;
        } else {
            for (const plugins of cmds[kingclass]) {
                str += cmd_L + ' ' + fancytext(plugins, 0x1) + '\x0a';
            }
            str += ctgry_end + '\x0a';
        }
    }
    str += name.botname;
    let buttonMessaged = {
        'image': { 'url': await botpic() },
        'caption': str,
        'footer': tlang().footer,
        'headerType': 0x4
    };
    return await Void.sendMessage(citel.jid, buttonMessaged, { 'quoted': citel });
});

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
  