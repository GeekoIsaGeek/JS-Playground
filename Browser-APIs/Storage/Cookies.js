const getCookies = () => {
	let cookies = new Map();
	let list = document.cookie.split('; ');

	for (let cookie of list) {
		if (!cookie.includes('=')) continue;

		let p = cookie.indexOf('=');
		let name = cookie.substring(0, p);
		let value = cookie.substring(p + 1);

		value = decodeURIComponent(value);
		cookies.set(name, value);
	}
	return cookies;
};

const setCookie = (name, value, daysToLive = null) => {
	let cookie = `${name}=${encodeURIComponent(value)}`;
	if (daysToLive !== null) {
		cookie += `; max-age=${daysToLive * 60 * 60 * 24}`;
	}
	document.cookie = cookie;
};

const deleteCookie = (name) => {
	document.cookie = `${name}=; max-age=0`;
};

setCookie('test', 'testfkhdskjfhsd78362872iukjsh732', 7);
console.log(getCookies());

deleteCookie('test');
console.log(getCookies());
