import React, { useContext, useState } from "react";
import { ethers, Contract } from "ethers";
import { rentContractABI, rentContractAddress } from "../../interaction";

// Context
import { MovieContext } from "../../context/movie.context";


const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  // optional chaining.
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rpcUrl = "https://eth-sepolia.g.alchemy.com/v2/Mh8H4AwGx8daVdv_gbTV055ghqVFtzpP";
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(import.meta.env.VITE_PUBLIC_WALLET_PRIVATE_KEY, provider);


  async function callContract(action) {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const numberContract = new Contract(rentContractAddress, rentContractABI, wallet);

          if (action === 'rent') {
            // Call the rent function on the contract
            const rentTxn = await numberContract.connect(wallet).rentMovie({
              value: ethers.utils.parseEther('0.0019'),
            });

            await rentTxn.wait();
          } else if (action === 'buy') {
            // Call the buy function on the contract
            const buyTxn = await numberContract.buyMovie({
              value: ethers.utils.parseEther("0.0019"),
            });

            await buyTxn.wait();
          }
        } else {
          console.log('Metamask not detected. Please install Metamask.');
          // You can show a user-friendly message or redirect to a Metamask installation guide
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-8">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bms-700 p-1 text-xs text-white rounded-md">
            Streaming now
          </span>
        </div>
        <h1 className="text-white lg:text-5xl font-bold hidden lg:block ">
          {movie.original_title}
        </h1>
        <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>4k &bull; {movie.original_language}</h4>
            <h4>
              {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 13+
            </h4>
          </div>
          <div className="flex items-center gap-3 md:px-2 md:w-screen lg:w-full">
            <button
              onClick={() => callContract('rent')}
              className="bg-sky-700 w-full py-3 text-white font-semibold rounded-lg"
            >
              Rent @0.00019ETH
            </button>
            <button
              onClick={() => callContract('buy')}
              className="bg-sky-700 w-full py-6 text-white font-semibold rounded-lg"
            >
              Buy @0.0019ETH
            </button>
            <script src="interaction.js"></script>  
            <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
                type="application/javascript"></script>
          </div>
        </div>  
      </div>
    </>
  );
};

export default MovieInfo;