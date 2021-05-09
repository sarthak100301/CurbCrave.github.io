function bmi(){
	var height = Number(document.getElementById('height').value);
	var weight = Number(document.getElementById('weight').value);
	var result = weight/ (height*height) *10000;
	var calories = 13.5*weight+487;
	var bmi = result.toFixed(2);
	document.getElementById("result").innerHTML = + bmi;
	document.getElementById("dclr").innerHTML = + calories + ' kcal';
}