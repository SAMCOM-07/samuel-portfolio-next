

const Home = () => {
  return (
    <main className="h-screen w-full grid place-content-center place-items-center text-center max-w-[90%] mx-auto">


     <div className="mainbg w-full -z-20 absolute inset-0 top-18"></div>

      <div className="flex gap-2 items-center px-3 -z-10 py-1 rounded-full border-2 border-border bg-background">
        <span className="block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <h3 className="font-bold text-sm">Available for work</h3>
      </div>
      <h1 className="font-bold text-5xl md:text-7xl mt-6">Shonde Samuel</h1>
      <span className="font-bold text-5xl md:text-6xl mt-6">Frontend Web-Developer</span>
      <p className="text-muted-foreground max-w-xs mt-4">Passionate about building outstanding websites using the latest web technologies.</p>

    </main>
  )
}

export default Home
