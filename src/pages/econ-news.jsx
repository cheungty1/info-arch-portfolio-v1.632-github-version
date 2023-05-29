import { Fragment } from 'react';
import Head from 'next/head';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
import ArticlesList from '@/components/feature/articles/ArticlesList/ArticleList';

function EconNewsPage(props) {
  const { econArticles } = props; 

  return (
    <Fragment>
      <Head>
        <title>Econ-Feed | Econ</title>
        <meta 
          name='description'
          description='Catch up on all of the current news and developments in the World Economy and Global Financial Markets today'
        />
      </Head>
      <HeroSection 
        title='Econ' 
        description='Catch up on all of the current news and developments in the World Economy and Global Financial Markets today'
        bgImage="/backgrounds/nick-chong-N__BnvQ_w18-unsplash.webp"
      />
      {econArticles.length > 0 && <ArticlesList articles={econArticles} />}
    </Fragment>
  );
}

// STATIC SITE GENERATION (snippet: "ngsp")
export const getStaticProps = async () => {
  // External API Request: NewsAPI (BBC News)
  const response = await fetch(`https://newsapi.org/v2/everything?q=economy&apiKey=${process.env.NEWS_API_KEY}`);
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