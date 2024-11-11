import Darklive from "../icon/Darklive";
import Whitelive from "../icon/Whitelive";
import Darkgit from "../icon/Darkgit";
import Whitegit from "../icon/Whitegit";

const Projects = [
    {
        name: "Web blog",
        about: "A platform to share your thoughts and ideas.",
        url: "https://otgonbayar.vercel.app/",
        code: "https://github.com/Otgonbyr/Otgonbayar/tree/main/webblog"
    },
    {
        name: "GoGo clone",
        about: "A clone website is a site that replicates the design and often content of another existing website.",
        url: "https://gogo-clone.vercel.app/",
        code: "https://github.com/Otgonbyr/gogo-10.1"
    },
    {
        name: "Expense tracker",
        about: "Keep track of your daily expenses.",
        url: "https://expensetracker-client-ochre.vercel.app/",
        code: "https://github.com/Otgonbyr/Otgonbayar/tree/main/tracker"
    },
    {
        name: "Ecommerce",
        about: "An online store for all your needs.",
        url: "https://ecommerce-mo.vercel.app/",
        code: "https://github.com/Otgonbyr/Otgonbayar/tree/main/delivery"
    },
    {
        name: "Food Delivery",
        about: "Get your favorite meals delivered to your doorstep.",
        url: "https://food-delivery-mo.vercel.app/",
        code:"https://github.com/Otgonbyr/Otgonbayar/tree/main/delivery"
    },
    {
        name: "CMS-Articles",
        about: "Content Management System"
    }
]

export default function frontendSection({ theme }) {
    return (
        <div className="project-section">
            {Projects.map((item, index) => (
                <div key={index} className={`projects ${theme} w-full p-4 rounded-lg shadow-lg bg-white mx-auto`}>
                    <div target="_blank" rel="noopener noreferrer" className="flex gap-[10px] flex-col">
                        {item.name}
                        <div className={`project-about`}>{item.about}
                            <div className={`demo ${theme} flex gap-[20px] justify-end`}>
                                <a href={item.url} className={`hover-url ${theme} max-md:p-[6px] max-md:text-[12px] max-md:items-center `}>
                                    <div className="max-md:w-[20px]">{theme === "light" ? <Whitelive /> : <Darklive />}</div>
                                    <p>Live</p>
                                </a>
                                <a href={item.code} className={`hover-url ${theme} max-md:p-[6px] max-md:text-[12px] max-md:items-center`}>
                                    <div className="max-md:w-[20px]">{theme === "light" ? <Whitegit /> : <Darkgit />}</div>
                                    <p>Code</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    );
}