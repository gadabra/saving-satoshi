'use client'

import { chapters } from 'content'
import { lessons } from 'content'
import { redirect } from 'next/navigation'
import { TextImage } from 'ui'
import { usePathData } from 'hooks'

export default function Introduction({ children, lang }) {
  const { chapterId, lessonId } = usePathData()
  const chapter = chapters[chapterId]

  if (!chapter) {
    return redirect('/chapters')
  }

  const chapterLessons = lessons[chapterId]
  const intro = chapterLessons[lessonId]
  const introIndex = chapter.metadata.intros.indexOf(lessonId)
  const isLastIntro = introIndex >= chapter.metadata.intros.length - 1
  const nextLessonId = isLastIntro
    ? chapter.metadata.lessons[0]
    : chapter.metadata.intros[introIndex + 1]

  return (
    <TextImage
      lang={lang}
      imageSrc={intro.metadata.image}
      imageAlt={intro.metadata.title}
      next={`/chapters/${chapterId}/${nextLessonId}`}
      btnEnabled={chapter.metadata.lessons.length > 0}
    >
      {children}
    </TextImage>
  )
}
