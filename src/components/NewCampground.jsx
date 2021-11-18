import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import upload from '../images/upload.svg';

const NewCampground = () => {
  let navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState();

  let imageName = [];

  if (uploadedImage) {
    imageName = uploadedImage.split('\\');
    imageName = imageName[imageName.length - 1];
  }

  return (
    <>
      <section className='mx-6 py-12 rounded text-Makara'>
        <h1 className='text-black text-5xl font-bold '>Add New Campground</h1>
        <form className=' flex flex-col my-8'>
          <label className=' text-xl py-4 font-semibold'>
            Campground Name
            <input
              className='mt-4 px-4 py-6 bg-floral-white text-lg rounded w-full'
              autoComplete='off'
              placeholder='Seven Sisters Waterfall'
              required
              type='text'
            />
          </label>

          <label className=' text-xl py-4 flex flex-col font-semibold'>
            Price
            <input
              className='mt-4 px-4 py-6 bg-floral-white text-lg rounded'
              autoComplete='off'
              placeholder='$149'
              type='text'
            />
          </label>
          <p className='  text-xl py-4 font-semibold'>Image</p>
          <label className=' bg-floral-white rounded text-xl py-4 cursor-pointer font-semibold tracking-wide flex items-center'>
            <img className='w-9 ml-4' src={upload} alt='Search' />
            <span className='ml-12 text-base leading-normal'>Select image</span>

            <input
              type='file'
              accept='image/png, image/jpeg'
              className='hidden'
              onChange={(evt) => setUploadedImage(evt.target.value)}
            />
          </label>
          <p className='text-md pb-4 pt-2 font-semibold'>
            Selected Image:
            <span className=' font-normal text-green-600'> {imageName}</span>
          </p>
          <label className='mt-6 text-xl py-4 font-semibold'>
            Description
            <textarea
              className=' mt-4 w-full px-4 py-6 bg-floral-white text-lg rounded'
              autoComplete='off'
              rows='12'
              placeholder='The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre (1,350 ft) tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres (820 ft). The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway. The waterfall is located just south of the historic Knivsflå farm, across the fjord from the old Skageflå farm. The falls are about 6.5 kilometres (4.0 mi) west of the village of Geiranger.'
              type='text'
            />
          </label>

          <button
            onClick={() => navigate('/campgrounds', { replace: true })}
            className='mt-6 w-full h-20 rounded-md bg-black text-white p-5 font-semibold text-xl tracking-wider'
          >
            Add Campground
          </button>
        </form>
      </section>
    </>
  );
};

export default NewCampground;
