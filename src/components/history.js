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
                "fr" : "Avr.2019 - Sep.2021",
                "en" : "Apr.2019 - Sep.2021",
                "cn" : "2019.04 - 2021.09",
            },
            "magister_city" : {
                "fr" : "Epernay (France)",
                "en" : "Epernay (France)",
                "cn" : "埃佩尔奈 （法国）",
            },
            "magister_detail" : "Contrôle maladie, conseil viticole, audit certificat VDC & HVE"
        },
        "etu" :{
            "formation" : {
                "fr": "Formation",
                "en": "Education",
                "cn": "教育经历",
            },
            "supagro" : {
                "fr" : "Montpellier SupAgro et Bordeaux Science Agro",
                "en" : "Montpellier SupAgro and Bordeaux Science Agro",
                "cn" : "蒙彼利埃国立高等农学研究学院 & 波尔多国立高等农业科学学院",
            },
            "supagro_date" : "2015 - 2019",
            "supagro_city" : {
                    "fr" : "Montpellier (France)",
                    "en" : "Montpellier (France)",
                    "cn" : "蒙彼利埃 （法国）",
                },
            "" : {
                "fr": "Formation",
                "en": "Education",
                "cn": "教育经历",
            },
        }
    }
    return (
        <section id="history" className="min-h-screen md:p-20 bg-sec-75">
            <div className="grid justify-items-stretch my-10 pr-20">
                <h1  className="justify-self-end text-center text-primary-content uppercase text-5xl font-extralight col-span-full">
                    {contents.pro.history[props.lang]}
                </h1>
            </div>
            <h2 className="text-neutral m-8">Professional experiences</h2>
            <article className="flex">

                <header className="flex-none w-36 lg:w-52 text-right">
                    <h2>{contents.pro.magister}</h2>
                    <p>{contents.pro.magister_date[props.lang]}</p>
                </header>
                <div className="flex flex-col justify-items-center mx-6">
                    <span className="flex-none w-2 h-2  bg-white rounded-3xl m-3" />
                    <span className="grow w-0 border-r-[0.5px] border-accent mx-4"/>
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
                    <span className="flex-none w-2 h-2  bg-white rounded-3xl m-3" />
                    <span className="grow w-0 border-r-[0.5px] border-accent mx-4"/>
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
                    <span className="flex-none w-2 h-2  bg-white rounded-3xl m-3" />
                    <span className="grow w-0 border-r-[0.5px] border-accent mx-4"/>
                </div>
                <main className="grow mb-6 pb-6">
                    <h3>Course - Gamification (course)</h3>
                    <p>Gamification is the application of game elements and digital game design techniques to non-game problems, such as business and social impact challenges. This course thought me about the mechanisms of gamification, why it has such tremendous potential, and how to use it effectively. </p>
                    <a href="utc.fr">UTC</a>
                </main>

            </article>

        </section>
    )
}
