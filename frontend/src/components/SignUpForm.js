import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [data, setData] = useState({
		fName: "",
		lName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className>
			<div >
				<div>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" >
							Sign in
						</button>
					</Link>
				</div>
				<div>
					<form  onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="fName"
							onChange={handleChange}
							value={data.fName}
							required
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lName"
							onChange={handleChange}
							value={data.lName}
							required
						/>
						<input
							type="text"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
						/>
						{error && <div >{error}</div>}
						<button type="submit">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;