import { fastify } from "fastify";
// import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

server.post('/videos', (req, res) => {
  const { title, description, duration } = req.body

  database.create({
    title,
    description,
    duration,
  })

  return res.status(201).send()
})

server.get('/videos', (req) => {
  const { search } = req.query

  const videos = database.list(search);

  return videos
})

server.put('/videos/:id', (req, res) => {
  const videoId = req.params.id;

  const { title, description, duration } = req.body

  database.update(videoId, {
    title,
    description,
    duration,
  })

  return res.status(204).send()
})

server.delete('/videos/:id', (req, res) => {
  const videoId = req.params.id

  database.delete(videoId)

  return res.status(204).send()
})

server.listen({
  port: 3333,
})