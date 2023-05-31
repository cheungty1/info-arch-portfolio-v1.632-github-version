import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';
import ScrollToTop from "react-scroll-to-top";

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