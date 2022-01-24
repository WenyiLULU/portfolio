import logo_supagro from "../images/logo_supagro.jpg"
import logo_scienceagro from "../images/logo_scienceagro.jpg"
import logo_cau from "../images/logo_cau.png"
import logo_reims from "../images/logo_reims.png"
import logo_richemont from "../images/logo_richemont.jpg"
import logo_magister from  "../images/logo-magister.png"
import logo_remy from "../images/Remy-Martin-logo.png"

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
                "cn" : "葡萄栽培技术科技员",
            },
            "magister_detail" : {
                "p1":{
                    "fr" : "- Contrôle maladie : Réaliser des observations et des comptages des maladies et des ravageurs dans les vignobles ; évaluer les pressions des maladies selon les résultats des observations et des données météorologiques.",
                    "en" : "- Disease control: Conduct observations and counts of diseases and pests in the vineyards; assess disease pressures based on observation and weather data.",
                    "cn" : "- 病虫害管理 : 在葡萄园进行病虫害监控计数；根据监控数据与气象数据评估病虫害风险。",
                },
                "p2":{
                    "fr" : "- Conseil viticole : Rédiger des fiches techniques et organiser des réunions de conseil avec les vignerons. ",
                    "en" : "- Viticultural advice : Write technical sheets and organize advice meetings with the winemakers. ",
                    "cn" : "- 栽培技术指导 : 撰写技术指导报告并组织会议向葡萄农提供技术建议。",
                },
                "p3":{
                    "fr" : "- Accompagnement et audit des certificats environnementaux : Réaliser des audits et accompagner les adhérants pour améliorer leurs pratiques viticoles pour atteindre les recommandations du certificat VDC (Viticulture Durable en Champagne) ou ceux du HVE (Haute Valeur Environementale).",
                    "en" : "- Accompaniment and audit of environmental certificates: To carry out audits and accompany the subscriber to improve their viticultural practices in order to achive the recommendations of the certificate VDC (Viticulture Durable en Champagne) or those of the HVE (Haute Valeur Environementale).",
                    "cn" : "- 环境友好认证指导与审计 ：对客户的葡萄生产流程进行审计并指导其达到VDC（香槟可持续葡萄栽培认证）或是HVE（高环境价值认证）的认证要求。",
                },
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
                "p1" :{
                    "fr" : "- Essai viticole : Planifier et manipuler une expérimentation pour tester un nouveau système d'auto pilote des intrants phytopharmaceutique viticole.",
                    "en" : "- Viticultural experiment : Plan and handle an experiment to test a new autopilot system of phytosanitary product input in vineyards.",
                    "cn" : "- 葡萄栽培实验 ： 设计并操作测试新的葡萄农业用药施用自动调节系统的测试实验。",
                },
                "p2" :{
                    "fr" : "- Essais œnologiques : Manipuler des expérimentation sur des pressurages et des vinifications pour optimiser la qualité du vin destiné à la production de l'eau-de-vie.",
                    "en" : "- Oenology experiments : Conduct experiments on pressing and fermentation to optimize the quality of wine for the production of brandy.",
                    "cn" : "- 酿造学实验 ： 实施压榨及发酵实验旨在优化白兰地基酒的品质。",
                },
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
                "p1" :{
                    "fr" : "- Projet de recherche de fin d’études sur la connaissance génétique de la résistance Plasmopara viticola.",
                    "en" : "- Final year research project on the genetic knowledge of Plasmopara viticola.",
                    "cn" : "- 毕设实验 ： 霜霉病致病菌抗性基因研究",
                },
                "p2":{
                    "fr" : "- Participer à un essai d'hybridation de vigne",
                    "en" : "- Participate in a vine hybridization trial",
                    "cn" : "- 参与葡萄杂交实验",
                },
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
        },
        "etu" : {
            "formation": {
                "fr": "Formation",
                "en": "Education",
                "cn": "教育经历",
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
                "fr": "Licence de Viticulture et D’œnologie (bac+4) ",
                "en": "Bachelor of Viticulture and Oenology",
                "cn": "葡萄与葡萄酒工程学士学位",
            },
            "cau_content": {
                "fr": "Étude des connaissances agroalimentaires, étude de la viticulture et de l’œnologie",
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
        <section id="history" className="min-h-screen rounded-3xl my-8 mx-3 px-4 text-neutral-focus bg-secondary/75">
            <div className="grid justify-items-stretch mb-16">
                <h1  className="justify-self-center text-center text-primary-focus uppercase text-5xl font-extralight col-span-full pt-16">
                    {contents.pro.history[props.lang]}
                </h1>
            </div>
            <h2 className="flex text-neutral text-3xl border-b-2 m-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <p className="ml-2">{contents.pro.experiences[props.lang]}</p>
            </h2>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h3 className="font-normal">{contents.pro.magister}</h3>
                    <p>{contents.pro.magister_date[props.lang]}</p>
                    <p>{contents.pro.magister_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2.5 h-2.5  bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="font-normal">{contents.pro.magister_title[props.lang]}</h3>
                    <p>{contents.pro.magister_detail.p1[props.lang]}</p>
                    <p>{contents.pro.magister_detail.p2[props.lang]}</p>
                    <p>{contents.pro.magister_detail.p3[props.lang]}</p>
                    <a className="w-10" href="https://www.reseau-magister.fr/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 mt-4 border-secondary bg-black" src={logo_magister} alt="GIE Magister" />
                    </a>
                </main>
            </article>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h3 className="font-normal">{contents.pro.remy}</h3>
                    <p>{contents.pro.remy_date[props.lang]}</p>
                    <p>{contents.pro.remy_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="font-normal">{contents.pro.remy_title[props.lang]}</h3>
                    <p>{contents.pro.remy_detail.p1[props.lang]}</p>
                    <p>{contents.pro.remy_detail.p2[props.lang]}</p>
                    <a href="https://www.remymartin.com/" target="_blank" rel="noopener noreferrer">
                        <img className="h-9 mt-4 bg-white" src={logo_remy} alt="Rémy-Martin" />
                    </a>
                </main>
            </article>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h3 className="font-normal">{contents.pro.cau[props.lang]}</h3>
                    <p>{contents.pro.cau_date[props.lang]}</p>
                    <p>{contents.pro.cau_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="font-normal">{contents.pro.cau_title[props.lang]}</h3>
                    <p>{contents.pro.cau_detail.p1[props.lang]}</p>
                    <p>{contents.pro.cau_detail.p2[props.lang]}</p>
                    <a href="https://www.cau.edu.cn/" target="_blank" rel="noopener noreferrer">
                        <img className="h-10 mt-4 border-secondary border-2 bg-secondary" src={logo_cau} alt="CAU" />
                    </a>
                </main>
            </article>
            <article className="flex text-neutral">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h3 className="font-normal">{contents.others[props.lang]}</h3>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="mb-2 font-normal">{contents.pro.other_title[props.lang]}</h3>
                    <p>{contents.pro.occi[props.lang]}</p>
                    <p>{contents.pro.cloche[props.lang]}</p>
                </main>
            </article>
            <h2 className="flex text-neutral text-3xl border-b-2 m-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
                <p className="ml-2">{contents.etu.formation[props.lang]}</p>
            </h2>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h3 className="font-normal">{contents.etu.supagro[props.lang]}</h3>
                    <p>{contents.etu.supagro_date}</p>
                    <p>{contents.etu.supagro_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="mb-2 font-normal">{contents.etu.supagro_degree[props.lang]}</h3>
                    <p>{contents.etu.supagro_content[props.lang]}</p>
                    <div className="flex">
                        <a href="https://www.institut-agro-montpellier.fr/" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 mt-4 border-secondary border-2" src={logo_supagro} alt="SupAgro" />
                        </a>
                        <a href="https://www.agro-bordeaux.fr/" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 m-4" src={logo_scienceagro} alt="Sciences Agro" />
                        </a>
                    </div>
                </main>
            </article>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h3 className="font-normal">{contents.etu.cau[props.lang]}</h3>
                    <p>{contents.etu.cau_date}</p>
                    <p>{contents.etu.cau_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="mb-2 font-normal">{contents.etu.supagro_degree[props.lang]}</h3>
                    <p>{contents.etu.cau_content[props.lang]}</p>
                    <a href="https://www.cau.edu.cn/" target="_blank" rel="noopener noreferrer">
                        <img className="h-10 mt-4 border-secondary border-2 bg-secondary" src={logo_cau} alt="CAU" />
                    </a>
                </main>
            </article>
            <article className="flex text-neutral">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h3 className="font-normal">{contents.others[props.lang]}</h3>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2.5 h-2.5 bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4 mb-8"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="mb-2 font-normal">{contents.etu.reims[props.lang]}</h3>
                    <p>{contents.etu.reims_detail[props.lang]}</p>
                    <a href="https://www.cau.edu.cn/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 mb-8 border-secondary border-2 bg-secondary" src={logo_reims} alt="Université de Reims" />
                    </a>
                    <h3 className="mb-2 font-normal">{contents.etu.nursery[props.lang]}</h3>
                    <p>{contents.etu.nursery_detail[props.lang]}</p>
                    <a href="https://institut-richemont.fr/" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 border-secondary border-2 bg-secondary" src={logo_richemont} alt="Institut Richemont" />
                    </a>
                </main>
            </article>

        </section>
    )
}
