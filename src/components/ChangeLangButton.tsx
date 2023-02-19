import { useTranslation } from 'react-i18next'

export const ChangeLangButton = () => {
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <button onClick={handleChangeLanguage}>{t('changeButton')}</button>
}
