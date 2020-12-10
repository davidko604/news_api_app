declare namespace NewsAPI {
  /** Used https://transform.tools/json-to-typescript to help generate these types */

  /** https://newsapi.org/docs/endpoints */
  export interface Request {
    /** 'ok' || 'not okay' || 'error' ? */
    status: string
    totalResults?: number
    sources: Source[]
    articles: Article[]
  }

  /** https://newsapi.org/docs/endpoints/sources */
  export interface Source {
    id: string
    name: string
    description: string
    url: string
    /** Possible options: business entertainment general health science sports technology */
    category: Category
    /** Possible options: ar de en es fr he it nl no pt ru se ud zh */
    language: string
    country: Country
  }
  /** Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id
   * ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th
   * tr tw ua us ve za */
  export type Country = string

  /** https://newsapi.org/docs/endpoints/top-headlines */
  export interface Article {
    source: ArticleSource
    author?: string
    title: string
    description: string
    url: string
    urlToImage: string
    /** The date and time that the article was published, in UTC (+000) */
    publishedAt: string
    /** The unformatted content of the article, where available. This is truncated to 200 chars. */
    content?: string
  }

  export interface ArticleSource {
    id: string
    name: string
  }

  export type Category =
    | 'general'
    | 'sports'
    | 'business'
    | 'entertainment'
    | 'health'
    | 'science'
    | 'sports'
    | 'technology'
}
