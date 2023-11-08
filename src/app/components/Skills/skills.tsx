import Image from "next/image";

import "./skills.style.scss";

interface SkillProps {
    image: string,
    level: string,
    measure: number,
}

export function Skill(props : SkillProps){
    return(
        <div className="experience-language">
            <Image
                src={props.image}
                alt="Skill Logo"
                width={38}
                height={38}
                priority
            />
            <div className="experience-unit">
                <div className={`experience-measure measure-${props.measure}`}>
                    <span>{props.level}</span>
                </div>
            </div>
      </div>
    )
}