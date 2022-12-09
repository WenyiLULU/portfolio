import me from "../images/me.jpg";
import { AboutContents } from "../data/about.data";

export default function Main(props) {
    

    return (
        <section id="me" className="flex justify-center min-h-screen bg-fixed me-wallpaper md:p-20">
            <div className="self-center p-8 mx-3 my-40 bg-secondary/75 rounded-3xl md:p-12">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="max-w-sm pl-4">
                        <img src={me} className="rounded-[20px] shadow-2xl" alt="me"/>
                    </div>
                    <div>
                        <h1 className="mb-5 text-4xl font-black">
                            {AboutContents.hello[props.lang]}
                        </h1>
                        <h1 className="pr-0 mb-2 text-2xl font-normal text-justify first-letter:pl-8 col-span-full lg:pr-8">
                            {AboutContents.p1[props.lang]}
                        </h1>
                        <p className="pr-0 mb-2 text-lg font-normal text-justify first-letter:pl-8 lg:pr-8">
                            {AboutContents.p2[props.lang]}
                        </p>
                        <p className="pr-0 mb-2 text-lg font-normal text-justify first-letter:pl-8 lg:pr-8">
                            {AboutContents.p3[props.lang]}
                        </p>
                        <p className="pr-0 mb-2 text-lg font-normal text-justify first-letter:pl-8">
                            {AboutContents.p4[props.lang]}
                        </p>
                        <p className="pr-0 mb-2 text-lg font-normal text-justify first-letter:pl-8 lg:pr-8">
                            {AboutContents.p5[props.lang]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}