import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';
import ScrollToTop from "react-scroll-to-top";
import { Carousel} from "react-bootstrap";
import Container from '@/components/common/Container/Container';
import Image from 'next/image';
import Img1 from "../../public/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.jpg"

function EconNewsPage(props) {
  const { econArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>iWorld - Econ-News</title>
        <meta 
          name='description'
          description='Stay up to date with emerging stories in the World Economy and Global Financial Markets today'
        />
      </Head>
      <HeroSection 
        title='Econ' 
        description='Stay up to date with emerging stories in the World Economy and Global Financial Markets today'
        bgImage="/backgrounds/nick-chong-N__BnvQ_w18-unsplash.jpg"
      />
   
      <Carousel fade >
      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={econArticles[0].urlToImage ? econArticles[0].urlToImage : Img1}
          //src={Img1}
          alt="First slide"
          width={650}
          height={366}
        />
        <Carousel.Caption>
          <h3>{econArticles[0].title}</h3>
          <p>{econArticles[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={econArticles[1].urlToImage ? econArticles[1].urlToImage : Img1}
          alt="Second slide"
          width={650}
          height={366}
        />
        <Carousel.Caption>
          <h3>{econArticles[1].title}</h3>
          <p>{econArticles[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={econArticles[2].urlToImage ? econArticles[2].urlToImage : Img1}
          alt="Third slide"
          width={650}
          height={366}
        />
        <Carousel.Caption>
          <h3>{econArticles[2].title}</h3>
          <p>{econArticles[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        

      {econArticles.length > 0 && <ArticlesList articles={econArticles} />}
      <ScrollToTop smooth color="#000000" />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (BBC News)
  const response = await fetch(`https://newsapi.org/v2/everything?q=economy&pageSize=30&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;

  // Returned data as props
  return {
    props: {
      econArticles: articles
    },
    revalidate: 60
  };
};

export default EconNewsPage;