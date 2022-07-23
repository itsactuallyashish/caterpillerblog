import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {


   
  return (
    <div className={styles.container}>
        <style jsx>{`.mySpan{color:lightgreen;}`}</style>
       <Head>
        <title>caterpiller blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

      <main className={styles.main}>
        <h1 className={styles.title}>
   
         <span className='mySpan'> This is a Caterpiller Blog</span>
        </h1>
        <img src="/cameleon.png"className={styles.img}  width={250} height={250} />
      

        <div className={styles.grid}>
         <div className={styles.container}> 
         <h2>Popular blogs</h2>
         <div className={styles.blogitem}> <h3>how to learn next js</h3><p>
           to learn next js visit its documentation which is available on its regular website
         </p></div> 
        </div>
  
         
        </div>
      </main>

      <footer className={styles.footer}>
       
          Managed and maintained by  <strong>  Sanemi </strong> 
        
        
       </footer>
    </div>
  )
}
