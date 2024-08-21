const Hero = ({theme}) => {
    return(
        <section id="about" className="flex w-[1150px] justify-center items-center my-[56px]">
            <div className="flex w-full justify-between items-center px-[30px]">
                <div className={`aboutmy ${theme}`}>
                    <p className={`hlo ${theme}`}>Hello! I am</p> 
                        <div className="flex gap-[10px] text-[35px]">
                            <p>Lkhasuren</p>
                            <p className={`name ${theme}`}>Otgonbayar</p>
                        </div>
                        <div className="flex text-[20px] gap-[8px]">
                            <p className={`name ${theme}`}>JUNIOR</p>
                            <p>Front-End Developer</p> 
                        </div>
                    <p className="my-[10px] text-[#B8B8B8] mb-[30px]">I am a recent graduate of Pinecone Academy, where I earned a certificate in Fullstack Developer. I have gained practical experience in web development, including both frontend and backend technologies, through intensive projects and coursework. With a passion for creating innovative web solutions and a commitment to continuous learning, I am eager to contribute to the success of dynamic tech companies.</p>        
                    <a href="/oggyresume.pdf" download className={`getresume ${theme}`}>
                        Get my resume
                    </a>
                </div>
                <div>
                    <img className="w-[300px] h-[300px]" src="potetobg.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero