import icon_github from "../images/icon_Github.png"
import icon_linkedin from "../images/icon_linkedin.png";
import icon_instagram from "../images/icon_Instagram.png"

export default function Footer() {
    return (
        <footer className="p-4 footer bg-neutral text-base-content footer-center">
            <div className="grid grid-cols-3 justify-items-center">
                <div >
                    <p className="text-primary">Host by Vercel</p>
                    <p className="text-primary">Made by React with Tailwind and DaisyUI</p>
                </div>
                <div >
                    <p className="text-primary">Copyright © 2022 - All right reserved by Wenyi Lu</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <a href="https://github.com/WenyiLULU" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-circle btn-ghost btn-md">
                            <img  src={icon_github} alt="Github" />
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
        </footer>
    )
}