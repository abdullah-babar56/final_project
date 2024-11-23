import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories";
// import PropertyGrid from "./components/PropertyGrid/PropertyGrid";
import ListingGrid from './components/ListingGrid/ListingGrid';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Categories />
      {/* <PropertyGrid /> */}
      <ListingGrid />
      <Footer />
    </div>
  );
}

export default App;
