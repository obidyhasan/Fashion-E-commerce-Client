import BannerSection from "./BannerSection/BannerSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import CollectionSection from "./CollectionSection/CollectionSection";
import GallerySection from "./GallerySection/GallerySection";
import HeroSection from "./HeroSection/HeroSection";
import OfferSection from "./OfferSection/OfferSection";
import ProductSection from "./ProductSection/ProductSection";
import ServiceSection from "./ServiceSection/ServiceSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ProductSection></ProductSection>
      <OfferSection></OfferSection>
      <BannerSection></BannerSection>
      <CategoriesSection></CategoriesSection>
      <BannerSection></BannerSection>
      <CollectionSection></CollectionSection>
      <GallerySection></GallerySection>
      <ServiceSection></ServiceSection>
    </div>
  );
};

export default Home;
