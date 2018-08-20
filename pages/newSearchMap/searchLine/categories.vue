<template>
<div>
    <ul>
        <li v-for="model in model.child" :model="model">
            <button>{{ model.name }}</button>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "categories",
    props: {
        model: Object,

    }
}
</script>
