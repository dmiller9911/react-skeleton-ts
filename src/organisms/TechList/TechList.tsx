import { ITechProps, Tech } from '../../molecules';
import styles from './styles';
import { css } from 'aphrodite';
import * as React from 'react';

export interface IProps {
  techItems: ITechProps[];
}

export default function TechList({ techItems }: IProps) {
  const techList = techItems.map(tech => (
    <div key={ tech.name } className={ css(styles.techItem) } >
      <Tech { ...tech } />
    </div>
  ));

  return (
    <div className={ css(styles.techList) } >
      { techList }
    </div>
  );
}
