import { blue, red } from "./button-styles";

// ES module syntax export
const top = document.createElement("div");
top.innerText = "Top of footer";
top.style = blue;
top.style.backgroundColor = "yellow";
top.style.padding = "20px";

const bottom = document.createElement("div");
bottom.innerText = "Bottom of footer";
bottom.style = red

const footer = document.createElement("footer")
footer.appendChild(top);
footer.appendChild(bottom);

// detructuring
export { top, bottom, footer};
