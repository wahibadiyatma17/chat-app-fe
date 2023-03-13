import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import tw, { styled } from 'twin.macro';

import TextInput from '@/components/Inputs/TextInput';
import GroupChat from '../GroupChat';
import SingleChat from '../SingleChat';

const ChatContainer: FC = () => {
  return (
    <StyledChatContainer>
      <div className="chat-box__container">
        <StyledSearchInput>
          <TextInput suffix={<AiOutlineSearch width={12} height={12} />} placeholder="Search" />
        </StyledSearchInput>
        <GroupChat />
        <SingleChat />
      </div>
    </StyledChatContainer>
  );
};

export default ChatContainer;

const StyledChatContainer = styled.div`
  position: absolute;
  height: 500px;
  width: 502px;

  bottom: 80px;
  border: 1px solid #bdbdbd;
  background: #ffffff;
  padding: 20px 34px;

  .chat-box__container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }
`;

const StyledSearchInput = styled.div`
  width: 100%;
  max-width: 29.5rem;
  margin-bottom: 2px;

  .suffix-container {
    font-size: 1.5rem !important;
  }

  @media (max-width: 768px) {
    .input-wrapper {
      height: 2.5rem;

      input {
        font-size: 0.75rem !important;
      }
    }
  }
`;
