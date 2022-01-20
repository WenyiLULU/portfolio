import icon_python from "../images/icon_python.png";
import icon_react from "../images/icon_react.png";
import icon_qgis from "../images/icon_qgis.png"
import icon_r from "../images/icon_r.png"

export default function Skills(props) {
    const contents = {
        "skills" : {
            "fr": "Compétences",
            "en": "Skills",
            "cn": "才 能",
        },
        "info": {
            "fr": "Technologie informatique",
            "en": "Computer Technology",
            "cn": "计算机技术",
        },
        "python" : {
            "fr": "Data scraping, Data analyse",
            "en": "Data scraping, Data analysis",
            "cn": "数据爬取、数据分析",
        },
        "python_ex": {
            "fr": "Projet : Récupérer des données météo des différentes villes depuis deux sites pour prévenir la pression de maladie pour les vignobles.",
            "en": "Project : Retrieve weather data of different cities from two sites to prevent disease pressure for vineyards.",
            "cn": "应用 ：从两个网站获取不同城市的气象预报数据，用于预报葡萄园的病害风险。",
        },
        "react": {
            "fr": "Web designing",
            "en": "Web designing",
            "cn": "网页设计",
        },
        "react_ex": {
            "fr": "Projet : Développer un web portfolio personnel.",
            "en": "Project : Develop personal web portfolio.",
            "cn": "应用：设计个人网页。",
        },
        "qgis": {
            "fr": "Logicel système d'information géographique",
            "en": "Geographic information system software",
            "cn": "地理信息系统软件",
        },
        "qgis_ex": {
            "fr": "Projet : Créer des cartes avec des informations localisées (ex. Pression maladie ou risque météorologique des différents secteurs, traçabilité parcellaire, etc.).",
            "en": "Project : Create maps with localized information (e.g. disease pressure or weather risk in different sectors, plot tracking, etc.).",
            "cn": "应用：创建带有本地化信息的地图（例如，不同区域的病害或天气风险，地块操作追溯信息等）。",
        },
        "r": {
            "fr": "Data analyse",
            "en": "Data analysis",
            "cn": "数据分析",
        },
        "r_ex": {
            "fr": "Projet : Analyser des données des expérimentations (ex. analyse les résultats du analyse sensoriel.)",
            "en": "Project: Analyze data from experiments (e.g., analyze results of sensory analysis.)",
            "cn": "数据分析",
        },
        "language": {
            "fr": "Langue",
            "en": "Language",
            "cn": "语 言",
        },
        "french" : {
            "fr": "Français",
            "en": "French",
            "cn": "法 语",
        },
        "english" : {
            "fr": "Anglais",
            "en": "English",
            "cn": "英 语",
        },
        "chinese" : {
            "fr": "Chinois",
            "en": "Chinese",
            "cn": "中 文",
        },
        "transport" :{
            "fr": "Transport",
            "en": "Transport",
            "cn": "交 通",
        },
        "license" :{
            "fr": "Permis B + voiture citadine",
            "en": "Driving license + city car",
            "cn": "C1 驾照 + 个人轿车",
        },
    }

    return (
        <section id="skills" className="rounded-3xl my-8 mx-3 px-4 py-8 bg-secondary/75">
            <div className="grid justify-items-stretch mb-16">
                <h1  className="justify-self-center text-center text-primary-focus uppercase text-5xl font-extralight col-span-full pt-8">
                    {contents.skills[props.lang]}
                </h1>
            </div>
            <div className="flex flex-wrap justify-evenly">
                <div className="grid grid-cols-1 place-items-center place-content-evenly content-start my-8">
                    <h3 className="col-span-full text-neutral text-3xl mb-8">{contents.info[props.lang]}</h3>
                    <div className="card shadow-lg compact side w-3/4">
                        <div className="flex-row items-center space-x-4 card-body">
                            <div>
                                <div className="w-14 h-14">
                                    <img className="" src={icon_python} alt="Python" />
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <h2 className="card-title">Python</h2>
                                    <p className="text-base-content mt-2 ml-4">{contents.python[props.lang]}</p>
                                </div>
                                <p className="text-base-content text-opacity-40">{contents.python_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg compact side w-3/4">
                        <div className="flex-row items-center space-x-4 card-body">
                            <div>
                                <div className="w-14 h-14">
                                    <img src={icon_react} alt="React" />
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <h2 className="card-title">React</h2>
                                    <p className="text-base-content mt-2 ml-4">{contents.react[props.lang]}</p>
                                </div>
                                <p className="text-base-content text-opacity-40">{contents.r_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg compact side w-3/4">
                        <div className="flex-row items-center space-x-4 card-body">
                            <div>
                                <div className="w-14 h-14 pt-4">
                                    <img src={icon_r} alt="R" />
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <h2 className="card-title">R</h2>
                                    <p className="text-base-content mt-2 ml-4">{contents.r[props.lang]}</p>
                                </div>
                                <p className="text-base-content text-opacity-40">{contents.react_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg compact side w-3/4">
                        <div className="flex-row items-center space-x-4 card-body">
                            <div>
                                <div className="w-14 h-14">
                                    <img src={icon_qgis} alt="Qgis" />
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <h2 className="card-title">Qgis</h2>
                                    <p className="text-base-content mt-2 ml-4">{contents.qgis[props.lang]}</p>
                                </div>
                                <p className="text-base-content text-opacity-40">{contents.qgis_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="pb-6 m-8">
                    <h3 className="text-center text-neutral text-3xl mb-8">{contents.language[props.lang]}</h3>
                    <div className="grid grid-cols-6 gap-4">
                        <p className="justify-self-end">{contents.english[props.lang]}</p>
                        <progress className="col-span-5 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="70" max="100"></progress>
                        <p className="justify-self-end h-4">{contents.french[props.lang]}</p>
                        <progress className="col-span-5 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="90" max="100"></progress>
                        <p className="justify-self-end h-4">{contents.chinese[props.lang]}</p>
                        <progress className="col-span-5 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="100" max="100"></progress>
                    </div>
                    <h3 className="text-center text-neutral text-3xl mt-12 mb-8">{contents.transport[props.lang]}</h3>
                    <div className="grid grid-cols-3">
                        <img className="justify-self-end mr-8" src="https://img.icons8.com/windows/32/000000/sedan.png"/>
                        <p className="col-span-2">{contents.license[props.lang]}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}