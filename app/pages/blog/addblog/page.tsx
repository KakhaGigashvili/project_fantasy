'use client'

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './styles.module.scss'
import Button from '@/app/Components/button/button';

const BlogEditor: React.FC = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = () => {
    console.log('Blog Content:', content);
  };

  return (
    <div className={styles.container}>
        <h1>დაწერეთ ბლოგი</h1>
      <ReactQuill value={content} className={styles.text_styles} theme='snow' onChange={handleContentChange} />
      <Button onClick={handleSubmit}>Submit Blog</Button>
    </div>
  );
};

export default BlogEditor;
