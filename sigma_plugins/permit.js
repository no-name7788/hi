const { sck1,Module_Exports, tlang, prefix,botpic,name,sleep } = require('../lib')
const util = require("util");
  Module_Exports({
              kingcmd: "a",
              shortcut: ['allow'],
              infocmd: "Approves that person for pm",
              
              kingclass: "owner",
              
          },
          async(Void, citel, text,{isCreator}) => {
          if(!isCreator) return citel.reply('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ');
          if(!citel.quoted) return citel.reply('*_Please Mention a user for action._*')
          let user = await sck1.findOne({id:citel.quoted.sender});
          if(user.permit==='true') return citel.reply(`*_${user.name} Have Already Permission To Message You in Pm._*`)
          await sck1.updateOne({ id: citel.quoted.sender }, { permit: "true",times: '1' })
          return citel.reply(`*_Permitted ${user.name} To Message You in Pm_*`);
  
          }
      )
      //---------------------------------------------------------------------------
  Module_Exports({
              kingcmd: "d",
              shortcut: ['da'],
              infocmd: "Disapproves user for pm.",
              kingclass: "owner",
              
          },
          async(Void, citel, text,{ isCreator }) => {
          if(!isCreator) return citel.reply('ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ᴏɴʟʏ ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ');
          if(!citel.quoted) return citel.reply('*_Please mention a user for action._*')
          let user = await sck1.findOne({id:citel.quoted.sender});
          if(user.permit==='false') return citel.reply(`*_${user.name}\'s Permission Has Been Already Revoked For Pm_*`)
          await sck1.updateOne({ id: citel.quoted.sender }, { permit: "false" })
          return citel.reply(`*_Revoked Permission Of ${user.name} To Message You In pm_*`);
  
  
              })
  //---------------------------------------------------------------------------
  Module_Exports({ on: "text" }, async(Void, citel,text,{isCreator}) => {
  if(isCreator) return
  let user = await sck1.findOne({id:citel.sender});
  if(!citel.isGroup && user.permit==='false' && !citel.key.fromMe){
  var text;
  if(user.times>1) text = `*_Hi This is sɪɢᴍᴀ ᴹᴰ a Personal Assistant Of_* ${name.ownername}.\n*_Do Not Call or Send Messages OtherWise You Will Be Blocked_*\n*_Wait Until My Owner Responds You_*`
  if (user.times>2) text = `*_Hello Idiot ${citel.pushName}, Blocking You For Messaging in ${name.ownername} Pm._*\n*_You Crossed ${user.times} Warning(s)._*`
         //let ter = `*_Pm-Protect Action Of_*\n${name.ownername}\n\n${text}\n\n*_⤹★ᴘᴏᴡᴇʀᴇᴅ ʙʏ★⤸ sɪɢᴍᴀ ᴹᴰ_*`;
          let buttonMessaged = {
              image: {
                  url: await botpic(),
              },
              caption: text,
              footer: tlang().footer,
              headerType: 4,

              
          };
          let timess = parseInt(user.times)+1
            await sck1.updateOne({ id: citel.sender }, { times: util.format(timess) })
            if(user.times>2){
              await Void.sendMessage(citel.chat, buttonMessaged, {quoted: citel}) 
              await sleep(3000)
              return await Void.updateBlockStatus(citel.sender, "block")
  }
            return await Void.sendMessage(citel.chat, buttonMessaged, {quoted: citel}) 
  }
  })
  