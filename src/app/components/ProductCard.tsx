// src/app/components/ProductCard.tsx

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // discountPercentage from your schema
  const hasDiscount = product.discountPercentage > 0;
  // e.g. if discountPercentage = 10, finalPrice = price * (1 - 10/100)
  const finalPrice = Math.round(
    product.price * (1 - product.discountPercentage / 100)
  );

  // Because you renamed "imagePath" to "image" in your queries
  const imgSrc = product.image || "/placeholder.png";

  // Ensure we always have a string for slug, fallback if missing
  const safeSlug = product.slug ?? "missing-slug";

  // We'll store the slug in the cart as the "id"
  const handleAddToCart = () => {
    addToCart({
      id: safeSlug, // guaranteed string now
      name: product.name,
      price: hasDiscount ? finalPrice : product.price,
      image: imgSrc,
    });
  };

  // Similarly for wishlist, we use safeSlug
  const handleWishlistToggle = () => {
    if (isInWishlist(safeSlug)) {
      removeFromWishlist(safeSlug);
    } else {
      addToWishlist({
        id: safeSlug,
        name: product.name,
        price: hasDiscount ? finalPrice : product.price,
        image: imgSrc,
      });
    }
  };

  return (
    <div className="border rounded-lg shadow-md p-4 relative group hover:shadow-lg transition-all">
      {/* Link to /products/[slug], using safeSlug */}
      <Link href={`/products/${safeSlug}`}>
        <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </Link>

      <h3 className="mt-4 text-lg font-semibold text-gray-800">
        {product.name}
      </h3>

      {hasDiscount ? (
        <>
          <p className="text-red-500 font-bold">Rs. {finalPrice}</p>
          <p className="text-gray-400 line-through">Rs. {product.price}</p>
        </>
      ) : (
        <p className="text-red-500 font-bold">Rs. {product.price}</p>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          className="text-red-500 hover:text-black transition"
          onClick={handleWishlistToggle}
        >
          {isInWishlist(safeSlug) ? "❤️" : "🤍"}
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



// // src/app/components/ProductCard.tsx
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishlistContext";
// import Image from "next/image";
// import Link from "next/link";
// import { Product } from "../../types";

// // Our Product type now expects a `slug` rather than `id`.
// type ProductCardProps = {
//   product: Product;
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const { addToCart } = useCart();
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

//   // discountPercentage from your schema
//   const hasDiscount = product.discountPercentage > 0;
//   // e.g. if discountPercentage = 10, finalPrice = price * (1 - 10/100)
//   const finalPrice = Math.round(
//     product.price * (1 - product.discountPercentage / 100)
//   );

//   // Because you renamed "imagePath" to "image" in your queries
//   const imgSrc = product.image || "/placeholder.png";

//   // We'll store the slug in the cart as the "id"
//   const handleAddToCart = () => {
//     addToCart({
//       id: product.slug, // <-- Using slug as the cart item ID
//       name: product.name,
//       price: hasDiscount ? finalPrice : product.price,
//       image: imgSrc,
//     });
//   };

//   // Similarly for wishlist, we use slug as the identifier
//   const handleWishlistToggle = () => {
//     if (isInWishlist(product.slug)) {
//       removeFromWishlist(product.slug);
//     } else {
//       addToWishlist({
//         id: product.slug,
//         name: product.name,
//         price: hasDiscount ? finalPrice : product.price,
//         image: imgSrc,
//       });
//     }
//   };

//   return (
//     <div className="border rounded-lg shadow-md p-4 relative group hover:shadow-lg transition-all">
//       {/* Link to /products/[slug] */}
//       <Link href={`/products/${product.slug}`}>
//         <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
//           <Image
//             src={imgSrc}
//             alt={product.name}
//             fill
//             className="object-cover rounded-md"
//           />
//         </div>
//       </Link>

//       <h3 className="mt-4 text-lg font-semibold text-gray-800">
//         {product.name}
//       </h3>

//       {hasDiscount ? (
//         <>
//           <p className="text-red-500 font-bold">Rs. {finalPrice}</p>
//           <p className="text-gray-400 line-through">Rs. {product.price}</p>
//         </>
//       ) : (
//         <p className="text-red-500 font-bold">Rs. {product.price}</p>
//       )}

//       <div className="flex justify-between items-center mt-4">
//         <button
//           className="text-red-500 hover:text-black transition"
//           onClick={handleWishlistToggle}
//         >
//           {isInWishlist(product.slug) ? "❤️" : "🤍"}
//         </button>
//         <button
//           className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// // // src/app/components/ProductCard.tsx
// // import { useCart } from "../../context/CartContext";
// // import { useWishlist } from "/context/WishlistContext";
// // import Image from "next/image";
// // import { Product } from "../../types";

// // import Link from "next/link";

// // // Update to match your new Product type
// // type ProductCardProps = {
// //   product: Product;
// // };

// // const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
// //   const { addToCart } = useCart();
// //   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

// //   // discountPercentage from the new schema
// //   const hasDiscount = product.discountPercentage > 0;
// //   // If discountPercentage = 10, final price = price * (1 - (10 / 100)) 
// //   const finalPrice = Math.round(
// //     product.price * (1 - product.discountPercentage / 100)
// //   );

// //   // We'll rename `product.imagePath` to something shorter:
// //   const imgSrc = product.image || "/placeholder.png";

// //   // Cart expects an ID as string => product.id is already string now
// //   const handleAddToCart = () => {
// //     addToCart({
// //       id: product.id, // string now
// //       name: product.name,
// //       // If discount applies, use finalPrice, else use product.price
// //       price: hasDiscount ? finalPrice : product.price,
// //       image: imgSrc,
// //     });
// //   };

// //   const handleWishlistToggle = () => {
// //     if (isInWishlist(product.id)) {
// //       removeFromWishlist(product.id);
// //     } else {
// //       addToWishlist({
// //         id: product.id,
// //         name: product.name,
// //         price: hasDiscount ? finalPrice : product.price,
// //         image: imgSrc,
// //       });
// //     }
// //   };

// //   return (
// //     <div className="border rounded-lg shadow-md p-4 relative group hover:shadow-lg transition-all">
// //       {/* Make sure the Link is correct if your route is /products/[id] */}
// //       <Link href={`/products/${product.id}`}>
// //         <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
// //           <Image
// //             src={imgSrc}
// //             alt={product.name}
// //             fill
// //             className="object-cover rounded-md"
// //           />
// //         </div>
// //       </Link>

// //       <h3 className="mt-4 text-lg font-semibold text-gray-800">
// //         {product.name}
// //       </h3>
// //       {hasDiscount ? (
// //         <>
// //           <p className="text-red-500 font-bold">Rs. {finalPrice}</p>
// //           <p className="text-gray-400 line-through">Rs. {product.price}</p>
// //         </>
// //       ) : (
// //         <p className="text-red-500 font-bold">Rs. {product.price}</p>
// //       )}

// //       <div className="flex justify-between items-center mt-4">
// //         <button
// //           className="text-red-500 hover:text-black transition"
// //           onClick={handleWishlistToggle}
// //         >
// //           {isInWishlist(product.id) ? "❤️" : "🤍"}
// //         </button>
// //         <button
// //           className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
// //           onClick={handleAddToCart}
// //         >
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;


