
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

// In this example, the regex pattern is used along with a JavaScript RegExp exec() method to 
//  validate if the URL matches the regex pattern.  The exec() method results in an array 
//  whereby the first index value will return the URL string if matching.

// ---------- input  ----------------//

var regexMatchingURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

var sampleString = 'https://regexr.com/';

var array;

while ((array = regexMatchingURL.exec(sampleString)) !== null) {
    if (array.index === regexMatchingURL.lastIndex) {
        regexMatchingURL.lastIndex++;
    }
    console.log(array);
}


// ---------- output ----------------//

// Not working: If the sampleString URL value is incorrect, no result will be console logged.
// Working: output for a positive result:
        // [
        //     'https://regexr.com/',
        //     'https://',
        //     'regexr',
        //     'com',
        //     '/',
        //     index: 0,
        //     input: 'https://regexr.com/',
        //     groups: undefined
        // ]

// For more info on the output for the exec() method, you may find it here:
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
