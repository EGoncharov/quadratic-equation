module.exports = function solveEquation(equation) {

	var a, b, c, d, x, y, arr;

	equation = equation.replace(/\s/g, "").replace(/\^2/, "").split(/\*x/);

	a = +equation[0];
	b = +equation[1];
	c = +equation[2];
	d = b*b -4 * a*c;
	x = Math.round((- b - Math.sqrt(d)) / (2 * a));
	y = Math.round((- b - Math.sqrt(d)) / (2 * a));
	arr = [x;y];

	arr.sort(funtion(a,b){
		return a-b;
	})

	return arr;
}