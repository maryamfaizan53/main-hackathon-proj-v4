// /app/products/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ShopBanner from "../../../app/components/ShopBanner";
import ProductPage from "../../../app/components/ProductPage";
import FeaturesSection from "../../../app/components/FeaturesSection";

// Adjust this interface as needed for your product structure
interface Product {
  name: string;
  slug: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  image: string; // The "imagePath" is now "image" from the query
  category?: {
    title?: string;
  };
}

export default function SingleProductWrapper() {
  // Slug from the URL is now called "slug"
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      console.error("Slug is missing!");
      setLoading(false);
      return;
    }

    async function fetchProduct() {
      try {
        // This calls our new route at /api/products/[slug]
        const res = await fetch(`/api/products/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();

        // data.product is a single object (not an array) in our route
        if (data.product) {
          setProduct(data.product);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product Not Found!</p>;

  return (
    <>
      <ShopBanner />
      <ProductPage product={product} />
      <FeaturesSection />
    </>
  );
}











// // // src/app/products/[id]/page.tsx
// // import { singleProductQuery } from '../../../sanity/queries'
// // import { sanityClient } from '../../../sanity/lib/client'

// // // These components can be client components or server components—
// // // but `page.tsx` itself is a server component by default.
// // import ShopBanner from '../../components/ShopBanner'
// // import ProductPage from '../../components/ProductPage'
// // import FeaturesSection from '../../components/FeaturesSection'

// // /** 
// //  * The `params` object is provided automatically by Next.js
// //  * for dynamic routes [id].
// //  */
// // export default async function SingleProductPage({
// //   params,
// // }: {
// //   params: { id: string }
// // }) {
// //   // 1) Fetch data from Sanity using your query + ID
// //   const productArray = await sanityClient.fetch(singleProductQuery(params.id))

// //   // 2) If no product is found, you can handle gracefully
// //   if (!productArray || productArray.length === 0) {
// //     return <p>Product not found!</p>
// //   }

// //   const product = productArray[0]

// //   // 3) Return your page layout with real data
// //   return (
// //     <>
// //       <ShopBanner />
// //       <ProductPage product={product} />
// //       <FeaturesSection />
// //     </>
// //   )
// // }




// // src/app/products/[id]/page.tsx
// "use client";

// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Product } from "../../../types";
// import ProductPage from "../../components/ProductPage";
// import ShopBanner from "../../components/ShopBanner";
// import FeaturesSection from "../../components/FeaturesSection";


// export default function SingleProductWrapper() {
//   const { id } = useParams(); // e.g. '1'
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) {
//       console.error("Product ID is missing!");
//       setLoading(false);
//       return;
//     }

//     async function fetchProduct() {
//       try {
//         // This calls the new route at /api/products/[id]/route.ts
//         const res = await fetch(`/api/products/${id}`);
//         if (!res.ok) throw new Error("Failed to fetch product");
//         const data = await res.json();

//         // data.product is an array from your route
//         if (data.product && data.product.length > 0) {
//           setProduct(data.product[0]);
//         } else {
//           setProduct(null);
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProduct();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!product) return <p>Product Not Found!</p>;

//   return(
//     <>
    
//     <ShopBanner />
//    <ProductPage product={product} />;
//     <FeaturesSection />
   
//     </>
//   )
// }
