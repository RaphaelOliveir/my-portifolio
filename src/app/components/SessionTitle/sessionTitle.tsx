import "./sessionTitle.style.scss";

interface SessioTitle {
    text: string
}

export function SessioTitle({ text }: SessioTitle) {
    return (
        <h3 className="section-title">{text}</h3>
    )
}