const BackendData = [
    {
        icon: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png",
        title: "MongoDB",
    },
    {
        icon: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        title: "NodeJs",
    },
    {
        icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
        title: "ExpressJs",
    },
    {
        icon: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
        title: "MySql",
    },
    {
        icon: "https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/postgresql-branding-icon-symbol-logo-vector-.png",
        title: "PostgreSql",
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
        title: "Graphql",
    },
    {
        icon: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
        title: "NextJs",
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        title: "Typescript",
    }
]

const colorSchemes = {
    dark: {
        mongodb: "#D3E3D6",
        nodejs: "#D3E3D6",
        expressjs: "#F2F6F5",
        mysql: "#D5ECEE",
        postgresql: "#C9E1E8",
        graphql: "#E1D9DF",
        nextjs: "#F2F6F5",
        typescript: "#C8D5EA"
    },
    light: {
        mongodb: "#223526",
        nodejs: "#223526",
        expressjs: "#FAF9F6",
        mysql: "#273B3E",
        postgresql: "#16263A",
        graphql: "#32282F",
        nextjs: "#FAF9F6",
        typescript: "#273B3E"
    }
};

export default function backendSection({ theme }) {
    const currentColors = colorSchemes[theme] || colorSchemes.light;

    return (
        <div className="skills-section">
            {BackendData.map((item, index) => (
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