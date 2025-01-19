const Main = () => {
  return (
    <div className='flex items-center justify-center bg-[url("/bg.svg")] bg-cover bg-bottom bg-no-repeat min-h-screen'>
        <h1 className="text-4xl font-bold">
            Welcome to <span className="bg-[url('/text-overlay.svg')] bg-cover bg-center bg-no-repeat">AssanGPT</span>
            <p className="text-sm font-normal my-5 text-center">
              Your AI-powered assistant for all your needs
            </p>
        </h1>
    </div>
  )
}

export default Main