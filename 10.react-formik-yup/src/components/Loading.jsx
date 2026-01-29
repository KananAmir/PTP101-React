const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-[200px] flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">{text}</p>
    </div>
  )
}

export default Loading
