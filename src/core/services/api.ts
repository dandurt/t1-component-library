import axios from "axios";

export const analitycs = axios.create({
	timeout: 30000,
	baseURL: `${process.env.ANALYTICS_MICROSERVICE_URL}/api/components`,
	headers: {
		"Content-Type": "application/json",
		"cache-control": "no-cache",
	},
});
