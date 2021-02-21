<template>
    <div>
        <h3>Users</h3>
        <router-link to="/users/1">ユーザー1</router-link>
        <router-link to="/users/2">ユーザー2</router-link>
        <hr>
        <h1>User No. {{ $route.params.id }}</h1>
        <router-link to="'/users/' + (Number(id) + 1) + 'profile'">次のユーザー</router-link>
        <div style="height: 700px;"></div>
        <router-link id="next-user" to="{name: 'users-id-profile', params: { id: Number(id) + 1}, query: {lang :'ja', page: 2 } }">次のユーザー</router-link>

    </div>
</template>

<script>
export default {
    props: ["id"]
};
</script>