import { Button } from "@chakra-ui/react";

import { useAuth } from "api/firebase";

const SignOutButton = () => {
  const auth = useAuth();
  const handleClick = () => {
    auth.signOut();
  };

  return <Button onClick={handleClick}>Sign Out</Button>;
};

export default SignOutButton;
