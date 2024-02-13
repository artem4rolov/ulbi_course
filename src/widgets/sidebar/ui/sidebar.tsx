import { useState } from 'react';
import { AppLink, AppLinkTheme, Button, classNames, LangSwitcher, ThemeSwitcher } from 'shared';
import { AboutUsIcon, GoHomeIcon } from 'shared/assets'

import styles from './sidebar.module.scss';
import { ButtonSize, ButtonTheme } from 'shared/ui/button/button.types';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { t } = useTranslation('translation')
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, {}, [
                props.className,
                collapsed ? styles.collapsed : styles.open,
            ])}
        >
            <div className={!collapsed ? styles['sidebar-links'] : styles['sidebar-links-collapsed']}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    <AboutUsIcon />{!collapsed && t('navLinkAboutUsPage')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    <GoHomeIcon />{!collapsed && t('navLinkMainPage')}
                </AppLink>
            </div>
            <div className={!collapsed ? styles['sidebar-settings'] : styles['sidebar-settings-collapsed']}>
                <Button
                    theme={ButtonTheme.SOLID_INVERTED}
                    size={ButtonSize.BUTTON_SQUARED}
                    data-testid="sidebar-collapse-btn"
                    className={styles['collapse-button']}
                    onClick={() => {
                        setCollapsed((prev) => !prev);
                    }}
                >
                    {collapsed ? '>' : '<'}
                </Button>
                <ThemeSwitcher />
                <LangSwitcher isShort={collapsed} />
            </div>
        </div>
    );
};
