import React from 'react';

const Poster = (props) => {
  return (
      <div className='flex flex-col items-start gap-2 px-3'>
        <div className='h-68'>
          <img 
            className='w-full h-full rounded-xl'
            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMzFLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355551-jkyruydpla-portrait.jpg"
            alt= "poster"
          />
        </div>
        <h3 className={`text-base font-semibold sm:text-sm ${props.isDark ? 'text-white' : 'text-gray-700'}`}>
          {props.original_title}
        </h3>
      </div>
  );
};

export default Poster;

