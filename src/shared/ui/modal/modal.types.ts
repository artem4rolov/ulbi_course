import { SetStateAction } from "react";

export interface ModalProps {
  className?: string;
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
