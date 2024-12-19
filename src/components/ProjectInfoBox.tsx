import { ReactNode } from "react";
import "../styles/Projects.css";
import { motion } from "framer-motion";

interface ProjectInfoBoxProps {
  children: ReactNode;
  projectImage: string;
  route: string;
  localRoute: boolean;
}

function ProjectInfoBox({ children, projectImage, route, localRoute }: ProjectInfoBoxProps) {

  function navigatePage() {
    if (localRoute) {
      window.open(`/barnett-portfolio#/projects/${route}`, 'blank');
    } else {
      window.open(route, '_blank');
    }
  }

  return (
    <div className="outerInfoBox col-10">
      <motion.div
        whileHover={{
          borderColor: "#00ffff", // Glowing color (cyan)
          boxShadow: "0 0 10px 2px #00ffff", // Glow effect
        }}
        style={{borderRadius: "10px", zIndex: 10000, display: "flex", justifyContent: "center"}}
      >
        <img onClick={navigatePage}className="image" src={projectImage}></img>
      </motion.div>
      {children}
    </div>
  );
}

export default ProjectInfoBox;
