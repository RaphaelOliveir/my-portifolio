import { SessioTitle } from "../SessionTitle/sessionTitle";
import "./info.style.scss";

export default function Info() {
  return (
    <div className="infos">
    <SessioTitle text="Idiomas" />
    <div className="languages-info">
      <span>🇺🇲 EN - Avançado</span>
      <span>🇧🇷 PT-BR - Nativo</span>
    </div>

    <SessioTitle text="Educacional" />
    <div className="educational-info">
      <span>🎓 Graduação: SI - PUC Minas</span>
      <span>🔧 Técnico: Informática - CEDAF</span>
    </div>
  </div>
  )
}
