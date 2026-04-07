import { createPortal } from "react-dom"
import { cn } from "../../../utils/cn"

interface SidePanelProps {
  children: React.ReactNode
  side: 'left' | 'right'
  className?: string
}

const SidePanel = ({ children, side, className }: SidePanelProps) => {
  return (
    createPortal(
      <div className={cn("fixed top-0 h-full w-1/4 bg-background z-50", side === 'left' ? 'left-0' : 'right-0', className)}>{children}</div>,
      document.getElementById('root')!
    )
  )
}

export default SidePanel