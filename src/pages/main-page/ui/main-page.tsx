import { Counter } from '../../../entities/counter/ui/counter'
import { useTranslation } from 'react-i18next'
import { Input, Listbox } from 'shared'
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
        <Listbox
          defaultValue={'Выберите значение'}
          onChange={(value) => {}}
          items={[
            { value: '1', content: 'Value 1' },
            { value: '2', content: 'Value 2', disabled: true },
            { value: '3', content: 'Value 3' },
          ]}
          value={undefined}
        />
      </VStack>
      <div>dasdsa</div>
      <div>dasdsa</div>
      <div>dasdsa</div>
    </PageComponent>
  )
}
