import { Hourglass } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-primary-700 font-bold">
      <Image 
        src="/logo.png"
        width={400}
        height={400}
        alt="logo Enma"
      />
      <p className="text-heading1-bold font-normal leading-10 mt-8 flex flex-col justify-center items-center gap-y-8">
        Coming soon <Hourglass className="h-10 w-10" />
      </p>
    </div>
  );
}
