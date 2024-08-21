export default function Footer({theme}) {
    return(
        <section className="flex w-[1150px] justify-center flex-col mb-[20px]">
            <div className="px-[30px]">
                <hr className={`hr ${theme}`} />
            </div>
            <div className="w-full flex justify-between px-[30px] text-[15px]">
                <p className={`tech ${theme}`}>2024</p>
                <div className="flex gap-[5px]">
                    <p className={`tech ${theme}`}>Built with</p>
                    <p className={`name ${theme}`}>React.Js</p>
                </div>
            </div>
        </section>
    )
}
