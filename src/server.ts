import { app } from './app';

app.get('/', (req, res) => {
  res.send({ Message: 'Hello World!' });
});

app.listen(process.env.PORT, () => {
  console.log();
});
