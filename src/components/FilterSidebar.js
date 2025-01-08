import React, { useState } from "react";
import "./FilterSidebar.css";

const FilterSidebar = () => {
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    babyKids: false,
    idealAll: false,
    occasion: "all",
    work: "all",
    fabric: "all",
    segment: "all",
    suitableFor: "all",
    rawMaterial: "all",
    pattern: "all",
  });

  const items = [
    {
      id: 1,
      category: "Men",
      occasion: "casual",
      work: "office",
      fabric: "cotton",
      segment: "premium",
    },
    {
      id: 2,
      category: "Women",
      occasion: "wedding",
      work: "business",
      fabric: "silk",
      segment: "basic",
    },
    {
      id: 3,
      category: "Baby & Kids",
      occasion: "party",
      work: "casual",
      fabric: "wool",
      segment: "basic",
    },
    {
      id: 4,
      category: "Men",
      occasion: "casual",
      work: "office",
      fabric: "linen",
      segment: "basic",
    },
    {
      id: 5,
      category: "Women",
      occasion: "casual",
      work: "office",
      fabric: "cotton",
      segment: "premium",
    },
  ];

  const filterItems = () => {
    return items.filter((item) => {
      let matches = true;

      if (filters.men && item.category !== "Men") matches = false;
      if (filters.women && item.category !== "Women") matches = false;
      if (filters.babyKids && item.category !== "Baby & Kids") matches = false;

      if (
        filters.idealAll &&
        item.category !== "Men" &&
        item.category !== "Women" &&
        item.category !== "Baby & Kids"
      ) {
        matches = false;
      }

      if (filters.occasion !== "all" && item.occasion !== filters.occasion)
        matches = false;
      if (filters.work !== "all" && item.work !== filters.work) matches = false;
      if (filters.fabric !== "all" && item.fabric !== filters.fabric)
        matches = false;
      if (filters.segment !== "all" && item.segment !== filters.segment)
        matches = false;

      return matches;
    });
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;

    if (id === "men") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        men: checked,
        women: false,
      }));
    } else if (id === "women") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        women: checked,
        men: false,
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: checked,
      }));
    }
  };

  const handleSelectChange = (event) => {
    const { id, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const [showCheckboxSection, setShowCheckboxSection] = useState(false);
  const toggleCheckboxSection = () => {
    setShowCheckboxSection(!showCheckboxSection);
  };

  return (
    <div className="filter-sidebar">
      <ul>
        <li>
          <button
            onClick={toggleCheckboxSection}
            className="toggle-checkbox-btn"
          >
            {showCheckboxSection ? "Hide" : "Show"} Checkbox Customizable
          </button>
        </li>

        {showCheckboxSection && (
          <li>
            <div className="section-heading">CHECKBOX CUSTOMIZABLE</div>
            <div className="gray-line"></div>
            <div>
              <input
                type="checkbox"
                id="men"
                checked={filters.men}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="men">Men</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="women"
                checked={filters.women}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="women">Women</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="babyKids"
                checked={filters.babyKids}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="babyKids">Baby & Kids</label>
            </div>
          </li>
        )}

        <li>
          <div className="section-heading">IDEAL FOR</div>
          <div className="gray-line"></div>
          <div>
            <input
              type="checkbox"
              id="idealAll"
              checked={filters.idealAll}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="idealAll">All</label>
          </div>
        </li>

        <li>
          <div className="section-heading">Occasion</div>
          <div className="gray-line"></div>
          <div>
            <select
              id="occasion"
              value={filters.occasion}
              onChange={handleSelectChange}
            >
              <option value="all">All</option>
              <option value="casual">Casual</option>
              <option value="wedding">Wedding</option>
              <option value="party">Party</option>
            </select>
          </div>
        </li>

        <li>
          <div className="section-heading">Work</div>
          <div className="gray-line"></div>
          <div>
            <select
              id="work"
              value={filters.work}
              onChange={handleSelectChange}
            >
              <option value="all">All</option>
              <option value="office">Office</option>
              <option value="business">Business</option>
              <option value="casual">Casual</option>
            </select>
          </div>
        </li>

        <li>
          <div className="section-heading">Fabric</div>
          <div className="gray-line"></div>
          <div>
            <select
              id="fabric"
              value={filters.fabric}
              onChange={handleSelectChange}
            >
              <option value="all">All</option>
              <option value="cotton">Cotton</option>
              <option value="silk">Silk</option>
              <option value="wool">Wool</option>
              <option value="linen">Linen</option>
            </select>
          </div>
        </li>

        <li>
          <div className="section-heading">Segment</div>
          <div className="gray-line"></div>
          <div>
            <select
              id="segment"
              value={filters.segment}
              onChange={handleSelectChange}
            >
              <option value="all">All</option>
              <option value="premium">Premium</option>
              <option value="basic">Basic</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterSidebar;
