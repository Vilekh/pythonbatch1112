import './contact.css';
import { useState , useEffect } from 'react';
import axios from 'axios';

function Contact() {

  useEffect(()=>{
    const api_url="http://localhost:3001/user/testapi";  
    axios.get(api_url).then((response)=>{
        console.log(response);
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
                  <h1 class="display-5 mb-4">Welcome To <span class="text-primary">PMS , Contact page</span></h1>
                  <h4 class="text-primary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id fugit a voluptatem debitis accusantium aliquid dicta sit ut deserunt?</h4>
                  <p class="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, modi labore sed vitae sint tenetur corporis reprehenderit enim animi fuga voluptate nemo quis aperiam atque a sit ducimus, neque temporibus molestiae veniam autem voluptatum saepe velit quasi? Placeat soluta animi optio tenetur earum porro, facilis impedit odit qui vero aut, provident accusantium autem voluptate eum doloribus quis cupiditate itaque ipsa? Perferendis reprehenderit asperiores voluptatibus ratione, deserunt hic, quod saepe, dicta aliquid eos suscipit adipisci ut iure a repudiandae laudantium dolores. Odio excepturi dolores cupiditate, eaque quis repudiandae inventore, expedita mollitia itaque, consequatur provident. Nesciunt optio, ad quidem eveniet dicta consequuntur.</p>
              </div>
          </div>
      </div>
      {/* About End */}
     </>	
  );
}

export default Contact;
