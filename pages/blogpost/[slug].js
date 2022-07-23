import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setblog] = useState();
  useEffect(() => {
    if(!router.isReady) return;
  fetch(`http://localhost:3000/api/blogs?slug=${slug}`).then((data)=>{return data.json();}).then((parsed)=>{setblog(parsed);});
  
   
  }, [router.isReady])
  
  // console.log(slug);
  return (<div className={styles.container}><main className={styles.main}><h2>{blog&&blog.title}</h2>
    <hr /><div> {blog&&blog.content}</div></main>
  </div>);
};

export default slug; 
