import { Button } from '@/components/ui/button';
import { useAppSelector } from './hooks';
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
function App() {
	const { name } = useAppSelector((state) => state.userState);
	console.log(name);
	return (
		<div>
			<h1 className="text-7xl font-bold ">App</h1>
			<Button
				variant="destructive"
				size="lg"
				onClick={() => console.log('it worked!!!')}
			>
				Click Me
			</Button>
			<About />
		</div>
	);
}
export default App;