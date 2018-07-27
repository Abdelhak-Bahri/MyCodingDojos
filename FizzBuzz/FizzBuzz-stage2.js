for(i=1;i<=100;i++){
	result='';
	if(((i%3)==0)|(""+i).indexOf(3)>-1) result += 'Fizz';
	if(((i % 5) == 0)|(""+i).indexOf(5)>-1) result += 'Buzz';
	else result==''?result = i:result;
	console.log(result);
}