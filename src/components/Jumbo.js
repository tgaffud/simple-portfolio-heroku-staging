// React Library
import React from 'react'

// Bootstrap Components
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo(){
	return(
		<Jumbotron>
		  <h1>Hello, world!</h1>
		  <p>
		    This is a simple hero unit, a simple jumbotron-style component for calling
		    extra attention to featured content or information.
		  </p>
		  <p>
		    <Button variant="primary">Learn more</Button>
		  </p>
		</Jumbotron>
	)
}