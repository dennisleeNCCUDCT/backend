import { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminProudcts from "./pages/admin/AdminProudcts";
import AdminCoupons from "./pages/admin/AdminCoupons";

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL, process.env.REACT_APP_API_PATH);
    (async () => {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/products/all`
      );
      console.log(res);
    })();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Dashboard />}>
          {" "}
          <Route path="products" element={<AdminProudcts />}></Route>
          <Route path="coupons" element={<AdminCoupons />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
