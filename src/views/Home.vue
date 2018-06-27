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
      <ActivityIndicator :busy="true" />
      <h5> Slider </h5>
      <Slider :valueChange="sliderChange" :minValue="5" :maxValue="95" :value="sliderVal"  />
      {{ sliderVal }}
      <h5> Switch </h5>
      <Switch :checked="true" />
      <!-- Switch fails : [Vue warn]: Do not use built-in or reserved HTML elements as component id: Switch -->
      <h5> ListView </h5>
      <ListView :items="items" valueProp="key" labelProp="label" seperatorColor="blue" />
    </StackLayout>
  </Page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld';
import TextField from '../components/shared/TextField';
import ListPicker from '../components/shared/ListPicker';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Slider from '../components/shared/Slider';
import Switch from '../components/shared/Switch';
import ListView from '../components/shared/ListView';

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
    };
  },
  methods: {
    sliderChange: function (event) {
      console.log(event.target.value);
      this.sliderVal = event.target.value;
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
  },
};
</script>
