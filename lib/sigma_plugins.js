var name = require("../Setting");
var commands = [];


function Module_Exports(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.infocmd) info.infomd = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.kingclass) data.kingclass = 'misc';
    if (!info.kingpath) data.kingpath = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    Module_Exports,
    AddCommand:Module_Exports,
    Function:Module_Exports,
    Module:Module_Exports,
    cmd:Module_Exports,
    commands,
};