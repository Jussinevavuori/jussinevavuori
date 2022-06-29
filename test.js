
(async () => {
	const url = "https://komarev.com/ghpvc/?username=jussinevavuori&color=brightgreen"

	for (let i = 0; i < 10; i++) {
		console.log("Fetch", i)
		await fetch(url);
	}

	return 0;
})().then(process.exit)