<template>
  <Page class="home">
    <StackLayout>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <Img src="~/images/logo.png" />
      <Button class="btn btn-primary" @tap="$router.push('/about')" text="About"/>
    </StackLayout>
  </Page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
