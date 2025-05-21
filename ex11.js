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
	let a = output[0];
	for (let i = 1; i < output.length; i++) {
		a = `${a} ${output[i]}`;
	}
	return a;
}

console.log(inverserMots("Bonjour tout le monde")); // Résultat attendu : "monde le tout Bonjour"
