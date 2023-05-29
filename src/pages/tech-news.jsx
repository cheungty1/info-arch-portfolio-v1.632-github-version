import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function TechNewsPage(props) {
  const { techArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>Tech-Feed | Tech-News</title>
        <meta 
          name='description'
          description='Catch up on all of the current news and developments in Tech today'
        />
      </Head>
      <HeroSection 
        title='Tech' 
        description='Catch up on all of the current news and developments in Tech today'
        bgImage="/backgrounds/mathew-schwartz-iGheu30xAi8-unsplash.jpg"
      />
      {techArticles.length > 0 && <ArticlesList articles={techArticles} />}
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