// типы для видов блоков (блок с изображением | с кодом | с текстом)
export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

// основной тип статьи, от которого наследуются виды статей
export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

// блок статьи с кодом
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

// блок статьи с изображением
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

// блок статьи с текстом
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title: string
  paragraphs: string[]
}

// тема статьи
export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export interface ArticleSchema {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock
}
