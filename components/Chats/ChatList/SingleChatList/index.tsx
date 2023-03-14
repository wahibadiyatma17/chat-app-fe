import React, { FC } from 'react';
import { styled } from 'twin.macro';

import { BaseChatProps } from '@/common/types/ChatTypes';

type SingleChatProps = BaseChatProps;

const SingleChat: FC<SingleChatProps> = (props) => {
  const { onClick } = props;
  return (
    <StyledSingleChat onClick={() => onClick()}>
      <div className="chat__container">
        <SingleChatIcon />
        <div className="chat-content__container">
          <h4 className="person-name">FastVisa Support</h4>
          <span className="chat-text">Hey there! welcome to your inbox</span>
        </div>
        <span tw="text-xs text-[#4F4F4F]">January 1, 2021 19:10</span>
      </div>
    </StyledSingleChat>
  );
};

export default SingleChat;

const StyledSingleChat = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
  border-bottom: 1px solid #828282;
  margin-top: 24px;
  cursor: pointer;

  .chat__container {
    display: flex;
    gap: 16px;
  }

  .chat-content__container {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .person-name {
    color: #2f80ed;
    font-size: 14px;
    font-weight: 600;
    max-width: 360px;
  }

  .chat-text {
    color: #4f4f4f;
    font-size: 10px;
    font-weight: 400;
  }
`;

const SingleChatIcon = () => (
  <div tw="flex items-center justify-center bg-[#2F80ED] w-[34px] h-[34px] rounded-full">
    <h3 tw="text-sm font-bold text-white">F</h3>
  </div>
);
