const fastify = require("fastify")();
const next = require("next");
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();

    fastify.all("/*", (req, reply) => {
      reply.hijack();
      handle(req.raw, reply.raw)
        .then(() => {
          reply.raw.end();
        })
        .catch((err) => {
          fastify.log.error(err);
          reply.raw.writeHead(500);
          reply.raw.end("Internal Server Error");
        });
    });

    await fastify.listen({ port, host });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
