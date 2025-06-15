import { analitycs } from "../services/api";
import { AnalyticsEvent } from "./interfaces/event";

export const logEvent = (event: AnalyticsEvent) => {
	try {
		analitycs.post("/track", {
			...event,
		});
	} catch (err) {
		console.warn("Failed to send analytics event", err);
	}
};
