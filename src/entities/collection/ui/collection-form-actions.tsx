import { Button } from 'shared/ui-kit/Button'

interface Props {
  primaryButtonLabel: string
  onCancel: () => void
}
export const CollectionFormActions = ({
  primaryButtonLabel,
  onCancel,
}: Props) => {
  return (
    <div className="flex gap-2 px-4 pb-6">
      <Button
        size="lg"
        variant="primary"
        type="submit"
      >
        {primaryButtonLabel}
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
