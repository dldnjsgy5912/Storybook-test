import AnswerList from '@/components/atomes/ask/AnswerList';
import React from 'react';
import Header from '@/components/atomes/ask/Header';
import Question from '@/components/atomes/ask/Question';

export default function Ask() {
  return (
    <>
      <Header />
      <Question />
      <AnswerList />
    </>
  );
}
