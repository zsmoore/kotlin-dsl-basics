import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn Kotlin',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Learn Kotlin basics with examples using other programming languages
      </>
    ),
  },
  {
    title: 'Learn DSLs',
    Svg: require('@site/static/img/graphql.svg').default,
    description: (
      <>
        Learn advanced Kotlin features by creating a DSL for <code>GraphQL</code>
      </>
    ),
  },
  {
    title: 'Interactive examples',
    Svg: require('@site/static/img/interactive.svg').default,
    description: (
      <>
        Write and run actual Kotlin code through examples
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
