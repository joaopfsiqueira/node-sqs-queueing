import { app } from './app';

app.get('/', (req, res) => {
  res.send({ Message: 'Hello World!' });
});

app.listen(process.env.NODE_DOCKER_PORT || 8080, () => {
  console.log(
    'Server is running on port',
    process.env.NODE_DOCKER_PORT || 8080
  );
})