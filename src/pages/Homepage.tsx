import heroImg from '../assets/potrait.png'

function Homepage() {
    return (
        <section className="p-6 font-lato  h-[85vh] flex justify-around">
            <h1 className="text-8xl font-display flex mt-20 flex-col items-center">ABS associates <span>Chartered accountants</span></h1>
            <img src={heroImg} className='h-3/4' />
        </section>
    )
}

export default Homepage