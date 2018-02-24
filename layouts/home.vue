<template>
  <div>
    <div class="pch-page-container">
      <Sidebar></Sidebar>
      <div class="pch-container">
        <Header></Header>
        <div class="pch-main-container">
          <nuxt class='layout-container'/>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/layout/Sidebar/Sidebar.vue'
import Header from '~/components/layout/Header/Header.vue'
import Footer from '~/components/layout/Footer/Footer.vue'
export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}

</script>
