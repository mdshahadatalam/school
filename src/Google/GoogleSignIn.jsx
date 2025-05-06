import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
     const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          console.log(result);
          console.log("signIn successfully with google");
          
          
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.log(error);
          
        });
     }
  return (
   <>
   <div className='flex items-center justify-center gap-[10px] mt-2'>
   <button onClick={handleGoogleSignIn} className ="bg-[#3B9DF8] text-white rounded-md py-1 pl-1 pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-blue-500 transition-all duration-200">
                <div className="py-2 px-2.5 rounded-l-md bg-white">
                    <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                         alt="google logo"
                         className="w-[23px]"/>
                </div>
                Sign in with Google
     </button>
   </div>
   </>
  )
}
