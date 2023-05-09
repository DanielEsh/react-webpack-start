import { Button } from '../Button'
import IconClose from 'shared/assets/icons/close.svg'

interface Props {
  onClick: () => void
}

export const CloseButton = ({ onClick }: Props) => {
  return (
    <Button
      className="absolute right-4"
      variant="ghost"
      onClick={onClick}
    >
      <IconClose />
    </Button>
  )
}
