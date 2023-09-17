


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

Module_Exports(
    {
  kingcmd: "install",
  kingclass: "tools",
  infocmd: "Installs external Plugins..",
  use: " ",
},
async(sigma, person, memo, {isCreator}) => {
  var _0x9dbe=["\x60\x60\x60\x50\x6C\x65\x61\x73\x65\x20\x67\x69\x76\x65\x20\x6D\x65\x20\x70\x6C\x75\x67\x69\x6E\x20\x4C\x69\x6E\x6B\x20\x74\x6F\x20\x69\x6E\x73\x74\x61\x6C\x6C\x60\x60\x60","\x72\x65\x70\x6C\x79","\x6F\x77\x6E\x65\x72","\x68\x74\x74\x70\x73","\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x60\x60\x60\x50\x6C\x65\x61\x73\x65\x20\x67\x69\x76\x65\x20\x6D\x65\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x50\x6C\x75\x67\x69\x6E\x20\x4C\x69\x6E\x6B\x20\x74\x6F\x20\x69\x6E\x73\x74\x61\x6C\x6C\x60\x60\x60","\x71\x75\x6F\x74\x65\x64","\x6D\x65\x6D\x6F","\x72\x65\x70\x6C\x79\x5F\x6D\x65\x73\x73\x61\x67\x65","\x20","\x73\x70\x6C\x69\x74","\x66\x73","\x67\x65\x74","\x65\x78\x65\x63","\x73\x6C\x69\x63\x65","\x72\x61\x6E\x64\x6F\x6D","","\x72\x65\x70\x6C\x61\x63\x65","\x2F","\x2E\x6A\x73","\x75\x74\x66\x38","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x49\x6E\x76\x61\x6C\x69\x64\x20\x50\x6C\x75\x67\x69\x6E\x0A","\x60\x60\x60","\x2E\x2E\x2F\x6C\x69\x62","\x69\x64","\x75\x72\x6C","\x73\x61\x76\x65","\x2A\u1D18\u029F\u1D1C\u0262\u026A\u0274\x2A\x20","\x20\x2A\u026A\u0274\x73\u1D1B\u1D00\u029F\u029F\u1D07\u1D05\x20\u026A\u0274\x2A","\x20\x2A\x73\u026A\u0262\u1D0D\u1D00\x20\u1D39\u1D30\x2A\x20"];if(!memo){return person[_0x9dbe[1]](_0x9dbe[0])};if(!isCreator){return person[_0x9dbe[1]](tlang()[_0x9dbe[2]])};if(!memo[_0x9dbe[5]]()[_0x9dbe[4]](_0x9dbe[3])){return  await person[_0x9dbe[1]](_0x9dbe[6])};let trl=memo?memo:person[_0x9dbe[7]]&& person[_0x9dbe[7]][_0x9dbe[8]]?person[_0x9dbe[7]][_0x9dbe[8]]:person[_0x9dbe[9]];let url=memo[_0x9dbe[11]](_0x9dbe[10])[0];let fs=require(_0x9dbe[12]),{data}= await axios[_0x9dbe[13]](url);let lp=/pattern: ["'](.*)["'],/g[_0x9dbe[14]](data);let lj=lp[1][_0x9dbe[11]](_0x9dbe[10])[0]|| Math[_0x9dbe[16]]().toString(36)[_0x9dbe[15]](-5);l= lj[_0x9dbe[18]](/[^A-Za-z]/g,_0x9dbe[17]); await fs[_0x9dbe[22]](__dirname+ _0x9dbe[19]+ l+ _0x9dbe[20],data,_0x9dbe[21]);try{require(__dirname+ _0x9dbe[19]+ l+ _0x9dbe[20])}catch(err){return fs[_0x9dbe[23]](__dirname+ _0x9dbe[19]+ l+ _0x9dbe[20]),person[_0x9dbe[1]](_0x9dbe[24]+ err+ _0x9dbe[25])};const {plugindb}=require(_0x9dbe[26]);let plugin={};plugin[_0x9dbe[27]]= l;plugin[_0x9dbe[28]]= url; await  new plugindb(plugin)[_0x9dbe[29]]();person[_0x9dbe[1]](_0x9dbe[30]+ l+ _0x9dbe[31]+ _0x9dbe[32]+ _0x9dbe[10])



})
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
             citel.reply(`*Please Wait While*\n${name.botname} *Restarting*`); exec('pm2 restart all'); });





