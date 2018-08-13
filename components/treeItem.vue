<template>
    <li>{{ model.name }}<input type="checkbox" v-if="model.child.length == 0" v-model="model.check" @click="reqursiCheck">
        <ul>
            <tree-item v-for="model in model.child" :model="model" @reqursiCheck="reqursiCheck"></tree-item>
        </ul>
    </li>
</template>

<script>
export default {
    name: "treeItem",
    props: {
        model: Object
    },
    methods: {
        reqursiCheck(){
            this.$emit('reqursiCheck',this.model)
        }
    }
}
</script>
