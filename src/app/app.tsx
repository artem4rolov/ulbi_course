import { useEffect } from 'react';
import { useTheme } from 'shared/hooks';
import { classNames } from 'shared/helpers';
import { Navbar, Sidebar } from 'widgets';
import { Router } from './providers';

import './styles/index.scss';

import '../shared/config/i18n/i18n';

export const App = () => {
    const { theme } = useTheme();
    // тест падения приложения и экрана ошибки
    // useEffect(() => {
    //     throw new Error()
    // }, [])

    return (
        <div
            className={classNames('app', { selectable: true, hovered: false }, [
                theme,
                'top-2',
                'left-5',
            ])}
        >
            <Navbar />
            <div className={'app-content'}>
                <Sidebar />
                <Router />
            </div>
        </div>
    );
};
