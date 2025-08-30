"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Login() {
const { data: session, status } = useSession();
if (status === "loading") return <p>Loading...</p>;
if (status === "authenticated") {
return (
<div>
<p>Signed in as {session.user.name}</p>
<button onClick={() => signOut()}>Logout</button>
</div>
 );
}
return (
<div>
<p>User unauthenticated</p>
<button onClick={() => signIn("google")}>Login with Google</button>
</div>
 );
}