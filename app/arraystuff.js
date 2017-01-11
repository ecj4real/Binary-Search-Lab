Array.prototype.toTwenty = function(){
	var number = [];
	var i = 1;
	while (i <= 20)
	{
		number.push(i);
		i += 1;
	}
	return number;
}

Array.prototype.toForty = function(){
	var number = [];
	var i = 2;
	while (i <= 40)
	{
		number.push(i);
		i += 2;
	}
	return number;
}

Array.prototype.toOneThousand = function(){
	var number = [];
	var i = 10;
	while (i <= 1000)
	{
		number.push(i);
		i += 10;
	}
	return number;
}

//implementing binary search
Array.prototype.search = function(d){
	var result = {
		count: 0,
		index: -1,
		length: this.length
	}
	var min = 0;
    var max = this.length - 1;
    var guess;
	var count = 0;

	while(min <= max) {
        guess = Math.floor((max + min) / 2);

        if(this[max] == d)
        {
        	result.index = max;
        	break
        }
        if (this[guess] === d) {
            result.index = guess;
            break;
        }
        else if (this[guess] < d) {
            min = guess + 1;
            count = count + 1;
        }
        else {
            max = guess - 1;
        }

    }
    result.count = count;

	return result;
}