export const PageError = () => {
  const handleReloadPage = () => {
    location.reload()
  }

  return (
    <div>
      <p>Произошла ошибка</p>{' '}
      <button onClick={handleReloadPage}>Обновить страницу</button>
    </div>
  )
}
