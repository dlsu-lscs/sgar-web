// lib/s3.ts
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  endpoint: "https://sgp1.digitaloceanspaces.com", // your DO region endpoint
  region: "sgp1", // region
  credentials: {
    accessKeyId: process.env.DO_ACCESS_KEY!,
    secretAccessKey: process.env.DO_SECRET_KEY!,
  },
});
