
const {Module_Exports, Module_Exportss,tlang} = require('../lib')
Module_Exports({   kingcmd: "restart", infocmd: "To restart bot",kingclass: "tools", kingpath: __filename }, async(Void, citel,text,{ isCreator }) => {  if (!isCreator) return citel.reply(tlang().owner);  const { exec } = require("child_process"); citel.reply('Restarting'); exec('pm2 restart all'); });

 





