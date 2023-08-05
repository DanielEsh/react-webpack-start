import { Button } from 'shared/ui-kit/Button'

interface Props {
  onCancel: () => void
}
export const CollectionCreateFormActions = ({ onCancel }: Props) => {
  return (
    <div className="flex gap-2 px-4 pb-6">
      <Button
        size="lg"
        variant="primary"
        type="submit"
      >
        Create
      </Button>
      <Button
        size="lg"
        variant="ghost"
        onClick={onCancel}
      >
        Close
      </Button>
    </div>
  )
}
