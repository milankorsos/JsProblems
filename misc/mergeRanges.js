/*
  Your company built an in-house calendar tool called HiCal. You want to add a feature to see the
  times in a day when everyone is available.

  To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored
  as objects ↴ with attributes startTime and endTime . These integers represent the number of
  30-minute blocks past 9:00am.

  For example:

    {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
    {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

  Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of
  condensed ranges.

  Do not assume the meetings are in order. The meeting times are coming from multiple teams.

  Write a solution that's efficient even when we can't put a nice upper bound on the numbers
  representing our time ranges. Here we've simplified our times down to the number of 30-minute
  slots past 9:00 am. But we want the function to work even for very large numbers, like Unix
  timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and
  endTime don't have an upper bound.

  https://www.interviewcake.com/question/javascript/merging-ranges

*/

const mergeRanges = function(meetings) {
  const ranges = [];

  meetings.forEach(meeting => {
    const overlappingRange = ranges.find(range => {
      return !(meeting.endTime < range.startTime || meeting.startTime > range.endTime);
    });

    if (!overlappingRange) {
      ranges.push(meeting);
    } else {
      overlappingRange.startTime = Math.min(overlappingRange.startTime, meeting.startTime);
      overlappingRange.endTime = Math.max(overlappingRange.endTime, meeting.endTime);
    }
  });

  return ranges;
}

export default mergeRanges;
