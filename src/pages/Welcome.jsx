import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

export default function Welcome({ user, signInHandle }) {
  let navigate = useNavigate();
  const [showColorIcon, setShowColorIcon] = useState(false);

  // navigate to '/chat' page if user is logged in
  useEffect(() => {
    if (user) {
      return navigate('/chat');
    }
  }, [user]);



  return (
    <>
    {/*   */}
      <main className='welcome'>
        <div className='section-container'>
          <h1 className='section-title'>Hello and welcome to our chatbox!</h1>
          <p className='section-description'>
            We're excited to have you join our community.{' '}
            Whether you're looking to connect with friends or meet new people, our chatbox is the perfect place to start. 
          </p>

          <div className='btn-container'>
            <button
              type='button'
              className='btn'
              id='join-btn'
              onClick={signInHandle}
              onMouseEnter={() => setShowColorIcon(true)}
              onMouseLeave={() => setShowColorIcon(false)}
            >
              {showColorIcon ? (
                <FcGoogle className='btn__icon' />
              ) : (
                <AiOutlineGoogle className='btn__icon' />
              )}
              <span className='btn__text'>Join Chat</span>
            </button>
            {/* /btn */}

            <a
              href='https://github.com/khakauj'
              target='_blank'
              className='btn btn-link'
            >
              <span className='btn__text'>View Code</span>
              <AiOutlineGithub className='btn__icon' id='github-icon' />
            </a>
            {/* /btn */}
          </div>
          {/* /button-container */}
        </div>
        {/* /section-container */}
      </main>
    </>
  );
}
