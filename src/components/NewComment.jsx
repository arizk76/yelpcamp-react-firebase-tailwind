import { useNavigate, useParams } from 'react-router-dom';
const NewCommentPage = () => {
  let navigate = useNavigate();
  let { campgroundId } = useParams();

  return (
    <>
      <section className='mx-6 py-12 rounded text-Makara'>
        <h1 className='text-black text-5xl font-bold '>Add New Comment</h1>

        <form className=' flex flex-col my-8'>
          <label className='mt-6 text-xl py-4 font-semibold'>
            Description
            <textarea
              className=' mt-4 w-full p-6 bg-floral-white text-lg rounded'
              autoComplete='off'
              rows='8'
              placeholder='This was probably the best camp i have visited in the past year. definitely recommended and you must do it to enjoy the view.'
              type='text'
            />
          </label>

          <button
            onClick={() =>
              navigate(`/campgrounds/${campgroundId}`, { replace: true })
            }
            className='mt-6 w-full h-20 rounded-md bg-black text-white p-5 font-semibold text-xl tracking-wider'
          >
            Post comment
          </button>
        </form>
      </section>
    </>
  );
};

export default NewCommentPage;
