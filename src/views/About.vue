<template>
  <Page class="page about">
    <StackLayout>
      <Label class="body" text="This is an about page"/>
      <Img src="~/images/logo.png"/>
      <Button class="btn btn-primary" @tap="$router.push('/')" text="Home"/>
    </StackLayout>
  </Page>
</template>
<script>
export default {
  name: 'About',
};
</script>
