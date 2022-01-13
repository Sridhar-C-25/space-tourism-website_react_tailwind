import Nav from "./components/Nav"
function App ()
{
  return (
    <section className="bg-hero-bg md:h-screen bg-cover bg-center font-Barlow pb-2">
      <Nav />
      <div className="md:container px-2  pt-5 md:text-left text-center">
        <h1 className="text-2xl  text-white">
          <span className="text-[#ffffff70] font-bold mr-2">01</span> PICK YOUR DESTINATION</h1>
        <div className="md:flex items-center md:justify-between  pt-6 ">
          <img src="./src/assets/image-moon.png" className="md:w-[36%] w-[52%]  md:mx-0 mx-auto md:py-0 py-4" />
          <div className="md:w-1/2 ">
            <ul className="text-white pb-4">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 md:ml-2 border-b-2">MOON</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">MARS</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">EUROPA</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">TITAN</li>
            </ul>
            <h1 className="text-white w-full font-Bellefair pb-2 text-7xl">MOON</h1>
            <p className="text-[#d2d8f9] font-extralight text-sm md:w-2/3 md:pl-1 leading-6 tracking-wide pb-10 border-b-[0.5px] border-[#ffffff66]">
              See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
            </p>
            <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
              <div>
                <span className="text-[#d2d8f9] text-sm">Avg. distance</span>
                <h1 className="text-white text-xl">384,400 KM</h1>
              </div>
              <div>
                <span className="text-[#d2d8f9] text-sm">Est. travel time</span>
                <h1 className="text-white text-xl">3 DAYS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default App
