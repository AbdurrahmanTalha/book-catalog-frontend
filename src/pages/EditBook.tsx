/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react"
import { useParams } from "react-router-dom"
import {
    useEditBookMutation,
    useGetSpecificBookQuery,
} from "../redux/features/book/bookApi"
import bookGenres from "../constants/bookGenre"
import { useForm } from "react-hook-form"
import { IBook } from "../types/globalTypes"
import { toast } from "react-toastify"

export type Inputs = {
    title: string
    author: string
    genre: string
    publishedAt: string
    img: string
}

export default function EditBook() {
    const { id } = useParams()
    const [editBook] = useEditBookMutation()
    const { register, handleSubmit, setValue } = useForm<Inputs>()

    if (!id) {
        return null
    }

    const { data, isLoading } = useGetSpecificBookQuery(id)

    const onSubmit = async (body: Inputs) => {
        await editBook({ id, body })
        console.log(body)
        toast.success("Successfully edited!")
    }

    React.useEffect(() => {
        if (data) {
            const { title, author, genre, publishedAt, img } = data.data
            setValue("title", title)
            setValue("author", author)
            setValue("genre", genre)
            setValue("publishedAt", publishedAt)
            setValue("img", img)
        }
    }, [data, setValue])
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className="mx-auto w-[100%]">
                <h2 className="mb-[10px] text-3xl text-center">Edit Book</h2>
                <form
                    action=""
                    className="w-[100%] flex justify-center items-center flex-col"
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered mb-[20px] w-[500px] max-w-xs"
                        {...register("title", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        className="input input-bordered mb-[20px] w-[500px] max-w-xs"
                        {...register("author", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Image Url"
                        className="input input-bordered mb-[20px] w-[500px] max-w-xs"
                        {...register("img", { required: true })}
                    />
                    <select
                        className="select select-bordered mb-[20px] max-w-xs w-[320px]"
                        {...register("publishedAt", { required: true })}
                    >
                        <option disabled>Published Year</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                    <select
                        className="select select-bordered mb-[20px] max-w-xs w-[320px]"
                        {...register("genre", { required: true })}
                    >
                        <option disabled>Genre</option>
                        {bookGenres.map((genre) => (
                            <option key={genre}>{genre}</option>
                        ))}
                    </select>
                    <button className="btn w-[320px]">Edit Book!</button>
                </form>
            </div>
        </div>
    )
}
