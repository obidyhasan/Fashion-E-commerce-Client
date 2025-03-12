import HeadingCard from "../../../components/HeadingCard/HeadingCard";
import ProductCard from "../../../components/Product/ProductCard";

const ProductSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-12">
      <HeadingCard
        heading={"Featured Products"}
        subheading={
          "Explore our top picks loved by our customers – stylish, versatile, and trendy."
        }
      ></HeadingCard>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default ProductSection;
