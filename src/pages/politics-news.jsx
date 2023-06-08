import { Fragment } from "react";
import Head from "next/head";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import ArticlesList from "@/components/feature/articles/ArticlesList/ArticleList";
import ScrollToTop from "react-scroll-to-top";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

function PoliticsFeed(props) {
  const { politicsArticles } = props;

  const Img1 = {
    backgroundImage: `url("${
      politicsArticles[0].urlToImage ||
      "/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"
    }")`,
  };

  const Img2 = {
    backgroundImage: `url("${
      politicsArticles[1].urlToImage ||
      "/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"
    }")`,
  };

  const Img3 = {
    backgroundImage: `url("${
      politicsArticles[2].urlToImage ||
      "/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"
    }")`,
  };

  return (
    <Fragment>
      <Head>
        <title>iWorld - Politics-News</title>
        <meta
          name="description"
          description="Stay up to date with emerging stories in World GeoPolitics today"
        />
      </Head>
      <HeroSection
        title="Politics"
        description="Stay up to date with emerging stories in World GeoPolitics today"
        bgImage="/backgrounds/christian-lue-C241mbgtgys-unsplash.webp"
      />
      <Carousel fade>
        <Carousel.Item interval={1000}>
          {/*Responsive carousel with background image = but with "not found image logo" 
          - Also hydration error in firefox on local build, but not production build 
          - Plz Ask Alex*/}
          {/*<Image
            className="carousel d-block w-100"
            style={Img1}
            alt="First slide"
            width={650}
            height={366}
          />*/}

       
      <Image 
          className="carousel d-block w-100"
          src={politicsArticles[0].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp'}
          alt="First slide"
          fill={true}
      />
  
          <Carousel.Caption>
            <h3>{politicsArticles[0].title}</h3>
            <p>{politicsArticles[0].description}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
        <Image 
          className="d-block w-100"
          src={politicsArticles[1].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp'}
          alt="First slide"
          fill={true}
      />
          <Carousel.Caption>
            <h3>{politicsArticles[1].title}</h3>
            <p>{politicsArticles[1].description}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
        <Image 
          className="d-block w-100"
          src={politicsArticles[2].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp'}
          alt="First slide"
          fill={true}
      />
          <Carousel.Caption>
            <h3>{politicsArticles[2].title}</h3>
            <p>{politicsArticles[2].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>

      {politicsArticles.length > 0 && (
        <ArticlesList articles={politicsArticles} />
      )}
      <ScrollToTop smooth color="#000000" />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (politics News)
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=politics&pageSize=30&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      politicsArticles: articles,
    },
    revalidate: 60,
  };
};

export default PoliticsFeed;
