import React, { useState } from "react";
// ant design
import {
  CaretDownOutlined,
  CaretUpOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Online() {
  const [checkOnline, setCheckOnline] = useState(false);

  return (
    <>
      <div
        to="/online"
        className="link-title online"
        onClick={() => setCheckOnline(!checkOnline)}
      >
        Online
        {checkOnline ? <CaretUpOutlined /> : <CaretDownOutlined />}
        {checkOnline && (
          <ul>
            <li>
              <Link
                to="https://github.com/Jason999220?tab=repositories"
                target="_blank"
              >
                <GithubOutlined />
                GitHub
              </Link>
            </li>

            <li>
              <Link
                to="https://www.linkedin.com/in/jason-xu-01a597265/"
                target="_blank"
              >
                <LinkedinOutlined />
                Linkedin
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
