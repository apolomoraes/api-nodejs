import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (req, res) => {
  const { title, description, duration } = req.body

  database.create({
    title,
    description,
    duration,
  })

  return res.status(201).send()
})

server.get('/videos', () => {
  const videos = database.list();

  return videos
})

server.put('/videos/:id', (req, res) => {

})

server.delete('/videos/:id', (req, res) => {

})

server.listen({
  port: 3333,
})