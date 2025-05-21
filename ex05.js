function isSumEven(a, b) {
	if ((a + b) % 2 == 0) return true;
	return false;
}

console.log(isSumEven(1, 3)); // Retourne: true
console.log(isSumEven(1, 0)); // Retourne: false
