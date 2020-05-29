const express = require('express');

const app = express();

app.get('/notes', (req, res) => {
	res.json([
			{
				"title": "title1",
				"content": "content1"
			},
			{
				"title": "title2",
				"content": "content2"
			},
			{
				"title": "title1",
				"content": "content2"
			}
		])
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);