
// Promp user for a language code and then trim it and make it in lower case
let lang = prompt('Choose your language code: es, de, en, fr');
// Remove extra space and convert to lowercase if there is input
if (lang){ 
    lang = lang.trim().toLowerCase(); 
}
// Put message in a variable
let message = '';

// Determine the right language for the language code
if (lang === 'es'){
    message = 'Hello World translated in Spanish : Hola Mundo';
}
else if (lang === 'de'){
    message = 'Hello World translated in German : Hallo Welt';
}
else if (lang === 'fr'){
    message = 'Hello World translated in French : Bonjour le monde';
}
else{
    message = 'Hello World';  // Default to English if user enter invalid or missig or hit cancel
}
// Display the message in the console window
console.log(message);