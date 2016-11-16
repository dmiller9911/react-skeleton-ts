import { Anchor, Heading, Paragraph } from '../../atoms';
import styles from './styles';
import { css } from 'aphrodite';
import * as React from 'react';

export interface IProps {
  description: string;
  githubLink: string;
  iconUrl?: string;
  name: string;
}

export default function Tech({ description, githubLink, iconUrl, name }: IProps) {
  const icon = !!iconUrl && <img width="100%" src={ iconUrl } />;

  return (
    <div className={ css(styles.tech) }>
      <div className={ css(styles.icon) }>{ icon }</div>
      <div className={ css(styles.info) }>
        <Heading classNames={ [styles.name] } >{ name }</Heading>
        <Paragraph>{ description }</Paragraph>
        <div className={ css(styles.link) }>
          <Anchor href={ githubLink }>View on Github</Anchor>
        </div>
      </div>
    </div>
  );
}
