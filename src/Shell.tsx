import { Footer, Header } from './organisms';
import { StyleSheet, css } from 'aphrodite';
import * as React from 'react';

interface IProps {
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1
  },
  shell: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
});

export default function Shell({ children }: IProps) {
  return (
    <div className={ css(styles.shell) }>
      <Header />
      <main className={ css(styles.main) } >{ children }</main>
      <Footer />
    </div>
  );
}
