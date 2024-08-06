const Projects = [
    {
        name: "Web blog",
        about: "A platform to share your thoughts and ideas.",
        url: "https://otgonbayar.vercel.app/"
    },
    {
        name: "Expense tracker",
        about: "Keep track of your daily expenses.",
        url: ""
    },
    {
        name: "Ecommerce",
        about: "An online store for all your needs.",
        url: ""
    },
    {
        name: "Food Delivery",
        about: "Get your favorite meals delivered to your doorstep.",
        url: ""
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