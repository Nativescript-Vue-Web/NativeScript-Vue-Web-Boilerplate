<template>
    <Page class="home">
        <!-- <Label height="200" width="100" isim="tümay" text="This is an about page" /> -->
        <StackLayout>
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            <Img src="~/images/logo.png"/>
            <h5> Button </h5>
            <Button @tap="$router.push('/about')" text="About">
                About
            </Button>
            <h5> Flexbox Layout </h5>
            <br>
            <br>
            <br>

            <Label text="test" textWrap="true"/>

            <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
                <TextField
                        alignSelf="center"
                        v-model="textFieldInput"
                        hint="hey"
                        :returnPress="textFieldreturnPress"
                        :focus="textFieldfocus"
                        :blur="textFieldOnBlur"
                        :textChange="textFieldtextChange"
                        @input="textfieldOnInput"
                        :editable="true"
                        height="120"
                        width="120"
                        backgroundColor="red"
                />
                <TextField
                        alignSelf="flex-end"
                        v-model="textFieldInput"
                        hint="hey"
                        :returnPress="textFieldreturnPress"
                        :focus="textFieldfocus"
                        :blur="textFieldOnBlur"
                        :textChange="textFieldtextChange"
                        @input="textfieldOnInput"
                        :editable="true"
                        height="120"
                        width="120"
                        backgroundColor="red"
                />
                <TextField
                        alignSelf="flex-start"
                        v-model="textFieldInput"
                        hint="hey"
                        :returnPress="textFieldreturnPress"
                        :focus="textFieldfocus"
                        :blur="textFieldOnBlur"
                        :textChange="textFieldtextChange"
                        @input="textfieldOnInput"
                        :editable="true"
                        height="120"
                        width="120"
                        backgroundColor="red"
                />
            </FlexboxLayout>

            <Switcher
                    :checked="true"
                    v-model="switchVal"
                    :checkedChange="switchChange"
            />

            <br>
            <br>
            <br>

            <!-- <FlexboxLayout backgroundColor="#3c495e">
                <Label text="first" width="70" backgroundColor="#43b883"/>
                <Label text="second" width="70" backgroundColor="#1c6b48"/>
                <TextField text="deneme"
                 v-model="textFieldInput"
                 hint="hey"
                 :returnPress="textFieldreturnPress"
                 :focus="textFieldfocus"
                 :blur="textFieldOnBlur"
                 textChange="{textFieldtextChange}"  :editable="true" width="120" />
            </FlexboxLayout> -->

            <br>
            <br>
            <br>

            <!-- <FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
                <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
                <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
                <Label text="third" width="70" height="70" backgroundColor="#289062"/>
            </FlexboxLayout> -->

            <br>
            <br>
            <br>

            <!-- <FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
                <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
                <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
                <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
            </FlexboxLayout> -->

            <br>
            <br>
            <br>

            <!-- <FlexboxLayout
              flexDirection="column-reverse"
              justifyContent="space-around"
            >
              <Label text="first" height="70" backgroundColor="#43b883"/>
              <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
              <Label text="third\nflex-end" flexWrapBefore="true" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062"/>
              <Label text="fourth" height="70" backgroundColor="#289062"/>
            </FlexboxLayout> -->

            <br>
            <br>
            <br>

            <!-- <FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
                <Label text="first" width="30%" backgroundColor="#43b883"/>
                <Label text="second" width="30%" backgroundColor="#1c6b48"/>
                <Label text="third" width="30%" backgroundColor="#289062"/>
                <Label text="fourth" width="30%" backgroundColor="#289062"/>
            </FlexboxLayout> -->

        </StackLayout>
    </Page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld';
import {
  TextField,
  TextView,
  TimePicker,
  ListPicker,
  ActivityIndicator,
  Slider,
  Switcher,
  ListView,
  HtmlView,
  WebView,
  Progress,
  SearchBar,
  DatePicker,
  SegmentedBar,
  SegmentedBarItem,
  AbsoluteLayout,
  DockLayout,
  FlexboxLayout,
  GridLayout,
  WrapLayout,
  Span,
  FormattedString,
  Page,
  StackLayout,
  Img,
} from 'nativescript-vue-web';

