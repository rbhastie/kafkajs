const { decode, parse: parseV1 } = require('../v1/response')

/**
 * SyncGroup Response (Version: 2) => throttle_time_ms error_code member_assignment
 *   throttle_time_ms => INT32
 *   error_code => INT16
 *   member_assignment => BYTES
 */
module.exports = {
  decode,
  parse: parseV1,
}
