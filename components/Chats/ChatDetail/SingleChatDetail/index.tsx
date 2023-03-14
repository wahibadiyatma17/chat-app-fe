import React, { FC } from 'react';
import { styled } from 'twin.macro';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';

const SingleChatDetail: FC = () => {
  return (
    <StyledSingleChatDetail>
      <div className="single-chat__header">
        <div tw="px-[34px] pb-[18px] flex justify-between items-center">
          <div tw="flex gap-3 items-center">
            <AiOutlineArrowLeft width={16} height={16} />
            <div tw="flex flex-col gap-1">
              <h4 className="title-text">
                I - 589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
              </h4>
              <span className="subtitle-text">3 Participants</span>
            </div>
          </div>
          <IoIosClose size={'28px'} />
        </div>
      </div>
    </StyledSingleChatDetail>
  );
};

export default SingleChatDetail;

const StyledSingleChatDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .single-chat__header {
    border-bottom: 1px solid #bdbdbd;
    margin: 0px -34px;

    .title-text {
      color: #2f80ed;
      font-size: 16px;
      font-weight: 600;
    }

    .subtitle-text {
      color: #333333;
      font-size: 10px;
    }
  }
`;
