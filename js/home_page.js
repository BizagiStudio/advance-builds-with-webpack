
console.log("HOME LOADED!"); 

var img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src = require ('../images/box.png');

document.getElementById('img_container').appendChild(img);

require('../css/app.scss');