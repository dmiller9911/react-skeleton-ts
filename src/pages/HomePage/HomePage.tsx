import { Container, Heading, headingLevel } from '../../atoms';
import { ITechProps } from '../../molecules';
import { Hero, TechList} from '../../organisms';
import { HeroPage } from '../../templates';
import styles from './styles';
import * as React from 'react';

const techItems: ITechProps[] = [
  {
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    githubLink: 'https://github.com/Microsoft/TypeScript',
    iconUrl: require<string>('../../assets/techLogos/ts.png'),
    name: 'TypeScript'
  },
  {
    description: 'A JavaScript library for building user interfaces',
    githubLink: 'https://github.com/facebook/react',
    iconUrl: require<string>('../../assets/techLogos/react.png'),
    name: 'React',
  },
  {
    description: 'Declarative routing for React',
    githubLink: 'https://github.com/ReactTraining/react-router',
    iconUrl: require<string>('../../assets/techLogos/react-router.png'),
    name: 'React Router (V3)'
  },
  {
    description: `It's inline styles, but they work!`,
    githubLink: 'https://github.com/Khan/aphrodite',
    iconUrl: require<string>('../../assets/techLogos/aphrodite.png'),
    name: 'Aphrodite'
  },
  {
    description: 'A bundler for javascript and friends.',
    githubLink: 'https://github.com/webpack/webpack',
    iconUrl: require<string>('../../assets/techLogos/webpack.png'),
    name: 'Webpack'
  },
  {
    description: 'Painless JavaScript Testing.',
    githubLink: 'https://github.com/facebook/jest',
    iconUrl: require<string>('../../assets/techLogos/jest.png'),
    name: 'Jest'
  },
];

export default function HomePage(props: {}) {
  const HeroComponent = (
    <Hero>
      <Container>
        <Heading level={ headingLevel.h1} classNames={ [styles.heroHeader] }>
          React + TypeScript
        </Heading>
      </Container>
    </Hero>
  );

  return (
    <HeroPage hero={ HeroComponent }>
      <section>
        <Heading level={ headingLevel.h2 } classNames={ [styles.contentHeader] }>
          Basic Stack
        </Heading>
        <div>
          <TechList techItems={ techItems } />
        </div>
      </section>
    </HeroPage>
  );
}
