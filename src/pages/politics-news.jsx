import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function PoliticsFeed(props) {
  const { politicsArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>Politics-Feed | Politics</title>
        <meta 
          name='description'
          description='Catch up on all of the current news and developments in World GeoPolitics today'
        />
      </Head>
      <HeroSection 
        title='Politics' 
        description='Catch up on all of the current news and developments in World GeoPolitics today'
        bgImage="/backgrounds/christian-lue-C241mbgtgys-unsplash.jpg"
      />
      {politicsArticles.length > 0 && <ArticlesList articles={politicsArticles} />}
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