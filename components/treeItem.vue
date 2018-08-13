<template>
    <li>{{ model.name }}<input v-if="model.child.length == 0" type="checkbox">
        <ul>
            <tree-item v-for="model in model.child" :model="model"></tree-item>
        </ul>
    </li>
</template>

<script>
export default {
    name: "treeItem",
    props: {
        model: Object
    },
}
</script>
