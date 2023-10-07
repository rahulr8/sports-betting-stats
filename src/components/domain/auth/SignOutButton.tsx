import { useAuth } from "lib/firebase";

export const SignOutButton = () => {
  const auth = useAuth();
  const handleClick = () => {
    auth.signOut();
  };

  return (
    <button onClick={handleClick} type="button" className="btn normal-case">
      Sign Out
    </button>
  );
};
