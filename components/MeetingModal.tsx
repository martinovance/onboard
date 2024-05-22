import React, { ReactNode } from 'react'

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
}

const MeetingModal = ({ isOpen, onClose, title, className, image, children, buttonText, handleClick }: MeetingModalProps) => {
  return (
    <div>Meeting Modal</div>
  )
}

export default MeetingModal