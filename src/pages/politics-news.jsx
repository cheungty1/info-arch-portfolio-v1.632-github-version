import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';
import ScrollToTop from "react-scroll-to-top";
import { Carousel} from "react-bootstrap";
import { Container } from 'react-bootstrap'
import Image from 'next/image';

function PoliticsFeed(props) {
  const { politicsArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>iWorld - Politics-News</title>
        <meta 
          name='description'
          description='Stay up to date with emerging stories in World GeoPolitics today'
        />
      </Head>
      <HeroSection 
        title='Politics' 
        description='Stay up to date with emerging stories in World GeoPolitics today'
        bgImage="/backgrounds/christian-lue-C241mbgtgys-unsplash.webp"
      />
      <Container>
      <Carousel fade >
      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={politicsArticles[0].urlToImage ? politicsArticles[0].urlToImage :"/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"}
          //src={Img1}
          alt="First slide"
          width={650}
          height={300}
        />
        <Carousel.Caption>
          <h3>{politicsArticles[0].title}</h3>
          <p>{politicsArticles[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={politicsArticles[1].urlToImage ? politicsArticles[1].urlToImage :"/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"}
          alt="Second slide"
          width={650}
          height={300}
        />
        <Carousel.Caption>
          <h3>{politicsArticles[1].title}</h3>
          <p>{politicsArticles[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={politicsArticles[2].urlToImage ? politicsArticles[2].urlToImage :"/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp"}
          alt="Third slide"
          width={650}
          height={300}
        />
        <Carousel.Caption>
          <h3>{politicsArticles[2].title}</h3>
          <p>{politicsArticles[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        </Container>
        
      {politicsArticles.length > 0 && <ArticlesList articles={politicsArticles} />}
      <ScrollToTop smooth color="#000000" />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (BBC News)
  const response = await fetch(`https://newsapi.org/v2/everything?q=politics&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      politicsArticles: articles
    },
    revalidate: 60
  };
};

export default PoliticsFeed;