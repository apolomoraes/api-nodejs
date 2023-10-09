import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (req, res) => {

})

server.get('/videos', (req, res) => {

})

server.put('/videos/:id', (req, res) => {

})

server.delete('/videos/:id', (req, res) => {

})

server.listen({
  port: 3333,
})