export interface AnalyticsEvent {
	component: string;
	event: "render" | "click";
	timestamp?: string;
}
