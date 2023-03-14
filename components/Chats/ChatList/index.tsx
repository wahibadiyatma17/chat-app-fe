import React, { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { styled } from 'twin.macro';

import TextInput from '@/components/Inputs/TextInput';
import { useChatStore } from '@/common/stores/ChatStore';

import GroupChatList from './GroupChatList';
import SingleChatList from './SingleChatList';

const ChatList: FC = () => {
  const chatStore = useChatStore();
  return (
    <>
      <StyledSearchInput>
        <TextInput suffix={<AiOutlineSearch width={12} height={12} />} placeholder="Search" />
      </StyledSearchInput>
      <GroupChatList onClick={() => chatStore.onChatDetail('group-chat-detail')} />
      <SingleChatList onClick={() => chatStore.onChatDetail('single-chat-detail')} />
    </>
  );
};

export default ChatList;

const StyledSearchInput = styled.div`
  width: 95%;

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
