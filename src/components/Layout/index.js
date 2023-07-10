const { Outlet } = require("react-router-dom");
const { default: Header } = require("./Header/Header");
const { default: Footer } = require("./Footer/Footer");

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
