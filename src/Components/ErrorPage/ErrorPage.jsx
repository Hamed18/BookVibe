import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="text-center mt-16">
			<h2 className="text-center font-extrabold text-2xl mb-8">404 route/not found!!</h2>
			<Link to="/" className="btn bg-green-500 text-white font-bold p-2 rounded-xl">Go Back To Home</Link>
		</div>
	);
};

export default ErrorPage;