import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{width:"100%"}}>
    <div className="container my-5">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4" >
          <button className='btn btn-outline-light' style={{marginLeft:5,}}>Facebook</button>
          <button className=' btn btn-outline-light' style={{ marginLeft:5}}>Facebook</button>
          <button className=' btn btn-outline-light' style={{ marginLeft:5}}>Facebook</button>
          <button className=' btn btn-outline-light' style={{ marginLeft:5}}>Facebook</button>
          <button className=' btn btn-outline-light' style={{ marginLeft:5}}>Facebook</button>
          </section>
        <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">
        
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
         

          <div className="col-md-5 col-12">
          
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" />
            </div>
          </div>
          

          <div className="col-auto">
           
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
         
        </div>
        
      </form>
    </section>
    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
    <section className="">
      
      <div className="row">
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">About us</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Contact us</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Help</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
       

        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Products</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
       
      </div>
    
    </section>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer