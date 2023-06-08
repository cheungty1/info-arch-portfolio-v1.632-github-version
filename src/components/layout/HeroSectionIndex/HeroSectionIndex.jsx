// Import Scss modules, Next Link and React Bootstrap
import styles from "./HeroSectionIndex.module.scss";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Fragment } from "react";
import Link from "next/link";

// Function for HeroSectionIndex - Hero Section of Index Page
function HeroSectionIndex({ title, description, bgImage }) {
  // STATIC ASSETS - NextJS documentation: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <Fragment>
      <div
        className={styles.showcase}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className={styles.overlay}>
        <div className={styles.overlay2}>
          <h1>
            <span>{title}</span>World
          </h1>
          <p>{description}</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo quaerat harum necessitatibus, veritatis expedita eos sint modi aliquam, fugiat aliquid vitae dolor distinctio iusto error, perspiciatis soluta rerum nulla.</p>
      
          </div>
          <div className={styles.showcase1}>
            {/* Bootstrap CARD - with no images */}
            <Card style={{ width: "8rem" }}>
              <Card.Header><b>FEATURED</b></Card.Header>
              <ListGroup variant="flush">
                <Card.Link as={Link} href="/tech-news">
                  <ListGroup.Item><em>Tech</em></ListGroup.Item>
                </Card.Link>
              </ListGroup>
              <ListGroup variant="flush">
                <Card.Link as={Link} href="/econ-news">
                  <ListGroup.Item><em>Econ</em></ListGroup.Item>
                </Card.Link>
              </ListGroup>
              <ListGroup variant="flush">
                <Card.Link as={Link} href="/politics-news">
                  <ListGroup.Item><em>Politics</em></ListGroup.Item>
                </Card.Link>
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSectionIndex;
