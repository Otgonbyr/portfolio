import AllProject from "./Project-mocks";

export default function Project({theme}) {
    return(
        <section content="width=device-width, initial-scale=1.0" className="flex w-[1150px] justify-center items-center flex-wrap">
            <div className="flex flex-col px-[30px] my-[50px]">
                <p className={`tech ${theme}`}>PROJECT</p>
                <hr className={`hr ${theme}`} />
                <AllProject theme={theme}/>
            </div>
        </section>
    )
}