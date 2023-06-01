import React from 'react'
import { pageLinks } from '../data'
import PageLink from './PageLink'

function PageLinks({ parntClass, itemClass }) {
  return (
    <ul className={parntClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default PageLinks
