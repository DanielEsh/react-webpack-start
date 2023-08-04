import { TypeWithChildren } from 'shared/ui-kit/types'

export const Table = ({ children }: TypeWithChildren) => {
  return (
    <div className="rounded-md border">
      <div className="w-full overflow-auto">
        <table className="caption-bottom w-full text-sm">{children}</table>
      </div>
    </div>
  )
}
