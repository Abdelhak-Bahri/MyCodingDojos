
/**
 * Desc: this simple work is done answering the codingdojos kata
 * Link: https://codingdojo.org/kata/CodeCracker/
 * Author: Abdelhak Bahri
 * Usage: node code-cracker.js e|d word|encrypted_word [key]
 * options: 
 * * e|d for encrypt|decrypt
 * * if key is not specified, old key is used
 * /!\ use quotes for strings on command line params to avoid bash interpretation
 * examples: 
 * $ node code-cracker.js e 'abdelhak' '!)"(£*%&><@abcdefghijklmno'
 * * * encryption of  abdelhak is !)(£a&!@
 * $ node code-cracker.js d ')(£a&!@' '!)"(£*%&><@abcdefghijklmno'
 * * * decryption of  )(£a&!@ is bdelhak
 */

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var old_key = '!)"(£*%&><@abcdefghijklmno';
var args = process.argv.slice(2);
var key = args[2]==null?old_key:args[2];

decrypt_letter = function(letter, key, alphabet="abcdefghijklmnopqrstuvwxyz"){ 
            return alphabet[key.indexOf(letter)];
        };
encrypt_letter = function(letter, key, alphabet="abcdefghijklmnopqrstuvwxyz"){ 
            return key[alphabet.indexOf(letter)];
        };
decrypt_word = function(encryptedWord,key){
                return encryptedWord.split('').map(function(letter){
                    return decrypt_letter(letter, key);
                }).join('');
            };

encrypt_word = function(word, key){
                return word.split('').map(function(letter){
                    return encrypt_letter(letter,key);
                }).join('');
            };

if(args[0]=='d'){
    var encryptedWord = args[1];
    console.log("decryption of ", encryptedWord , 'is', decrypt_word(encryptedWord, key));
} 
else if(args[0]=='e'){
    var word = args[1];
    console.log("encryption of ", word, 'is',  encrypt_word(word, key));
}
else{
    console.log("Error, Usage : node code-cracker.js e|d 'word|encrypted_word' ['key']");
    process.exit();
}