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
        }
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
                    <h3 className="col-span-full text-neutral text-4xl mb-12">{contents.info[props.lang]}</h3>
                    <img className="w-20 my-4" src={icon_python} alt="Python" />
                    <img className="w-20 my-4" src={icon_react} alt="Python" />
                    <img className="w-20 my-4" src={icon_qgis} alt="Python" />
                    <img className="w-20 my-4" src={icon_r} alt="Python" />
                </div>
                <div className=" mb-6 pb-6 m-12">
                    <h3 className="col-span-2 text-center text-neutral text-4xl mb-12">{contents.language[props.lang]}</h3>
                    <div className="space-y-2 artboard phone">
                        <progress className="progress progress-primary" value="10" max="100"></progress>
                        <progress className="progress progress-primary" value="40" max="100"></progress>
                        <progress className="progress progress-primary" value="70" max="100"></progress>
                    </div>
                    <div className="flex flex-col justify-items-center mx-6">
                        <span className="grow w-0 border-b-2 border-primary border-dashed mx-4"/>
                    </div>
                </div>
            </div>

        </section>
    )
}