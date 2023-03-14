import React, { FC } from 'react';
import 'twin.macro';

const OtherChatBuble: FC = () => {
  return (
    <div tw="flex flex-col gap-1">
      <h3 tw="text-[#E5A443] font-semibold text-sm">Mary Hilda</h3>
      <div tw="flex gap-2 items-start">
        <div tw="flex flex-col gap-2 items-start justify-center p-3 rounded-[5px] bg-[#FCEED3] h-[max-content]  max-w-[400px] flex-wrap">
          <span tw="font-light text-[#4F4F4F] text-sm">
            No Worries. It will be completed ASAP. I have asked him yesterday.
          </span>
          <span tw="text-[#4F4F4F] text-xs">19:32</span>
        </div>
        <span tw="font-bold text-black text-lg mt-[-8px]">...</span>
      </div>
    </div>
  );
};

export default OtherChatBuble;
