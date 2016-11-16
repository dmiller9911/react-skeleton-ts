import * as React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export default function Paragraph({ children }: IProps) {
  return <p>{ children }</p>;
}
