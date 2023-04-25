import { HTTP } from "@/api/api";

class AuthService {
	login = async (user) => {
		return await HTTP.post("signin", {
			username: user.username,
			password: user.password,
		}).then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}

			return response.data;
		});
	};

	logout = () => {
		localStorage.removeItem("user");
	};

	register = async (user) => {
		return await HTTP.post(`signup`, {
			username: user.username,
			email: user.email,
			password: user.password,
		});
	};
}

export default new AuthService();
