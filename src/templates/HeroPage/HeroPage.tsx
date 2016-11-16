import { Container } from '../../atoms';
import styles from './styles';
import { css } from 'aphrodite';
import * as React from 'react';

export interface IProps {
  hero: React.ReactNode;
  children?: React.ReactNode;
}

export default function HeroPage({ hero, children }: IProps) {
  return (
    <div className={ css(styles.heroPage) }>
      <div className={ css(styles.hero) }>
      { hero }
      </div>
      <div className={ css(styles.content) }>
        <Container>
          { children }
        </Container>
      </div>
    </div>
  );
}
