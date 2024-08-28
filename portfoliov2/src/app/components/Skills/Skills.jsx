import FrontendSection from "./FrontendData";
import BackendSection from "./BackendData";
import ToolsSection from "./ToolsData";

export default function Skills({theme}) {
    return(
        <section id="skills" className="flex w-full max-w-[1150px] justify-center items-center flex-wrap mb-[100px] mx-auto">
            <div className="flex flex-col px-[30px] mt-[20px]">
                <p className={`tech ${theme}`}>TECHNOLOGY</p>
                <hr className={`hr ${theme}`} />
                <div>
                    <h2 className={`frontend ${theme}`}>Frontend</h2>
                    <FrontendSection theme={theme}/>
                </div>
                <div>
                    <h2 className={`backend ${theme}`}>Backend</h2>
                    <BackendSection theme={theme}/>
                </div>
                <div>
                    <h2 className={`tools ${theme}`}>Tools</h2>
                    <ToolsSection theme={theme}/>
                </div>
            </div>
        </section>
    )
}