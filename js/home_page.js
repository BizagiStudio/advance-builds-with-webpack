var config = require('../loader/config.json');

console.log("HOME LOADED!"); 
console.log(config.app_load_message);

var img = document.createElement('img');
img.style.height = "100%";
img.style.width = "100%";
img.src = require ('../images/box.png');

document.getElementById('img_container').appendChild(img);

require('../css/app.scss');