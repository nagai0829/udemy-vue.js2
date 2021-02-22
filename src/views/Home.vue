<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">Usersページに行く</button>
        <p>{{ doubleCount }}</p>
        <p>{{ tripleCount }}</p>
        <input
            type="text"
            v-model="message"
        >
        <p>{{ message }}</p>
    </div>
</template>

<script>
import { mapGetters} from "Vuex";

export default {
    computed: {
        ...mapGetters("count", ["doubleCount", "tripleCount"]),
        // message() {
        //     return this.$store.getters.message;
        // }
        message: {
            get() {
                return this.$store.getters.message;

            },
            set(value) {
                this.$store.dispatch("updataMessage", value);
            }
        }
    },
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