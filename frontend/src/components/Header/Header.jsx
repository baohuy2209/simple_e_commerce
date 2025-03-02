import React from "react";
import {
  Settings,
  House,
  BookA,
  ShoppingCart,
  AlignJustify,
  User,
  LogOut,
  Key,
} from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "./header.css";
import AuthService from "../../services/authServive";
const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo" src="/clothes_logo.png" alt="Logo" />
      </div>
      <div>
        <ul className="header__content">
          <li>
            <a href="/">
              <span>Home</span>
              <House size={16} />
            </a>
          </li>
          <li>
            <a href="about">
              <span>About us</span>
              <BookA size={16} />
            </a>
          </li>
          <li>
            <a href="/cart">
              <span>Cart</span>
              <ShoppingCart size={16} />
            </a>
          </li>
          <li className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <Menu>
              <MenuButton>
                <AlignJustify size={25} className="text-white fill-white/60" />
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom start"
                className="w-40 px-2 py-2 bg-[#FBFBFB] origin-top-right  rounded-xl border border-white/5 p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <a
                    className=" w-full mx-auto px-2 py-1 rounded-lg flex flex-row justify-between items-center data-[focus]:bg-[#F2EFE7]"
                    href="/settings"
                  >
                    <span className="font-semibold">Settings</span>
                    <Settings size={20} />
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className=" w-full mx-auto px-2 py-1 rounded-lg flex flex-row justify-between items-center data-[focus]:bg-[#F2EFE7]"
                    href="/profile"
                  >
                    <span className="font-semibold">Profile</span>
                    <User size={20} />
                  </a>
                </MenuItem>
                <MenuItem>
                  {currentUser ? (
                    <a
                      className=" w-full mx-auto px-2 py-1 rounded-lg flex flex-row justify-between items-center data-[focus]:bg-[#F2EFE7]"
                      href="/login"
                      onClick={() => {
                        AuthService.logout();
                      }}
                    >
                      <span className="font-semibold">Logout</span>
                      <LogOut size={20} />
                    </a>
                  ) : (
                    <a
                      className=" w-full mx-auto px-2 py-1 rounded-lg flex flex-row justify-between items-center data-[focus]:bg-[#F2EFE7]"
                      href="/login"
                    >
                      <span className="font-semibold">Login</span>
                      <Key size={20} />
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
