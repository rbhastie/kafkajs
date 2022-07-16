const RequestV0Protocol = require('./request')

/* TO-DO: Update the fixtures, data, and errors */

describe('Protocol > Requests > AlterPartitionReassignments > v0', () => {
  test('request', async () => {
    const { buffer } = await RequestV0Protocol({
      timeout: 5000,
      topics: [
        {
          name: 'test-topic-c8d8ca3d95495c6b900d',
          partitions: [{ partition: [0] }],
        },
        {
          name: 'test-topic-050fb2e6aed13a954288',
          partitions: [{ partition: [0] }],
        },
      ],
    }).encode()
    expect(buffer).toEqual(Buffer.from(require('../fixtures/v0_request.json')))
  })
})
