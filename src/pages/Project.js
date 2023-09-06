import React from "react";
import "../css/project.css";
import { Link } from "react-router-dom";

import projects from "../data/project-item";

export default function Project() {
  return (
    <div id="project">
      {projects.map((item) => (
        <div className="project-item">
          <Link className="thumbnail" to={item.src} alt="src" target="_bank">
            <img alt="Full Stack" src={item.thumbnailUrl} width={"100%"} />
          </Link>
          <aside className="ms-5">
            <h2 className="mb-5">{item.name}</h2>
            <h4 className="mb-3">Skill</h4>
            <ul id="project-skill" className="mb-5">
              {item.skills.map((skill) => (
                <li className="mb-2">{skill}</li>
              ))}
            </ul>
            <h4 className="mb-3">Context</h4>
            <p>{item.content}</p>
          </aside>
        </div>
      ))}
    </div>
  );
}
