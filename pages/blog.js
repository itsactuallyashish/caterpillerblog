import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'

const blog = () => {
  const [blog, addblog] = useState([]);
  useEffect(() => {
    // const [blog,addblog]= useState([]);
    console.log("useEffect is running");
    fetch('http://localhost:3000/api/allblogs').then((data) => { return data.json(); }).then((parsed) => { console.log(parsed); addblog(parsed); });
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {blog.map((item) => {
          return <div className={styles.blogitem} key={item.title}>
            <Link href={`/blogpost/${item.slug}`}><a><h3>{item.title}</h3></a></Link>
            <p className={styles.par}>
              {item.content.substr(0, 140)}
            </p>
            
            </div>
           
       
       })}

      </div>
    </main>
  )
}
export default blog;
