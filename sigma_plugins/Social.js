const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

Module_Exports({
        kingcmd: "insta",
        shortcut: ["ig","igdl","instagram"],
        infocmd: "download instagram videos",
        kingclass: "downloader",
        use: "paste insta video link"
    },
    async(sigma,person,memo) => {
        var _0x3adc=["\x2A\x5F\x47\x69\x76\x65\x20\x6D\x65\x20\x69\x6E\x73\x74\x61\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x5F\x2A","\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x74\x65\x73\x74","\x6A\x73\x6F\x6E","\x63\x68\x61\x74","\x72\x65\x73\x75\x6C\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(!memo){return person[_0x3adc[1]](_0x3adc[0])};let txt=memo?memo[_0x3adc[3]](_0x3adc[2])[0]:_0x3adc[4];if(!/instagram/[_0x3adc[5]](txt)){return  await person[_0x3adc[1]]("\x2A\x5F\x50\x6C\x65\x61\x73\x65\x20\x67\x69\x76\x65\x20\x6D\x65\x20\x76\x61\x6C\x69\x64\x20\x69\x6E\x73\x74\x61\x67\x72\x61\x6D\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x2E\x2E\x21\x5F\x2A")};let data;try{data= await( await fetch(("\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6E\x72\x6C\x2D\x77\x65\x62\x2E\x6F\x6E\x72\x65\x6E\x64\x65\x72\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x69\x6E\x73\x74\x61\x3F\x75\x72\x6C\x3D"+memo+_0x3adc[4])))[_0x3adc[6]]()}catch{return person[_0x3adc[1]]("\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x72\x65\x64")};return sigma[_0x3adc[10]](person[_0x3adc[7]],{video:{url:data[_0x3adc[8]][0]},caption:("\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0x3adc[9]]+_0x3adc[4]),width:600,height:490},{quoted:person})    })

