import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        // baseUrl: "http://localhost:3500",
        baseUrl: "http://167.99.198.188/",
        // process.env.NODE_ENV === "development"
        //     ? "http://localhost:3500"
        //     : "http://167.99.198.188/",
    }),
    tagTypes: ["Post", "User"],
    endpoints: (builder) => ({}),
});
