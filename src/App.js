//import Navigation from "./routes/Navigation/navigation.component";
//import Home from "./routes/Home/home.component";
//import Authentication from "./routes/Authentication/authentication.component";
//import Shop from "./routes/Shop/shop.component";
//import Checkout from "./routes/Checkout/checkout.component";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { checkUserSession } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.componet";
import { GlobalStyle } from "./global.styles";
const Navigation = lazy(() =>
  import("./routes/Navigation/navigation.component")
);
const Home = lazy(() => import("./routes/Home/home.component"));
const Authentication = lazy(() =>
  import("./routes/Authentication/authentication.component")
);
const Shop = lazy(() => import("./routes/Shop/shop.component"));
const Checkout = lazy(() => import("./routes/Checkout/checkout.component"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
