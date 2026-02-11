import { Home } from "./pages/home.js";
import { Alunos } from "./pages/alunos.js";

export function router() {
    const app = document.getElementById("app");
    const pageStyle = document.getElementById("page-style");
    const path = window.location.hash;

    switch (path) {
        case "#/alunos":
            app.innerHTML = Alunos();
            pageStyle.href = "css/pages/alunos.css";
            break;

        default:
            app.innerHTML = Home();
            pageStyle.href = "css/pages/home.css";

        const dsButton = document.getElementById("ds")
        
        dsButton.addEventListener('click', () => {
            window.location.hash = "#/alunos"
        })
        
    }
}
