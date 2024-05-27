import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './sidebar'
import { componentRender } from 'app/providers/tests/testWithRouter/component-render'

describe('Sidebar', () => {
  test('with only first param', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
