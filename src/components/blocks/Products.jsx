import React from "react";
import { Link } from "react-router-dom";
import "../../styling/blocks/Products.css";

function Products({ limit }) {
  const productData = [
    {
      id: 1,
      title: "Rosé Essence",
      image: "/images/ProductImage1.jpg",
      caption: "Breathe in love, feel the bloom.",
    },
    {
      id: 2,
      title: "Velvet Embrace",
      image: "/images/ProductImage2.jpg",
      caption: "Soft and serene, like velvet petals.",
    },
    {
      id: 3,
      title: "Jasmine Whisper",
      image: "/images/ProductImage3.jpg",
      caption: "A delicate touch of nature's grace.",
    },
    {
      id: 4,
      title: "Lavender Dream",
      image: "/images/ProductImage4.jpg",
      caption: "A calming embrace, always peaceful.",
    },
    {
      id: 5,
      title: "Golden Orchid",
      image: "/images/ProductImage5.jpg",
      caption: "Luxury and elegance in every note.",
    },
    {
      id: 6,
      title: "Wild Rose",
      image: "/images/ProductImage6.jpg",
      caption: "Unpredictable and untamed beauty.",
    },
    {
      id: 7,
      title: "Peony Bliss",
      image: "/images/ProductImage10.jpg",
      caption: "A burst of freshness with every bloom.",
    },
    {
      id: 8,
      title: "Dahlia Glow",
      image: "/images/ProductImage11.jpg",
      caption: "Vibrant and bold, a true statement.",
    },
    {
      id: 9,
      title: "Magnolia Breeze",
      image: "/images/ProductImage4.jpg",
      caption: "A sweet breeze of sophistication.",
    },
    {
      id: 10,
      title: "Tulip Serenade",
      image: "/images/ProductImage3.jpg",
      caption: "Elegant, soft, and endlessly charming.",
    },
    {
      id: 11,
      title: "Lily Dawn",
      image: "/images/ProductImage7.jpg",
      caption: "A fresh start, full of purity and grace.",
    },
    {
      id: 12,
      title: "Camellia Grace",
      image: "/images/ProductImage9.jpg",
      caption: "Timeless beauty with a hint of elegance.",
    },
    {
      id: 13,
      title: "Hibiscus Glow",
      image: "/images/ProductImage1.jpg",
      caption: "Exotic and radiant, a tropical delight.",
    },
    {
      id: 14,
      title: "Iris Aura",
      image: "/images/ProductImage8.jpg",
      caption: "An aura of calm with a vibrant touch.",
    },
    {
      id: 15,
      title: "Freesia Charm",
      image: "/images/ProductImage11.jpg",
      caption: "Charming and fragrant, a true attraction.",
    },
  ];
  const productsToDisplay = limit ? productData.slice(0, limit) : productData;
  return (
    <div className="products-listing">
      {productsToDisplay.map((product) => (
        <div key={product.id} className="products-listing_item">
          <div className="product-item_content">
            <img
              src={product.image}
              alt={product.title}
              className="product-item_image"
            />
            <h3 className="product-item_title">{product.title}</h3>
            <p className="product-item_caption">{product.caption}</p>
          </div>
        </div>
      ))}
      {limit && limit === 7 && (
        <div className="see-more">
          <Link to="/collection">See More</Link>
        </div>
      )}
    </div>
  );
}

export default Products;
