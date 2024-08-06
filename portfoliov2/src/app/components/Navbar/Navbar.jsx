import Moon from "../icon/Moon"
import Sun from "../icon/Sun";

const Navbar = ({theme, setTheme}) => {
    const toggle_mode = () => {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }

    return(
        <section content="width=device-width, initial-scale=1.0" className="top w-[1150px] h-[80px] justify-center items-center bg-[#EEF7F5]">
            <div className="flex h-full justify-between items-center px-[30px]">
                <button className={`homebtn ${theme}`}>
                    <div className="flex justify-center items-center">
                        <img width="25" height="25" src="https://img.icons8.com/office/40/potato.png" alt="potato"/>   
                    </div>
                </button>
                <div className="flex w-[400px] justify-around items-center">
                    <ul className={`toplist ${theme}`}>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Resume</li>
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