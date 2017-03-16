/*
  Your company built an in-house calendar tool called HiCal. You want to add a feature to see the
  times in a day when everyone is available.

  To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored
  as objects ↴ with attributes startTime and endTime . These integers represent the number of
  30-minute blocks past 9:00am.

  For example:

    {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
    {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

  Write a function mergeRange() that takes an array of meeting time mergedMeetings and returns an array of
  condensed mergedMeetings.

  Do not assume the meetings are in order. The meeting times are coming from multiple teams.

  Write a solution that's efficient even when we can't put a nice upper bound on the numbers
  representing our time mergedMeetings. Here we've simplified our times down to the number of 30-minute
  slots past 9:00 am. But we want the function to work even for very large numbers, like Unix
  timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and
  endTime don't have an upper bound.

  https://www.interviewcake.com/question/javascript/merging-mergedMeetings

*/

const mergeRange = function(meetings) {
  const mergedMeetings = [];

  // Sort meetings first O(n*log(n))
  meetings.sort((first, second) => {
    // Sort by startTime first, of equal, then sort by endTime
    if (first.startTime === second.startTime) {
      return first.endTime < second.endTime ? -1 : 1;
    }
    return first.startTime < second.startTime ? -1 :1;
  });

  // Iterate through meetings. Either merge to the last range, or push it as new. O(n)
  meetings.forEach(meeting => {
    const mergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    const isOverlapping = mergedMeeting &&
      !(meeting.endTime < mergedMeeting.startTime || meeting.startTime > mergedMeeting.endTime);

    if (isOverlapping) {
      mergedMeeting.startTime = Math.min(mergedMeeting.startTime, meeting.startTime);
      mergedMeeting.endTime = Math.max(mergedMeeting.endTime, meeting.endTime);
    } else {
      mergedMeetings.push(meeting);
    }
  });

  return mergedMeetings;
}

export default mergeRange;
