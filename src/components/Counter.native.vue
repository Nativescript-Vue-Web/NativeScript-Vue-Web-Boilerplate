<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Counter">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
        </ActionBar>

        <StackLayout>
            <FlexboxLayout flexDirection="row" justifyContent="center">
                <Button @tap="decrement" text="-" class="btn btn-outline"/>
                <Label :text="message" alignSelf="baseline" class="h2"/>
                <Button @tap="increment" text="+" class="btn btn-outline"/>
            </FlexboxLayout>
            <Img v-if="surprise" src="~/images/NativeScript-Vue.png"/>
        </StackLayout>

    </Page>
</template>

<script>
import { mapActions } from 'vuex';
import { Page, ActionBar, NavigationButton, StackLayout, FlexboxLayout, Button, Label, Img } from 'nativescript-vue-web';

export default {
  computed: {
    message() {
      return this.$store.state.counter.count.toString();
    },
    surprise() {
      return this.$store.state.counter.count >= 5;
    },
  },
  methods: mapActions(['decrement', 'increment']),
  comments: {
    Page,
    ActionBar,
    NavigationButton,
    StackLayout,
    FlexboxLayout,
    Button,
    Label,
    Img,
  },
};
</script>
