import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Question as QuestionType } from '../../shared/interfaces';
import { QUESTIONS } from '../../shared/long-texts';
import { storeForm } from './formSlice';
import Question from './Question';

export default function Form(): ReactElement {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const onSubmit = (data: any) => ;

  return (
    <form onSubmit={dispatch(storeForm())}>
      {QUESTIONS.map((question: QuestionType) => (
        <Question {...question} register={register} key={question.id} />
      ))}
      <input type="submit" />
    </form>
  );
}
