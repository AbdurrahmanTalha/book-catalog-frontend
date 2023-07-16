/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useGetRecentBooksQuery } from "../../redux/features/book/bookApi"
import { IBook } from "../../types/globalTypes"
import BookCard from "../ui/BookCard"

export default function GetRecentBooks() {
    const { data } = useGetRecentBooksQuery(undefined)
    console.log(data)

    const books = data?.data ?? []

    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-8 leading-[1]">
                Get Recent Books!
            </h2>
            <div className="grid grid-cols-4 mx-auto items-center">
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
