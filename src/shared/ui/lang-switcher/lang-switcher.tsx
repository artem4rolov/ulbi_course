import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/helpers'
import { Button } from '../button'
import { ButtonTheme } from '../button/button.types'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation')

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [])}
            theme={ButtonTheme.SOLID}
            onClick={changeLanguage}
        >
            {t('translateButton')}
        </Button>
    )
}
