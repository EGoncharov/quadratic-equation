module.exports = function solveEquation(equation) {
	
	var a, b, c, d, num1, num2, arr;

	equation = equation.replace(/\s/g, "").replace(/\^2/, "").split(/\*x/);

	a = +equation[0];
	b = +equation[1];
	c = +equation[2];
	d = b * b -4 * a * c;
	num1 = Math.round((- b - Math.sqrt(d)) / (2 * a));
	num2 = Math.round((- b + Math.sqrt(d)) / (2 * a));
 	arr = [num1, num2];
	
	arr.sort(function(a,b){
		return a-b;
	});
	
	return arr;

}