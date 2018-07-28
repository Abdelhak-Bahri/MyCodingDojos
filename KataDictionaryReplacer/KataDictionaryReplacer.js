/**
 * Desc: a simple solution for KataDictionaryReplacer
 * Link: https://codingdojo.org/kata/DictionaryReplacer/
 * Author: Abdelhak-Bahri
 * Usage: node KataDictionaryReplacer.js "input" 
 * Example: 
 * $ node KataDictionaryReplacer.js "\$temp\$ here comes the name \$name\$"
 * temporary here comes the name John Doe
 */

Dictionnary = {"temp":"temporary","name": "John Doe"};

replacer = function(temp){
    return Dictionnary[temp.slice(1,-1)]!=null?Dictionnary[temp.slice(1,-1)]:"";
}
input = process.argv[2]==null? "\$temp\$ here comes the name \$name\$": process.argv[2];
console.log(input.replace(/\$.*?\$/g, replacer));