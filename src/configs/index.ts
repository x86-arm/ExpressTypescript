import dotenv from "dotenv";
import dotenvSafe from "dotenv-safe"; // dotenv-safe can allow empty env values

dotenv.config({ path: `.env.${process.env.NODE_ENV}.local` });

dotenvSafe.config({
  allowEmptyValues: true,
});

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongodb: {
    protocol: process.env.MONGODB_PROTOCOL,
    username: process.env.MONGODB_USERNAME,
    pasword: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    replicaSet: process.env.MONGODB_REPLICA_SET,
    dbName: process.env.MONGODB_NAME,
    uri: process.env.MONGODB_URI,
  },
  jwt: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "",
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "",
    accessTokenExpireIn: process.env.EXPIRESIN_ACCESS_TOKEN || "8h",
    refreshTokenExpireIn: process.env.EXPIRESIN_REFRESH_TOKEN || "1y",
  },
  redisHost: process.env.REDIS_HOST || "6379",
};
