import me from "../images/me.jpg";
import { AboutContents } from "../data/about.data";

export default function Main(props) {
    

    return (
        <section id="me" className="flex justify-center me-wallpaper min-h-screen md:p-20 bg-fixed">
            <div className="self-center bg-secondary/75 rounded-3xl my-40 mx-3 p-12">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="max-w-sm pl-4">
                        <img src={me} className="rounded-[20px] shadow-2xl" alt="me"/>
                    </div>
                    <div>
                        <h1 className="mb-5 text-4xl font-black">
                            {AboutContents.hello[props.lang]}
                        </h1>
                        <h1 className="first-letter:pl-8 mb-2 pr-8 text-2xl font-normal text-justify col-span-full">
                            {AboutContents.p1[props.lang]}
                        </h1>
                        <p className="first-letter:pl-8 pr-8 text-lg font-normal text-justify mb-2">
                            {AboutContents.p2[props.lang]}
                        </p>
                        <p className="first-letter:pl-8 pr-8 text-lg font-normal text-justify mb-2">
                            {AboutContents.p3[props.lang]}
                        </p>
                        <p className="first-letter:pl-8 pr-8 text-lg font-normal text-justify mb-2">
                            {AboutContents.p4[props.lang]}
                        </p>
                        <p className="first-letter:pl-8 pr-8 text-lg font-normal text-justify mb-2">
                            {AboutContents.p5[props.lang]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}