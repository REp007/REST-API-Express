import express from 'express'

const app = express()

// eslint-disable-next-line
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`start listening at: ${port}`)
  console.log(`http://127.0.0.1:${port}/`)
})

app.get('/', (req, res) => {
  console.log('GET Request syccessfull!')
  res.send('GET Req successfully init')
});


