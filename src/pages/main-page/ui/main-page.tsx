import { useTranslation } from 'react-i18next'
import { PageComponent } from 'widgets'
import { VStack } from 'shared/ui/stack'

export const MainPage = () => {
  const { t } = useTranslation('main-page')

  return (
    <PageComponent>
      {t('mainPage')}
      <div>dasdsa</div>
      <div>dasdsa</div>
      <div>dasdsa</div>
      <div>dasdsa</div>
      <VStack>
        <div>dasds</div>
      </VStack>
      <div>dasdsa</div>
      <div>dasdsa</div>
      <div>dasdsa</div>
    </PageComponent>
  )
}
