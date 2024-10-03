import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";

import { HeaderAuth } from "@/components/header-auth";

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
              <Input />
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
