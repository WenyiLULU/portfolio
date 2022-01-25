import icon_github from "../images/icon_Github.png"
import icon_linkedin from "../images/icon_linkedin.png";
import icon_instagram from "../images/icon_Instagram.png"

export default function Footer() {
    const YEAR = new Date().getFullYear()
    return (
        <footer className="p-4 footer bg-primary-focus footer-center rounded-t-3xl grid grid-rows-2 gap-0 p-3">
            <div className="grid grid-cols-3 place-items-center gap-0 px-3">
                <div>
                    <p className="text-secondary">Hosted by Vercel</p>
                    <p className="text-secondary">Coded with React using Tailwind and DaisyUI</p>
                </div>
                <div className="grid col-start-3 grid-cols-3 gap-4">
                    <a href="https://github.com/WenyiLULU" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-circle btn-ghost btn-md">
                            <img src={icon_github} alt="Github" />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/wenyi-lu-319669138/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-circle btn-ghost btn-md">
                            <img  src={icon_linkedin} alt="Linkedin" />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/wenyi_2018/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-circle btn-ghost btn-md">
                            <img  src={icon_instagram} alt="Instagram" />
                        </button>
                    </a>
                </div>
            </div>
            <div >
                <p className="text-secondary">Copyright © {YEAR} - All right reserved by Wenyi Lu (luwenyi1991@gmail.com)</p>
            </div>
        </footer>
    )
}