import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palaquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You <span className='text-coral-red'>Super </span>
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Delivering top-tier comfort and elegance, our carefully designed
          footwear is meticulously crafted to enhance your journey, offering
          unparalleled quality, innovation, and a hint of sophistication.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className='mt-11'>
          {" "}
          <Button label='View Details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='shoe8'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
