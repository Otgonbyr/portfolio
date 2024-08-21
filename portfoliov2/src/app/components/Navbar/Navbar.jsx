import Moon from "../icon/Moon"
import Sun from "../icon/Sun";

const Navbar = ({theme, setTheme}) => {
    const toggle_mode = () => {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }

    return(
        <section className="top w-[1150px] h-[80px] bg-[#EEF7F5] ">
            <div className="flex h-full justify-between items-center px-[30px] md:px-[30px]">
                <button className={`homebtn ${theme}`}>
                    <div className="flex justify-center items-center">
                        <img width="25" height="25" src="https://img.icons8.com/office/40/potato.png" alt="potato"/>   
                    </div>
                </button>
                <div className="flex w-[400px] justify-around items-center ">
                    <ul className={`toplist ${theme}`}>
                        <a href="#about">About</a>
                        <a href="#project">Project</a>
                        <a href="#skills">Skills</a>
                        <a href="/oggyresume.pdf" download>
                            Resume
                        </a>
                    </ul>
                    <button>
                        <div onClick={()=>{toggle_mode()}} className="toggle-icon">{theme == "light" ? <Sun/> : <Moon/>}</div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Navbar