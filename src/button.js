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

const makeButton = buttonName => {
    return `Button: ${buttonName}`;
};

module.exports = makeButton;
