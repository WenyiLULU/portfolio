export default function History_old(props) {
    return (
        <section id="history" className="min-h-screen md:p-36 bg-sec-75">

            <div className="col-span-11 bg-neutral">
                <h1  className="text-center text-primary-content uppercase text-5xl font-extralight col-span-full">
                    History
                </h1>
            </div>
            <div className="col-span-11 bg-base-200 my-4">
                <h2  className="text-center text-primary-content uppercase text-5xl font-extralight col-span-full">
                    Professional Experiences
                </h2>
            </div>
            <div className="flex flex-row gap-2 pb-4">
                <div className="grid flex-grow h-32 w-1/3 card bg-base-300 rounded-box place-items-center">content</div>
                <div className="grid border-r-2 border-primary"></div>
                <div className="grid flex-grow h-32 w-2/3 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
            <div className="col-span-11 bg-base-200 my-4">
                <h2  className="text-center text-primary-content uppercase text-5xl font-extralight col-span-full">
                    Education
                </h2>
            </div>
            <div className="flex flex-row gap-2 pb-4">
                <div className="grid flex-grow h-32 w-1/3 card bg-base-300 rounded-box place-items-center">content</div>
                <div className="grid border-r-2 border-primary"></div>
                <div className="grid flex-grow h-32 w-2/3 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
        </section>
    )
}
