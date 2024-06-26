import * as actions from "@/actions";
import { auth } from "@/auth";
import { Profile } from "@/components/profile";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signOut}>
        <Button type='submit'>SignOut</Button>
      </form>
      <form action={actions.signIn}>
        <Button type='submit'>SignIn</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}

      <Profile />
    </div>
  );
}
