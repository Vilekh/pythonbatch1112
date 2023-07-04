import './about.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

function About() {

  const [ postDetails , setPostDetails ] = useState([]);  

  useEffect(()=>{
    const api_url="https://jsonplaceholder.typicode.com/posts";  
    axios.get(api_url).then((response)=>{
        //console.log(response.data);
        setPostDetails(response.data);
    }).catch((error)=>{
        console.log(error);
    });
  });          

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">Post Details</h1>

<table class="table table-bordered" >
<tr>
<th>UserId</th>
<th>Id</th>
<th>Title</th>
<th>Body</th>    
</tr>    

{
 postDetails.map((row)=>(
  <tr>
      <td>{row.userId}</td>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.body}</td>
  </tr> 
 ))    
}

</table>

              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default About;
