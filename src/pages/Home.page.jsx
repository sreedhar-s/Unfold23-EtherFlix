import React, { useEffect, useState } from "react";

//components
import EntertainmentCardSlider from "../Entertainment/Entertainment.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


const HomePage = () => {
    const popularMovies = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxMDUuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-datlgvlndw-portrait.jpg"
  ]

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-gray-800 my-3">
            The Best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bms-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <PosterSlider 
              images={popularMovies} 
              title="Premiers" 
              subtitle="Brand new releases every Friday" 
              isDark={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 my-4">
          <PosterSlider
            images={popularMovies}
            title="Online Streaming Events"
            isDark={false}
          />
        </div>
        <div className="container mx-auto px-4 my-4">
          <PosterSlider
            images={popularMovies}
            title="Outdoor Events"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
