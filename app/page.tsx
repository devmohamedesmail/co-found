import Image from "next/image";
import { SignIn } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId, sessionId } = await auth()
  const user = await currentUser()
  console.log("user", user)
  return (
    <>

      <div className="flex min-h-screen items-center justify-center">
        <SignIn />
      </div>
    </>
  );
}
