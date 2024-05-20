// *** Dummy Data
const users = ['u1', 'u2', 'u3', 'u4', 'u2', 'u5', 'u1'];

const connections = {
	u1: ['u2', 'u3', 'u2'],
	u2: ['u1', 'u3', 'u4'],
	u3: ['u1', 'u2', 'u4'],
	u4: ['u2', 'u3', 'u5'],
	u5: ['u4'],
};

const groups = {
	groupA: ['u1', 'u2', 'u3'],
	groupB: ['u3', 'u4', 'u5'],
	groupC: ['u1', 'u5'],
};

let activeUsers = new Set(['u7', 'u9']);
// ***

const uniqueUsers = new Set(users);

const uniqueConnections = Object.entries(connections).reduce((acc, [key, value]) => {
	acc[key] = [...new Set(value)];
	return acc;
}, {});

const findMutualFriends = (user1, user2) => {
	const friends1 = new Set(connections[user1]);
	const friends2 = new Set(connections[user2]);
	if (!friends1 || !friends2) return [];

	return [...friends1].filter((friend) => friends2.has(friend));
};

const findUsersInMultipleGroups = (groups) => {
	const users = new Set();

	const membersByGroup = Object.values(groups);

	for (let i = 0; i < membersByGroup.length; i++) {
		const otherGroups = membersByGroup.filter((_, index) => index !== i);

		otherGroups.forEach((group) => {
			new Set(group).forEach((user) => {
				if (new Set(membersByGroup[i]).has(user)) {
					users.add(user);
				}
			});
		});
	}

	return [...users];
};

const manageActiveUsers = ({ user, action }) => {
	if (action === 'add') return activeUsers.add(user) && `Active users: ${[...activeUsers]}`;
	else if (action === 'isActive') return `Is ${user} Active: ${activeUsers.has(user)}`;
	else if (action === 'delete') return `${user} got offline: ${activeUsers.delete(user)}`;
	else if (action === 'clear') activeUsers.clear();
	else return `Active users: ${[...activeUsers]}; Count: ${activeUsers.size}`;
};

console.log(
	[
		manageActiveUsers({ user: 'u1', action: 'add' }),
		manageActiveUsers({ user: 'u2', action: 'add' }),
		manageActiveUsers({ user: 'u3', action: 'add' }),
		manageActiveUsers({ user: 'u1', action: 'isActive' }),
		manageActiveUsers({ user: 'u1', action: 'delete' }),
		manageActiveUsers({ action: 'clear' }),
		manageActiveUsers({}),
	]
		.filter((log) => log)
		.join('\n')
);
