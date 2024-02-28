import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonTheme } from 'shared/ui/button/button.types'
import { classNames } from 'shared/helpers'

import { Button, Modal, Portal } from 'shared/ui'

import styles from './navbar.module.scss'
interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation('translation')

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div>logo</div>
            <div className={classNames(styles['navbar-links'])}>
                <Button theme={ButtonTheme.LINK} onClick={() => setIsOpen(true)}>
                    {t('signInButton')}
                </Button>
            </div>
            {/* <Portal element={<Modal isOpen={isOpen} setIsOpen={setIsOpen} />} domNode={document.body} /> */}
            <Portal element={<Modal isOpen={isOpen} setIsOpen={setIsOpen} />} domNode={document.body} />
        </div>
    )
}
