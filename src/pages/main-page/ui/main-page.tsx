import { Counter } from 'entities'
import { useTranslation } from 'react-i18next'

export const MainPage = () => {
    const { t } = useTranslation('main-page')

    return <div>{t('mainPage')}
        <Counter /></div>
}
