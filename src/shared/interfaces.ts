export interface Question {
  id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

export interface InputProps {
  onChange: any;
  name: string;
  type: string;
}
