export default function Hero() {
    return (
        <div>
            <div className="hero max-w-[1250px] flex justify-center items-center mx-auto min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://www.datocms-assets.com/29926/1645194556-216938_geneolog-homepage-image.png?fm=webp"
                        className="max-w-sm rounded-full shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            Have books you want to read?
                        </h1>
                        <p className="py-6 w-[80%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, sapiente quia deserunt dolorem non
                            dolores illo facilis, perferendis expedita vitae,
                            doloribus doloremque necessitatibus eos est vel
                            accusantium ipsa iusto repellendus?
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
