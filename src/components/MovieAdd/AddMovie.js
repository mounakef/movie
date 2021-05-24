import React,{useState} from 'react'
import {Button, Modal,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovie = ({addMovie}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
    const [newMovie, setNewMovie] = useState({
         id: Math.random(),
        image:"",
        rating: 0,
        name:"" ,
        date: "",
        type: "",
        description:""})
        const handelNewMovie = (e)=>setNewMovie({...newMovie,[e.target.name]: e.target.value});
    return (
        <div>
          
          <>
      <Button variant="primary" onClick={handleShow}>
Add new movie   
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add film</Modal.Title>
        </Modal.Header>
        <input  value={newMovie.image} name="image" onChange ={handelNewMovie}/>
        <input value={newMovie.rating} name="rating"  onChange  ={handelNewMovie}/>
        <input value={newMovie.name} name="name" onChange = {handelNewMovie} />
        <input value={newMovie.date} name="date" onChange ={handelNewMovie}/>
        <input value={newMovie.type} name="type" onChange ={handelNewMovie}/>
        <input value={newMovie.description} name="description" onChange={handelNewMovie}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(newMovie);setNewMovie({
            id: Math.random(),
            image:"",
            rating: 0,
            name:"" ,
            date: "",
            type: "",
            description:""
          });handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
       
        </div> 
    )
}

export default AddMovie
