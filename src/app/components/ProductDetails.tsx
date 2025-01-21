"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "../../types";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  // We only have one image in the schema, stored in product.imagePath:
  const [selectedImage] = useState(product.image || "");

  // Compute a discounted price if discountPercentage > 0
  const hasDiscount = product.discountPercentage > 0;
  const finalPrice = Math.round(
    product.price * (1 - product.discountPercentage / 100)
  );

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left: Single Image */}
      <div>
        <div className="relative">
          <Image
            src={selectedImage}
            alt={product.name}
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Right: Product Details */}
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        {hasDiscount ? (
          <div className="mt-2">
            <span className="text-red-500 text-xl">
              Rs. {finalPrice.toLocaleString()}
            </span>
            <span className="text-gray-400 line-through ml-2">
              Rs. {product.price.toLocaleString()}
            </span>
          </div>
        ) : (
          <p className="text-red-500 text-xl mt-2">
            Rs. {product.price.toLocaleString()}
          </p>
        )}
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;


// // src/app/components/ProductDetails.tsx
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Product } from "@/types";

// type ProductDetailsProps = {
//   product: Product;
// };

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
//   const [selectedImage, setSelectedImage] = useState(product.images[0]);

//   return (
//     <div className="grid md:grid-cols-2 gap-8">
//       {/* Image Gallery */}
//       <div>
//         <div className="relative">
//           <Image
//             src={selectedImage}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="w-full rounded-lg"
//           />
//         </div>
//         <div className="flex mt-4 space-x-4">
//           {product.images.map((img: string, index: number) => (
//             <button key={index} onClick={() => setSelectedImage(img)}>
//               <Image
//                 src={img}
//                 alt={`${product.name} ${index}`}
//                 width={80}
//                 height={80}
//                 className={`w-20 h-20 object-cover rounded-md ${
//                   selectedImage === img ? "ring-2 ring-black" : ""
//                 }`}
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Product Details */}
//       <div>
//         <h1 className="text-3xl font-bold">{product.name}</h1>
//         <p className="text-red-500 text-xl">Rs. {product.salePrice.toLocaleString()}</p>
//         <p className="text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString()}</p>
//         <p className="mt-4">{product.description}</p>
//         {/* Additional Details */}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
