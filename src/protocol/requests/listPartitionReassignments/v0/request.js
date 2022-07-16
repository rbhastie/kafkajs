const Encoder = require('../../../encoder')
const { ListPartitionReassignments: apiKey } = require('../../apiKeys')

/**
 * ListPartitionReassignments Request (Version: 0) => timeout_ms [topics] TAG_BUFFER
 * timeout_ms => INT32
 * topics => name [partitions] TAG_BUFFER
 *  name => COMPACT_STRING
 *  partitions => partition
 *    partition => INT32
 */

module.exports = ({ topics, timeout = 5000 }) => ({
  apiKey,
  apiVersion: 0,
  apiName: 'ListPartitionReassignments',
  encode: async () => {
    return new Encoder().writeInt32(timeout).writeArray(topics.map(encodeTopic))
  },
})

const encodeTopic = ({ topic, partitions }) => {
  return new Encoder().writeString(topic).writeArray(partitions.map(encodePartition))
}

const encodePartition = ({ partition }) => {
  return new Encoder().writeInt32(partition)
}
