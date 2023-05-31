import React from "react";
import styles from "html-css-template/css/cadastro.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav id="navbar" className={styles.navbar}
            >
                <div
                    className={styles.lado_esquerdo}
                    onClick={() => navigate("/")}
                ></div>
                <div className={styles.lado_direito}>
                    <button
                        onClick={() => navigate("/switch")}
                        className={styles.cadastrar}
                    >
                        <b> Cadastrar </b>
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className={styles.entrar}
                    >
                        <b> Entrar </b>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
