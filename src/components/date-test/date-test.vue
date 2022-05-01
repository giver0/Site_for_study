<template>
  <div>
    <HeaderLine />
    <div>
      Hello
    </div>
    <div>
      <!-- {{timeAgo}}   -->
    </div>
  </div>
</template>

<script>
import HeaderLine from '../header-line'
import TimeAgo from 'javascript-time-ago'
// English.
import en from 'javascript-time-ago/locale/en.json'

export default {
  name: 'DateTest',
  components: {
    HeaderLine,
  },
  date() {
    return {
      timeAgo: {},
    }
  },
  mounted() {
    console.time('Start')
    TimeAgo.addDefaultLocale(en)

    // Create formatter (English).
    const timeAgo = new TimeAgo('en-US')

    // timeAgo.format(new Date())
    // "just now"
    timeAgo.format(Date.now() - 1 * 1000, 'round')
    // 1 second ago → "1 second ago"
    console.log(timeAgo.format(Date.now() - 1 * 1000, 'round'))
    console.log(timeAgo.format(new Date('2022-04-05T19:58:29.571Z'), 'round'))
    // this.timeAgo = timeAgo

    const firstDate = new Date()
    console.log(firstDate)
    const warStartDate = new Date(2022, 1, 24)
    const testDate = new Date(2022, 3, 8, 6)
    console.log(timeAgo.format(warStartDate - 1 * 1000, 'round'))
    console.log(timeAgo.format(testDate - 1 * 1000, 'round'))
    console.log(timeAgo.format(warStartDate - 60 * 1000))
    const secondWarDay = new Date(2022, 1, 25)
    const diffDay = secondWarDay - warStartDate
    console.log(warStartDate)
    console.log(warStartDate)
    console.log(diffDay / 1000)

    // console.log(warStartDate.parse())
    // console.log(timeAgo(warStartDate))
    const msUTC = Date.parse('2012-01-26T13:51:50.417Z')
    console.log(msUTC)

    console.timeEnd('Start')
  },
}

</script>

<style scoped>

body {
  background: black;
}
</style>
