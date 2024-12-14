const Hero = ({theme}) => {
    return(
        <section id="about" className="flex w-full max-w-[1150px] justify-center items-center my-[56px] mx-auto">
            <div className="flex w-full justify-between items-center px-[30px]">
                <div className={`aboutmy ${theme}`}>
                    <p className={`hlo ${theme} max-md:text-[12px]`}>Hello! I am</p> 
                        <div className="flex gap-[10px] text-[35px] max-md:text-[25px]">
                            <p>Lkhasuren</p>
                            <p className={`name ${theme}`}>Otgonbayar</p>
                        </div>
                        <div className="flex text-[20px] gap-[8px] max-md:text-[15px]">
                            <p className={`name ${theme}`}>JUNIOR</p>
                            <p>Front-End Developer</p> 
                        </div>
                    <p className="my-[10px] text-[#B8B8B8] mb-[30px] max-md:text-[12px] max-sm:text-[10xp]">I am a recent graduate of Pinecone Academy, where I earned a certificate in Fullstack Developer. I have gained practical experience in web development, including both frontend and backend technologies, through intensive projects and coursework. With a passion for creating innovative web solutions and a commitment to continuous learning, I am eager to contribute to the success of dynamic tech companies.</p>        
                    <a href="/oggyresume.pdf" download className={`getresume ${theme} max-md:text-[8px] max-md:mt-[5px]`}>
                        Get my resume
                    </a>
                </div>
                <div className="max-md:hidden max-lg:hidden max-xl:hidden">
                    <img className="w-[350px] h-[450px]" src="" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero