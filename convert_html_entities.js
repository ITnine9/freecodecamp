// method 1 
function convertHTML(str) {
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }
    const regex = /[&<>"']/;

    // return str.split('').map(char => {
    //     if (regex.test(char)) return htmlEntities[char];
    //     return char;
    // }).join('');
    return str.split('').map(char => htmlEntities[char] || char).join('');
}

console.log(convertHTML("Dolce & Gabbana"));

// method 2 - improved version of method 1 with string.replace + regex
function convertHTML2(str) {
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    }

    return str.replace(/([&<>"'])/g, match => htmlEntities[match]);
}