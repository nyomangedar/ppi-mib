import { apiSlice } from "../../app/api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/admin/login",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		sendLogout: builder.mutation({
			query: () => ({
				url: "/admin/logout",
				method: "POST",
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					console.log(data);
					dispatch(logOut());
					setTimeout(() => {
						dispatch(apiSlice.util.resetApiState());
					}, 1000);
				} catch (error) {
					console.log(error);
				}
			},
		}),
		refresh: builder.mutation({
			query: "admin/refresh",
			method: "GET",
		}),
		async onQueryStarted(arg, { dispatch, queryFulfilled }) {
			try {
				const { data } = await queryFulfilled;
				console.log(data);
				const { accessToken } = data;
				dispatch(setCredentials({ accessToken }));
			} catch (error) {
				console.log(error);
			}
		},
	}),
});

export const { useLoginMutation, useSendLogoutMutation, useRefreshMutation } =
	authApiSlice;
