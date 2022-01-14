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
            "fr": "Bienvenu ! Voici le portfolio de Wenyi Lu.",
            "en": "Welcome ! Here's the portfolio of Wenyi Lu.",
            "cn": "我充满好奇心，有创造力且有行动力。抱着自然科学的喜爱及对新兴领域的好奇心，我选择了葡萄与葡萄酒专业。在中国完成了本科学习后，我又在法国获得了硕士学位及国家酿酒师文凭。求学期间的实习经验及毕业之后的工作经历让我体会到了开发与创造的魅力。与生产实践相关的科研与创新令我着迷。"
        },
        "p3": {
            "fr": "Bienvenu ! Voici le portfolio de Wenyi Lu.",
            "en": "Welcome ! Here's the portfolio of Wenyi Lu.",
            "cn": "在上一份工作中，利用python实现数据获取自动化的经历让我体验到信息技术的高效能，并开始在这一领域深入学习。"
        }

    }

    return (
        <section id="me" className="flex me-wallpaper min-h-screen md:p-20 bg-fixed">
            <div className="self-center hero bg-secondary-focus/75 rounded-3xl">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="max-w-sm">
                        <img src={me} className="rounded-lg shadow-2xl" alt="me"/>
                    </div>
                    <div>
                        <h1 className="mb-5 text-4xl font-bold">
                            {contents.hello[props.lang]}
                        </h1>
                        <h1 className="pl-8 mb-2 text-xl font-extralight col-span-full">
                            {contents.p1[props.lang]}
                        </h1>
                        <p className="first-letter:pl-8 mb-5">
                            {contents.p2[props.lang]}
                        </p>
                        <p className="first-letter:pl-8 mb-5">
                            {contents.p3[props.lang]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}