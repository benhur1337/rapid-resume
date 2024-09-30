export default function Home(){
  return(
    <div>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center h-[500px] w-screen p-6 duration-500">
        <strong className="text-5xl tracking-tighter">Rapidly Build Your Resume.</strong>
        <h4>The free, no bs, resume builder.</h4>
        <div>
          <button className="border bg-white text-black rounded p-2">Get Started</button>
        </div>
      </section>
    </div>
  )
}