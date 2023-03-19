import navigation from "./nav";
// ES module syntax import
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

console.log(navigation(), top, bottom, makeButton("Is the Button"), makeColorStyle("green"));