export default {
  name: 'home',
  data() {
    return {
      items: [
        {
          label: 'özer',
          key: 0,
        },
        {
          label: 'serdar',
          key: 1,
        },
        {
          label: 'tümay',
          key: 2,
        },
        {
          label: 'yiğit',
          key: 3,
        },
      ],
      listViewItems: ['özer', 'serdar', 'gizem'],
      selectedIndex: 2,
      selectedSegmentedBar: 'Settings',
      switchVal: true,
      sliderVal: 40,
      textFieldInput: 'default',
      textViewInput: 'default \n value',
      search: 'Search smt...',
      date: '2018-07-12',
      time: '05:55',
      busy: true,
      wrapperVal: 'default wrapperVal',
    };
  },
  created() {
    setTimeout(() => {
      this.busy = false;
    }, 5000);
  },
  methods: {
    // WebView Event
    webViewLoadStarted() {
      console.log('WebView Loading Started'); // eslint-disable-next-line
    },
    webViewLoadFinished() {
      console.log('WebView Loading finished.'); // eslint-disable-next-line
    },
    // List Events
    listPickerSelectedIndexChange() {
      console.log(this.selectedIndex); // eslint-disable-next-line
      console.log(this.items[this.selectedIndex].label); // eslint-disable-next-line
      console.log('Selected index changed in the list picker'); // eslint-disable-next-line
    },
    listViewItemTap(item) {
      console.log(`Item : ${JSON.stringify(item)} tapped in the listview.`); // eslint-disable-next-line
    },
    // TextField Events
    textFieldOnBlur() {
      console.log('TextField/TextView onBlur event!'); // eslint-disable-next-line
    },
    textFieldfocus() {
      console.log('TextField/TextView focus event!'); // eslint-disable-next-line
    },
    textfieldOnInput(event) {
      console.log('textfieldOnInput '); // eslint-disable-next-line
      console.log(event); // eslint-disable-next-line
      console.log('----'); // eslint-disable-next-line
    },
    textFieldreturnPress() {
      console.log('TextField/TextView returnPress event'); // eslint-disable-next-line
      console.log(this.textFieldInput); // eslint-disable-next-line
    },
    textFieldtextChange() {
      console.log('TextField/TextView textChange event'); // eslint-disable-next-line
      console.log(this.textFieldInput); // eslint-disable-next-line
    },
    // DatePicker Event
    dateChange() {
      console.log('DatePicker dateChange event'); // eslint-disable-next-line
      console.log(this.date); // eslint-disable-next-line
    },
    // TimePicker Event
    timeChange() {
      console.log(this.time); // eslint-disable-next-line
    },
    // Slider Event
    sliderChange(event) {
      console.log(event.target.value); // eslint-disable-next-line
      this.sliderVal = event.target.value;
    },
    // Switch Event
    switchChange() {
      console.log('Switch checkedChange event.'); // eslint-disable-next-line
      console.log(this.switchVal); // eslint-disable-next-line
    },
    // Progress Events
    progressvalueChange() {
      // console.log(`Progress bar value changed to ${event}`); // eslint-disable-next-line
    },
    // ScrollView Events
    scroll() {
      console.log('ScrollView scroll event !'); // eslint-disable-next-line
    },
    // SearchBar Events
    searchBartextChange() {
      console.log('SearchBar textChange event'); // eslint-disable-next-line
    },
    searchBarsubmit() {
      console.log('SearchBar submit event'); // eslint-disable-next-line
    },
    searchBarclear() {
      console.log('SearchBar clear event'); // eslint-disable-next-line
      this.search = '';
    },
    busyChange() {
      console.log('Busy change'); // eslint-disable-next-line
    },
  },
  components: {
    HelloWorld,
    TextField,
    TextView,
    TimePicker,
    ListPicker,
    ActivityIndicator,
    Slider,
    Switcher,
    ListView,
    HtmlView,
    WebView,
    Progress,
    SearchBar,
    DatePicker,
    SegmentedBar,
    SegmentedBarItem,
    AbsoluteLayout,
    DockLayout,
    FlexboxLayout,
    GridLayout,
    WrapLayout,
    Span,
    FormattedString,
    Page,
    StackLayout,
    Img,
  },
};
</script>
