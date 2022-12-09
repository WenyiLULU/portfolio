import icon_js from "../images/logo_js.png";
import icon_ts from "../images/logo_ts.png";
import icon_mongo from "../images/logo_mongo.png";
import icon_git from "../images/logo_git.png";
import icon_github from "../images/logo_github.png";
import icon_python from "../images/icon_python.png";
import icon_react from "../images/icon_react.png";
import icon_next from "../images/logo_next.png";
import icon_qgis from "../images/icon_qgis.png"
import icon_r from "../images/icon_r.png"
import flag_cn from "../images/flag_cn.png"
import flag_en from "../images/flag_en.png"
import flag_fr from "../images/flag_fr.png"

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
            "fr": "Permis B + voiture citadine",
            "en": "Driving license + city car",
            "cn": "Todo",
        },
    }

    return (
        <section id="skills" className="min-h-screen px-4 mx-3 my-8 font-normal rounded-3xl bg-secondary/40">
            <div className="grid mb-8 justify-items-stretch">
                <h1  className="pt-16 text-4xl font-light text-center uppercase justify-self-center text-primary-focus col-span-full md:text-5xl">
                    {contents.skills[props.lang]}
                </h1>
            </div>
            <div className="flex flex-col justify-evenly">
                <div className="grid grid-cols-3 gap-3 m-8 text-center place-items-center">
                    <h3 className="mb-8 text-2xl col-span-full text-neutral-focus md:text-3xl">{contents.info[props.lang]}</h3>
                    <img className="w-4/5 my-4 sm:w-3/5 md:w-2/5" src={icon_ts} alt="TS" />
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_python} alt="Python" />
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_js} alt="JS" />
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_mongo} alt="Mongo" />                    
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_react} alt="React" />
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_next} alt="Next" />
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_git} alt="git" />
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_github} alt="github" />
                    <img className="w-3/5 my-4 sm:w-3/5 md:w-2/5" src={icon_r} alt="R" />
                </div>
                <div className="pb-6 m-12 mb-6 ">
                    <h3 className="mb-8 text-2xl text-center text-neutral-focus md:text-3xl">{contents.language[props.lang]}</h3>
                    <div className="flex justify-evenly">
                        <div className="mx-3 shrink md:mx-12">
                            <img className="max-h-20" src={flag_cn} alt="Chinese"/>
                            <p className="text-center text-neutral-focus">{contents.chinese[props.lang]}</p>
                        </div>
                        <div className="mx-3 shrink md:mx-12">
                            <img className="max-h-20" src={flag_fr} alt="French"/>
                            <p className="text-center text-neutral-focus">{contents.french[props.lang]}</p>
                        </div>
                        <div className="mx-3 shrink md:mx-12">
                            <img className="max-h-20" src={flag_en} alt="English"/>
                            <p className="text-center text-neutral-focus">{contents.english[props.lang]}</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}