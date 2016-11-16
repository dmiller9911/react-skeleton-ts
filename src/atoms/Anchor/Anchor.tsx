import { accent } from '../../styles/colors';
import { StyleSheet, css } from 'aphrodite';
import * as React from 'react';

export interface IProps extends React.HTMLProps<any> {
  children?: React.ReactNode;
  classNames?: React.CSSProperties[];
}

const styles = StyleSheet.create({
  anchor: {
    color: accent,
    fontSize: '0.9rem',
    textDecoration: 'none'
  }
});

export default function Paragraph(props: IProps) {
  const { classNames = [] } = props;
  if (props.classNames) {
    delete props.classNames;
  }
  return <a className={ css(styles.anchor, ...classNames) } {...props} />;
}
