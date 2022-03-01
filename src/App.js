import { Route, Routes, Navigate, Router } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetailes from "./pages/ProductDetailes";
import NewUser from "./pages/newUser";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="welcome">
            <Route index={true} element={<Welcome />} />
            <Route path="new-user" element={<NewUser />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:someId" element={<ProductDetailes />} />
          <Route path="*" element={<Navigate to="welcome" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
