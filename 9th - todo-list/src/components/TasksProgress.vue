<template>
    <div class="tasks-progress">
        <span class="progress-value">{{progress}}%</span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
export default {
    props: {
        progress: { type: Number, default: 0 }
    }
};
</script>

<style>
    .tasks-progress{
        position: relative;
        width: 80%;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 4px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .progress-bar{
        position: absolute;
        border-radius: 4px;
        height: 100%;
        background-color: #2980b9;
        align-self: flex-start;
    }

    .progress-value{
        z-index: 1;
    }

</style>