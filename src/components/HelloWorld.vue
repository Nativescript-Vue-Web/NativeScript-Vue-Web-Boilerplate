<template>
  <StackLayout class="hello">
    <Label :text="msg"></Label>
  </StackLayout>
</template>

<script>
import { StackLayout, Label } from 'nativescript-vue-web';

export default {
  name: 'HelloWorld',
  props: ['msg'],
  components: {
    StackLayout,
    Label,
  },
};
</script>
