


import { defineRoute, router } from './utils/define-route.js';

let users = JSON.parse(await getUsers(process.cwd() + '/data/users.json'));

let users = [
  { id: 1, name: 'Mark', email: 'Mark@gmail.com' },
  { id: 2, name: 'Fadi', email: 'Fadi@gmail.com' },
  { id: 3, name: 'Yazan', email: 'Yazan@gmail.com' },
  { id: 4, name: 'Mery', email: 'Meryr@gmail.com' },
];
  defineRoute('GET', '/users', (req, res) => {
    if (users.length > 0) {
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(users));
    } else {
      res.writeHead(404, { 'Content-type': 'application/json' });
      res.end(JSON.stringify('Users not found'));
    }
  });

  if (typeof users === 'object' && Object.keys(users).length > 0) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(usersObject));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify('There are no users existing'));
  }

defineRoute('POST', '/users', (req, res) => {
  const newUserId = users.length + 1;
  if (!req.body || !req.body.name || !req.body.email) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Body cannot be empty' }));
    return;
  }
  let newUser = { id: newUserId, ...req.body };
  users.push(newUser);
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: `New user ${newUser.name} was created` }));
});


defineRoute('PATCH', '/users/:id', (req, res) => {
	const { url } = req;
	let updatedUser = {name:'Jad', email:'jad@gmail.com'};
	const {name, mail} = updatedUser;


	if (url.startsWith('/users/')) {
		const userId = parseInt(url.split('/')[2]); 
		const user = users[userId];


		if(!user)	{
			res.writeHead(404, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} is not found`}))
		}
		else {
			if (name) users[userId].name = name;
			if (mail) users[userId].mail = mail;

			res.writeHead(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} was updated`}))
		}
	}
	
});

defineRoute('DELETE', '/users/:id', (req, res) => {
	const {url} = req;

	if (url.startsWith('/users/')) {
		const userId = parseInt(url.split('/')[2]); 
		const user = users[userId];


		if(!user)	{
			res.writeHead(404, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} is not found`}))
		}
		else {
			users.splice(userId, 1);


			res.writeHead(200, {'Content-Type': 'application/json'})
			res.end(JSON.stringify({message: `User with ID:${userId} was deleted`}))
		}
	}
	

});

export default router;