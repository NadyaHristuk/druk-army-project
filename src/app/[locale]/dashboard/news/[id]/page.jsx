import { updateNewsArticle } from "@/app/lib/actions";
import { fetchNewsArticle } from "@/app/lib/data";
import styles from "@/components/dashboard/news/singleNews/singleNews.module.css";
import Image from "next/image";

const SingleNewsPage = async ({ params }) => {
  const { id } = params;
  const article = await fetchNewsArticle(id); // This function needs to be implemented

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={article.imageUrl || "/noavatar.png"} alt="" layout="fill" />
        </div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <p>Author: {article.author}</p>
        <p>Date: {article.date}</p>
        <p>Time to read: {article.timeToRead} minutes</p>
        <p>Views: {article.views}</p>
      </div>
      <div className={styles.formContainer}>
        <form action={updateNewsArticle} method="POST" className={styles.form}>
          <input type="hidden" name="_id" value={article._id} />
          <label>Title</label>
          <input type="text" name="title" defaultValue={article.title} />
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            defaultValue={article.description}
          ></textarea>
           <label>Author</label>
          <input type="text" name="author" defaultValue={article.author} />
          <label>Date</label>
          <input type="text" name="date" defaultValue={article.date} />
          <label>Time to read (minutes)</label>
          <input type="number" name="timeToRead" defaultValue={article.timeToRead} />
          <label>Views</label>
          <input type="number" name="views" defaultValue={article.views} />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleNewsPage;
