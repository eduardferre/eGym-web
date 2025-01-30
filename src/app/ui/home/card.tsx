export const Card = ({
  children,
  className
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={`${className} p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group`}
    >
      {children}
    </div>
  )
}

export const CardTitle = ({
  children
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <h3 className={'text-lg font-semibold text-white py-2'}>{children}</h3>
}

export const CardDescription = ({
  children
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <p className={'text-sm font-normal text-neutral-400 max-w-sm'}>
      {children}
    </p>
  )
}

export const CardSkeletonContainer = ({
  children,
  className,
  showGradient = true // Default to true
}: {
  className?: string
  children: React.ReactNode
  showGradient?: boolean
}) => {
  return (
    <div className={`relative h-[20rem] rounded-xl overflow-hidden`}>
      {showGradient && (
        <div className="absolute inset-0 z-40 bg-[rgba(40,40,40,0.30)] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent),linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      )}
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
