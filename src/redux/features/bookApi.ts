import { api } from "../api/apiSlice"

interface IGetAllBookParams {
    searchTerm?: string
    publishedAt?: string
    genre?: string
}

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRecentBooks: builder.query({
            query: () => "/book",
        }),
        getAllBooks: builder.query({
            query: (args: IGetAllBookParams) => {
                let queryString = "/book"
                let added = false
                if (args.searchTerm) {
                    queryString += `?searchTerm=${args.searchTerm}`
                    added = true
                }
                if (args.publishedAt && added === true) {
                    queryString += `&publishedAt=${args.publishedAt}`
                } else if (args.publishedAt && added == false) {
                    queryString += `?publishedAt=${args.publishedAt}`
                    added = true
                }

                if (args.genre && added === true) {
                    queryString += `&genre=${args.genre}`
                } else if (args.genre && added == false) {
                    queryString += `?genre=${args.genre}`
                    added = true
                }
                return queryString
            },
        }),
    }),
})

export const { useGetRecentBooksQuery, useGetAllBooksQuery } = bookApi
