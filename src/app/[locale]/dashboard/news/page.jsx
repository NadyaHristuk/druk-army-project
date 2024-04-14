import Image from "next/image";
import Link from "next/link";
import styles from "@/components/dashboard/news/news.module.css";
import Search from "@/components/dashboard/search/search";
import Pagination from "@/components/dashboard/pagination/pagination";
import { fetchNewsArticles } from "@/app/lib/data";
import { deleteNewsArticle } from "@/app/lib/actions";
import { NewsList } from "@/components/newsPage";

const newsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, news } = await fetchNewsArticles(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a new..." />
        <Link href="/dashboard/news/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Date</td>
            <td>Time to read (minutes)</td>
            <td>Views</td>  
            <td>Action</td>            
          </tr>
        </thead>
        <tbody>
          {news.map((news) => (
            <tr key={news.id}>
              <td>
                <div className={styles.new}>
                  <Image
                    src={NewsList.img || "/nonew.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.newImage}
                  />
                  {news.title}
                </div>
              </td>
              <td>{news.description}</td>
              <td>{news.date}</td>
              <td>{news.timeToRead}</td>
              <td>{news.views}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/news/${news.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteNewsArticle}>
                    <input type="hidden" name="id" value={news.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default newsPage;
