<template>
  <button class="button">
    {{ title }}
  </button>
</template>

<script>
/**
 * 组件说明
 * @displayName button组件
 */
export default {
  name: 'Button',
  props: {
    /**
     * propsA的说明
     * @values 111,222,333
     */
    propsA: {
      type: String,
      default: '222'
    }
  },
  data: () => ({
    title: '这是一个button'
  }),
  methods: {
    /**
     * 方法说明
     * @param {String} a 这是a的说明
     * @param {Number} b 参数b的说明
     * @param {Number} c 参数c的说明
     * @public 这是公众方法(注：这句表示该方法是公开给其他组件的公共方法）
     */
    onClickSuccess ({ a, b, c }) {
      /**
       * 成功回调
       * @event onClickSuccess
       * @type {object}
       */
      this.$emit('onClickSuccess', a)
      return { a, b, c }
    }
  }
}
</script>

<style scoped>
.button {
  width: 180px;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background-color: red;
}
</style>
