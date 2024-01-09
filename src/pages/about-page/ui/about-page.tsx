import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about-us-page')

  return <div>{t('aboutUsPage')}</div>
}

export default AboutPage
