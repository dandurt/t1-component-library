import axios from "axios";

export const analitycs = axios.create({
	timeout: 30000,
	baseURL: `https://t1-msa-tracking.onrender.com/api/components`,
	headers: {
		"Content-Type": "application/json",
		"cache-control": "no-cache",
	},
});
