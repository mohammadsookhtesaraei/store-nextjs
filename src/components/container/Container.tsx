interface ContainerProps {
  children:React.ReactNode
}


const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
     {children}
    </div>
  )
}

export default Container