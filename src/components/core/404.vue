<template>
    <div class="h-container">
        <h1 class="h404">404 NOT FOUND</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .h-container{
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .h404{
        position: absolute;
        display: block;
        top:50%;
        left: 50%;
        font-size: 4em;
        transform: translate(-50%, -50%);
    }
</style>