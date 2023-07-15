/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"
import bookGenres from "../constants/bookGenre"
import { useGetRecentBooksQuery } from "../redux/features/bookApi"
import BookCard from "../components/ui/BookCard"
import { IBook } from "../types/globalTypes"

export default function AllBooks() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data, isLoading, error } = useGetRecentBooksQuery(undefined)
    console.log(data)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const books = data?.data ?? []
    return (
        <div className="px-[10px] w-full">
            <div className="lg:md:flex items-center w-[100%] justify-between mb-2 mx-auto">
                <div className="relative flex flex-wrap lg:md:mb-0 mb-3">
                    <input
                        type="search"
                        className="relative m-0 -mr-0.5 block lg:md:w-[400px] w-[200px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1"
                    />

                    <button
                        className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div className="lg:md:join flex justify-between">
                    <select className="select select-bordered w-full max-w-[10rem]">
                        <option disabled selected>
                            Genre
                        </option>
                        {bookGenres.map((genre) => (
                            <option>{genre}</option>
                        ))}
                    </select>
                    <select className="select select-bordered w-full max-w-[10rem]">
                        <option disabled selected>
                            Published At
                        </option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2022</option>
                        <option>2023</option>
                    </select>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    books.map((book: IBook) => (
                        <BookCard book={book} key={book._id} />
                    ))
                }
            </div>
        </div>
    )
}
