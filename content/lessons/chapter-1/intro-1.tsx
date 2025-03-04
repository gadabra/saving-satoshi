import { useTranslations } from 'hooks'
import { Introduction, Text } from 'ui'

export const metadata = {
  title: 'intro_one.title',
  image: '/assets/images/chapter-1-intro-1.jpg',
}

export default function ReapingRewards({ lang }) {
  const t = useTranslations(lang)

  return (
    <Introduction lang={lang}>
      <Text className="text-lg md:text-xl">{t('intro_one.paragraph_one')}</Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('intro_one.paragraph_two')}
      </Text>
      <Text className="mt-4 text-lg md:text-xl">
        {t('intro_one.paragraph_three')}
      </Text>
    </Introduction>
  )
}
