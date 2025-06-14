import { analitycs } from "../services/api";

export const logEvent = (event: any) => {
	try {
		analitycs.post("/track", {
			...event,
		});
	} catch (err) {
		console.warn("Failed to send analytics event", err);
	}
};
