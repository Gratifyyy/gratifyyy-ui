import Button from './index.vue';

// eslint-disable-next-line
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
