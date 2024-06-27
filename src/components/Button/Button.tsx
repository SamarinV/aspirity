type Props = {
  variant: string
  children: React.ReactNode
  className?: string
}

const Button = ({ variant, children, className }: Props) => {
  return (
    <button
      className={`button-${variant} py-2 px-4 rounded-sm text-dark-text-primary bg-dark-bg-accent ${className} hover:bg-brand-darkBlue transition-all `}
    >
      {children}
    </button>
  )
}

export default Button
