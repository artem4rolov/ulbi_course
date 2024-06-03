import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/helpers'
import { Button } from '../button'
import { ButtonSize, ButtonTheme } from '../button/button.types'

interface LangSwitcherProps {
  className?: string
  isShort?: boolean
}

export const LangSwitcher = ({ isShort, className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation('translation')

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [])}
      theme={ButtonTheme.SOLID}
      size={!isShort ? ButtonSize.BUTTON_SIZE_M : ButtonSize.BUTTON_SQUARED}
      onClick={changeLanguage}
    >
      {t(!isShort ? 'translateButton' : 'translateButtonShort')}
    </Button>
  )
}
