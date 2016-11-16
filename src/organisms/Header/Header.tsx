import { LogoLink } from '../../molecules';
import styles from './styles';
import { css } from 'aphrodite';
import * as React from 'react';

export interface IProps { }

export default class Header extends React.Component<{}, {}> {
   public state: {} = {};

   public render() {
     return (
       <div className={ css(styles.header) }>
          <LogoLink />
      </div>
     );
   }
 }
