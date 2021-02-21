<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">Usersページに行く</button>
    </div>
</template>

<script>
export default {
    methods: {
        toUsers() {
            this.$router.push({
                name: "users-id-profile",
                params: { id: 1}
            });
        }
    }
}
</script>