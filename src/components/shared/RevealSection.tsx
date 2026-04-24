import { type ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface Props {
  children: ReactNode
  className?: string
  as?: 'section' | 'div' | 'footer'
  id?: string
}

export function RevealSection({ children, className = '', as: Tag = 'section', id }: Props) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>()

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      id={id}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
