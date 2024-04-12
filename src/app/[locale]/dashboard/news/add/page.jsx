"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from "@/components/dashboard/news/addNews/addNews.module.css";

// Import ReactQuill using dynamic import with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const AddNewsPage = () => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('description', description);
    // Assuming addNews is an API that handles the POST request
    await addNews(formData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <input type="text" placeholder="Author" name="author" required />
        <input type="date" placeholder="Date" name="date" required />
        <input type="number" placeholder="Time to read (minutes)" name="timeToRead" required />
        <input type="number" placeholder="Views" name="views" required />
        <ReactQuill theme="snow" value={description}  className={styles.quill} onChange={setDescription} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewsPage;
