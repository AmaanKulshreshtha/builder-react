import Image from "next/image";
import { Card } from "../UI/card";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <Card className={cn("p-4 bg-slate-950 border-0 rounded-none")}>
      <div className="z-10 w-full items-center justify-end font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert bg-white p-2"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Header;
