//Whitelist DON'T FORGET TO ADD GLITCH
const whitelist = [
    //glitch site
    'https://dazzling-snickerdoodle-777101.netlify.app', 
    'http://127.0.0.1:5500', 
    'http://localhost:3500'
];
//Cors options
const corsOptions = {
    origin: (origin, callback) =>{
    if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
    } else {
        callback(new Error('Not Allowed By CORS'));
    }
}, optionSuccessStatus: 20
}; //ch 7

module.exports = corsOptions;