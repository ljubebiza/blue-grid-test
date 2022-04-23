import React from "react";
export default function IconLink({ link, Icon }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon />
    </a>
  );
}
