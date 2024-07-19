import React from "react";

import Hero from "../Hero";
import Flash from "../Flash";
import Card from "../Card";
import Category from "../Category";
import ListSection from "../ListSection";
import BestSellingProducts from "../BestSellingProducts";
import MusicExperience from "../MusicExperience";
import ProductList from "../ProductList";
import ProductCard from "../ProductCard";
import GridSection from "../GridSection";
import Delivery from "../Delivery";
import Footer from "../Footer";
import BilingSection from "../BilingSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Flash />
      <Card />
      <Category />
      <ListSection />
      <BestSellingProducts />
      <MusicExperience />
      <ProductList />
      <ProductCard />
      <GridSection />
      <Delivery />
      <Footer />
    </>
  );
};

export default Home;
