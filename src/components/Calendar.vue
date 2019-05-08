<template>
<b-container class="">
  <div class="calendar-container">
    <div class="calendar-head">
      <div class="nav-search-bar">
        <div class="calendar-nav">
          <span class="prev" v-on:click="addMonth(-1)"><</span>
          <span class="current">{{currentYear}}.{{currentMonth}}</span>
          <span class="next" v-on:click="addMonth(1)">></span>
        </div>
      </div>
      <div class="dayname-container">
        <div class="calendar-cell" v-for="dayname in daynames">
          <div class="day-label name-of-days">{{dayname}}</div>
        </div>
      </div>
    </div>
    <div class="calendar-body">
      <div class="calendar-week" v-for="week in weeks">
        <div class="calendar-cell" v-for="day in weekDays">
          <div class="day-label">{{day}}</div>
          <div class="day-content"></div>
        </div>
      </div>
    </div>
  </div>
</b-container>
</template>

<script>
export default {
  name: 'Calendar',
  components: {
  },
  data() {
    var today = new Date()
    return {
      daynames: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      currentYear: today.getFullYear(),
      currentMonth: (today.getMonth()+1),
      week_arr: [5,6,7,8,9,10,11],
      weeks: [0,1,2,3,4],
      weekDays: [12,13,14,15,16,17,18]
    }
  },
  methods: {
    addMonth(num) {
      this.currentMonth += num
    }
  }
}
</script>
