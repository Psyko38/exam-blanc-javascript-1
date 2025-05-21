function inverserMots(txt) {
	let split = [];
	let word = "";
	let output = [];

	//hello world
	for (let i = 0; i < txt.length; i++) {
		if (txt[i] === " ") {
			split.push(word);
			word = "";
			continue;
		}
		word = word + txt[i];
	}
	split.push(word);
	console.log(split);
	for (let i = 0; i < split.length; i++) {
		output.push(split[split.length - i - 1]);
	}
	return output;
}

console.log(inverserMots("Bonjour tout le monde")); // Résultat attendu : "monde le tout Bonjour"
