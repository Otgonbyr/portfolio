const Hero = ({theme}) => {
    return(
        <section id="about" className="flex w-full max-w-[1150px] md:flex-row justify-center items-center my-[56px] mx-auto">
            <div className="flex flex-col md:flex-row w-full justify-between items-center px-4 md:px-[30px]">
                <div className={`aboutmy ${theme} text-center md:text-left order-2 md:order-1`}>
                    <p className={`hlo ${theme} text-[25px] md:text-[15px]`}>Hello! I am</p> 
                        <div className="flex gap-2 md:gap-[10px] text-[30px] md:text-[35px] justify-center md:justify-start">
                            <p>Lkhasuren</p>
                            <p className={`name ${theme}`}>Otgonbayar</p>
                        </div>
                        <div className="flex text-[18px] md:text-[20px] gap-2 md:gap-[8px] justify-center md:justify-start">
                            <p className={`name ${theme}`}>JUNIOR</p>
                            <p>Front-End Developer</p> 
                        </div>
                    <p className="my-[10px] text-[#B8B8B8] mb-[30px] text-[14px] md:text-[16px] leading-relaxed mx-auto">I am a recent graduate of Pinecone Academy, where I earned a certificate in Fullstack Developer. I have gained practical experience in web development, including both frontend and backend technologies, through intensive projects and coursework. With a passion for creating innovative web solutions and a commitment to continuous learning, I am eager to contribute to the success of dynamic tech companies.</p>        
                    <a href="/oggyresume.pdf" download className={`getresume ${theme} `}>
                        Get my resume
                    </a>
                </div>
                <div className="order-1 md:order-2 mt-8 md:mt-0">
                    <img className="w-[250px] md:w-[300px] h-[250px] md:h-[300px] object-contain" src="potetobg.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero