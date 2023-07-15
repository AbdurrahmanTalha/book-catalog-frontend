import { api } from "../api/apiSlice"

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRecentBooks: builder.query({
            query: () => "/book",
        }),
    }),
})

export const { useGetRecentBooksQuery } = bookApi
