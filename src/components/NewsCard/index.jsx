import { formatDate } from "../../utils/formatDate";
import styles from "./NewsCard.module.css";
import classnames from "classnames";

const NewsCard = (props) => {
  const {
    src,
    title,
    publishedAt,
    author,
    sourceName,
    description,
    url,
    notLastChild,
  } = props;
  return (
    <div
      className={classnames(styles.newsCard, {
        [styles.newsCardGap]: notLastChild,
      })}
    >
      <div classNames={styles.imgContainer}>
        <img className={styles.img} src={src} alt={`${title}, Thumbnail`} />
        <p className={styles.imgTitle}>{title}</p>
      </div>

      <div className={styles.newsCardContent}>
        <p className={styles.newsCardDate}>{formatDate(publishedAt)}</p>
        <p className={styles.newsCardAuthor}>{`${author} | ${sourceName}`}</p>

        <p className={styles.newsCardDesc}>{description}</p>

        <a
          href={url}
          className={styles.url}
          target="__blank"
          rel="noreffer noopener"
        >
          Go To website
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
