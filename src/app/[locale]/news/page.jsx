import React from 'react';
import {
  NeedSupportArticle,
  NewsList,
  PageWrapper,
} from '@/components/newsPage';
import Container from '@/components/container/Container';

const News = () => {
  return (
    <Container>
      <PageWrapper>
        <NewsList />
        <NeedSupportArticle />
      </PageWrapper>
    </Container>
  );
};

export default News;
