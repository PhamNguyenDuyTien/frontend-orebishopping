import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";


import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
// import Calendar from "./scenes/calendar/calendar";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";




function App() {

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}
const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

const LayoutAdmin = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  // <ColorModeContext.Provider value={colorMode}>

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="wrapper flex">
          <Sidebar isSidebar={isSidebar} />
          <main className="content w-full">
            <Topbar setIsSidebar={setIsSidebar} />
            <Outlet></Outlet>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )




}
const Custom404 = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      {/* You can add custom content for your 404 page */}
    </div>
  );
};
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/" element={<LayoutAdmin />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />

        {/* <Route path="/bar" element={<Bar />} /> */}
        {/* <Route path="/pie" element={<Pie />} /> */}
        {/* <Route path="/line" element={<Line />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/calendar" element={<Calendar />} /> */}
        {/* <Route path="/geography" element={<Geography />} /> */}
      </Route>
      <Route path="*" element={<Custom404 />} />
    </Route>
  )
);



export default App;
