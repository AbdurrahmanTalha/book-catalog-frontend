import { IBook } from "../../types/globalTypes"
import { useNavigate } from "react-router-dom"

interface BookCardProps {
    book: IBook
}

export default function BookCard({ book }: BookCardProps) {
    const navigate = useNavigate()
    return (
        <div
            className="mb-5 hover:cursor-pointer"
            onClick={() => navigate(`/book/${book._id}`)}
        >
            <img
                src={book.img}
                alt="Book"
                className="max-h-[200px] max-w-full mx-auto"
            />
            <div className="mx-auto">
                <h2 className="text-center">
                    {book.title} - {book.genre}
                </h2>
                <p className="text-center">Written by: {book.author}</p>
                <div className="card-actions justify-center">
                    <button className="btn text-[10px] py-[0px]">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}
