import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/assets/logowhatsapp-removebg-preview.png";
import { BackgroundBeamsWithCollision } from "@/component/ui/background-beams-with-collision";
import FlashMessage from './flashMessage'; // Import the FlashMessage component

export default function SignUpLogin() {
  const [error, setError] = useState('');
  const [flashMessage, setFlashMessage] = useState(null); // Flash message state
  const router = useRouter();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const age = formData.get('age') as string;
    const userClass = formData.get('class') as string;

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, age: parseInt(age), class: userClass }),
      });

      if (response.ok) {
        setFlashMessage({ message: 'Sign-up successful! Redirecting...', type: 'success' });
        setTimeout(() => {
          router.push('/student');
        }, 2000); // Delay the redirect for a few seconds to show the flash message
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setFlashMessage({ message: 'Login successful! Redirecting...', type: 'success' });
        setTimeout(() => {
          router.push('/student-signup');
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please check your credentials and try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      console.log('Google login successful');
      setFlashMessage({ message: 'Google login successful! Redirecting...', type: 'success' });
      setTimeout(() => {
        router.push('/student');
      }, 2000);
    } catch (err) {
      setError('Google login failed. Please try again.');
    }
  };

  return (
    <BackgroundBeamsWithCollision>
      {flashMessage && (
        <FlashMessage
          message={flashMessage.message}
          type={flashMessage.type}
          onClose={() => setFlashMessage(null)}
        />
      )}
      <div className="w-full min-h-screen flex flex-col px-4 md:px-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0A1E40,#1A1A1A_100%)]">
        {error && (
          <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-md bg-red-600">
            <span className="inline-block mt-1 mb-1 text-white">{error}</span>
          </div>
        )}
        <div className="flex justify-center">
          <Image src={Logo} alt="Saas Logo" height={250} width={250} className="mt-5 item-center" /> 
        </div>
        <h3 className="text-xl md:text-3xl text-center mt-10 text-gray-300">
          Student <span className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight bg-gradient-to-b from-blue-400 to-blue-600 text-transparent bg-clip-text">Registration Page</span>
        </h3>
        <div className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <div className="w-full px-4 md:px-16 lg:px-32">
              <h4 className="text-xl md:text-2xl mb-5 text-gray-300">Create your account</h4>
              <form onSubmit={handleSignUp} className="space-y-3">
                <div className='flex gap-2'>
                  <input
                    className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                    type="text" placeholder="First Name" name="firstName"
                  />
                  <input
                    className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                    type="text" placeholder="Last Name" name="lastName"
                  />
                </div>
                <div className='flex gap-2'>
                  <input
                    className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                    type="text" placeholder="Class" name="class"
                  />
                  <input
                    className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                    type="number" placeholder="Age" name="age"
                  />
                </div>
                <input
                  className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                  type="email" placeholder="Email" name="email"
                />
                <input
                  className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                  type="password" placeholder="Password" name="password"
                />
                <button
                  className="px-5 rounded-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white w-full text-lg md:text-sm"
                  type="submit"
                >
                  Create My Account
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full px-4 md:px-16 lg:px-32">
              <h4 className="text-xl md:text-2xl mb-5 text-gray-300">Login to your account</h4>
              <form onSubmit={handleLogin} className="space-y-3">
                <input
                  className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                  type="email" placeholder="Email" name="email"
                />
                <input
                  className="bg-gray-800 block w-full px-3 py-2 border-[1px] rounded-xl border-gray-700 text-lg md:text-sm text-white placeholder-gray-500"
                  type="password" placeholder="Password" name="password"
                />
                <button
                  className="px-5 rounded-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white w-full text-lg md:text-sm"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-500 text-lg md:text-sm">Or</span>
                </div>
              </div>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-full px-4 py-2 border border-gray-700 rounded-xl text-gray-300 bg-gray-800 hover:bg-gray-700 text-lg md:text-sm"
              >
                <FcGoogle className="w-6 h-6 md:w-6 md:h-6 mr-2" />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}