import { primary } from '../../styles/colors';
import styles from './styles';
import { css } from 'aphrodite';
import * as React from 'react';

export interface IProps {
  imageUrl?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function Hero({ imageUrl, children, backgroundColor = primary }: IProps) {
  const inlineStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage: `url("${imageUrl}")`
  };

  return (
    <div className={ css(styles.hero) } style={ inlineStyle }>
      <div>
        { children }
      </div>
    </div>
  );
}
