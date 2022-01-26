import React from 'react';

import { colors } from '../../components/utils/theme';
import { Text, Code } from '../../components';

import { DocsStory, ArgsTable } from '@storybook/addon-docs';

import { Trans, useTranslation } from 'react-i18next';

function docsWrapper({context, children}) {
  const { name } = context.component
  const { t } = useTranslation(name.toLowerCase())

  return (
    <>
      <Text tag="h1">
        {name}
      </Text>
      <Text variant="body1" style={{color: colors.grey[500]}}>
        <Trans t={t} components={{ code: <Code inline/> }}>
          {'description'}
        </Trans>
      </Text>
      <Code
        code={`import { ${name} } from 'wuki'`}
      />
      {children}
      <Text tag="h2" variant="h3">
        {t('examples.title')}
      </Text>
      {context.componentStories().map((story) => (
        <React.Fragment key={story.id}>
          <Text tag="h3" variant="h6">
            {t(`examples.${story.name.toLowerCase()}.title`)}
          </Text>
          <Text variant="body2">
            <Trans t={t} components={{ code: <Code inline/> }}>
              {`examples.${story.name.toLowerCase()}.description`}
            </Trans>
          </Text>
          <DocsStory id={story.id} />
        </React.Fragment>
      ))}
      <Text tag="h2" variant="h3">Component API (props)</Text>
      <Text variant="body2">Благодаря простому API(props) вы можете настроить компонент под ваши нужды. Чаще всего в этом не будет нужды, но для лучшего эффекта они и существуют</Text>
      <ArgsTable />
    </>
  )
}

// Divide the table into two parts, the first will contain the props of the component itself, the second will contain global

export default docsWrapper