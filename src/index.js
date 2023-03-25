import navigation from "./nav";
// ES module syntax import
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css"

const button = makeButton("Yay! A Button");
button.style = makeColorStyle("red");

// console.log(navigation(), top, bottom, makeButton("Is the Button"), makeColorStyle("green"));

document.body.appendChild(button);
document.body.appendChild(footer);
