// Import Components
import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import ArticlesList from "@/components/feature/articles/ArticlesList/ArticleList";
import ScrollToTop from "react-scroll-to-top";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

// Function for Econ News Page - Incorporated: Head, Hero Section, React Bootstrap Carousels and Dynamic Cards with News Articles displayed on page
function EconNewsPage(props) {
  const { econArticles } = props;

  return (
    <Fragment>
      <Head>
        <title>iWorld - Econ-News</title>
        <meta
          name="description"
          description="Stay up to date with emerging stories in the World Economy and Global Financial Markets today"
        />
      </Head>
      <HeroSection
        title="Econ"
        description="Stay up to date with emerging stories in the World Economy and Global Financial Markets today"
        bgImage="/backgrounds/nick-chong-N__BnvQ_w18-unsplash.webp"
      />
      {/* React Bootstrap Carousels */}
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            // Dynamic Image Source - with default fallback image if Dynamic Image is null
            src={
              econArticles[0].urlToImage ||
              "/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"
            }
            alt="First slide"
            fill={true}
          />
          <Carousel.Caption>
            <h3>{econArticles[0].title}</h3>
            <p>{econArticles[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src={
              econArticles[1].urlToImage ||
              "/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"
            }
            alt="Second slide"
            fill={true}
          />
          <Carousel.Caption>
            <h3>{econArticles[1].title}</h3>
            <p>{econArticles[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100"
            src={
              econArticles[2].urlToImage ||
              "/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"
            }
            alt="Third slide"
            fill={true}
          />
          <Carousel.Caption>
            <h3>{econArticles[2].title}</h3>
            <p>{econArticles[2].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Display mapped data - from ArticlesList and ArticlesItem in card if there is data*/}
      {econArticles.length > 0 && <ArticlesList articles={econArticles} />}
      <ScrollToTop smooth color="#000000" />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (Econ News)
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=economy&pageSize=30&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      econArticles: articles,
    },
    revalidate: 60,
  };
};

export default EconNewsPage;
