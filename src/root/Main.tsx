import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { setupFirebase } from "api/firebase";
import { useSignIn, useSignOut } from "contexts/UserContext";
import { Router } from "Router";

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  useEffect(() => {
    setupFirebase();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });
  }, []);
  return (
    <main>
      <Router />
    </main>
  );
}

export default Main;
