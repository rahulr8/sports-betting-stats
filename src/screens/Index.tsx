import { useAuthState } from "contexts/UserContext";
import { SignInButton } from "containers/SignInButton";
import { SignOutButton } from "containers/SignOutButton";
import { Head } from "components/Head";

function Index() {
  const { state } = useAuthState();

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div>
            <div className="mt-4 grid gap-2">
              {state.state === "UNKNOWN" ? null : state.state === "SIGNED_OUT" ? <SignInButton /> : <SignOutButton />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;