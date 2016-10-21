const	express	=	require('express');
const	fetch = require('node-fetch');

const	app	=	express();
app.use(express.static(`${__dirname}/public`));

app.get('/api/users', (req, res) => {
	fetch('http://52.57.45.66:7000/api/users')
	.then(response => response.json())
	.then((data) => {
		res.json(data);
	});
});

app.get('*',	(req,	res)	=>	{
	res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000);
