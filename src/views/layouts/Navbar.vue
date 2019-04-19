<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="bg-nav">
    <b-navbar-brand :to="{ name: 'home'}">ThisIsNews.com</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'tag',params: { tagname: 'hot' } }" active-class='active disabled'>HOT</b-nav-item>
        <b-nav-item :to="{ name: 'tag',params: { tagname: 'entertaiment' } }" active-class='active disabled'>Entertaiment</b-nav-item>
        <b-nav-item :to="{ name: 'tag',params: { tagname: 'sports' } }" active-class='active disabled'>Sports</b-nav-item>
        <b-nav-item :to="{ name: 'tag',params: { tagname: 'lifestyle' } }" active-class='active disabled'>Lifestyle</b-nav-item>
        <!-- <b-nav-item :to="{ name: 'tag' }" exact>Content</b-nav-item> -->
        

        <!-- <b-nav-item-dropdown text="Tag" right>
          <b-dropdown-item href="#">Sports</b-dropdown-item>
          <b-dropdown-item href="#">Tech</b-dropdown-item>
          <b-dropdown-item href="#">Entertaiment</b-dropdown-item>
          <b-dropdown-item href="#">Lifestyle</b-dropdown-item>
          <b-dropdown-item href="#">Hot</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'content', params: { artikel_id: 5}}" exact>Content</b-nav-item>
        <b-nav-item :to="{ name: 'about'}" exact>About</b-nav-item>
          <b-nav-item :to="{ name: 'createArtikel' }" active-class='active disabled'>Insert</b-nav-item>

        <div>
          <b-nav-item :to="{ name: 'login' }" active-class='active disabled'>Login</b-nav-item>

          <!-- <b-nav-item v-b-modal.modal-1>Login</b-nav-item> -->

          <!-- Modal Component
          <b-modal id="modal-1" title="Login">
            <form action="">
              <div class="form-group">
                <label>Username</label>
                <input type="text" name="credential" class="form-control" placeholder="Masukan Username" aria-describedby="helpId">
                <small id="helpId" class="text-muted" hidden>Help text</small>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="text" name="password" class="form-control" placeholder="Masukan Password" aria-describedby="helpId">
                <small id="helpId" class="text-muted" hidden>Help text</small>
              </div>
            </form>
            <p class="my-4">&nbsp;
            </p>
          </b-modal> -->
        </div>
        <!-- <b-nav-item-dropdown right>
          Using 'button-content' slot -> ini komentar
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
.bg-nav{
  background-color: darkkhaki;
}
</style>

