<template>
  <StackLayout class="hello">
    <Label :text="msg"></Label>
  </StackLayout>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: ['msg'],
};
</script>

<style scoped lang="scss">
</style>
