import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const sensusAdapter = createEntityAdapter({
    sortComparer: (a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = sensusAdapter.getInitialState();

export const sensusApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerSensus: builder.mutation({
            query: (initialPost) => ({
                url: "/sensus",
                method: "POST",
                body: initialPost,
            }),
            invalidatesTags: [{ type: "Sensus", id: "LIST" }],
        }),
        checkSensus: builder.mutation({
            query: (email) => ({
                url: "/sensus/check-email",
                method: "POST",
                body: email,
            }),
            invalidatesTags: [{ type: "Sensus", id: "LIST" }],
        }),
        getStudents: builder.mutation({
            query: (uniquery) => ({
                url: "/sensus/getStudent",
                method: "POST",
                body: uniquery,
            }),
            invalidatesTags: [{ type: "Sensus", id: "LIST" }],
        }),
        getAllSensus: builder.mutation({
            query: () => ({
                url: "/sensus/getAll",
                method: "GET",
            }),
            invalidatesTags: [{ type: "Sensus", id: "LIST" }],
        }),
        getAlumni: builder.mutation({
            query: () => ({
                url: "/sensus/getAlumni",
                method: "GET",
            }),
            invalidatesTags: [{ type: "Sensus", id: "LIST" }],
        }),
        getCitizen: builder.mutation({
            query: () => ({
                url: "/sensus/getCitizen",
                method: "GET",
            }),
            invalidatesTags: [{ types: "Sensus", id: "LIST" }],
        }),
    }),
});

export const {
    useRegisterSensusMutation,
    useCheckSensusMutation,
    useGetStudentsMutation,
    useGetAllSensusMutation,
    useGetCitizenMutation,
    useGetAlumniMutation,
} = sensusApiSlice;
