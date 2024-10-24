import promptChatGPTServices from '../services/tabs';

const initTabController = async () => {
  return {
    getPromptChatGPT: promptChatGPTServices().get,
  };
};

export default initTabController;
