<template>
    <input 
        :max="maxDate" 
        :min="minDate" 
        @change="dateChange($event)" 
        :value="calcDate" 
        type="date" 
        name="dateofbirth" 
        id="dateofbirth" 
    />
</template>

<script>
export default {
    name: 'DatePicker',
    props: [
        'model',
        'day',
        'month',
        'year',
        'minDate',
        'maxDate',
        'dateChange'
    ],
    computed: {
        calcDate: function () {
            if(this.year != undefined && this.month != undefined && this.day != undefined) {
                return this.year.concat("-").concat(this.month).concat("-").concat(this.day);
            }
            return new Date().toISOString().replace(/T.*/,'').split('-').join('-');
        },
    },
};
</script>

<style lang="scss" scoped>
[type="date"] {
  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
input {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
  width: 190px;
}
</style>
