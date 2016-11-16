import styles from './styles';
import { css } from 'aphrodite';
import * as React from 'react';

export interface IProps { }

export default class Footer extends React.Component<{}, {}> {
   public state: {} = {};

   public render() {
     return (
       <div className={ css(styles.footer) } />
     );
   }
 }
