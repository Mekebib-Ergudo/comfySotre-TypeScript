import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Cart() {
	return (
		<div>
			<div>Cart</div>;
			<Link to="/" className="text-7xl text-red-900">
				Back tO Home
			</Link>
			<div>
				<Button asChild size="lg">
					<Link to="/">Home Button</Link>
				</Button>
			</div>
		</div>
	);
}
export default Cart;
