const ToolsData = [
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        title: "VScode",
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        title: "Github",
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png",
        title: "Wordpress",
    },
    {
        icon: "https://seeklogo.com/images/N/npm-logo-F0E1FE956F-seeklogo.com.png",
        title: "NPM",
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
        title: "Figma",
    },
    {
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
        title: "Postman",
    }
]

const colorSchemes = {
    dark: {
        vscode: "#C8D5EA",
        github: "#F2F6F5",
        wordpress: "#D5ECEE",
        npm: "#DDC8C6",
        figma: "#C9E1E8",
        postman: "#E3D5CE"
    },
    light: {
        vscode: "#16263A",
        github: "#FAF9F6",
        wordpress: "#273B3E",
        npm: "#321818",
        figma: "#16263A",
        postman: "#32251E"
    }
};

export default function toolSection({ theme }) {
    const currentColors = colorSchemes[theme] || colorSchemes.light;

    return (
        <div className="skills-section">
            {ToolsData.map((item, index) => (
                <div key={index} className={`front ${theme}`}>
                    <div className="flex gap-[20px] justify-center items-center">
                        <div className="skill-color p-[8px] rounded-md" style={{ backgroundColor: currentColors[item.title.toLowerCase()] }}>
                            <img className="w-[25px] h-[25px]" src={item.icon} alt={`${item.title} icon`} />
                        </div>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}