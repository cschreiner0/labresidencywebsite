//If everytihing is okay, console will say OK
console.log("OK");

//store background classes
const backgrounds = ["bg0", "bg1", "bg2", "bg3"];

//Get random numbers
var numRand;
numRand = Math.floor(Math.random() * backgrounds.length);

//Get element
let pageBackgound = document.querySelector("body");

//Set class name from stored values
pageBackgound.className = backgrounds[numRand];

//Use Lightbox Gallery Library
//lightGallery(document.getElementById("gallery"));

lightGallery(document.getElementById("captions"));

const portfolio = document.querySelector("#portfolio");
lightGallery(portfolio, {
  selector: ".lglink",
  download: false
});
