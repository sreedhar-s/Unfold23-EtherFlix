import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                ></Dialog.Title>
                <div className="mt-2 flex flex-col gap-3 w-full">
                  <div className="text-center font-bold text-lg">
                    Connect your wallet
                  </div>
                  <button className="py-2 px-3 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-200">
                    Metamask 
                    <div className="w-8 h-8 rounded-full">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png"
                            alt = "metamask"
                            className="w-full h-full"
                        />
                    </div>
                  </button>
                  <button className="py-2 px-3 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-200">
                    Coinbase Wallet 
                    <div className="w-8 h-8 rounded-full">
                        <img 
                            src="https://images.ctfassets.net/c5bd0wqjc7v0/5Hv0XvERMU1cfshj0eWLDH/0190735339f3105fc90ed8af56123968/coinbase_wallet_logo_bg.svg"
                            alt = "Coinbase wallet"
                            className="w-full h-full"
                        />
                    </div>
                  </button>
                  <button className="py-2 px-3 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-200">
                    Wallet Connect 
                    <div className="w-8 h-8 rounded-full">
                        <img 
                            src="https://altcoinsbox.com/wp-content/uploads/2023/04/wallet-connect-logo.jpg"
                            alt = "wallet connect"
                            className="w-full h-full"
                        />
                    </div>
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
