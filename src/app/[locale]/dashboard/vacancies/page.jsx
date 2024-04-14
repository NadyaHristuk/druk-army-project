import { deleteJob } from "@/app/lib/actions";  // Assume deleteJob is implemented for jobs
import { fetchAllJobs } from "@/app/lib/data";  // Used to fetch job vacancies
import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";
import styles from "@/components/dashboard/vacancies/vacancies.module.css";
import Image from "next/image";
import Link from "next/link";

const VacanciesPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, jobs } = await fetchAllJobs(q, page);  // Changed from vacancy to jobs

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a vacancy..." />
        <Link href="/dashboard/vacancies/add">
          <button className={styles.addButton}>Add New Vacancy</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Skills</td>
            <td>Created At</td>
            <td>Image</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{job.skills.join(', ')}</td>
              <td>{job.createdAt?.toString().slice(0, 10)}</td>
              <td>
                {job.imageUrl && (
                  <Image src={job.imageUrl} alt="Vacancy Image" width={50} height={50} />
                )}
              </td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/vacancy/edit/${job._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View/Edit
                    </button>
                  </Link>
                  <form action={`/api/vacancy/delete/${job._id}`} method="POST">
                    <button type="submit" className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} page={page} basePath="/dashboard/vacancies" />
    </div>
  );
};

export default VacanciesPage;
