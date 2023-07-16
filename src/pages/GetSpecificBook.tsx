import { Link, useParams } from "react-router-dom"
import {
    useAddReviewMutation,
    useGetSpecificBookQuery,
} from "../redux/features/book/bookApi"
import { IBook, IReview } from "../types/globalTypes"
import { SubmitHandler, useForm } from "react-hook-form"

type ISpecificBookParams = {
    id: string
}

type Inputs = {
    user: string
    review: string
}

export default function GetSpecificBook() {
    const { id } = useParams<ISpecificBookParams>()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const [addReview] = useAddReviewMutation()

    if (!id) {
        return null
    }

    const onSubmit: SubmitHandler<Inputs> = async (data: IReview) => {
        console.log(data)
        await addReview({ body: data, id: id })
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, react-hooks/rules-of-hooks
    const { data, isLoading } = useGetSpecificBookQuery(id, {
        refetchOnMountOrArgChange: true,
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const book: IBook = data?.data ?? {}
    console.log(book)
    return (
        <div className="flex justify-between items-center max-w-[1250px] w-[100%]">
            <div className="w-[50%]">
                <img src={book.img} alt="" className="ml-auto mr-[10px]" />
            </div>
            <div className="flex  w-[50%] flex-col">
                <h2 className="text-3xl">
                    {book.title}: Written By: {book.author}
                </h2>
                <p>Genre: {book.genre}</p>
                <p>Published At: {book.publishedAt}</p>
                <p>
                    <Link to={`/editBook/${id}`} className="mr-[10px]">
                        <button className="btn">Edit</button>
                    </Link>
                    <button className="btn btn-danger">DELETE</button>
                </p>
                <div className="mt-[30px]">
                    <h2 className="text-2xl font-bold mb-[10px]">Reviews</h2>
                    <div className="flex flex-col justify-center">
                        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises  */}
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs mb-2"
                                {...register("user", { required: true })}
                            />
                            <textarea
                                className="textarea textarea-bordered w-[100%] mb-[10px]"
                                placeholder="Review"
                                {...register("review", { required: true })}
                            ></textarea>
                            <button className="btn">Write review!</button>
                        </form>
                    </div>
                    {book?.reviews?.map((review) => (
                        <div className="mb-[10px]">
                            <h3 className="text-1xl font-bold">
                                {review.user}
                            </h3>
                            <p>{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
