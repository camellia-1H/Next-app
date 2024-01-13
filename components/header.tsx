import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  const { userId } = auth();
  return (
    <div className="h-16 bg-slate-400 flex items-center">
      <div>
        <Link href={"/"} className="pl-4">
          HƠM
        </Link>
      </div>

      {userId ? (
        <UserButton />
      ) : (
        <div className="ml-3">
          <Link href={"/sign-up"}>Sign-up</Link>
          <Link href={"/sign-in"} className="ml-3">
            Sign-in
          </Link>
        </div>
      )}
    </div>
  );
}
