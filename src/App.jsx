import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/shared/ProtectedRoutes"
import { Toaster } from "./components/ui/sonner";
import SellerProperties from "./_seller/pages/SellerProperties";
import SellerPropertiesDetail from "./_seller/pages/SellerPropertiesDetail";
import BuyerPropertyDetail from "./_buyer/pages/BuyerPropertyDetail";




const AddProperties = lazy(() => import('./_seller/pages/AddProperties'))
const BuyerLanding = lazy(() => import("./_buyer/pages/BuyerLanding"));
const SignInForm = lazy(() => import("./_auth/forms/SignInForm"));
const SignUpForm = lazy(() => import("./_auth/forms/SignUpForm"));

const AuthLayout = lazy(() => import("./_auth/AuthLayout"));
const BuyerLayout = lazy(() => import("./_buyer/BuyerLayout"));
const SellerLayout = lazy(() => import("./_seller/SellerLayout"));



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/" element={<SignInForm />} />
            <Route path="sign-up" element={<SignUpForm />} />
          </Route>

          {/* Seller Routes */}
          <Route element={
            <ProtectedRoutes>
              <SellerLayout />
            </ProtectedRoutes>
          }>
            <Route path="/seller/properties/:id" element={<SellerProperties />} />
            <Route path="/seller/add/:id" element={<AddProperties />} />
            <Route path="/seller/property/:id" element={<SellerPropertiesDetail />} />
          </Route>

          {/* Buyer Routes */}
          <Route element={
            <ProtectedRoutes>
              <BuyerLayout />
            </ProtectedRoutes>
          }>
            <Route path="/buyer/landing/:id" element={<BuyerLanding />} />
            <Route path="buyer/property/:id" element={<BuyerPropertyDetail />} />
          </Route>
        </Routes>
        <Toaster />
      </Suspense>
    </BrowserRouter>
  )
}

export default App