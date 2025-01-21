//sanity/sanityClient.ts
import { createClient } from "next-sanity";



export const sanityClient = createClient({
  projectId: "ckmfdvkv",
  dataset: "production",
  apiVersion: "2023-10-01", 
  useCdn: true,           
});


