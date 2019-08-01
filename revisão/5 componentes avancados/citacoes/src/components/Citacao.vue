<template>
    <div class="citacao">
       <!--  <p>
            {{citacao.texto}}
        </p>

        <p>
            {{citacao.fonte}}
        </p>

        <p>
            {{citacao.autor}}
        </p> -->
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
/*     props:{
        citacao:{
            fonte: String,
            texto: String,
            autor: String
        }
    } */
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
