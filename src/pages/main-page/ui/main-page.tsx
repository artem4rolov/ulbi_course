import { Counter } from '../../../entities/counter/ui/counter'
import { useTranslation } from 'react-i18next'
import { Input, PageComponent } from 'shared'

export const MainPage = () => {
  const { t } = useTranslation('main-page')

  return (
    <PageComponent>
      {t('mainPage')}
      <Counter />
      <Input placeholder="test" onChange={(value) => console.log(value)} />
    </PageComponent>
  )
}
