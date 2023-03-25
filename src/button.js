// CommonJS module
// take a str, the button label and return a element
// module.exports = buttonName => {
//     return `Button: ${buttonName}`;
// };

/**
 * 
 * @param {string} buttonName 
 * @returns {Element} button}
 */

// const makeButton = buttonName => {
//     return `Button: ${buttonName}`;
// };

const makeButton = buttonName => {
    const buttonLabel = `Button: ${buttonName}`;

    const button = document.createElement("button");
    button.innerText = buttonLabel;

    return button;
};


module.exports = makeButton;
