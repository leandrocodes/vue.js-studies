<template>
    <div class="tasks-progress">
        <span class="progress-value">
            {{progress}}%
        </span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
export default {
    props:{
        progress:{
            type: Number,
            default: 0
        }
    }
}
</script>

<style>
    .tasks-progress{
        position: relative;
        width: 80%;
        border: 1px solid white;
        color: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .progress-value{
        z-index: 1;
        font-size: 1.5rem;
    }
    .progress-bar{
        position: absolute;
        border-radius: 10px;
        height: 100%;
        background-color: darkturquoise;
        align-self: flex-start;
    }

</style>
