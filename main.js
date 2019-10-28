new Vue({
  el: '#app',
  data(){
    return{ 
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interested: 168
    }
  },
  methods: {
    updateDiff: function() {
      if(moment().seconds() == 0 || this.seconds < 0){
        this.setDiff();
      } else{
        this.seconds -= 1;
      }
    },

    increment: function (){
    this.interested ++;
  },

    decrement: function (){
    if (this.interested !== 0) {
      this.interested --;
    }
  },

    setDiff() {
      var now = moment();
      var theDay = moment("20191108", "YYYYMMDD");
      this.weeks = theDay.diff(now, 'weeks');
      now.weeks(now.weeks() + this.weeks);
      this.days = theDay.diff(now, 'days');
      now.days(now.days() + this.days);
      this.hours = theDay.diff(now, 'hours');
      now.hours(now.hours() + this.hours);
      this.minutes = theDay.diff(now, 'minutes');
      now.minutes(now.minutes() + this.minutes);
      this.seconds = theDay.diff(now, 'seconds');
    }
  },
  mounted() {
    moment().format();
    this.setDiff();
    setInterval(this.updateDiff, 1000);
  }
})
