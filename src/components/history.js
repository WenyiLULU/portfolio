import logo_supagro from "../images/logo_supagro.jpg"
import logo_scienceagro from "../images/logo_scienceagro.jpg"
import logo_cau from "../images/logo_cau.png"
import logo_reims from "../images/logo_reims.png"
import logo_richemont from "../images/logo_richemont.jpg"
import logo_magister from  "../images/logo-magister.png"
import logo_remy from "../images/Remy-Martin-logo.png"
import logo_ironhack from "../images/logo_ironhack.png"

export default function History(props) {
    const contents = {
        "pro" : {
            "history" : {
                "fr": "Histoire",
                "en": "History",
                "cn": "经 历",
            },
            "experiences" : {
                "fr": "Expériences Professionnelles",
                "en": "Professional Experiences",
                "cn": "工作经历",
            },
            "magister" : "GIE Magister",
            "magister_date" : {
                "fr" : "Avr. 2019 - Sep. 2021",
                "en" : "Apr. 2019 - Sep. 2021",
                "cn" : "2019. 04 - 2021. 09",
            },
            "magister_city" : {
                "fr" : "Epernay (France)",
                "en" : "Epernay (France)",
                "cn" : "埃佩尔奈 （法国）",
            },
            "magister_title" : {
                "fr" : "Technicienne Conseil Viticol",
                "en" : "Vineyard advisory technician",
                "cn" : "葡萄栽培技术顾问",
            },
            "magister_detail" : {
                "fr" : "Contrôle maladie, conseil viticole, audit certificat VDC & HVE",
                "en" : "Disease control, viticultural advice, VDC & HVE certificate audit",
                "cn" : "病虫害管理、 栽培技术指导、 VDC和HVE认证审计与指导",
            },
            "remy" : "Rémy-Martin",
            "remy_date" : {
                "fr" : "Mai - Déc. 2017",
                "en" : "May - Dec. 2017",
                "cn" : "2017. 05 - 12",
            },
            "remy_city" : {
                "fr" : "Cognac (France)",
                "en" : "Cognac (France)",
                "cn" : "干邑（法国）",
            },
            "remy_title" : {
                "fr" : "Stage de fin d'études en R & D",
                "en" : "End-of-studies internship in R & D",
                "cn" : "研发领域毕业实习",
            },
            "remy_detail" : {
                "fr" : "Système auto pilote d’intrant produit phytosanitaire. Manipulation des essais optimisation de la qualité du vin destiné à l’eau-de- vie.",
                "en" : "Autopilot system of phytosanitary product input. Handling of tests to optimize the quality of the wine destined for the brandy.",
                "cn" : "植物检疫产品输入的自我试点系统。处理测试以优化白兰地酒的质量。",
            },
            "cau" : {
                "fr" : "Université D’Agriculture de Chine",
                "en" : "China Agriculture University",
                "cn" : "中国农业大学",
            },
            "cau_date" : {
                "fr" : "Déc. 2013 - Mai 2014",
                "en" : "Dec. 2013 - May 2014",
                "cn" : "2013. 12 - 2014. 05",
            },
            "cau_city" : {
                "fr" : "Pékin (Chine)",
                "en" : "Beijing (China)",
                "cn" : "北京（中国）",
            },
            "cau_title" : {
                "fr" : "Stage de fin d'études en Recherche",
                "en" : "End-of-studies internship in Research",
                "cn" : "科研领域毕业实习",
            },
            "cau_detail" : {
                "fr" : "Projet de recherche de fin d’études sur la connaissance génétique de la Plasmopara viticola.",
                "en" : "Final year research project on the genetic knowledge of Plasmopara viticola.",
                "cn" : "霜霉病抗性基因实验",
            },
            "occi" : {
                "fr": "Oct. – Déc. 2018 : SCA Les Vignerons de l’Occitane",
                "en": "Oct. – Dec. 2018 : SCA Les Vignerons de l’Occitane",
                "cn": "2018. 10 - 12 : SCA Les Vignerons de l’Occitane （奥克地区酒农合作社）",
            },
            "cloche" : {
                "fr": "Août – Sept. 2016 : Cave Coopérative Clochers et Terroirs",
                "en": "Aug. – Sept. 2016 : Cooperative Cellar Clochers et Terroirs",
                "cn": "2016. 08 - 09 : Clochers et Terroirs （埃罗河谷地区酿酒合作社）",
            },
            "other_title" : {
                "fr": "Assistante Œnologue",
                "en": "Oenologist Assistant",
                "cn": "酿酒助理",
            },
            "trad" : {
                "fr": "Traductrice Français-Chinois",
                "en": "Tanslator French-Chinese",
                "cn": "翻译 法-中",
            },
            "trad_detail" : {
                "fr": "2021 - 2022 : 《De l'OEnologie à la Viticulture》",
                "en": "2021 - 2022 : 《From Oenology to Viticulture》",
                "cn": "2021 - 2022 : 《从葡萄酒酿造到葡萄栽培》",
            }
        },
        "etu" : {
            "formation": {
                "fr": "Formation",
                "en": "Education",
                "cn": "教育经历",
            },
            "ironhack": {
                "fr": "Ironhack",
                "en": "Ironhack",
                "cn": "Ironhack",
            },
            "ironhack_date": "2022",
            "ironhack_city": {
                "fr": "Paris (France)",
                "en": "Paris (France)",
                "cn": "巴黎 （法国）",
            },
            "ironhack_degree": {
                "fr": "Full-Stack Web Développeur",
                "en": "Full-Stack Web Developer",
                "cn": "全栈网络开发",
            },
            "ironhack_content": {
                "fr": "Technologies Front-end (HTML | CSS | JavaScript(ES6) | React) et Back-end (Express Js | Node Js | MongoDB | Axios)",
                "en": "Front end technologies(HTML | CSS | JavaScript(ES6) | React) and Back end technologies(Express Js | Node Js | MongoDB | Axios)",
                "cn": "前端技术(HTML | CSS | JavaScript(ES6) | React) 和后端技术 (Express Js | Node Js | MongoDB | Axios)",
            },
            "supagro": {
                "fr": "Montpellier SupAgro et Bordeaux Science Agro",
                "en": "Montpellier SupAgro and Bordeaux Science Agro",
                "cn": "蒙彼利埃国立高等农学研究学院 & 波尔多国立高等农业科学学院",
            },
            "supagro_date": "2015 - 2019",
            "supagro_city": {
                "fr": "Montpellier (France)",
                "en": "Montpellier (France)",
                "cn": "蒙彼利埃 （法国）",
            },
            "supagro_degree": {
                "fr": "Master Vigne et Vin & DNO (Diplôme National D’œnologie)",
                "en": "Master Vine et Wine & DNO (National Oenology Diploma)",
                "cn": "葡萄与葡萄酒硕士 & 国家酿酒师文凭",
            },
            "supagro_content": {
                "fr": "Étude de la viticulture et de l’œnologie, y compris ampélographie, protection de la vigne, vinification, analyse du vin, génie viti-vinicole...",
                "en": "Study of viticulture and oenology, including ampelography, vine protection, winemaking, wine analysis, wine engineering...",
                "cn": "主修葡萄栽培与酿造：葡萄生理、 栽培技术、 葡萄酒的酿造生产、 葡萄酒理化检测、 感官品评等",
            },
            "cau": {
                "fr": "Université D’agriculture de Chine",
                "en": "China Agriculture University",
                "cn": "中国农业大学",
            },
            "cau_date": "2010 - 2014",
            "cau_city": {
                "fr": "Pékin (Chine)",
                "en": "Beijing (China)",
                "cn": "北京 （中国）",
            },
            "cau_degree": {
                "fr": "Licence de Viticulture et D'œnologie (bac+4) ",
                "en": "Bachelor of Viticulture and Oenology",
                "cn": "葡萄与葡萄酒工程学士学位",
            },
            "cau_content": {
                "fr": "Étude des connaissances agroalimentaires, étude de la viticulture et de l'œnologie",
                "en": "Study of food industry knowledge, study of viticulture and oenology.",
                "cn": "主修食品科学技术以及葡萄栽培与酿造相关学科",
            },
            "reims" : {
                "fr": "Université de Reims Champagne-Ardenne",
                "en": "Reims Champagne-Ardenne University",
                "cn": "兰斯大学",
            },
            "reims_detail" : {
                "fr": "2014 - 2015 : Acquisition de la langue française",
                "en": "2014 - 2015 : Acquisition of the French language",
                "cn": "2014 - 2015 : 学习法语",
            },
            "nursery" : {
                "fr": "Institut de Richemont",
                "en": "Richemont Institute",
                "cn": "Richemont 学院",
            },
            "nursery_detail" : {
                "fr": "2018 : Étude de la gestion d'entreprise pépinières viticoles et de la technique de la production de plants de vigne",
                "en": "2018 : Study of the management of wine nurseries and the technique of vine plant production",
                "cn": "2018 : 葡萄苗木生产技术及苗木公司管理",
            },
        },
        "others" :{
            "fr": "Autres",
            "en": "Others",
            "cn": "其他",
        },
    }


    return (
        <section id="history" className="min-h-screen px-4 mx-3 my-8 text-sm font-normal rounded-3xl bg-secondary/40 md:text-base">
            <div className="grid mb-16 justify-items-stretch">
                <h1  className="pt-16 text-4xl font-light text-center uppercase justify-self-center text-primary-focus col-span-full sm:text-5xl">
                    {contents.pro.history[props.lang]}
                </h1>
            </div>
            <h2 className="flex m-8 text-2xl border-b-2 text-neutral-focus sm:text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 m-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <p className="ml-2">{contents.pro.experiences[props.lang]}</p>
            </h2>
            <article className="grid grid-cols-9 gap-3">
                <header className="col-span-2 text-right">
                    <h2>{contents.pro.magister}</h2>
                    <p>{contents.pro.magister_date[props.lang]}</p>
                    <p>{contents.pro.magister_city[props.lang]}</p>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5  bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3>{contents.pro.magister_title[props.lang]}</h3>
                    <p>{contents.pro.magister_detail[props.lang]}</p>
                    <a className="w-10" href="https://www.reseau-magister.fr/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 mt-4 bg-black border-secondary" src={logo_magister} alt="GIE Magister" />
                    </a>
                </main>
            </article>
            <article className="grid grid-cols-9 gap-3">
                <header className="col-span-2 text-right">
                    <h2>{contents.pro.remy}</h2>
                    <p>{contents.pro.remy_date[props.lang]}</p>
                    <p>{contents.pro.remy_city[props.lang]}</p>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3>{contents.pro.remy_title[props.lang]}</h3>
                    <p>{contents.pro.remy_detail[props.lang]}</p>
                    <a href="https://www.remymartin.com/" target="_blank" rel="noopener noreferrer">
                        <img className="mt-4 bg-white h-9" src={logo_remy} alt="Rémy-Martin" />
                    </a>
                </main>
            </article>
            <article className="grid grid-cols-9 gap-3">
                <header className="col-span-2 text-right">
                    <h2>{contents.pro.cau[props.lang]}</h2>
                    <p>{contents.pro.cau_date[props.lang]}</p>
                    <p>{contents.pro.cau_city[props.lang]}</p>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3>{contents.pro.cau_title[props.lang]}</h3>
                    <p>{contents.pro.cau_detail[props.lang]}</p>
                    <a href="https://www.cau.edu.cn/" target="_blank" rel="noopener noreferrer">
                        <img className="h-10 mt-4 border-2 border-secondary bg-secondary" src={logo_cau} alt="CAU" />
                    </a>
                </main>
            </article>
            <article className="grid grid-cols-9 gap-3 text-neutral-focus">
                <header className="col-span-2 text-right">
                    <h2>{contents.others[props.lang]}</h2>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3 className="mb-2">{contents.pro.other_title[props.lang]}</h3>
                    <p>{contents.pro.occi[props.lang]}</p>
                    <p>{contents.pro.cloche[props.lang]}</p>
                    <h3 className="mt-2 mb-2">{contents.pro.trad[props.lang]}</h3>
                    <p>{contents.pro.trad_detail[props.lang]}</p>
                </main>
            </article>
            <h2 className="flex m-8 text-2xl border-b-2 text-neutral-focus sm:text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 m-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
                <p className="ml-2">{contents.etu.formation[props.lang]}</p>
            </h2>
            <article className="grid grid-cols-9 gap-3">
                <header className="col-span-2 text-right">
                    <h2>{contents.etu.ironhack[props.lang]}</h2>
                    <p>{contents.etu.ironhack_date}</p>
                    <p>{contents.etu.ironhack_city[props.lang]}</p>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3 className="mb-2">{contents.etu.ironhack_degree[props.lang]}</h3>
                    <p>{contents.etu.ironhack_content[props.lang]}</p>
                    <div className="flex">
                        <a href="https://www.ironhack.com/fr/developpement-web" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 mt-4 border-2 border-secondary" src={logo_ironhack} alt="Ironhack" />
                        </a>
                    </div>
                </main>
            </article>
            <article className="grid grid-cols-9 gap-3">
                <header className="col-span-2 text-right">
                    <h2>{contents.etu.supagro[props.lang]}</h2>
                    <p>{contents.etu.supagro_date}</p>
                    <p>{contents.etu.supagro_city[props.lang]}</p>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3 className="mb-2">{contents.etu.supagro_degree[props.lang]}</h3>
                    <p>{contents.etu.supagro_content[props.lang]}</p>
                    <div className="flex">
                        <a href="https://www.institut-agro-montpellier.fr/" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 mt-4 border-2 border-secondary" src={logo_supagro} alt="SupAgro" />
                        </a>
                        <a href="https://www.agro-bordeaux.fr/" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 m-4" src={logo_scienceagro} alt="Sciences Agro" />
                        </a>
                    </div>
                </main>
            </article>
            <article className="grid grid-cols-9 gap-3">
                <header className="col-span-2 text-right">
                    <h2>{contents.etu.cau[props.lang]}</h2>
                    <p>{contents.etu.cau_date}</p>
                    <p>{contents.etu.cau_city[props.lang]}</p>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3 className="mb-2">{contents.etu.supagro_degree[props.lang]}</h3>
                    <p>{contents.etu.cau_content[props.lang]}</p>
                    <a href="https://www.cau.edu.cn/" target="_blank" rel="noopener noreferrer">
                        <img className="h-10 mt-4 border-2 border-secondary bg-secondary" src={logo_cau} alt="CAU" />
                    </a>
                </main>
            </article>
            <article className="grid grid-cols-9 gap-3 text-neutral-focus">
                <header className="col-span-2 text-right">
                    <h2>{contents.others[props.lang]}</h2>
                </header>
                <div className="flex flex-col place-items-center">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="w-0 mx-4 mb-8 border-l-2 border-dashed grow border-primary"/>
                </div>
                <main className="col-span-6 pb-6 mb-6">
                    <h3 className="mb-2">{contents.etu.reims[props.lang]}</h3>
                    <p>{contents.etu.reims_detail[props.lang]}</p>
                    <a href="https://www.cau.edu.cn/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 mb-8 border-2 border-secondary bg-secondary" src={logo_reims} alt="Université de Reims" />
                    </a>
                    <h3 className="mb-2">{contents.etu.nursery[props.lang]}</h3>
                    <p>{contents.etu.nursery_detail[props.lang]}</p>
                    <a href="https://institut-richemont.fr/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 border-2 border-secondary bg-secondary" src={logo_richemont} alt="Institut Richemont" />
                    </a>
                </main>
            </article>

        </section>
    )
}
