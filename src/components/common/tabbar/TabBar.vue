<template>
    <div id='tab-bar'>
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
      #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f5f1f1;
    box-shadow: 0 -3px 1px rgba(245, 240, 240, 0.9);
  }
</style>