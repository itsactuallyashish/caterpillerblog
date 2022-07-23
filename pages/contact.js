import React ,{useState} from 'react'
import styles from '../styles/blogpost.module.css'


 const contact = () => {
  const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [concern, setconcern] = useState('');
    const handlechange=(e)=>{
  if(e.target.id=="exampleInputEmail1")
  setemail(e.target.value);
  else if(e.target.id=="exampleInputPassword1")
  setname(e.target.value);
  else if(e.target.id=="floatingTextarea")
  setconcern(e.target.value);
  
  
    };
    const handlesubmit=(e)=>{
      
      
      
      e.preventDefault();
      console.log(name,email,concern);};
      const sub=()=>{const data = { name,email,concern };

      fetch('http://localhost:3000/api/postcontact', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    

    
    }
  return (
    
    <div className={styles.container}> <htmlForm onClick={handlesubmit}>
       <main className={styles.main}>
        <h1>contact us</h1>
    <div className={styles.mb}>
      <label htmlFor="exampleInputEmail1" className={styles.label}>Name</label>
      <input type="text" onChange={handlechange} value={email}className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     
    </div>
    <div className={styles.mb}>
      <label htmlFor="exampleInputPassword1" className={styles.label}>email</label>
      <input type="text" onChange={handlechange} value={name} className="htmlForm-control" id="exampleInputPassword1"/>
    </div>
    <div className={styles.mb}>
  <label htmlFor="floatingTextarea">Comments</label>
  <textarea className={styles.label} onChange={handlechange}  value={concern}placeholder="Leave your concern here" id="floatingTextarea"></textarea>
</div>
    <button type="submit" onClick={sub}className="btn btn-primary">Submit</button></main>
  </htmlForm></div>
  )
};
export default contact;
