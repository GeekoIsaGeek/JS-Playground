export const log = (messages) => {
	if (Array.isArray(messages)) {
		console.info(messages.filter((log) => log).join('\n'));
	} else {
		console.info(messages);
	}
};
