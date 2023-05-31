import { Button } from '../Button'
import IconClose from 'shared/assets/icons/close.svg'

interface Props {
  onClick: () => void
}

export const ToastCloseButton = ({ onClick }: Props) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
    >
      <span className="w-[16px h-[16px]">
        <IconClose />
      </span>
    </Button>
  )
}
