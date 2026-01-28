"use server"

import { S3Client } from "@aws-sdk/client-s3";
import { createServerFn } from '@tanstack/react-start';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";
import { auth } from "@clerk/tanstack-react-start/server";

// let s3Client: S3Client | null = null

// function getS3Client() {
//   if (!s3Client) {
//     s3Client = new S3Client({
//       endpoint: "https://s3.us-east-005.backblazeb2.com",
//       region: "us-east-005",
//       credentials: {
//         accessKeyId: process.env.B2_APPLICATION_KEY_ID!,
//         secretAccessKey: process.env.B2_APPLICATION_KEY!,
//       },
//     })
//   }
//   return s3Client
// }

export const getUserIdFn = createServerFn({ method: "GET" }).handler(
    async () => {
      const { userId } = await auth();
  
      if (!userId) {
        return { success: false }
        throw new Error("User not authenticated");
      }
  
      return { success: true, userId };
    }
);

