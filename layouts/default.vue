<template>
  <div>
    <div class="pch-page-container">
      <Sidebar></Sidebar>
      <div class="pch-container">
        <Header></Header>
        <div class="pch-main-container">
          <!-- 面包屑 -->
          <Breadcrumb></Breadcrumb>
          <nuxt/>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/layout/Sidebar/Sidebar.vue'
import Header from '~/components/layout/Header/Header.vue'
import Footer from '~/components/layout/Footer/Footer.vue'
import Breadcrumb from '~/components/layout/Breadcrumb/Breadcrumb.vue'
export default {
  components: {
    Header,
    Sidebar,
    Breadcrumb,
    Footer
  }
}

</script>
