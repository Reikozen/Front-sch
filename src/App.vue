<template>
  <div id="app" style="background-color:#ddd;">
    <div class="main-container">
      <!-- navbar -->
        <navbar />
      <!-- ./navbar -->

      <!-- content -->
        <Layout />
      <!-- ./content -->

      <!-- footer -->
        <Footer />
      <!-- ./footer -->
    </div>
  </div>
</template>

<script>
import Footer from '@/views/layouts/Footer.vue'
import Navbar from '@/views/layouts/Navbar.vue'
import Layout from '@/views/layouts/Layout.vue'
export default {
  components: {
    Layout,
    Footer,
    Navbar
  }
}
</script>

<style>
/* Begin Costum CSS */
* {
 box-sizing: border-box;
}
*:before,
*:after {
 box-sizing: border-box;
}
html,
body {
 height: 100%;
 position: relative;
 background-color: #f5f5f5;
}
.main-container {
 min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 5vh; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
.container{
  min-height: 89vh;
}
/* End Costum CSS */
</style>
