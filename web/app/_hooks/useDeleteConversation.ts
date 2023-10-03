import { currentPromptAtom } from "@/_helpers/JotaiWrapper";
import { execute } from "@/_services/pluginService";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { DataService } from "../../shared/coreService";
import { deleteConversationMessage } from "@/_helpers/atoms/ChatMessage.atom";
import {
  userConversationsAtom,
  getActiveConvoIdAtom,
  setActiveConvoIdAtom,
} from "@/_helpers/atoms/Conversation.atom";
import {
  showingProductDetailAtom,
  showingAdvancedPromptAtom,
} from "@/_helpers/atoms/Modal.atom";
import {
  MainViewState,
  setMainViewStateAtom,
} from "@/_helpers/atoms/MainView.atom";

export default function useDeleteConversation() {
  const [userConversations, setUserConversations] = useAtom(
    userConversationsAtom
  );
  const setCurrentPrompt = useSetAtom(currentPromptAtom);
  const setShowingProductDetail = useSetAtom(showingProductDetailAtom);
  const setShowingAdvancedPrompt = useSetAtom(showingAdvancedPromptAtom);
  const activeConvoId = useAtomValue(getActiveConvoIdAtom);
  const setActiveConvoId = useSetAtom(setActiveConvoIdAtom);
  const deleteMessages = useSetAtom(deleteConversationMessage);
  const setMainViewState = useSetAtom(setMainViewStateAtom);

  const deleteConvo = async () => {
    if (activeConvoId) {
      try {
        await execute(DataService.DELETE_CONVERSATION, activeConvoId);
        const currentConversations = userConversations.filter(
          (c) => c.id !== activeConvoId
        );
        setUserConversations(currentConversations);
        if (currentConversations.length === 0) {
          setMainViewState(MainViewState.Welcome);
        }
        deleteMessages(activeConvoId);
        setActiveConvoId(undefined);
        setCurrentPrompt("");
        setShowingProductDetail(false);
        setShowingAdvancedPrompt(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return {
    deleteConvo,
  };
}
