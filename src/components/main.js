import me from "../images/me.jpg";

export default function Main(props) {
    const contents = {
        "hello" : {
                "fr": "Salut",
                "en": "Hello there",
                "cn": "你好哇",
        },
        "p1": {
            "fr": "Bienvenu ! Voici le portfolio de Wenyi Lu.",
            "en": "Welcome ! Here's the portfolio of Wenyi Lu.",
            "cn": "欢迎来到吕闻怡的主页！" ,
        },
        "p2": {
            "fr": "Je suis curieuse, créative et passionnante. Amoureux des sciences naturelles et curieuse de nouveaux domaines, j'ai choisi de me spécialiser dans la vigne et le vin (qui est un jeune domaine en développement en Chine). Après avoir terminé ma licence en Chine, j'ai obtenu un master et le Diplôme National d'Œnologie en France. J'ai découvert la fascination du recherche et développement grâce aux stages pendant mes études et aux expériences professionnelles. J'étais fasciné par la recherche et l'innovation associées aux pratiques de production.",
            "en": "I am curious, creative and passionate. Loving natural sciences and curious about new fields, I chose to specialize in vine and wine (which is a young developing field in China). After finishing my bachelor's degree in China, I obtained a master's degree and the National Diploma of Oenology in France. I discovered the fascination of research and development through internships during my studies and professional experiences. I was fascinated by the research and innovation associated with production practices.",
            "cn": "我充满好奇心，有创造力且有行动力。抱着对自然科学的喜爱及对新兴领域的好奇心，我选择了葡萄与葡萄酒专业。在中国完成了本科学习后，我又在法国获得了硕士学位及国家酿酒师文凭。求学期间的实习经验及毕业之后的工作经历让我体会到了开发与创造的魅力。与生产实践相关的科研与创新令我着迷。"
        },
        "p3": {
            "fr": "Une expérience d'automatisation de l'acquisition des données à l'aide de python m'a permis de découvrir les hautes performances des technologies informatiques et j'ai commencé à en apprendre davantage dans ce domaine. J'ai envie d'utiliser cette compétence pour participer à l'innovation et au développement du secteur de la vigne et du vin ou de tout autre secteur agricole.",
            "en": "An experience in automating data acquisition using python allowed me to discover the high performance of computer technologies and I started to learn more in this field. I want to use this skill to participate in the innovation and development of the vine and wine sector or any other agricultural sector.",
            "cn": "工作中一次利用python实现数据获取自动化的经历让我体验到信息技术的高效能，并开始在这一领域深入学习。我期望能够利用这一技能参与到葡萄与葡萄酒领域或是其它农业领域的创新与发展中去。"
        }

    }

    return (
        <section id="me" className="flex justify-center me-wallpaper min-h-screen md:p-20 bg-fixed">
            <div className="self-center bg-secondary/75 rounded-3xl my-40 mx-3 p-12">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="max-w-sm pl-4">
                        <img src={me} className="rounded-lg shadow-2xl" alt="me"/>
                    </div>
                    <div>
                        <h1 className="mb-5 text-4xl font-bold">
                            {contents.hello[props.lang]}
                        </h1>
                        <h1 className="first-letter:pl-8 mb-2 pr-8 text-xl font-extralight text-justify col-span-full">
                            {contents.p1[props.lang]}
                        </h1>
                        <p className="first-letter:pl-8 pr-8 text-m text-justify mb-2">
                            {contents.p2[props.lang]}
                        </p>
                        <p className="first-letter:pl-8 pr-8 text-m text-justify mb-2">
                            {contents.p3[props.lang]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}