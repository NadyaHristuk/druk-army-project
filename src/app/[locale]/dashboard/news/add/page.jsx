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
    formData.append('description', description); // Add the description data from ReactQuill to the form data

    // Assuming addNews is an API endpoint that handles the POST request
    const response = await fetch('/api/news/add', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      alert('News added successfully');
      // Optionally reset the form or redirect the user
    } else {
      alert('Failed to add news');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
        <input type="text" placeholder="Title" name="title" required />
        <input type="text" placeholder="Author" name="author" required />
        <input type="date" placeholder="Date" name="date" required />
        <input type="number" placeholder="Time to read (minutes)" name="timeToRead" required />
        <ReactQuill theme="snow" value={description} className={styles.quill} onChange={setDescription} />
        <input type="file" name="image" /> {/* Add this line to include an image upload field */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewsPage;
