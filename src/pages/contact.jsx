import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Fragment } from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <Container className="my-4 text-left">
      <h2 className="mb-4">Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis omnis quod porro doloremque maxime enim ipsa quae, quidem voluptatem. Nostrum animi exercitationem corrupti, nesciunt tempore illum possimus nihil cupiditate eveniet velit repellendus accusantium, molestias veniam consectetur nisi ipsam assumenda suscipit architecto, eos obcaecati eaque iure excepturi. Sed quod nesciunt minima quis dolore? Iure delectus dignissimos beatae, eaque enim quam a labore porro cumque minima ratione ducimus explicabo ut eum hic eveniet! Unde sit voluptatem assumenda veniam officia illum fuga laboriosam ab! Reprehenderit eligendi modi dolor, illo est aperiam nobis quasi illum eius possimus, recusandae odit deserunt dignissimos? Aliquid, eveniet?</p>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" placeholder="Enter message" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Contact