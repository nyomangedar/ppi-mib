import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl:
        // process.env.NODE_ENV === "development"
        //     ? "http://localhost:3500"
        //     : "https://www.ppi-mib.co.uk",
        "https://www.ppi-mib.co.uk",
    // baseUrl: "http://localhost:3500",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let results = await baseQuery(args, api, extraOptions);

    if (results?.error?.status === 403) {
        console.log("get refresh token");

        const refreshResult = await baseQuery(
            "/admin/refresh",
            api,
            extraOptions
        );

        if (refreshResult?.data) {
            api.dispatch(setCredentials({ ...refreshResult.data }));
            results = await baseQuery(args, api, extraOptions);
        } else {
            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired";
            }
            return refreshResult;
        }
    }
    return results;
};

export const apiSlice = createApi({
    // baseQuery: fetchBaseQuery({
    // 	// baseUrl: "http://localhost:3500",
    // 	// baseUrl: "http://167.99.198.188:3500/",
    // 	baseUrl:
    // 		process.env.NODE_ENV === "development"
    // 			? "http://localhost:3500"
    // 			: "https://ppi-mib.co.uk",
    // }),
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Post", "User", "Sensus"],
    endpoints: (builder) => ({}),
});
