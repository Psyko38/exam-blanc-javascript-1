function isDivisibleBy3And5(num) {
	if (num % 3 === 0 && num % 5 === 0) return true;
	return false;
}

// Exemple de test
console.log(isDivisibleBy3And5(15)); // Output attendu : true
console.log(isDivisibleBy3And5(20));
