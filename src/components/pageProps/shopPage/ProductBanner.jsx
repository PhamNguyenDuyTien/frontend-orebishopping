import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";
import { setView } from "../../../redux/orebiSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductBanner = ({ itemsPerPageFromBanner }) => {
  const viewProducts = useSelector(state => state.orebiReducer.view)
  const dispatch = useDispatch();
  //   const [selected, setSelected] = useState("");
  const [girdViewActive, setGridViewActive] = useState(viewProducts.gridView);
  const [listViewActive, setListViewActive] = useState(viewProducts.listView);
  useEffect(() => {
    const gridView = document.querySelector(".gridView");
    const listView = document.querySelector(".listView");

    gridView.addEventListener("click", () => {
      setListViewActive(false);
      setGridViewActive(true);
    });
    listView.addEventListener("click", () => {
      setGridViewActive(false);
      setListViewActive(true);
    });
  }, [girdViewActive, listViewActive]);


  const handleViewProducts = () => {
    dispatch(setView({
      gridView: girdViewActive,
      listView: listViewActive
    }))
  }

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      {/* =========================================================
                            Left Part Start here
        ======================================================== */}

      <div className="flex items-center gap-4">
        <span
          className={`${
            listViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
          onClick={handleViewProducts}
        >
          <ImList />
        </span>
        <span
          className={`${
            girdViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 text-lg flex items-center justify-center cursor-pointer gridView`}
          onClick={handleViewProducts}
        >
          <BsGridFill />
        </span>
      </div>
      {/* =========================================================
                            Left Part End here
        ======================================================== */}
      {/* =========================================================
                            Right Part STart here
        ======================================================== */}
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Sort by:</label>
          <select
            // onChange={(e) => setSelected(e.target.value)}
            id="countries"
            className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="Best Sellers">Best Sellers</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Featured">Featured</option>
            <option value="Final Offer">Final Offer</option>
          </select>
          <span className="absolute text-sm right-2 md:right-4 top-2.5">
            <GoTriangleDown />
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#767676] relative">
          <label className="block">Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="countries"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <span className="absolute text-sm right-3 top-2.5">
            <GoTriangleDown />
          </span>
        </div>
      </div>
      {/* =========================================================
                            Right Part End here
        ======================================================== */}
    </div>
  );
};

export default ProductBanner;
