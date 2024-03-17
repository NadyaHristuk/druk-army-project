import React from 'react';
import { NeedSupportArticle, NewsList, Paginator } from '@/components/newsPage';

const News = () => {
  return (
    <div className="pageWrapper">
      <NewsList />
      <NeedSupportArticle />
      <Paginator />
    </div>
  );
};

export default News;
