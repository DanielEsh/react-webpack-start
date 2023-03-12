import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('about')

  return <div className="h-[2800px]">{t('title')}</div>
}

export default AboutPage
