export interface AnalyticsEvent {
	component: string;
	action: "render" | "click" | "blur";
	timestamp?: string;
	variant?: string;
}
