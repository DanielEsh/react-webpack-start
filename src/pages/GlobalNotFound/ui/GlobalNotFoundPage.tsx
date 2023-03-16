import { useTranslation } from 'react-i18next'

export const GlobalNotFoundPage = () => {
  const { t } = useTranslation()

  return <div>{t('globalNotFound')}</div>
}
