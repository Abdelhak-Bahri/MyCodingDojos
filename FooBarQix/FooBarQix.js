/** 
 * Description:  this is a simple solution for the FOOBARQIX Kata found on the link above
 * Link: https://codingdojo.org/kata/FooBarQix/
 * Author: abdelhak-bahri
 */

/** 
 * these are some Callbacks for our conditions types 
 * if we have new specifictions that have different returned values/ different conditions, 
 * we just add the callback function here 
 * and we add the model of the condition on the conditionsArray above
*/
const CALLBACK_DIGIT_EXISTS = function(number,digitToReplace,newString){
    return (''+number).split('').map(function(digit){
        if(digit==digitToReplace) return newString;
        else return '';
    }).join('');
};
const CALLBACK_DIVISIBLE_BY = function(number,digitToreplace,newString){
    if((number % digitToreplace) == 0)  return newString;
    return '';
};

/**
 * the conditions array : here we are modeling a conditions on an object that contains 
 *  an initial digit to be replaced, 
 *  a new string to take its place 
 *  and callbacks that check for conditions and all the great work
 */
//this is just a model for conditions , we will use it on our conditions
Array
function condition(digitToreplace,newString, conditionTypes){
    return {
        'digitToreplace': digitToreplace,
        'newString': newString,
        'conditionTypes': conditionTypes
    };
}
let conditionsArray = [
    condition(0,'*',[CALLBACK_DIGIT_EXISTS]),
    condition(3,'FOO',[CALLBACK_DIGIT_EXISTS,CALLBACK_DIVISIBLE_BY]),
    condition(5,'BAR',[CALLBACK_DIGIT_EXISTS,CALLBACK_DIVISIBLE_BY]),
    condition(7,'QIX',[CALLBACK_DIGIT_EXISTS,CALLBACK_DIVISIBLE_BY]),
]

// the heart of our module is this fonction, it loops overs conditions and invoke callbacks
function compute(number){
    result =  conditionsArray.reduce(function(accumulateur, ConditionCourante, index, array){
        return accumulateur + ConditionCourante.conditionTypes.reduce(function(accumulateur, callbackCourant, index, array){
            return accumulateur + callbackCourant(number,ConditionCourante.digitToreplace,ConditionCourante.newString);
        },'');
    },'');
    return result==''?number:result;
}

/**
 * Main program, loop over numbers and compute each one
 */
for(i=1;i<=100;i++){
	result=compute(i);
	console.log(i,result);
}