import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState({
    category: [],
    price: [],
    rating: [],
  });

  const categories = ["Electronics", "Fashion", "Home", "Books"];
  const priceRanges = ["Under $50", "$50 - $100", "$100 - $200", "Above $200"];
  const ratings = [1, 2, 3, 4, 5];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const sortProducts = (products, option) => {
    switch (option) {
      case "newer":
        return products.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "popular":
        return products.sort((a, b) => b.rating.rate - a.rating.rate);
      case "price-high-low":
        return products.sort((a, b) => b.price - a.price);
      case "price-low-high":
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterChange = (name, value, checked) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (checked) {
        newFilters[name] = [...newFilters[name], value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
      return newFilters;
    });
  };

  const filterProducts = (products) => {
    return products.filter((product) => {
      const categoryMatch =
        filters.category.length === 0 ||
        filters.category.includes(product.category);

      const priceMatch =
        filters.price.length === 0 ||
        filters.price.some((range) => {
          if (range === "Under $50") return product.price < 50;
          if (range === "$50 - $100")
            return product.price >= 50 && product.price <= 100;
          if (range === "$100 - $200")
            return product.price >= 100 && product.price <= 200;
          if (range === "Above $200") return product.price > 200;
          return false;
        });

      const ratingMatch =
        filters.rating.length === 0 ||
        filters.rating.some((rating) => product.rating.rate >= rating);

      return categoryMatch && priceMatch && ratingMatch;
    });
  };

  const sortedProducts = sortProducts([...products], sortOption);
  const filteredProducts = filterProducts(sortedProducts);

  return (
    <div>
      <Header />
      <main className="main-content">
        <div className="layout">
          <div
            className={`filter-sidebar-container ${
              showFilter ? "show" : "hide"
            }`}
          >
            <FilterSidebar
              categories={categories}
              priceRanges={priceRanges}
              ratings={ratings}
              onFilterChange={handleFilterChange}
            />
          </div>

          <section className="product-section">
            <div className="recommended">
              <p className="head">Discover Our Products</p>
              <p className="browse">
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                scelerisque. Dolor integer scelerisque nibh amet miut elementum
                dolor.
              </p>

              <button className="show-filter-btn" onClick={toggleFilter}>
                {showFilter ? "Hide Filter" : "Show Filter"}
              </button>

              <div
                className={`sort-options ${showFilter ? "with-filter" : ""}`}
              >
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="recommended">Recommended</option>
                  <option value="newer">Newer First</option>
                  <option value="popular">Popular</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="price-low-high">Price: Low to High</option>
                </select>
              </div>
            </div>

            <ProductGrid products={filteredProducts} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
