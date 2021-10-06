import {
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiFigma,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodeDotJs,
  SiNextDotJs,
  SiAngular,
} from "react-icons/si";
import "../styles/icon.css";

function Icons() {
  let icons = [
    <SiHtml5 size="60px" />,
    <SiCss3 size="60px" />,
    <SiGithub size="60px" />,
    <SiTailwindcss size="60px" />,
    <SiFigma size="60px" />,
    <SiJavascript size="60px" />,
    <SiAngular size="60px" />,
    <SiTypescript size="60px" />,
    <SiReact size="60px" />,
    <SiNodeDotJs size="60px" fill="#2fa06b" />,
    <SiNextDotJs size="60px" fill="#2fa06b" />,
  ];

  const name = [
    "HTML",
    "CSS",
    "GitHub",
    "TailwindCSS",
    "Figma",
    "Javascript",
    "Angular",
    "TypeScript",
    "React",
    "Node.js",
    "Nextjs",
  ];
  return (
    <div className="iconContainer">
      {icons.map((icon, i) => {
        return (
          <div className="icon" key={i}>
            {icon}
            <span className="nameIcon"> {name[i]} </span>
          </div>
        );
      })}
    </div>
  );
}

export default Icons;
