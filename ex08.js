function calculerPrix(num) {
	let reduc = 0.1;
	if (num > 100) return num - num * reduc;
	return num;
}

console.log(calculerPrix(120)); // Résultat attendu : 108
console.log(calculerPrix(80)); // Résultat attendu : 80
