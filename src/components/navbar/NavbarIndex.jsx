import React, { useState, useEffect } from "react";
import indexStyle from "./navbar.module.css"
import indexStyleAlternativa from "./NavBarAlternativa.module.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percentage = (window.scrollY / scrollHeight) * 100;
            setScrollPercentage(percentage);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                id="navbar"
                className={`${indexStyle.navbar} ${scrollPercentage >= 15 && indexStyleAlternativa.navbar}`}
            >
                <div
                    className={`${indexStyle.lado_esquerdo} ${scrollPercentage >= 15 && indexStyleAlternativa.lado_esquerdo}`}
                    onClick={() => navigate("/")}
                ></div>
                <div className={`${indexStyle.lado_direito} ${scrollPercentage >= 15 && indexStyleAlternativa.lado_direito}`}>
                    <button
                        onClick={() => navigate("/switch")}
                        className={`${indexStyle.cadastrar} ${scrollPercentage >= 15 && indexStyleAlternativa.cadastrar}`}
                    >
                        <b> Cadastrar </b>
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className={`${indexStyle.entrar} ${scrollPercentage >= 15 && indexStyleAlternativa.entrar}`}
                    >
                        <b> Entrar </b>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
