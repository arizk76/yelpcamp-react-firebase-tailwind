const Banner = ({ closeBanner }) => {
  return (
    <div className='flex justify-between bg-black text-white px-6 py-3'>
      <p className='text-center font-medium text-xl tracking-wide'>
        This project was made by
        <span className='text-baby-blue underline'>Colt Steele</span> and
        designed by <span className='text-baby-blue underline'>Codewell</span>
      </p>
      <img
        className='cursor-pointer'
        onClick={closeBanner}
        src='images/close.svg'
        alt='close'
      />
    </div>
  );
};

export default Banner;
