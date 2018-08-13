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

            <Label text="test" textWrap=true />

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
    FlexboxLayout,
} from 'nativescript-vue-web';
import MyWrapper from '../components/MyWrapper';

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
            listViewItems: [
                'özer',
                'serdar',
                'gizem',
            ],
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
        // MyWrapper Event
        myWrapperOnChange(event) {
            console.log('MyWrapper onChange event ', event);
        },
        // WebView Event
        webViewLoadStarted(event) {
            console.log('WebView Loading Started');
        },
        webViewLoadFinished(event) {
            console.log('WebView Loading finished.');
        },
        // List Events
        listPickerSelectedIndexChange(event) {
            console.log(this.selectedIndex);
            console.log(this.items[this.selectedIndex].label);
            console.log('Selected index changed in the list picker');
        },
        listViewItemTap(item) {
            console.log(`Item : ${JSON.stringify(item)} tapped in the listview.`);
        },
        // TextField Events
        textFieldOnBlur(event) {
            console.log('TextField/TextView onBlur event!');
        },
        textFieldfocus(event) {
            console.log('TextField/TextView focus event!');
        },
        textfieldOnInput(event) {
            console.log('textfieldOnInput ');
            console.log(event);
            console.log('----');
        },
        textFieldreturnPress(event) {
            console.log('TextField/TextView returnPress event');
            console.log(this.textFieldInput);
        },
        textFieldtextChange(event) {
            console.log('TextField/TextView textChange event');
            console.log(this.textFieldInput);
        },
        // DatePicker Event
        dateChange(event) {
            console.log('DatePicker dateChange event');
            console.log(this.date);
        },
        // TimePicker Event
        timeChange(event) {
            console.log(this.time);
        },
        // Slider Event
        sliderChange(event) {
            console.log(event.target.value);
            this.sliderVal = event.target.value;
        },
        // Switch Event
        switchChange(event) {
            console.log('Switch checkedChange event.');
            console.log(this.switchVal);
        },
        // Progress Events
        progressvalueChange(event) {
            // console.log(`Progress bar value changed to ${event}`);
        },
        // ScrollView Events
        scroll() {
            console.log('ScrollView scroll event !');
        },
        // SearchBar Events
        searchBartextChange(event) {
            console.log('SearchBar textChange event');
        },
        searchBarsubmit(event) {
            console.log('SearchBar submit event');
        },
        searchBarclear(event) {
            console.log('SearchBar clear event');
            this.search = '';
        },
        busyChange() {
            console.log('Busy change');
        },
    },
    components: {
        MyWrapper,
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
    },
};
</script>
