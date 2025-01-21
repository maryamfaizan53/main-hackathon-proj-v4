import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Human-readable product name (e.g. "Nike Air Jordan")',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'SEO-friendly unique URL segment generated from name',
      options: {
        source: 'name',    // Auto-generate from the "name" field
        maxLength: 96,     // Limit the length of the slug
        // Optional custom slugify function:
        // slugify: input =>
        //   input.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    }),
    defineField({
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    }),
    defineField({
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'imagePath',
      title: 'Image Path',
      type: 'url',
      description: 'URL of the product image (hosted externally)',
    }),
  ],
})



// import { defineType, defineField } from 'sanity'

// export default defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'id',
//       title: 'ID',
//       type: 'string',
//       description: 'Unique product ID from the external API',
//     }),
//     defineField({
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//       description: 'Name of the product',
//     }),
//     // Single external image URL
//     defineField({
//       name: 'imagePath',
//       title: 'Image Path',
//       type: 'url',
//       description: 'URL of the product image (hosted externally)',
//     }),
//     defineField({
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       description: 'Price of the product',
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       description: 'Detailed description of the product',
//     }),
//     defineField({
//       name: 'discountPercentage',
//       title: 'Discount Percentage',
//       type: 'number',
//       description: 'Discount percentage for the product',
//     }),
//     defineField({
//       name: 'isFeaturedProduct',
//       title: 'Is Featured Product',
//       type: 'boolean',
//       description: 'Whether this product is featured on the site',
//     }),
//     defineField({
//       name: 'stockLevel',
//       title: 'Stock Level',
//       type: 'number',
//       description: 'Current stock level of the product',
//     }),
//     defineField({
//       name: 'category',
//       title: 'Category',
//       type: 'reference',
//       description: 'Reference to a category document',
//       to: [{ type: 'category' }],
//     }),
//   ],
// })





// // import { defineType, defineField } from 'sanity'

// // export default defineType({
// //   name: 'product',
// //   title: 'Product',
// //   type: 'document',
// //   fields: [
// //     defineField({
// //       name: 'id',
// //       title: 'ID',
// //       type: 'string',
// //       description: 'Unique product ID from the external API',
// //     }),
// //     defineField({
// //       name: 'name',
// //       title: 'Name',
// //       type: 'string',
// //       description: 'Name of the product',
// //     }),
// //     // Option A: Use Sanity's built-in image type
// //     // defineField({
// //     //   name: 'image',
// //     //   title: 'Product Image',
// //     //   type: 'image',
// //     //   description: 'Upload or select a product image from the media library',
// //     //   options: {
// //     //     hotspot: true, // Allows cropping in the Studio
// //     //   },
// //     //   fields: [
// //     //     defineField({
// //     //       name: 'alt',
// //     //       title: 'Alt Text',
// //     //       type: 'string',
// //     //       description: 'Alternative text for the image',
// //     //     }),
// //     //   ],
// //     // }),
// //     // Option B: If you prefer storing an external image URL:
// //     defineField({
// //       name: 'imagePath',
// //       title: 'Image Path',
// //       type: 'url',
// //       description: 'URL of the product image (external CDN, etc.)',
// //     }),

// //     defineField({
// //       name: 'price',
// //       title: 'Price',
// //       type: 'number',
// //       description: 'Price of the product',
// //     }),
// //     defineField({
// //       name: 'description',
// //       title: 'Description',
// //       type: 'text',
// //       description: 'Detailed description of the product',
// //     }),
// //     defineField({
// //       name: 'discountPercentage',
// //       title: 'Discount Percentage',
// //       type: 'number',
// //       description: 'Discount percentage for the product',
// //     }),
// //     defineField({
// //       name: 'isFeaturedProduct',
// //       title: 'Is Featured Product',
// //       type: 'boolean',
// //       description: 'Whether this product is featured on the site',
// //     }),
// //     defineField({
// //       name: 'stockLevel',
// //       title: 'Stock Level',
// //       type: 'number',
// //       description: 'Current stock level of the product',
// //     }),
// //     defineField({
// //       name: 'category',
// //       title: 'Category',
// //       type: 'reference',
// //       description: 'Reference to a category document',
// //       to: [{ type: 'category' }],
// //     }),
// //   ],
// // })







// // // import { defineField, defineType } from "sanity";

// // // export default defineType({
// // //   name: "product",
// // //   title: "Product",
// // //   type: "document",
// // //   fields: [
// // //     // We store your product's ID as "customId" (type: number)
// // //     defineField({
// // //       name: "customId",
// // //       title: "Custom ID (Number)",
// // //       type: "number",
// // //       description: "A numeric ID for your product (mapped to 'id' in the UI).",
// // //       validation: (Rule) =>
// // //         Rule.required().error("Every product needs a numeric ID"),
// // //     }),

// // //     defineField({
// // //       name: "name",
// // //       title: "Name",
// // //       type: "string",
// // //       validation: (Rule) => Rule.required(),
// // //     }),

// // //     defineField({
// // //       name: "price",
// // //       title: "Price",
// // //       type: "number",
// // //     }),

// // //     defineField({
// // //       name: "salePrice",
// // //       title: "Sale Price",
// // //       type: "number",
// // //     }),

// // //     defineField({
// // //       name: "originalPrice",
// // //       title: "Original Price",
// // //       type: "number",
// // //     }),

// // //     defineField({
// // //       name: "description",
// // //       title: "Description",
// // //       type: "text",
// // //     }),

// // //     // // Updated Images field
// // //     // defineField({
// // //     //   name: "images",
// // //     //   title: "Images",
// // //     //   type: "array",
// // //     //   of: [
// // //     //     // Each item in the array is a single image + optional fields
// // //     //     defineField({
// // //     //       type: "image",
// // //     //       fields: [
// // //     //         defineField({
// // //     //           name: "alt",
// // //     //           title: "Alt Text",
// // //     //           type: "string",
// // //     //           description: "Alternative text for screen readers",
// // //     //           options: {
// // //     //           },
// // //     //         }),
// // //     //       ],
// // //     //       options: {
// // //     //         // Enables the built-in "hotspot" and "crop" UI in the Studio
// // //     //         hotspot: true,
// // //     //       },
// // //     //       name: ""
// // //     //     }),
// // //     //   ],
// // //     // }),

// // //     {
// // //       name: 'images',
// // //       title: 'Images',
// // //       type: 'array',
// // //       of: [{ type: 'image' }],
// // //     },

// // //     defineField({
// // //       name: "rating",
// // //       title: "Rating",
// // //       type: "number",
// // //       validation: (Rule) => Rule.min(0).max(5),
// // //     }),

// // //     defineField({
// // //       name: "quantity",
// // //       title: "Quantity",
// // //       type: "number",
// // //       validation: (Rule) => Rule.min(0),
// // //     }),
// // //   ],

// // //   // The document preview in Sanity Studio
// // //   preview: {
// // //     select: {
// // //       title: "name",
// // //       subtitle: "customId",
// // //       media: "images.0", // Use the first image as the preview thumbnail
// // //     },
// // //   },
// // // });
