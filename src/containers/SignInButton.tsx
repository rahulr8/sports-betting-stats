import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Button } from "@chakra-ui/react";

import { useAuth } from "api/firebase";

export const SignInButton = () => {
  const auth = useAuth();
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = "ja";

    signInWithRedirect(auth, provider);
  };

  return <Button onClick={handleClick}>Sign In With Google</Button>;
};
