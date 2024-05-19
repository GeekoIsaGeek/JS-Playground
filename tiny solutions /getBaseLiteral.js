((number, base) => {
	try {
		if (!number || !base) {
			console.error('Number and base arguments must be specified!');
			return;
		}

		number = +number;

		switch (Number(base)) {
			case 2:
				console.info(`${number} Converted to binary -> 0b${number.toString(2)}`);
				break;
			case 8:
				console.info(`${number} Converted to octal -> 0o${number.toString(8)}`);
				break;
			case 16:
				console.info(`${number} Converted to hexadecimal -> 0x${number.toString(16)}`);
				break;
			default:
				console.info(number.toString(10));
		}
	} catch (error) {
		console.error(error.message);
		return;
	}
})(process.argv[2], process.argv[3]);
