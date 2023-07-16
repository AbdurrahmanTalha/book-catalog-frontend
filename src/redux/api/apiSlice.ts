/* import {
    fetchBaseQuery,
    BaseQueryFn,
    FetchArgs,
    BaseQueryApi,
} from "@reduxjs/toolkit/query/react"
import { logOut, setCredentials } from "../features/auth/authSlice"
import { IBook } from "../../types/globalTypes"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as { auth: { token: string | null } }
        const token: string | null = state.auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithReauth = async (
    args: FetchArgs,
    api: BaseQueryApi,
    extraOptions: Parameters<BaseQueryFn>[2]
) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status == 403) {
        console.log("Sending refresh token")
        const refreshResult = await baseQuery(
            "/auth/refresh-token",
            api,
            extraOptions
        )
        console.log(refreshResult)
        const state = api.getState() as {
            auth: {
                token: string | null
                user: {
                    email: string
                    password: string
                    wishlist?: IBook[]
                } | null
            }
        }
        if (refreshResult?.data) {
            const user = state.auth.user
            const accessToken = refreshResult.data.accessToken as string
            api.dispatch(
                setCredentials({
                    accessToken: accessToken,
                    user: user,
                })
            )
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

const api = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    reducerPath: "api",
})

export default api
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json")

            return headers
        },
    }),
    endpoints: () => ({}),

    tagTypes: ["book"],
})

export default api
