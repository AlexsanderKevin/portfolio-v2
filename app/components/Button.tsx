
export default function Button(
  { 
    children, 
    onclick 
  } : { 
    children: React.ReactNode, 
    onclick?: () => void 
  }
) {

  return (
    <button
      onClick={onclick}
      className="bg-purple-700 px-8 h-12 rounded-lg cursor-pointer font-semibold hover:bg-purple-600 transition-all duration-100 flex items-center gap-1"
    >
      {children}
    </button>
  )
}
