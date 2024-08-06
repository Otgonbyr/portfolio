const FrontendData = [
    {
        icon: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png",
        title: "HTML",
    },
    {
        icon: "https://static-00.iconduck.com/assets.00/file-type-css-icon-902x1024-dqy5inwy.png",
        title: "CSS",
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        title: "Javascript",
    },
    {
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        title: "ReactJS",
    },
    {
        icon: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
        title: "NextJS",
    },
    {
        icon: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
        title: "Tailwindcss",
    },
    {
        icon: "https://static-00.iconduck.com/assets.00/material-ui-icon-1024x814-sytj0yhk.png",
        title: "MaterialUI",
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        title: "Typescript",
    },
    {
        icon: "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
        title: "Bootstrap",
    }
]

const colorSchemes = {
    dark: {
        html: "#E3D5CE",
        css: "#C8D5EA",
        javascript: "#E6EBD4",
        reactjs: "#D5ECEE",
        nextjs: "#F2F6F5",
        tailwindcss: "#CCE3E3",
        materialui: "#cce6ff",
        typescript: "#C8D5EA",
        bootstrap: "#D2CCEC"
    },
    light: {
        html: "#32251E",
        css: "#16263A",
        javascript: "#363C24",
        reactjs: "#273B3E",
        nextjs: "#FAF9F6",
        tailwindcss: "#1A3433",
        materialui: "#16263A",
        typescript: "#273B3E",
        bootstrap: "#241A3C"
    }
};

export default function frontendSection({ theme }) {
    const currentColors = colorSchemes[theme] || colorSchemes.light;
    return (
        <div className="skills-section">
            {FrontendData.map((item, index) => (
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