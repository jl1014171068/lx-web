<template>
    <div class="columns is-multiline">
        <child-component></child-component>
        <div class="column is-12">
            <button class="button is-info" type="button" @click="validateChild">Validate Child</button>
            <button class="button is-danger" type="button" @click="clearChild">Clear Child Errors</button>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  let vm = new Vue()
  import ChildComponent from './child.vue';
  export default {
    name: 'event-bus-example',
    components: {
      ChildComponent
    },
    methods: {
      validateChild() {
        vm.$emit('validate');
      },
      clearChild() {
        vm.$emit('clear');
      }
    },
    created() {
      vm.$on('errors-changed', (errors) => {
        this.errors.clear();
        errors.forEach((e) => {
          this.errors.add(e.field, e.msg, e.rule, e.scope);
        });
      });
    }
  };
</script>