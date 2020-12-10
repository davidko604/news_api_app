declare namespace NewsAPI {
  /** https://newsapi.org/docs/endpoints */
  export interface Request {
    /** 'ok' || 'not okay' || 'error' ? */
    status: string
    sources: Source[]
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
    /** Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id
     * ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th
     * tr tw ua us ve za */
    country: string
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