Module_Exports({kingcmd: "facebook",
     shortcut: ["fb","fbdl"],
     kingclass: "downloader",
     infocmd: "downloads facebook videos",
     use: "paste fb video link"
     },
    async(sigma, person, memo) => {
        var _0xe465=["\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x74\x65\x73\x74","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x64\x6C\x76\x32","\x45\x72\x72\x6F\x72\x20\x77\x68\x69\x6C\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x76\x69\x64\x65\x6F"];if(!memo){return person[_0xe465[0]]("\x47\x69\x76\x65\x20\x6D\x65\x20\x66\x61\x63\x65\x62\x6F\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B")};let txt=memo?memo[_0xe465[2]](_0xe465[1])[0]:_0xe465[3];if(!/facebook/[_0xe465[4]](txt)){return  await person[_0xe465[0]]("\x50\x6C\x65\x61\x73\x65\x20\x67\x69\x76\x65\x20\x6D\x65\x20\x76\x61\x6C\x69\x64\x20\x66\x61\x63\x65\x62\x6F\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x2E\x2E\x21")};bocil[_0xe465[11]](memo)[_0xe465[10]](async (_0x8606x2)=>{return sigma[_0xe465[9]](person[_0xe465[5]],{video:{url:_0x8606x2[_0xe465[7]][0][_0xe465[6]]},caption:("\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0xe465[8]]+_0xe465[3]),width:550,height:470},{quoted:person})});return person[_0xe465[0]](_0xe465[12])})

var _0xfad7=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x69\x6B\x64\x6F\x77\x6E\x2E\x6F\x72\x67\x2F\x69\x64","\x67\x65\x74","\x64\x61\x74\x61","\x6C\x6F\x61\x64","\x76\x61\x6C\x75\x65","\x61\x74\x74\x72","\x23\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x2D\x66\x6F\x72\x6D\x20\x3E\x20\x69\x6E\x70\x75\x74\x5B\x74\x79\x70\x65\x3D\x68\x69\x64\x64\x65\x6E\x5D\x3A\x6E\x74\x68\x2D\x63\x68\x69\x6C\x64\x28\x32\x29","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x69\x6B\x64\x6F\x77\x6E\x2E\x6F\x72\x67\x2F\x67\x65\x74\x41\x6A\x61\x78\x3F","\x70\x6F\x73\x74","\x65\x6E\x74\x72\x69\x65\x73","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x57\x69\x6E\x64\x6F\x77\x73\x20\x4E\x54\x20\x36\x2E\x33\x3B\x20\x57\x69\x6E\x36\x34\x3B\x20\x78\x36\x34\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x43\x68\x72\x6F\x6D\x65\x2F\x31\x30\x30\x2E\x30\x2E\x34\x38\x39\x36\x2E\x38\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36","\x72\x65\x71\x75\x65\x73\x74","\x68\x74\x6D\x6C","\x73\x74\x61\x74\x75\x73","\x73\x72\x63","\x69\x6D\x67","\x68\x72\x65\x66","\x64\x69\x76\x2E\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x2D\x6C\x69\x6E\x6B\x73\x20\x3E\x20\x64\x69\x76\x3A\x6E\x74\x68\x2D\x63\x68\x69\x6C\x64\x28\x31\x29\x20\x3E\x20\x61","\x64\x69\x76\x2E\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x2D\x6C\x69\x6E\x6B\x73\x20\x3E\x20\x64\x69\x76\x3A\x6E\x74\x68\x2D\x63\x68\x69\x6C\x64\x28\x32\x29\x20\x3E\x20\x61"];async function tiktokdl(_0xec36x2){const _0xec36x3= await axios[_0xfad7[1]](_0xfad7[0]);const _0xec36x4=cheerio[_0xfad7[3]](_0xec36x3[_0xfad7[2]]);const _0xec36x5=_0xec36x4(_0xfad7[6])[_0xfad7[5]](_0xfad7[4]);const _0xec36x6={url:_0xec36x2,_token:_0xec36x5};const {data}= await axios[_0xfad7[12]](_0xfad7[7],{method:_0xfad7[8],data: new URLSearchParams(Object[_0xfad7[9]](_0xec36x6)),headers:{"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":_0xfad7[10],"\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74":_0xfad7[11]}});var _0xec36x7=cheerio[_0xfad7[3]](data[_0xfad7[13]]);if(data[_0xfad7[14]]){return {status:true,thumbnail:_0xec36x7(_0xfad7[16])[_0xfad7[5]](_0xfad7[15]),video:_0xec36x7(_0xfad7[18])[_0xfad7[5]](_0xfad7[17]),audio:_0xec36x7(_0xfad7[19])[_0xfad7[5]](_0xfad7[17])}}else {return {status:false}}}



Module_Exports({
            kingcmd: "tiktok",
	    shortcut :  ['tt','ttdl'],
            infocmd: "Downloads Tiktok Videos Via Url.",
            kingclass: "downloader",
            use: "paste tiktok video link",
},

        async(sigma, person, memo) => {
            var _0xbfcb=["\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x74\x65\x73\x74","\x63\x68\x61\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x45\x72\x72\x6F\x72\x20\x77\x68\x69\x6C\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x76\x69\x64\x65\x6F"];if(!memo){return  await person[_0xbfcb[0]]("\x2A\x5F\x47\x69\x76\x65\x20\x6D\x65\x20\x74\x69\x6B\x74\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x5F\x2A")};let txt=memo?memo[_0xbfcb[2]](_0xbfcb[1])[0]:_0xbfcb[3];if(!/tiktok/[_0xbfcb[4]](txt)){return  await person[_0xbfcb[0]]("\x2A\x5F\x50\x6C\x65\x61\x73\x65\x20\x67\x69\x76\x65\x20\x6D\x65\x20\x76\x61\x6C\x69\x64\x20\x74\x69\x6B\x74\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x2E\x2E\x21\x5F\x2A")};const {status,thumbnail,video,audio}= await tiktokdl(txt);if(status){return  await sigma[_0xbfcb[7]](person[_0xbfcb[5]],{video:{url:video},caption:("\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0xbfcb[6]]+_0xbfcb[3]),height:470,width:540},{quoted:person})}else {return  await person[_0xbfcb[0]](_0xbfcb[8])}	})
