import { FC } from 'react'
import { MemoryRouter } from 'react-router-dom'

interface RouterProviderDecoratorProps {
    route?: string
    children: React.ReactNode
}

export const RouterProviderDecorator: FC<RouterProviderDecoratorProps> = ({route = '/', children}) => {
    return (
        <MemoryRouter initialEntries={['/']}>

            {children}
        </MemoryRouter>
    )
}