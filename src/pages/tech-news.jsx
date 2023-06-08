import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';
import ScrollToTop from "react-scroll-to-top";
import { Carousel} from "react-bootstrap";
import Image from 'next/image';

function TechNewsPage(props) {
  const { techArticles } = props; 

  const Img1= {
    backgroundImage: `url("${techArticles[0].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp' }")`
  }

  const Img2= {
    backgroundImage: `url("${techArticles[1].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp' }")`
  }

  const Img3= {
    backgroundImage: `url("${techArticles[2].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp' }")`
  }

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
      <Carousel fade >
      <Carousel.Item interval={1000}>
      <Image
          className="carousel d-block w-100"
          src={techArticles[0].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp'}
          alt="First slide"
          fill={true}
        />
      
        <Carousel.Caption>
          <h3>{techArticles[0].title}</h3>
          <p>{techArticles[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={techArticles[1].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp'}
          alt="Second slide"
          fill={true}
        />
        <Carousel.Caption>
          <h3>{techArticles[1].title}</h3>
          <p>{techArticles[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <Image 
          className="carousel d-block w-100"
          src={techArticles[2].urlToImage || '/backgrounds/towfiqu-barbhuiya-5xTYgw2g7aw-unsplash.webp'}
          alt="Third slide"
          fill={true}
        />
        <Carousel.Caption>
          <h3>{techArticles[2].title}</h3>
          <p>{techArticles[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>

      {techArticles.length > 0 && <ArticlesList articles={techArticles} />}
      <ScrollToTop smooth color="#000000" />
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (tech news)
  const response = await fetch(`https://newsapi.org/v2/everything?q=tech&pageSize=30&apiKey=${process.env.NEWS_API_KEY}`);
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