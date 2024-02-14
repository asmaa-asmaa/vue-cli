<template>
  <div class="parent">
    <slot name="slotPara"></slot>

    <h2>this is slot component , my name is {{ name }}</h2>
    <slot name="slotTitle"></slot>

    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
