import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({
		// baseUrl: "http://localhost:3500",
		// baseUrl: "http://167.99.198.188:3500/",
		baseUrl:
			process.env.NODE_ENV === "development"
				? "http://localhost:3500"
				: "http://68.183.32.204:3500",
	}),
	tagTypes: ["Post", "User"],
	endpoints: (builder) => ({}),
});
