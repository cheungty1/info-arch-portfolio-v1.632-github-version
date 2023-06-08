// Import Components
import ArticleItem from '../ArticleItem/ArticleItem'
import Container from '@/components/common/Container/Container';

// Function for ArticlesList
function ArticlesList(props) {
  const { articles } = props;

  return (
    <Container>
      {/* Map Over Articles data Array - in order to display/render in ArticleItem */}
      {articles.map((article) => (
        <ArticleItem
          key={article.title}
          id={article.title}
          urlToImage={article.urlToImage}
          url={article.url}
          title={article.title}
          description={article.description}
        />
      ))}
    </Container>
  );
}

export default ArticlesList;