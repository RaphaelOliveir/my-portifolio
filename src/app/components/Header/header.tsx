import Image from "next/image";

import "./header.style.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1> Olá! Sou o Raphael 🍀 </h1>
        <h2> Desenvolvedor de software </h2>
      </div>

      <Image
        src="/me.jpg"
        alt="My pic"
        width={325}
        height={310}
        priority
      />
    </div>
  );
}
