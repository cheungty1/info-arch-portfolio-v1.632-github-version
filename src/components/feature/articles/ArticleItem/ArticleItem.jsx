import styles from './ArticleItem.module.scss';
import Image from 'next/image';
import Card from '@/components/common/Card';
import ButtonLink from '@/components/common/ButtonLink';

function ArticleItem(props) {
  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        {props.urlToImage &&  <div className={styles.imageBox}>
           <Image 
           className={styles.nextImage}
            src={props.urlToImage} 
            alt={props.title} 
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          /> 
       </div>}
        <div className={styles.articleContent}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
        <ButtonLink path={props.url} target="_blank">
          Link to Article
        </ButtonLink>
      </div>
    </Card>
  );
}

export default ArticleItem;