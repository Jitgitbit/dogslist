import React from "react";
import { Link } from "react-router-dom";


export default function DogBreedImages (props) {
  const { images, breed } = props

  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
    {/* 
    		Changed from: 
	        This page will show images of the { props.match.params.breed } breed. to the code below.
      	*/}
        <div>
        <Link to="/">Go back to the index</Link>
        </div>
		This page will show images of the { breed } breed
		  <div>
    	  { images && images.map(url => <img src={ url } alt="Dog"  style={{maxHeight: '8rem'}}/>) } {/** I used inline styling here */}
  	      { !images && 'Loading...' }
	    </div>
    </div>
  )
}
