import { createBrowserRouter } from "react-router-dom";
import Header from '@/content/components/Header';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//         <Route path="/" element={<Header/>} />
//         {/* <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/reset" element={<Reset />} /> */}
//         {/* <Route
//           path="/admin/*"
//           element={
//             <AdminOnlyRoute>
//               <Admin />
//             </AdminOnlyRoute>
//           }
//         /> */}
//         {/* <Route path="/product-details/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout-details" element={<CheckoutDetails />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/checkout-success" element={<CheckoutSuccess />} />
//         <Route path="/order-history" element={<OrderHistory />} />
//         <Route path="/order-details/:id" element={<OrderDetails />} />
//         <Route path="/review-product/:id" element={<ReviewProducts />} />
//         <Route path="*" element={<NotFound />} /> */}
//     </>
//   )
// );
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  }
]);