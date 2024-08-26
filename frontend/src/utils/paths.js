import { API_BASE } from "./constants";

const BASE_URL = "/anythingllm"

export default {
  home: () => {
    return "/";
  },
  login: (noTry = false) => {
    return `/login${noTry ? "?nt=1" : ""}`;
  },
  onboarding: {
    home: () => {
      return `${BASE_URL}/onboarding`;
    },
    survey: () => {
      return `${BASE_URL}/onboarding/survey`;
    },
    llmPreference: () => {
      return `${BASE_URL}/onboarding/llm-preference`;
    },
    embeddingPreference: () => {
      return `${BASE_URL}/onboarding/embedding-preference`;
    },
    vectorDatabase: () => {
      return `${BASE_URL}/onboarding/vector-database`;
    },
    userSetup: () => {
      return `${BASE_URL}/onboarding/user-setup`;
    },
    dataHandling: () => {
      return `${BASE_URL}/onboarding/data-handling`;
    },
    createWorkspace: () => {
      return `${BASE_URL}/onboarding/create-workspace`;
    },
  },
  github: () => {
    return "https://github.com/Mintplex-Labs/anything-llm";
  },
  discord: () => {
    return "https://discord.com/invite/6UyHPeGZAC";
  },
  docs: () => {
    return "https://docs.anythingllm.com";
  },
  mailToMintplex: () => {
    return "mailto:team@mintplexlabs.com";
  },
  hosting: () => {
    return "https://my.mintplexlabs.com/aio-checkout?product=anythingllm";
  },
  workspace: {
    chat: (slug) => {
      return `${BASE_URL}/workspace/${slug}`;
    },
    settings: {
      generalAppearance: (slug) => {
        return `${BASE_URL}/workspace/${slug}/settings/general-appearance`;
      },
      chatSettings: (slug) => {
        return `${BASE_URL}/workspace/${slug}/settings/chat-settings`;
      },
      vectorDatabase: (slug) => {
        return `${BASE_URL}/workspace/${slug}/settings/vector-database`;
      },
      members: (slug) => {
        return `${BASE_URL}/workspace/${slug}/settings/members`;
      },
      agentConfig: (slug) => {
        return `${BASE_URL}/workspace/${slug}/settings/agent-config`;
      },
    },
    thread: (wsSlug, threadSlug) => {
      return `${BASE_URL}/workspace/${wsSlug}/t/${threadSlug}`;
    },
  },
  apiDocs: () => {
    return `${API_BASE}/docs`;
  },
  orderFineTune: () => {
    return `${BASE_URL}/fine-tuning`;
  },
  settings: {
    system: () => {
      return `${BASE_URL}/settings/system-preferences`;
    },
    users: () => {
      return `${BASE_URL}/settings/users`;
    },
    invites: () => {
      return `${BASE_URL}/settings/invites`;
    },
    workspaces: () => {
      return `${BASE_URL}/settings/workspaces`;
    },
    chats: () => {
      return `${BASE_URL}/settings/workspace-chats`;
    },
    llmPreference: () => {
      return `${BASE_URL}/settings/llm-preference`;
    },
    transcriptionPreference: () => {
      return `${BASE_URL}/settings/transcription-preference`;
    },
    audioPreference: () => {
      return `${BASE_URL}/settings/audio-preference`;
    },
    embedder: {
      modelPreference: () => `${BASE_URL}/settings/embedding-preference`,
      chunkingPreference: () => `${BASE_URL}/settings/text-splitter-preference`,
    },
    embeddingPreference: () => {
      return `${BASE_URL}/settings/embedding-preference`;
    },
    vectorDatabase: () => {
      return `${BASE_URL}/settings/vector-database`;
    },
    security: () => {
      return `${BASE_URL}/settings/security`;
    },
    appearance: () => {
      return `${BASE_URL}/settings/appearance`;
    },
    agentSkills: () => {
      return `${BASE_URL}/settings/agents`;
    },
    apiKeys: () => {
      return `${BASE_URL}/settings/api-keys`;
    },
    logs: () => {
      return `${BASE_URL}/settings/event-logs`;
    },
    privacy: () => {
      return `${BASE_URL}/settings/privacy`;
    },
    embedSetup: () => {
      return `${BASE_URL}/settings/embed-config`;
    },
    embedChats: () => {
      return `${BASE_URL}/settings/embed-chats`;
    },
    experimental: () => {
      return `${BASE_URL}/settings/beta-features`;
    },
  },
  experimental: {
    liveDocumentSync: {
      manage: () => `${BASE_URL}/settings/beta-features/live-document-sync/manage`,
    },
  },
};
