import { createBrowserRouter, Route } from "react-router-dom";
import Homepage from '@/content/layouts/Homepage';
import Login from '@/content/pages/auth/Login'
import Register from '@/content/pages/auth/Register'

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


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//     children:[
//       {
//         path: 'login',
//         // element: <AuthenticatedRoute element={Login}>
//         //   </AuthenticatedRoute>,
//         Component: Login,
//       },
//       {
//         path: 'register',
//         element: <Register/>
//       }
//     ]
//   }
// ]);


const routes = [
  {
    id: "parent",
    path: "/",
    element: <Homepage/>,
    loader({ request }, context) { 
      return { data: "Parent Route Data" };
     },
    handle: {
      async middleware({ request }, context) {
        console.log('unstable_dataStrategy Parent callee')
        context.parent = "PARENT MIDDLEWARE";
      },
    },
    children: [
      {
        id: "child",
        path: "/login",
        element: <Login/>,
        loader({ request }, context) {
          return { data: "Child Route Data" };
         },
        handle: {
          async middleware({ request }, context) {
            console.log('unstable_dataStrategy child callee')
            context.child = "CHILD MIDDLEWARE";
          },
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  async unstable_dataStrategy({ request, params, matches }) {
    // Run middleware sequentially and let them add data to `context`
    let context = {};
    for (const match of matches) {
      if (match.route.handle?.middleware) {
        await match.route.handle.middleware({ request, params }, context);
      }
    }
    
    // Run loaders in parallel with the `context` value
    return Promise.all(
      matches.map((match, i) =>
        match.resolve(async (handler) => {
          // Whatever you pass to `handler` will be passed as the 2nd parameter
          // to your loader/action
          let result = await handler(context);
          return { type: "data", result };
        })
      )
    );
  }
}); 


