import dotenv from "dotenv";
dotenv.config();
import http from "http";

const { PORT } = process.env;

const server = http.createServer(() => {});

server.listen(Number(PORT), () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});
