function countVowels(txt) {
	let num = 0;
	let lengt = 0;
	let a = ["a", "e", "i", "o", "u", "y"];
	for (let i = 0; i < txt.length; i++) {
		if (a.includes(txt[i])) num++;
	}
	return num;
}

// Exemple de test
console.log(countVowels("javascript")); // Retour attendu: 3
