import { Counter } from 'entities/counter'
import { useTranslation } from 'react-i18next'
import { PageComponent } from 'shared/ui'

const AboutPage = () => {
  const { t } = useTranslation('about-us-page')

  return (
    <PageComponent>
      {t('aboutUsPage')}
      <Counter />
    </PageComponent>
  )
}

export default AboutPage
