import { StyleSheet, css } from 'aphrodite';
import * as React from 'react';

export interface IProps {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    margin: '0 auto',
    maxWidth: '900px'
  }
});

export default function Container({ children }: IProps) {
  return <div className={ css(styles.container) }>{ children }</div>;
}
