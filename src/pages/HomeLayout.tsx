import { Header, Navbar } from '@/components';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
	return (
		<>
			<Header />
			<Navbar />
			<div className="align-element">
				<Outlet />
			</div>
		</>
	);
}
export default HomeLayout;
