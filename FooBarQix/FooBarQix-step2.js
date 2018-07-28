DigitReplacer = function(number, digitToReplace, newString){
    return (''+number).split('').map(function(digit){
        if(digit==digitToReplace) return newString;
        else return '';
    }).join('');
}

for(i=1;i<=100;i++){
	result='';
    result += DigitReplacer(i,3,'Foo');
    result += DigitReplacer(i,5,'Bar');
    result += DigitReplacer(i,7,'Qix');
    if((i%3)==0) result += 'Foo';
    if((i % 5) == 0) result += 'Bar';
    if((i % 7) == 0) result += 'Qix';
    else result==''?result = i:result;
    result += DigitReplacer(i,0,'*');
	console.log(i,result);
}
