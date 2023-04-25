import authHeader from "./auth-header";
import { HTTP } from "@/api/api";

class UserService {
	async getPublicContent() {
		return await HTTP.get("test/all");
	}

	async getUserBoard() {
		return await HTTP.get("test/user", { headers: authHeader() });
	}

	async getModeratorBoard() {
		return await HTTP.get("test/mod", { headers: authHeader() });
	}

	async getAdminBoard() {
		return await HTTP.get("test/admin", { headers: authHeader() });
	}
}

export default new UserService();
