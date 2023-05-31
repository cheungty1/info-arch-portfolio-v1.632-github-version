import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';
import ScrollToTop from "react-scroll-to-top";
import { Carousel} from "react-bootstrap";
import { Container } from 'react-bootstrap'

function TechNewsPage(props) {
  const { techArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>iWorld - Tech-News</title>
        <meta 
          name='description'
          description='Stay up to date with emerging stories in Tech today'
        />
      </Head>
      <HeroSection 
        title='Tech' 
        description='Stay up to date with emerging stories in Tech today'
        bgImage="/backgrounds/mathew-schwartz-iGheu30xAi8-unsplash.webp"
      />
      <Container>
      <Carousel fade >
      <Carousel.Item interval={1000}>
        <img
          className="carousel d-block w-100"
          src={techArticles[0].urlToImage ? techArticles[0].urlToImage :"/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"}
          //src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{techArticles[0].title}</h3>
          <p>{techArticles[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="carousel d-block w-100"
          src={techArticles[1].urlToImage ? techArticles[1].urlToImage :"/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{techArticles[1].title}</h3>
          <p>{techArticles[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="carousel d-block w-100"
          src={techArticles[2].urlToImage ? techArticles[2].urlToImage :"/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{techArticles[2].title}</h3>
          <p>{techArticles[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        </Container>

      {techArticles.length > 0 && <ArticlesList articles={techArticles} />}
      <ScrollToTop smooth color="#000000" />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (BBC News)
  const response = await fetch(`https://newsapi.org/v2/everything?q=tech&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      techArticles: articles
    },
    revalidate: 60
  };
};

export default TechNewsPage;