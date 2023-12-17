import IconHardDrive from 'shared/assets/icons/hard-drive.svg'

export const DataTableEmpty = () => {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <IconHardDrive className="h-10 w-10" />
      <span className="text-lg">данные не найдены</span>
    </div>
  )
}
