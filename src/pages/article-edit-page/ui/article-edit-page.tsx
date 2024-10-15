import { useParams } from 'react-router-dom'
import { PageComponent } from 'widgets'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return <PageComponent>{isEdit ? 'Редактирование' : 'Создание'}</PageComponent>
}

export default ArticleEditPage
