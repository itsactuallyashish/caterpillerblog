import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <navbar className={styles.mainnav}>
    <ul>
      <li><Link href="/"><a >Home</a></Link></li>
      <li><Link href="/about"><a >about</a></Link></li>
      <li><Link href="/blog"><a >blog</a></Link></li>
      <li><Link href="/contact"><a >contact</a></Link></li>
    </ul>
  </navbar>
  )
}

export default Navbar;