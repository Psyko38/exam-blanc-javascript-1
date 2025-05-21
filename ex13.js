function genererDescriptions(oldtab) {
	let tab = [];
	for (let i = 0; i < oldtab.length; i++) {
		tab.push(`${oldtab[i].nom} a ${oldtab[i].age} ans.`);
	}
	return tab;
}

console.log(
	genererDescriptions([
		{ nom: "Alice", age: 25 },
		{ nom: "Bob", age: 30 },
	])
);
// Résultat attendu : ["Alice a 25 ans.", "Bob a 30 ans."]
