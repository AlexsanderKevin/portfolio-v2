
export default function Button(
  { 
    children, 
    onclick,
    className = "",
  } : { 
    children: React.ReactNode, 
    onclick?: () => void,
    className?: string,
  }
) {

  return (
    <button
      onClick={onclick}
      className={`
        bg-purple-700 px-6 h-10 rounded-lg cursor-pointer font-semibold transition-all duration-100 flex items-center gap-1 text-sm
        hover:bg-purple-600 hover:text-white
        ${className}
      `}
    >
      {children}
    </button>
  )
}
