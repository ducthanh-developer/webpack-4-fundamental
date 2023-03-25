import navigation from "./nav";
// ES module syntax import
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css"
import imageUrl from "./english.jpg";
import makeImage from "./image";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button");
button.style = makeColorStyle("red");

// console.log(navigation(), top, bottom, makeButton("Is the Button"), makeColorStyle("green"));

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
