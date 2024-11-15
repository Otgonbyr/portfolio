export default function Footer({theme}) {
    return(
        <section className="flex w-full max-w-[1150px] justify-center flex-col mb-[20px] mx-auto">
            <div className="px-[30px]">
                <hr className={`hr ${theme}`} />
            </div>
            <div className="w-full flex justify-between px-[30px] text-[15px]">
                <p className={`tech ${theme}`}>2024</p>
                <div className="flex gap-[5px] max-md:flex-column">
                    <p className={`tech ${theme}`}>Built with</p>
                    <p className={`name ${theme}`}>React.Js</p>
                </div>
            </div>
        </section>
    )
}
