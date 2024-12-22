const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5WVa2+ySBTHv8u81S5yUzRpslykKKKigtXNZjPAgAgMOAwoPPG7b6ht2uzl2S6vJsPhf26/c/gBcB6XyEQNmPwABYlrSFF3pE2BwAQoVRgiAvoggBSCCbgsLdGJnMzQlulJk43jXFoNd3lvq7WlpSjBxtCRndDDK2s9g3sfFJWXxv5PBPFwO2+sRVS0N/WsvBah611qTRg1kmnJ9i7cJdnVxhxyr8IzuHeKMCYxjqbFCWWIwNREzRrG5HvhW6ZlKYf4JSvl215kejuBvi56LO1dFu50YVbhabw/DEPoONfvhV8MZov92b3J57is1JVpMWO2ljQPHbfaIC5MdXyMrduN3zjWI/wyjjAKZgHCNKbNt+s+XVlWEV0PL7x/TEyXmKpz9ptlJBvLPH4xXHPOK/vTZhkZ8vcCT0e6Vh/X9hSevcrYR4EDm31y9TwysDL+dnQ4hjlsLiTZJF8DX5MPVpL/U3fVmJPRFoXbwUG3R7CGZ3nst+dFMNz446slBaOYF3HvFWXfxOaIrum4WmvuVJ67+5aVdomD0tUA91aunZawIYx9JZGpcM5n+JBW5GdRcraQsI2X0jAuX8ywZorW1PMLNF8NfDiqu33rhPPDzjH0esu69sJf1FEY1JfRtVA8292dygYXoZA2cWtoGuOddRsr9vNbRglqZgGYsPc+ICiKS0ogjXPc3Y0HfQCDeot8guhbdQEX1flqwysle0vamTRvSGTm2GJtPlvRNbMivqfvlHPlDg/PoA8KkvuoLFFgxCXNSWOhsoQRKsHkt7dGdTkTlOUUzeMATMBYGLEjTuAEfvBr+cv1BGkJi+IXjCjog5DkmYXAhJIK9cGb/XTID8eiyGqKMtBlTpSFqaKMxoPRVNNYiRO7BLOHz12coZLCrAATdsQL0lgcDrn7732A0Y0+6Oly5tk+CGNSUgdXRZrD4AOtj5fQ9/MK022DfbU7IAImX64RpTGOyi6xCkPin+IaqV0eYBLCtET3PghQHfuo0wOah1a6XQx2fzwZxN+vfe/Q5HZXuFOOHyYeCiXeC6QnVgjRk8B7wpMUIP7J97hQECSO8wUIunI8Brf75l852knufImF/WjlLa/zI56uPCfBsxVzKN9YeACACAo+quxBP6mKXZ4g/BNdfeUFp96YORuWM0s5Rl27uatWi43sfNF9gAUmPz6XpZoHnZ54cKesrJug61bn568wTNjR33nAsDMGMxzECezcvPegEwgQhXFadhO+5E1mKE2nc97OvfLlRU4iWY1k8Nmzjwl8IL64zlvcrjg1LG13fqzP/okbDPRrsrxVoZFGx9mVFbHEKd3m/LsImABzYFqCpjpD06/08GadxdbjRDo0qxM5S+1yeGFC21SDbZvMZ5nMnH0BazUT6MlF9Qzh6J7LqZU0WEikJNvAtacLayV67rw92PnqTGnro5jghb1Lj9KiKA6IjgdV/RJriR9o1KzEgpFizT3Iziwar0NtWgtXlF2cY5Jv8suSI+eeTsyFlRq9i9NaPQgFLXrshrfdlL7/E+L3sX2QFsbobcW+N+G/evXJ/ODe/yLxvrP/hStlK6m+KLU0wqOpvt17Aj8L6FLx55rv4Zt4eNlaS3RklpGrgXs3zEUKaZiTDEwAxAHJ4wD0QQpLKn+O7T9sAlHqg6yRi2JLIf2YdiB3zzqLwP1P9p1ejo4IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

