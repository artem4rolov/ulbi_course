import { Counter } from 'entities/counter'
import { useTranslation } from 'react-i18next'
import { PageComponent } from 'widgets/page-component'

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
