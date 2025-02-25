'use strict'
const WaveHandler = require('../../../../src/service/waveHandler')
jest.mock('fs')

const testContext = {
  handler: WaveHandler,
  testData: [
    [
      'discovery',
      'force-app/main/default/discovery/DiscoveryAIModelTest.model',
      new Set(['DiscoveryAIModelTest']),
      'DiscoveryAIModel',
    ],
    [
      'discovery',
      'force-app/main/default/discovery/DiscoveryGoalTest.goal',
      new Set(['DiscoveryGoalTest']),
      'DiscoveryGoal',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveApplicationTest.wapp',
      new Set(['WaveApplicationTest']),
      'WaveApplication',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveComponentTest.wcomp',
      new Set(['WaveComponentTest']),
      'WaveComponent',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveDataflowTest.wdf',
      new Set(['WaveDataflowTest']),
      'WaveDataflow',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveDashboardTest.wdash',
      new Set(['WaveDashboardTest']),
      'WaveDashboard',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveDatasetTest.wds',
      new Set(['WaveDatasetTest']),
      'WaveDataset',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveLensTest.wlens',
      new Set(['WaveLensTest']),
      'WaveLens',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveRecipeTest.wdpr',
      new Set(['WaveRecipeTest']),
      'WaveRecipe',
    ],
    [
      'wave',
      'force-app/main/default/wave/WaveXmdTest.xmd',
      new Set(['WaveXmdTest']),
      'WaveXmd',
    ],
    [
      'discovery',
      'force-app/main/default/discovery/Test/DiscoveryAIModelTest.model',
      new Set(['DiscoveryAIModelTest']),
      'DiscoveryAIModel',
    ],
    [
      'discovery',
      'force-app/main/default/discovery/Test/DiscoveryGoalTest.goal',
      new Set(['DiscoveryGoalTest']),
      'DiscoveryGoal',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveApplicationTest.wapp',
      new Set(['WaveApplicationTest']),
      'WaveApplication',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveComponentTest.wcomp',
      new Set(['WaveComponentTest']),
      'WaveComponent',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveDataflowTest.wdf',
      new Set(['WaveDataflowTest']),
      'WaveDataflow',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveDashboardTest.wdash',
      new Set(['WaveDashboardTest']),
      'WaveDashboard',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveDatasetTest.wds',
      new Set(['WaveDatasetTest']),
      'WaveDataset',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveLensTest.wlens',
      new Set(['WaveLensTest']),
      'WaveLens',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveRecipeTest.wdpr',
      new Set(['WaveRecipeTest']),
      'WaveRecipe',
    ],
    [
      'wave',
      'force-app/main/default/wave/Test/WaveXmdTest.xmd',
      new Set(['WaveXmdTest']),
      'WaveXmd',
    ],
  ],
  work: {
    config: { output: '', repo: '', generateDelta: true },
    diffs: { package: new Map(), destructiveChanges: new Map() },
  },
}

require('fs').__setMockFiles({
  'force-app/main/default/discovery/DiscoveryAIModelTest.model': 'test',
  'force-app/main/default/discovery/DiscoveryGoalTest.goal': 'test',
  'force-app/main/default/wave/WaveApplicationTest.wapp': 'test',
  'force-app/main/default/wave/WaveComponentTest.wcomp': 'test',
  'force-app/main/default/wave/WaveDataflowTest.wdf': 'test',
  'force-app/main/default/wave/WaveDataflowTest.wdf-meta.xml': 'test',
  'force-app/main/default/wave/WaveDashboardTest.wdash': 'test',
  'force-app/main/default/wave/WaveDashboardTest.wdash-meta.xml': 'test',
  'force-app/main/default/wave/WaveDatasetTest.wds': 'test',
  'force-app/main/default/wave/WaveDatasetTest.wds-meta.xml': 'test',
  'force-app/main/default/wave/WaveLensTest.wlens': 'test',
  'force-app/main/default/wave/WaveLensTest.wlens-meta.xml': 'test',
  'force-app/main/default/wave/WaveRecipeTest.wdpr': 'test',
  'force-app/main/default/wave/WaveRecipeTest.wdpr-meta.xml': 'test',
  'force-app/main/default/wave/WaveXmdTest.xmd': 'test',
  'force-app/main/default/wave/WaveXmdTest.xmd-meta.xml': 'test',
})

// eslint-disable-next-line no-undef
describe('test WaveHandler', () => {
  // eslint-disable-next-line no-undef
  testHandlerHelper(testContext)
})
