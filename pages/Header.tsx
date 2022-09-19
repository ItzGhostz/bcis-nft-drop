import Link from "next/link";
import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

type Props = {};

function Header({}: Props) {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header className="flex flex-col space-y-2  sm:flex-row items-center justify-between">
      <Link href={"/"}>
        <h1 className="w-52 cursor-pointer lg:text-2xl md:text-xl sm:text-lg text-base font-extralight sm:w-80">
          The{" "}
          <span className="font-extrabold underline decoration-pink-600/50">
            BCIS
          </span>{" "}
          NFT Market Place
        </h1>
      </Link>

      <div className="flex flex-col space-y-2 sm:flex-row items-center space-x-4">
        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}

        <button
          onClick={() => (address ? disconnect() : connectWithMetamask())}
          className="rounded-xl bg-rose-400 text-white px-4 py-3 text-xs font-bold lg:px-5 lg:py-3 lg:text-base"
        >
          {address ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </header>
  );
}

export default Header;
