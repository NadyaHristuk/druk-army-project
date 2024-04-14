import { addJob } from "@/app/lib/actions";  // Ensure this function is implemented for jobs
import styles from "@/components/dashboard/vacancies/addVacancies/addVacancies.module.css";

const AddJobPage = () => {
  return (
    <div className={styles.container}>
      <form action="/api/job" className={styles.form} method="POST" enctype="multipart/form-data">
        <input type="text" placeholder="Job Title" name="title" required />
        <textarea
          name="skills"
          id="skills"
          rows="4"
          placeholder="List skills separated by commas (e.g., JavaScript, React)"
          required
        ></textarea>
        <input type="file" name="image" />
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
};

export default AddJobPage;