import logo_supagro from "../images/logo_supagro.jpg"
import logo_scienceagro from "../images/logo_scienceagro.jpg"
import logo_cau from "../images/logo_cau.png"
import logo_reims from "../images/logo_reims.png"
import logo_richemont from "../images/logo_richemont.jpg"
import logo_magister from  "../images/logo-magister.png"

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
                "en" : "Apr.2019 - Sep.2021",
                "cn" : "病虫害管理、 栽培技术指导、 VDC和HVE认证审计与指导",
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
            "others" :{
                "fr": "Autres",
                "en": "Others",
                "cn": "其他",
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
    }


    return (
        <section id="history" className="min-h-screen rounded-3xl my-8 mx-3 md:p-20 bg-secondary/75">
            <div className="grid justify-items-stretch mb-20 pr-[20%]">
                <h1  className="justify-self-end text-center text-primary-content uppercase text-5xl font-extralight col-span-full mt-12">
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
                    <h2>{contents.pro.magister}</h2>
                    <p>{contents.pro.magister_date[props.lang]}</p>
                    <p>{contents.pro.magister_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2 h-2  bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3>{contents.pro.magister_title[props.lang]}</h3>
                    <p>{contents.pro.magister_detail[props.lang]}</p>
                    <a href="https://www.reseau-magister.fr/">
                        <img className="h-8 ml-4 mt-4 border-secondary bg-black" src={logo_magister} alt="SupAgro" />
                    </a>
                </main>
            </article>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h2>{contents.pro.magister}</h2>
                    <p>{contents.pro.magister_date[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2 h-2  bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3>Course - Gamification (course)</h3>
                    <p>Gamification is the application of game elements and digital game design techniques to non-game problems, such as business and social impact challenges. This course thought me about the mechanisms of gamification, why it has such tremendous potential, and how to use it effectively. </p>
                    <a href="utc.fr">UTC</a>
                </main>
            </article>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h2>{contents.pro.magister}</h2>
                    <p>{contents.pro.magister_date[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2 h-2  bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3>Course - Gamification (course)</h3>
                    <p>Gamification is the application of game elements and digital game design techniques to non-game problems, such as business and social impact challenges. This course thought me about the mechanisms of gamification, why it has such tremendous potential, and how to use it effectively. </p>
                    <a href="https://www.reseau-magister.fr/">
                        <img className="h-8 ml-4 border-secondary border-2 bg-secondary" src={logo_richemont} alt="SupAgro" />
                    </a>
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
                    <h2>{contents.etu.supagro[props.lang]}</h2>
                    <p>{contents.etu.supagro_date}</p>
                    <p>{contents.etu.supagro_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2 h-2  bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="mb-2">{contents.etu.supagro_degree[props.lang]}</h3>
                    <p>{contents.etu.supagro_content[props.lang]}</p>
                    <div className="flex">
                        <a href="https://www.institut-agro-montpellier.fr/">
                            <img className="h-8 mt-4 border-secondary border-2" src={logo_supagro} alt="SupAgro" />
                        </a>
                        <a href="https://www.agro-bordeaux.fr/">
                            <img className="h-8 m-4" src={logo_scienceagro} alt="Sciences Agro" />
                        </a>
                    </div>
                </main>
            </article>
            <article className="flex">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h2>{contents.etu.cau[props.lang]}</h2>
                    <p>{contents.etu.cau_date}</p>
                    <p>{contents.etu.cau_city[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2 h-2  bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3 className="mb-2">{contents.etu.supagro_degree[props.lang]}</h3>
                    <p>{contents.etu.cau_content[props.lang]}</p>
                    <a href="https://www.cau.edu.cn/">
                        <img className="h-10 mt-4 border-secondary border-2 bg-secondary" src={logo_cau} alt="SupAgro" />
                    </a>
                </main>
            </article>
            <article className="flex text-neutral">
                <header className="flex-none w-36 lg:w-52 text-right">
                    <h2>{contents.etu.others[props.lang]}</h2>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2 h-2  bg-primary-focus rounded-3xl m-3" />
                    <span className="grow w-0 border-l-2 border-primary border-dashed mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <div className="flex">
                        <h3 className="mb-2">{contents.etu.reims[props.lang]}</h3>
                        <a href="https://www.cau.edu.cn/">
                            <img className="h-8 ml-4 border-secondary border-2 bg-secondary" src={logo_reims} alt="SupAgro" />
                        </a>
                    </div>
                    <p>{contents.etu.reims_detail[props.lang]}</p>
                    <div className="flex mt-4">
                        <h3 className="mb-2">{contents.etu.nursery[props.lang]}</h3>
                        <a href="https://www.cau.edu.cn/">
                            <img className="h-8 ml-4 border-secondary border-2 bg-secondary" src={logo_richemont} alt="SupAgro" />
                        </a>
                    </div>
                    <p>{contents.etu.nursery_detail[props.lang]}</p>
                </main>
            </article>

        </section>
    )
}
