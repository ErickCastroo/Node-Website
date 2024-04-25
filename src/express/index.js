import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
});

app.get('/acercaDe', (req, res) => {
  res.send('<h1>Acerca de nosotros :D</h1>')
});




app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
