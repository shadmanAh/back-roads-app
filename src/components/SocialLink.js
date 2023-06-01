import React from 'react'

function SocialLink({ href, icon, classitem }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={classitem}>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink
