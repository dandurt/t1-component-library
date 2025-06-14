import { createDefaultPreset } from "ts-jest";

const { transform } = createDefaultPreset();

/** @type {import('jest').Config} */
const config = {
	testEnvironment: "jsdom",
	transform,
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	testMatch: ["**/*.test.(ts|tsx)"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
};

export default config;
