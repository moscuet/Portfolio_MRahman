import Main from "@/components/Main";
import FollowDownAnimation from "@/components/FollowDownAnimation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex-grow flex flex-col justify-center items-center p-4 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-10">
          Hi, I am Rahman
        </h1>
        <p className="text-base md:text-xl lg:text-2xl text-gray-800 text-center mt-4 px:5 sm:px-10 md:px-20 max-w-3xl sm:pb-10 md:pb-20">
          I am a Full-Stack Developer from Helsinki. Coding is my passion, and I
          love to build with a keen eye for details and functionality.
        </p>
        <Link href="/about" passHref>
          <Button variant="primary" className="my-6">
            More About Me
          </Button>
        </Link>

        <div className="absolute w-full bottom-[100px] sm:bottom-10 md:bottom-0">
          <FollowDownAnimation />
        </div>
      </div>
      <Main />
    </>
  );
}
