import React, { PropsWithChildren } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import KTPlayground from 'kotlin-playground-react-component';

const KTPlaygroundWrapper = (props: PropsWithChildren) => {
  const { colorMode } = useColorMode();

  return (
    <KTPlayground theme={colorMode === 'dark' ? 'darcula' : 'default'}>
      {props.children}
    </KTPlayground>
  );
}

export default KTPlaygroundWrapper;