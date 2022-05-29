<script setup lang="ts">


</script>

<template>
    <div id="about-container">
        <p id="about-label">Hi, I'm Desmond</p>
        <p id="about-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit, nulla itaque! Autem natus cumque eaque, eos ab 
            quisquam quam fugit vero quas recusandae maiores dolore. 
            Delectus, ullam nobis non illo dolorem nesciunt quis 
            suscipit commodi dignissimos adipisci laudantium 
            consequuntur numquam, earum nisi. Iste id repudiandae 
            vero, dignissimos earum ipsam vitae?
        </p>
    </div>
</template>

<style lang="scss" scoped>
    #about-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        margin: 100px 0 0 0;

        #about-label {
            margin: 20px 0;
            font-size: 3.2em;
            font-weight: bold;
            color: var(--primary-color);
        }

        #about-content {
            text-align: left;
        }
    }
</style>