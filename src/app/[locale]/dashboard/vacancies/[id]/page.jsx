import { updateJob } from "@/app/lib/actions";  // Ensure this function is implemented for jobs
import { fetchJob } from "@/app/lib/data";  // Ensure this function is implemented to fetch job details
import styles from "@/components/dashboard/vacancies/singleVacancies/singleVacancies.module.css";
import Image from "next/image";

const SingleJobPage = async ({ params }) => {
  const { id } = params;
  const job = await fetchJob(id);  // Fetch job details instead of user

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={job.imageUrl || "/noavatar.png"} alt="" layout="fill" />
        </div>
        <h1>{job.title}</h1>
      </div>
      <div className={styles.formContainer}>
        <form action={`/api/jobs/update/${job._id}`} method="POST" className={styles.form} enctype="multipart/form-data">
          <input type="hidden" name="id" value={job._id} />
          <label>Title</label>
          <input type="text" name="title" defaultValue={job.title} />
          <label>Skills</label>
          <textarea name="skills" defaultValue={job.skills.join(', ')} />
          <label>Image</label>
          <input type="file" name="image" />
          <button type="submit">Update Job</button>
        </form>
      </div>
    </div>
  );
};

export default SingleJobPage;
