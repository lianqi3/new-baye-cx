import React, { useState, memo, useCallback, useMemo } from 'react'
import { InfiniteScroll, DotLoading } from 'antd-mobile'

import Empty from '@/components/EmptyList'
import { useTranslation } from 'react-i18next'
export interface ListResponse<T> {
  total: number
  per_page: number
  current_page: number
  last_page: number
  data: T[]
}
interface VirtualListProps {
  children?: (item: any) => JSX.Element | null
  list: ListResponse<any> | null
  method: any
  propslimit: number
  itemKey: string
}
const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
  const { t } = useTranslation()
  return (
    <>
      {hasMore ? (
        <>
          <span>Loading</span>
          <DotLoading />
        </>
      ) : (
        <span>--- 没有更多了 ---</span>
      )}
    </>
  )
}

const VirtualList: React.FC<VirtualListProps> = ({
  children,
  list,
  method,
  itemKey,
  propslimit,
}) => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)
  // const [total, setTotal] = useState<number>(10);
  const [hasMore, setHasMore] = useState(true)

  // useEffect(() => {
  //   setLimit(propslimit);
  // }, [propslimit]);
  const data = useMemo(() => list?.data || [], [list])

  const loadMore = useCallback(async () => {
    if (Number(list?.total) === Number(data.length)) {
      setHasMore(false)
    } else {
      setLimit(limit + 10)
      await method({
        limit: limit,
        page,
      })
    }
    // setHasMore(false);
  }, [list, hasMore])

  if (list === undefined) {
    return null
  } else if (list?.data.length === 0) {
    return <Empty />
  } else {
    return (
      <>
        {list?.data.map((item: any) => {
          return (
            <React.Fragment key={item[itemKey as string]}>
              {children && children(item)}
            </React.Fragment>
          )
        })}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
          <InfiniteScrollContent hasMore={hasMore} />
        </InfiniteScroll>
      </>
    )
  }
}

export default memo(VirtualList)
