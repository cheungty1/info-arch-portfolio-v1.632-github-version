// Import Components
import ButtonLink from "@/components/common/ButtonLink";
import { Container } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { Fragment } from "react";
import Head from "next/head";

// Function for custom 404 - not found page
const NotFoundPage = () => {
  return (
    <Fragment>
      <Head>
        <title>iWorld - 404 Not Found</title>
        <meta name="description" description="404 Not Found" />
      </Head>

      <div className="notFoundWrapper">
        <Container className="text-left">
          <div className="notFound">
            <h2>404 -</h2>
            <h2>This page does not exist!</h2>
            <ButtonLink path="/">
              <FiHome />
            </ButtonLink>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default NotFoundPage;
