import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className=" max-w-4xl text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        jpg your digital profile on 
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text"> the internet </span>
    </h1>
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <div className=" flex justify-center my-10">
    <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
        Join for free
    </a>

    <a href="#" className="py-3 px-4 mx-3 rounded-md border">
    Documentation

    </a>

    </div>
    <div className="flex mt-10 justify-center">
    <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
    <source src={video1} type ="video/mp4" />
    </video>

    <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
    <source src={video2} type ="video/mp4" />
    </video>


    </div>

    </div>
  )
}

export default HeroSection