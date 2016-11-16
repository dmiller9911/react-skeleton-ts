import { StyleSheet, css } from 'aphrodite';
import * as React from 'react';

export enum levelEnum {
  h1 = 1,
  h2 = 2,
  h3 = 3,
  h4 = 4,
  h5 = 5
}

export interface IProps {
  level?: levelEnum;
  children?: React.ReactNode;
  classNames?: React.CSSProperties[];
}

const styles = StyleSheet.create({
  [levelEnum[levelEnum.h1]]: {
    fontSize: '1.75rem'
  },
  [levelEnum[levelEnum.h2]]: {
    fontSize: '1.50rem'
  },
  [levelEnum[levelEnum.h3]]: {
    fontSize: '1.25rem'
  },
  [levelEnum[levelEnum.h4]]: {
    fontSize: '1rem'
  },
  [levelEnum[levelEnum.h5]]: {
    fontSize: '0.75rem'
  }
});

export default function Heading({ children, classNames = [], level = levelEnum.h3 }: IProps) {
  return React.createElement(`h${level}`, {
    children,
    className: css(styles[levelEnum[levelEnum[level]]], ...classNames)
  });
}
