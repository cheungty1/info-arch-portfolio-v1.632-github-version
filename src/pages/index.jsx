import { Fragment } from 'react';
import Head from 'next/head';
import HeroSectionIndex from '@/components/layout/HeroSectionIndex/HeroSectionIndex';
import { Container, Card, Button } from "react-bootstrap";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>iWorld - Home</title>
        <meta 
          name='description'
          description='World news from around the globe, stay up to date with us in technology, economics and politics'
        />
      </Head>
      <HeroSectionIndex
        title='i' 
        description='World news from around the globe, stay up to date with us in technology, economics and politics'
        
        bgImage="/backgrounds/actionvance-EffbIFpOHU4-unsplash.jpg"
      />
      {/*}
                <Card border="dark" style={{ width: "18rem" }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Dark Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

      <Container>
      <h2>iWorld</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi illo, atque deserunt officia minus veritatis ea repudiandae quas animi eius?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis omnis quod porro doloremque maxime enim ipsa quae, quidem voluptatem. Nostrum animi exercitationem corrupti, nesciunt tempore illum possimus nihil cupiditate eveniet velit repellendus accusantium, molestias veniam consectetur nisi ipsam assumenda suscipit architecto, eos obcaecati eaque iure excepturi. Sed quod nesciunt minima quis dolore? Iure delectus dignissimos beatae, eaque enim quam a labore porro cumque minima ratione ducimus explicabo ut eum hic eveniet! Unde sit voluptatem assumenda veniam officia illum fuga laboriosam ab! Reprehenderit eligendi modi dolor, illo est aperiam nobis quasi illum eius possimus, recusandae odit deserunt dignissimos? Aliquid, eveniet?</p>
      </Container>
        */}
    </Fragment>
  )
}

export default HomePage;