// React Library
import React from 'react'

// Bootstrap Components
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Jumbotron(){
	return(
		<Card>
		  <Card.Body>
		    <Card.Title>Card Titles</Card.Title>
		    <Card.Text>
		      Some quick example text to build on the card title and make up the bulk of
		      the card's content.
		    </Card.Text>
		    <Button variant="primary">Go somewhere</Button>
		  </Card.Body>
		</Card>
	)
}