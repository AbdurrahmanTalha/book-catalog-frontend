import { IUserApiData } from "../../../types/globalTypes"
import api from "../../api/apiSlice"

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (data: IUserApiData) => ({
                url: `/auth/signup`,
                method: "POST",
                body: data,
                credentials: "include",
            }),
        }),
    }),
})

export const { useCreateUserMutation } = userApi
