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
            "cn": "",
        },
    }

    return (
        <section id="skills" className="min-h-screen rounded-3xl my-8 mx-3 px-4 bg-secondary/75">
            <div className="grid justify-items-stretch mb-16">
                <h1  className="justify-self-center text-center text-primary-focus uppercase text-5xl font-extralight col-span-full pt-16">
                    {contents.skills[props.lang]}
                </h1>
            </div>
            <div className="flex flex-wrap justify-evenly">
                <div className="grid grid-cols-2 text-center place-items-center place-content-evenly m-12">
                    <h3 className="col-span-full text-neutral text-3xl mb-8">{contents.info[props.lang]}</h3>
                    <img className="w-20 my-4" src={icon_python} alt="Python" />
                    <img className="w-20 my-4" src={icon_react} alt="Python" />
                    <img className="w-20 my-4" src={icon_qgis} alt="Python" />
                    <img className="w-20 my-4" src={icon_r} alt="Python" />
                </div>
                <div className=" mb-6 pb-6 m-12">
                    <h3 className="text-center text-neutral text-3xl mb-8">{contents.language[props.lang]}</h3>
                    <div className="grid grid-cols-5 gap-4">
                        <p className="justify-self-end">{contents.english[props.lang]}</p>
                        <progress className="col-span-4 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="70" max="100"></progress>
                        <p className="justify-self-end h-4">{contents.french[props.lang]}</p>
                        <progress className="col-span-4 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="90" max="100"></progress>
                        <p className="justify-self-end h-4">{contents.chinese[props.lang]}</p>
                        <progress className="col-span-4 justify-self-start progress progress-primary bg-secondary-focus mt-3" value="100" max="100"></progress>
                    </div>
                    <h3 className="text-center text-neutral text-3xl my-12">{contents.language[props.lang]}</h3>
                </div>
            </div>

        </section>
    )
}