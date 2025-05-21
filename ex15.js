function filtrerProduitsEnPromo(tabs) {
	let tab = [];
	for (let i = 0; i < tabs.length; i++) {
		if (tabs[i].promo == true) tab.push(tabs[i]);
	}
	return tab;
}

console.log(
	filtrerProduitsEnPromo([
		{ nom: "Télévision", prix: 500, promo: true },
		{ nom: "Casque audio", prix: 100, promo: false },
		{ nom: "Smartphone", prix: 700, promo: true },
	])
);
// Résultat attendu : [{nom: "Télévision", prix: 500, promo: true}, {nom: "Smartphone", prix: 700, promo: true}]
