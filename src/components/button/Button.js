import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a className="main-button btn-text" href={href} target={newTab && "_blank"}>
        {text}
      </a>

    </div>
  );
}
