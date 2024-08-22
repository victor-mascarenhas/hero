import Crypto from "crypto-js";

export const baseURL = "https://gateway.marvel.com/v1/public/characters";
export const publicKey = "4cba1ed683b92b3d3ffb0b56dbc9a8d2";
export const privateKey = "cc901a91aa7568c57ff62a7318ada0083da8ede4";
export const time = Date.now();
export const hash = Crypto.MD5(time + privateKey + publicKey);
