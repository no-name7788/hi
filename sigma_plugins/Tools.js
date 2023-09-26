


const axios = require('axios');
const fs = require('fs-extra')
const { plugins,plugindb, remove, isUrl,Module_Exports , tlang  , name } = require('../lib')
const sɪɢᴍᴀ_ᴍᴅ = require('../lib/sigma_plugins')
//---------------------------------------------------------------------------
sɪɢᴍᴀ_ᴍᴅ.Module_Exports({
    kingcmd: "ping",
    infocmd: "To check ping",
    kingclass: "tools",
    use: " ",
},
async(sigma, person) => {
    var inital = new Date().getTime();
    const { key } = await sigma.sendMessage(person.chat, {text: '_Checking ping!!!_'});
    var final = new Date().getTime();
   // await Secktor.sleep(1000)
   return await sigma.sendMessage(person.chat, {text: '*𝘗𝘐𝘕𝘎*\n *' + (final - inital) + ' 𝘔𝘚* ', edit: key});
}
);
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "plugins",
        shortcut :['plugin',"plist"],
        kingclass: "tools",
        infocmd: "Shows list of all externally installed modules",
        kingpath: __filename
    },
    async(Void, citel, text, { isCreator }) => {
 
        if (!isCreator) return citel.reply(tlang().owner)
      // if(!text) return await citel.reply("*_Uhh Please, Provide Me Plugin Url_*")
        let allmodtext = `*All External Installed Modules in ${name.botname}:*\n\n`
        allmodtext += await plugins()
        return await citel.reply(allmodtext)

    }
)

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "remove",
        shortcut :['uninstall'],
        kingclass: "tools",
        infocmd: "removes external modules.",
        kingpath: __filename
    },
    async(Void, citel, text,{ isCreator}) => {
        if (!isCreator) return citel.reply(tlang().owner)
        if(!text) return await citel.reply("*_Please, Provide Me Plugin Name_*")
 
        if(text==='alls') 
        { 
         await plugindb.collection.drop() ; 
         return citel.reply(`Deleted All Plugins From ${name.botname}`) ;  
        }
 try 
 {
        let kill = await remove(text.split(" ")[0])
        delete require.cache[require.resolve(__dirname+"/" + text + ".js")];
        fs.unlinkSync(__dirname + "/" + text+ ".js");
        await citel.reply(`*_${kill}_* \n*Please Wait, ${name.botname} Restarting*`)
        const { exec } = require("child_process")
        exec('pm2 restart all')  
 }
 catch (e) {return await citel.reply(`*_That Plugin not Found in ${name.botname}_*`)}
 })

//---------------------------------------------------------------------------


Module_Exports({
  kingcmd: "install",
  category: "tools",
  desc: "Installs external Plugins..",
  use: " ",
},
async(sigma, person, memo, {isCreator}) => {

  if (!isCreator) return person.reply(tlang().owner)
  
  if(!memo){   
    return await person.reply("```Please give me Plugin Link to install```");  
  }

  
  let trl = memo ? memo : person.quoted && person.quoted.memo ? person.quoted.memo : person.reply_message;
  
  for(let Url of isUrl(trl)){

    try {
      var url = new URL(Url);
    } catch {
      person.reply('Invalid Plugin link!');
    }
    
    let fs = require('fs'), {data} = await axios.get(url.href);

    let lp = /pattern: ["'](.*)["'],/g.exec(data);
    let lj = lp[1].split(' ')[0] || Math.random().toString(36).slice(-5);
    l = lj.replace(/[^A-Za-z]/g,'');

    await fs.writeFileSync(__dirname + '/' + l + '.js', data, 'utf8');

    try {
      require(__dirname + '/' + l + '.js');
    } catch(err) {
      return fs.unlinkSync(__dirname + '/' + l + '.js'), person.reply('Invalid Plugin\n' + err + '```');
    }

    const {plugindb} = require('../lib');
    let plugin = {};

    plugin['id'] = l;
    plugin['url'] = url;

    await new plugindb(plugin).save();
    person.reply('*ᴘʟᴜɢɪɴ* ' + l + (' *ɪɴsᴛᴀʟʟᴇᴅ ɪɴ* ' + `*sɪɢᴍᴀ ᴹᴰ*` + ' ' ))

  }})

//------------------------------------------------------------------
Module_Exports(
    {   
     kingcmd: "restart",
     shortcut: ["res"],
     infocmd: "To restart bot",
     kingclass: "tools",
      kingpath: __filename
     }, async(Void, citel,text,{ isCreator }) => {
          if (!isCreator) return citel.reply(tlang().owner);
            const { exec } = require("child_process");
             citel.reply(`*_Please Wait While_*\n*_${name.botname} Restarting_*`); exec('pm2 restart all'); });





