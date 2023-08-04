import { Button } from '../Button'
import IconClose from 'shared/assets/icons/close.svg'

interface Props {
  onClick: () => void
}

export const CloseButton = ({ onClick }: Props) => {
  return (
    <Button
      className="absolute top-2 right-4"
      size="sm"
      variant="ghost"
      onClick={onClick}
    >
      <IconClose />
    </Button>
  )
}
