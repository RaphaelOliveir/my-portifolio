import Image from "next/image";
import { SessioTitle } from "../SessionTitle/sessionTitle";

import "./experience.style.scss";
import { Skill } from "../Skills/skills";

export function Experience() {
  return (
    <div className="experience">
      <SessioTitle text={"Experiência"} />

      <p>
        Desenvolvedor Front End com 6 meses de experiência no mercado,
        através de tecnologias recentes como Next.js, busco uma nova oportunidade para consolidar
        meus conhecimentos e dessa forma me desenvolver profissionalmente e pessoalmente.
      </p>

      <div className="experience-time">
        <Skill image="/js.png" measure={2} level="90%" />
        <Skill image="/ts.png" measure={4} level="70%" />
        <Skill image="/react.png" measure={3} level="85%" />
        <Skill image="/csharp.png" measure={5} level="47%" />
      </div>
    </div>
  );
}
