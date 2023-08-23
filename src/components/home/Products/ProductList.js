import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { useNavigate } from "react-router-dom";

const ProductList = (props) => {
    const _id = props.productName;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);
    const navigate = useNavigate();
    const productItem = props;
    const handleProductDetails = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: productItem,
            },
        });
    };
    const dispatch = useDispatch();
    return (
        <div className="w-full grid grid-cols-3 sml:gap-5 xs:gap-1 py-2 px-5 xl:px-20 lgl:px-8 xs:px-2 border my-1">
            <div className="w-full">
                <div className="relative">
                    <div className="max-w-[250px] max-h-[250px] w-full h-full">
                        <Image
                            className="w-full h-full object-cover"
                            imgSrc={props.img}
                        />
                    </div>
                    <div className="absolute top-4 left-4">
                        {props.badge && <Badge text="New" />}
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center px-1">
                <div className="flex-col items-center justify-between font-titleFont">
                    <span className="lg:text-[24px] mdl:text-[20px] md:text-[24px] sml:text-[20px] xs:text-base text-primeColor font-bold">
                        {props.productName}
                    </span>
                    <p className="text-[#767676] lg:text-[20px] md:text-[16px] sml:text-[14px] xs:text-[12px]">
                        ${props.price}
                    </p>
                    <p className="text-[#767676] lg:text-[20px] md:text-[16px] sml:text-[14px] xs:text-[12px]">
                        {props.color}
                    </p>
                </div>
            </div>
            <div className="w-full flex items-center bg-white group-hover:bottom-0 duration-700">
                <ul className="w-full h-full flex flex-col items-end justify-center sml:gap-2 xs:gap-0 font-titleFont sml:px-2 xs:px-0">
                    <li className="text-[#767676] hover:text-primeColor text-[16px] lg:text-[16px] md:text-[14px] sml:text-[12px] xs:text-[10px] font-normal flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                        Compare
                        <span>
                            <GiReturnArrow />
                        </span>
                    </li>
                    <li
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    _id: props._id,
                                    name: props.productName,
                                    quantity: 1,
                                    image: props.img,
                                    badge: props.badge,
                                    price: props.price,
                                    colors: props.color,
                                })
                            )
                        }
                        className="text-[#767676] hover:text-primeColor text-[16px] lg:text-[16px] md:text-[14px] sml:text-[12px] xs:text-[10px] font-normal flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                    >
                        Add to Cart
                        <span>
                            <FaShoppingCart />
                        </span>
                    </li>
                    <li
                        onClick={handleProductDetails}
                        className="text-[#767676] hover:text-primeColor text-[16px] lg:text-[16px] md:text-[14px] sml:text-[12px] xs:text-[10px] font-normal flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                    >
                        View Details
                        <span className="text-lg">
                            <MdOutlineLabelImportant />
                        </span>
                    </li>
                    <li className="text-[#767676] hover:text-primeColor text-[16px] lg:text-[16px] md:text-[14px] sml:text-[12px] xs:text-[10px] font-normal flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                        Add to Wish List
                        <span>
                            <BsSuitHeartFill />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
