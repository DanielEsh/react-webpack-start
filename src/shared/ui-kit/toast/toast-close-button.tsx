import { Button } from '../button'
import IconClose from 'shared/assets/icons/close.svg'

interface Props {
  onClick: () => void
}

export const ToastCloseButton = ({ onClick }: Props) => {
  return (
    <Button
      className="absolute top-4 right-4"
      variant="ghost"
      size="xs"
      onClick={onClick}
    >
      <IconClose />
    </Button>
  )
}
