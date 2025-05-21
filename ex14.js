function extraireNoms(tabs) {
	let tab = [];
	for (let i = 0; i < tabs.length; i++) {
		tab.push(tabs[i].nom);
	}
	return tab;
}

console.log(
	extraireNoms([
		{ nom: "Alice", age: 25 },
		{ nom: "Bob", age: 30 },
	])
); // Résultat attendu : ["Alice", "Bob"]
