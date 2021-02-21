<template>
    <nav>
    　<h2>Users</h2>
      <router-link
      to="/"
      active-class="link--active"
      exact
      class="link"
    >Home</router-link>
      <router-link
      to="/users"
      active-class="link--active"
      exact
      class="link"
    >Users</router-link>
    </nav>
</template>

<style scoped>
 .link {
   margin-right: 10px;
 }
 .link--active {
   font-size: 20px;
 }
</style>