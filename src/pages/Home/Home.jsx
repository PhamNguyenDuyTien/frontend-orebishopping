import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { useDispatch, useSelector } from "react-redux";
import { decodeAccessToken } from "../../modules/JWT/jwt";
import { detailUser } from "../../redux/orebiSlice";
import * as apiService from "../../modules/service/apiService";


const Home = () => {
  const userLogin = useSelector(state => state.orebiReducer.userInfo);
  // console.log({userLogin});
  const dispatch = useDispatch();

  useEffect(() => {
      // After login, return user detail
    const fetchDetailUser = async () => {
      const access_token = localStorage.getItem("access_token");
      if(access_token) {
        const decodeToken = decodeAccessToken(access_token);
        const res = await apiService.detailUserLogin(decodeToken.id, access_token);
        if (res.code === 200) {
          dispatch(detailUser({
            success: true,
            data: res.data,
          }))
        }
      }
      else {
        dispatch(detailUser({
          success: false,
          data: [],
        }))
      }
    }
    fetchDetailUser()
  }, [])


  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
