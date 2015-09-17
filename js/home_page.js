var config = require('../loader/config.json');

console.log("HOME LOADED!"); 
console.log(config.app_load_message);

$("#initial_content").text("JQUERY modified this content see(home_page.js)")

var img = document.createElement('img');
img.style.height = "100%";
img.style.width = "100%";
img.src = require ('../images/box.png');

document.getElementById('img_container').appendChild(img);

require('../css/app.scss');