import React, { FC } from 'react';
import 'twin.macro';

const OwnChatBuble: FC = () => {
  return (
    <div tw="flex flex-col gap-1 items-end">
      <h3 tw="text-[#9B51E0] font-semibold text-sm">You</h3>
      <div tw="flex gap-2 items-start">
        <span tw="font-bold text-black text-lg mt-[-8px]">...</span>
        <div tw="flex flex-col gap-2 items-start justify-center p-3 rounded-[5px] bg-[#EEDCFF] max-w-[400px] flex-wrap">
          <span tw="font-light text-[#4F4F4F] text-sm">
            No Worries. It will be completed ASAP. I have asked him yesterday.
          </span>
          <span tw="text-[#4F4F4F] text-xs">19:32</span>
        </div>
      </div>
    </div>
  );
};

export default OwnChatBuble;
