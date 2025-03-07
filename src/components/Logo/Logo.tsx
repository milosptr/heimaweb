import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  variant?: 'green' | 'white'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps } = props
  const { variant = 'green' } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Heima Logo"
      height={40}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] h-[30px] sm:h-[40px]')}
      src={`/heima_${variant}.svg`}
    />
  )
}
