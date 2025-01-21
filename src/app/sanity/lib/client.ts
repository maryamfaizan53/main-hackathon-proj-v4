//sanity/sanityClient.ts
import { createClient } from "next-sanity";



export const sanityClient = createClient({
  projectId: "o6mzw727",
  dataset: "production",
  apiVersion: "2023-10-01", 
  useCdn: true,
  token:"sk4xiF2jtSwT7SrDwTL9ywI3gskPUHyodW61yq8pTMRn8umTQaPDdgelnu1Ph9408O8NPhTlFBa3k2ExrDm0524oxTAMhKCxvog8MSeflzYEekWYsjZRJf0kVCZxjo6lzC1j5KBBPiUtg8qZ8j146klAdQdnr7eck5fnLcQ1aJ4QxY6HNf8t"
});


