var _ = require('lodash')
var execSync = require('child_process').execSync
var moment = require('moment-timezone')

var state = {
  zones: null
}

/**
 * Synchronously gets the server's current timezone
 * @return String
 */
module.exports.getTimezone = function() {

  var zones = lazyGetZones()
  var tz = execSync('date +%Z', { encoding: 'utf-8' }).trim()

  // try abbreviation
  var match = _.find(zones, function(zone) {
    return zone.abbrs.some(function(_) { return _ === tz })
  })

  return match ? match.name : tz

}

/**
 * @return Moment.Zone[]
 */
function lazyGetZones() {
  return state.zones || (
    state.zones = _.map(moment.tz._zones, moment.tz.unpack)
  )
}
