import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./socialBtns.style.scss";

export default function SocialBtns() {
  return (
    <div className="social">
        <a href="https://github.com/RaphaelOliveir" target="_blank">
            <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/raphael-oliveira-abba33203/" target="_blank">
            <LinkedInIcon />
        </a>
    </div>
  )
}
