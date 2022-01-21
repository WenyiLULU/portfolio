import icon_python from "../images/icon_python.png";
import icon_react from "../images/icon_react.png";
import icon_qgis from "../images/icon_qgis.png"
import icon_r from "../images/icon_r.png"
import logo_vigne from "../images/logo_vigne.png"
import logo_vin from "../images/logo_vin.png"

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
            "fr": "Projet : Récupérer des données météo des différentes villes depuis deux sites pour prévenir la pression de maladie pour les vignobles",
            "en": "Project : Retrieve weather data of different cities from two sites to prevent disease pressure for vineyards",
            "cn": "应用 ：从两个网站获取不同城市的气象预报数据，用于预报葡萄园的病害风险",
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
            "fr": "Projet : Créer des cartes avec des informations localisées (ex. Pression maladie ou risque météorologique des différents secteurs, traçabilité parcellaire, etc.)",
            "en": "Project : Create maps with localized information (e.g. disease pressure or weather risk in different sectors, plot tracking, etc.)",
            "cn": "应用：创建带有本地化信息的地图（例如，不同区域的病害或天气风险，地块操作追溯信息等）",
        },
        "r": {
            "fr": "Data analyse",
            "en": "Data analysis",
            "cn": "数据分析",
        },
        "r_ex": {
            "fr": "Projet : Analyser des données des expérimentations (ex. analyse les résultats du analyse sensoriel)",
            "en": "Project : Analyze data from experiments (e.g., analyze results of sensory analysis)",
            "cn": "数据分析",
        },
        "viti" : {
            "viti_title" :{
                "fr": "Viticulture & Œnologie",
                "en": "Viticulture & Oenology",
                "cn": "葡萄栽培与酿造",
            },
            "viticulture" :{
                "fr": "Viticulture",
                "en": "Viticulture",
                "cn": "葡萄栽培",
            },
            "viti_ex1" :{
                "fr": "- Designer et manipuler des expérimentations viticoles et analyser les résultats",
                "en": "- Design and manipulate viticultural experiments and analyze the results",
                "cn": "- 设计和实施葡萄栽培实验及结果分析",
            },

            "viti_ex2" :{
                "fr": "- Contrôle des maladies : Reconnaissante des maladies et des ravageurs viticoles et méthode de comptage scientifique; Certiphyto (certificat produits phytopharmaceutiques)",
                "en": "- Disease control: Recognition of vineyard diseases and pests and scientific counting method; Certiphyto (plant protection products certificate)",
                "cn": "- 病害防治：葡萄园病虫害的识别以及科学计数法；Certiphyto (农业用药证书)",
            },
        },
        "oeno" : {
            "oenology": {
                "fr": "Œnologie",
                "en": "Oenology",
                "cn": "葡萄酒酿造",
            },
            "oeno_ex1": {
                "fr": "- Designer et manipuler des expérimentations œnologiques, sensorielles et analyser les résultats",
                "en": "- Design and manipulate oenological and sensory experiments and analyze the results",
                "cn": "- 设计和实施酿造和感官品评实验并分析结果",
            },
            "oeno_ex2": {
                "fr": "- Vinification : Gestion multiplicateur de levure, Contrôle fermentation, Assemblage, Dégustation",
                "en": "- Vinification : Yeast multiplier management, Fermentation control, Blending, Tasting",
                "cn": "- 酿造 : 酵母繁殖器管理、发酵监控、混酿、品鉴",
            },
        },
        "language": {
            "fr": "Langue",
            "en": "Language",
            "cn": "语 言",
        },
        "french" : {
            "fr": "Français (C1-C2)",
            "en": "French (C1-C2)",
            "cn": "法 语 (C1-C2)",
        },
        "english" : {
            "fr": "Anglais (B2-C1)",
            "en": "English (B2-C1)",
            "cn": "英 语 (B2-C1)",
        },
        "chinese" : {
            "fr": "Chinois (Native)",
            "en": "Chinese (Mother tongue)",
            "cn": "中 文 (母语)",
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
        <section id="skills" className="rounded-3xl my-4 mx-3 px-4 py-12 bg-secondary/75">
            <div className="grid justify-items-stretch mb-8">
                <h1  className="justify-self-center text-center text-primary-focus uppercase text-5xl font-extralight col-span-full py-8">
                    {contents.skills[props.lang]}
                </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-content-evenly">
                <div className="grid place-items-center content-start m-12">
                    <h3 className="text-neutral text-3xl mb-8">{contents.info[props.lang]}</h3>
                    <div className="card shadow-lg compact side px-4 min-w-full">
                        <div className="flex-row items-center space-x-8 card-body">
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
                                <p className="text-base-content text-opacity-75">{contents.python_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg compact side px-4 min-w-full">
                        <div className="flex-row items-center space-x-8 card-body">
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
                                <p className="text-base-content text-opacity-75">{contents.r_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg compact side px-4 min-w-full">
                        <div className="flex-row items-center space-x-8 card-body">
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
                                <p className="text-base-content text-opacity-75">{contents.react_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg compact side px-4 min-w-full">
                        <div className="flex-row items-center space-x-8 card-body">
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
                                <p className="text-base-content text-opacity-75">{contents.qgis_ex[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center content-start m-12">
                    <h3 className="text-neutral text-3xl mb-8">{contents.viti.viti_title[props.lang]}</h3>
                    <div className="card shadow-lg compact side px-4 min-w-full">
                        <div className="flex-row items-center space-x-8 card-body">
                            <div>
                                <div className="w-14 h-14">
                                    <img className="" src={logo_vigne} alt="Viticulture" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">{contents.viti.viticulture[props.lang]}</h2>
                                <p className="text-base-content text-opacity-75">{contents.viti.viti_ex1[props.lang]}</p>
                                <p className="text-base-content text-opacity-75">{contents.viti.viti_ex2[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow-lg compact side px-4 min-w-full">
                        <div className="flex-row items-center space-x-8 card-body">
                            <div>
                                <div className="w-14 h-14">
                                    <img className="" src={logo_vin} alt="Oenology" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">{contents.oeno.oenology[props.lang]}</h2>
                                <p className="text-base-content text-opacity-75">{contents.oeno.oeno_ex1[props.lang]}</p>
                                <p className="text-base-content text-opacity-75">{contents.oeno.oeno_ex2[props.lang]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 ">
                    <h3 className="text-center text-neutral text-3xl mt-12 mb-8">Languages</h3>
                    <div className="flex">
                        <div className="flex-none justify-items-end grid grid-rows-3 mx-4">
                            <p>{contents.english[props.lang]}</p>
                            <p>{contents.french[props.lang]}</p>
                            <p>{contents.chinese[props.lang]}</p>
                        </div>
                        <div className="flex-grow grid grid-rows-3 mx-4">
                            <progress className="col-span-5 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="70" max="100"/>
                            <progress className="col-span-5 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="90" max="100"/>
                            <progress className="col-span-5 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="100" max="100"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-center text-neutral text-3xl mt-12 mb-8">{contents.transport[props.lang]}</h3>
                    <div className="grid grid-cols-3">
                        <img className="justify-self-end mr-8" src="https://img.icons8.com/windows/32/000000/sedan.png"/>
                        <p className="col-span-2 justify-self-center ">{contents.license[props.lang]}</p>
                    </div>
                </div>



            </div>

        </section>
    )
}