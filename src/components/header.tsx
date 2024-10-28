import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Suspense } from "react";

import { HeaderAuth } from "@/components/header-auth";
import { SearchInput } from "@/components/search-input";

export const Header = async () => {
  return (
    <header>
      <div className="container mx-auto px-4 max-w-6xl">
        <Navbar className="shadow mb-6">
          <NavbarBrand>
            <Link href="/" className="font-bold">
              Discuss
            </Link>
          </NavbarBrand>

          <NavbarContent justify="center">
            <NavbarItem>
              <Suspense>
                <SearchInput />
              </Suspense>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <HeaderAuth />
          </NavbarContent>
        </Navbar>
      </div>
    </header>
  );
};
