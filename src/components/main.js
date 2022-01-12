import me from "../images/me.jpg";

export default function Main(props) {

    return (
        <section id="me" className="flex me-wallpaper min-h-screen md:p-20 bg-fixed">
            <div className="self-center hero bg-secondary-focus/75 rounded-tl-3xl rounded-br-3xl">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img src={me} className="max-w-sm rounded-lg shadow-2xl"/>
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">
                            Hello there
                        </h1>

                        <h1  className="text-center text-primary-content uppercase text-5xl font-extralight col-span-full">
                            Hi, I'm {props.name} Lu !
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}