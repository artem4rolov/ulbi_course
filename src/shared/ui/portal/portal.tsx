import React, { FC } from 'react'
import { createPortal } from 'react-dom';

interface ModalProps {
    element: React.ReactNode
    domNode: HTMLElement
}

export const Portal: FC<ModalProps> = ({element, domNode}) => {
    return createPortal(element, domNode)
}
