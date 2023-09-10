import { Button } from '../button'
import IconClose from 'shared/assets/icons/close.svg'

interface Props {
  onClick: () => void
}

export const ModalCloseButton = ({ onClick }: Props) => {
  return (
    <Button
      className="absolute top-2 right-4"
      size="sm"
      variant="ghost"
      type="button"
      onClick={onClick}
    >
      <IconClose />
    </Button>
  )
}
