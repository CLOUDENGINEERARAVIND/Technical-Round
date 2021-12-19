// user object
const user = {
    personalInfo: {
        name: 'Aravind',
    }
}

//key to get the value
const key = 'name'


/* getNestedObject is a function and used reduce array method to safely access nested objects */
/* Used ternery operators "?" , ":"  which acts like if else condition*/
const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

// pass in your object structure as array elements
const result = getNestedObject(user, ['personalInfo', key]);


console.log(result)