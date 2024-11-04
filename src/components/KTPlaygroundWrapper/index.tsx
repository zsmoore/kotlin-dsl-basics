import React, { PropsWithChildren } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import KTPlayground, {KTPlaygroundProps} from 'kotlin-playground-react-component';

const KTPlaygroundWrapper = (props: PropsWithChildren<KTPlaygroundProps>) => {
  const { colorMode } = useColorMode();

  return (
    <KTPlayground {...props}
     theme={colorMode === 'dark' ? 'darcula' : 'default'}
     indent={2}
     autoComplete={true}
     onFlyHighlight={true}
     lines={true}
     matchBrackets={true}>
      {props.children}
    </KTPlayground>
  );
}

export default KTPlaygroundWrapper;