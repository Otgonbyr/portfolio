import Moon from "../icon/Moon";
import Sun from "../icon/Sun";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <section id="navbar" className={`w-full max-w-[1150px] h-[80px] mx-auto`}>
      <div className="flex h-full justify-between items-center px-[30px]">
        <button className={`homebtn ${theme}`} aria-label="Home">
          <div className="flex justify-center items-center">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/office/40/potato.png"
              alt="potato"
            />
          </div>
        </button>
        <div className="flex gap-[20px] max-w-[400px] justify-around items-center ">
          <ul className={`toplist flex space-x-[8px] ${theme} mx-auto max-md:hidden max-lg:hidden max-xl:hidden`}>
            <a href="#about" className="hover:underline underline-">
              About
            </a>
            <a href="#project" className="hover:underline">
              Project
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="/oggyresume.pdf" download className="hover:underline">
              Resume
            </a>
          </ul>
          <button aria-label="Toggle Theme" onClick={toggle_mode}>
            <div className="toggle-icon">{theme === "light" ? <Sun /> : <Moon />}</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
