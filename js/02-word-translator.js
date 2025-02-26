
// Promp user for a language code and then trim it and make it in lower case
let lang = prompt('Choose your language code: es, de, en, fr');
// Only when there is input remove extra space and convert to lowercase
// so if user hit cancel(Null) it still works
if (lang){ 
    lang = lang.trim().toLowerCase(); 
}
// Initialize message in a variable 
let message = '';

// Determine the right language for the language code
if (lang === 'es'){ // If the code is es
    message = 'Hello World translated in Spanish : Hola Mundo';
}
else if (lang === 'de'){ // If the code is de
    message = 'Hello World translated in German : Hallo Welt';
}
else if (lang === 'fr'){  // If the code is fr
    message = 'Hello World translated in French : Bonjour le monde';
}
else{
    message = 'Hello World';  // Default to English if user enter invalid or missig or hit cancel
}
// Display the message in the console window
console.log(message);