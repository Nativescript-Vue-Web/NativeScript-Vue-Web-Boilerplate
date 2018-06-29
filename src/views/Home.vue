<template>
  <Page class="home">
    <StackLayout>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <Img src="~/images/logo.png" />
      <Button class="btn btn-primary" @tap="$router.push('/about')" text="About"/>
      <h5> TextField </h5>
      <TextField text="placeholder" :maxlength="10" :secure="false" keyboardType="text" :model="text" />
      <h5> ListPicker </h5>
      <ListPicker :selectedIndex="selectedIndex" labelProp="label" valueProp="key" :items="items" :value="selectedIndex" disabledVal="Choose one." />
      <h5> ActivityIndicator </h5>
      <ActivityIndicator :busyChange="busyChange" :busy="busy" />
      <h5> Slider </h5>
      <Slider :valueChange="sliderChange" :minValue="5" :maxValue="95" :value="sliderVal"  />
      {{ sliderVal }}
      <h5> Switch </h5>
      <Switch :checked="true" />
      <!-- Switch fails : [Vue warn]: Do not use built-in or reserved HTML elements as component id: Switch -->
      <h5> ListView </h5>
      <ListView :items="items" valueProp="key" labelProp="label" separatorColor="blue" />
      <h5> ScrollView </h5>
      <ScrollView orientation="horizontal" />
      <h5> Progress </h5>
      <Progress :value="50" />
      <h5> SearchBar </h5>
      <SearchBar :model="search" :maxlength="10" keyboardType="text" />
      <h5> DatePicker </h5>
      <DatePicker :dateChange="dateChange" :model="date" />
      <h5> Absolute Layout </h5>
      <AbsoluteLayout>
        <Label style="width: 150px; height: 150px;" left="200" top="200" text="first absolute element." />
        <Label style="width: 150px; height: 150px;" left="250" top="250" text="first absolute element." />
      </AbsoluteLayout>
    </StackLayout>
  </Page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld';
import Label from '../components/shared/Label';
import TextField from '../components/shared/TextField';
import ListPicker from '../components/shared/ListPicker';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Slider from '../components/shared/Slider';
import Switch from '../components/shared/Switch';
import ListView from '../components/shared/ListView';
import ScrollView from '../components/shared/ScrollView';
import Progress from '../components/shared/Progress';
import SearchBar from '../components/shared/SearchBar';
import DatePicker from '../components/shared/DatePicker';
import AbsoluteLayout from '../components/shared/AbsoluteLayout';

export default {
  name: 'home',
  data () {
    return {
      items: [
        {
          'label': 'özer',
          'key': '1',
        },
        {
          'label': 'serdar',
          'key': '2',
        },
        {
          'label': 'tümay',
          'key': '3',
        },
        {
          'label': 'yiğit',
          'key': '4',
        },
      ],
      selectedIndex: {
          'label': 'yiğit',
          'key': '4',
      },
      sliderVal: 40,
      text: '',
      search: '',
      date: '',
      busy: true,
    };
  },
  created () {
    setTimeout(() => {
      this.busy = false;
    }, 5000);
  },
  methods: {
    sliderChange: function (event) {
      console.log(event.target.value);
      this.sliderVal = event.target.value;
    },
    dateChange: function (event) {
      this.date = event.target.value;
      console.log(this.date);
    },
    busyChange: function (event) {
      console.log('Busy change');
    },
  },
  components: {
    HelloWorld,
    TextField,
    ListPicker,
    ActivityIndicator,
    Slider,
    Switch,
    ListView,
    ScrollView,
    Progress,
    SearchBar,
    DatePicker,
    AbsoluteLayout,
  },
};
</script>
