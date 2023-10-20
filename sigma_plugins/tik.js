
const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');
const ttdl = require('btch-downloader');



const { TiktokDL } = require("@tobyg74/tiktok-api-dl");

Module_Exports({
  kingcmd: "tik",
  infocmd: "to check owner number",
  kingclass: "download",
},
async (bot, person) => {

  const downloadTikTokVideo = async (tiktokUrl) => {
    try {
      const result = await TiktokDL(tiktokUrl, { version: "v1" });
      if (result.status === "success" && result.result && result.result.video) {
        return result.result.video[0]; 
      } else {
        throw new Error("Failed to download TikTok video.");
      }
    } catch (error) {
      throw new Error("Failed to download TikTok video.");
    }
  };

  const tiktokUrl = "https://vt.tiktok.com/ZS84BnrU9";
  try {
    const videoUrl = await downloadTikTokVideo(tiktokUrl);
    person.reply("Download SIGMA: " + videoUrl);
  } catch (error) {
    console.error("Error:", error.message);
  }
});
