const Projects = [
    {
        name: "Web blog",
        about: "A platform to share your thoughts and ideas.",
        url: "https://otgonbayar.vercel.app/"
    },
    {
        name: "GoGo clone",
        about: "A clone website is a site that replicates the design and often content of another existing website.",
        url: "https://gogo-clone.vercel.app/"
    },
    {
        name: "Expense tracker",
        about: "Keep track of your daily expenses.",
        url: "https://expensetracker-client-ochre.vercel.app/"
    },
    {
        name: "Ecommerce",
        about: "An online store for all your needs."
    },
    {
        name: "Food Delivery",
        about: "Get your favorite meals delivered to your doorstep.",
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
                <div key={index} className={`projects ${theme}`}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex gap-[10px] flex-col">
                        {item.name}
                        <p className={`project-about`}>{item.about}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}