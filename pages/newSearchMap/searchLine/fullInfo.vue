<template>
    <div>
        <p>{{service.name}}</p>
        <!-- img -->
        <P>{{service.rating}}</P>
        
    </div>
</template>

<script>
export default {
    name: 'fullInfo',
    props: ['service'] 
}
</script>

<style>

</style>
