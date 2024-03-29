import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Products,
	SingleProduct,
	Register,
	Orders,
} from './pages';
import { Home } from 'lucide-react';
const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{ index: true, element: <Landing /> },
			{ path: 'products', element: <Products /> },
			{ path: 'products/:id', element: <SingleProduct /> },
			{ path: 'cart', element: <Cart /> },
			{ path: 'about', element: <About /> },
			{ path: 'checkout', element: <Checkout /> },
			{ path: 'orders', element: <Orders /> },
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}
export default App;
