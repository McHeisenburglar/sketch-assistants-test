import CoreAssistant from '@sketch-hq/sketch-core-assistant'
import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'sketch-assistant-template',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/groups-max-layers': {
            active: true,
            maxLayers: 3,
            skipClasses: [],
          },
        },
      },
    }
  },
]

export default assistant
