/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Suhail-Md
 * @author : @SuhailTechInfo <https://github.com/SuhailTechInfo>
 * @description : Suhail-Md, A Multi-functional whatsapp bot.
 **/

const { tlang,Module_Exports } = require('../lib')
const fs = require('fs')
const { exec } = require('child_process')
const ffmpeg = require("fluent-ffmpeg")
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "bass",
        infocmd: "adds bass in given sound",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af equalizer=f=54:width_type=o:width=2:g=20";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "blown",
        infocmd: "adds blown in given audio",
        kingclass: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af acrusher=.1:1:64:0:log";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "deep",
        infocmd: "adds deep effect in given audio",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = "-af atempo=4/4,asetrate=44500*2/3";
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fast",
        infocmd: "Adds fast(equilizer) in quoted audio.",
        kingclass: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter:a "atempo=1.63,asetrate=44100"';
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage(
                    citel.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: citel,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            citel.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "reverse",
        infocmd: "Adds reverse(equilizer) in quoted audio.",
        kingclass: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Void, citel) => {
        let mime = citel.quoted.mtype
        let set = '-filter_complex "areverse"';
        if (/audio/.test(mime)) {
            citel.send(tlang().wait);
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            let ran = citel.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return citel.reply(err);
                let buff = fs.readFileSync(ran);
                Void.sendMessage( citel.chat, {  audio: buff, mimetype: "audio/mpeg",}, { quoted: citel, });
                fs.unlinkSync(ran);
            });
        } else  citel.send(`Reply to the audio you want to change with.*`);
    }
)