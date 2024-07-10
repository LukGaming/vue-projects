<template>
  <div id="app">
    
    <b-form-select v-model="selected" >
      <b-form-select-option :value="null">Please select an option</b-form-select-option>
      <b-form-select-option value="a">Option A</b-form-select-option>
      <b-form-select-option value="b" disabled>Option B (disabled)</b-form-select-option>
      <b-form-select-option-group label="Grouped options">
        <b-form-select-option :value="{ C: '3PO' }">Option with object value</b-form-select-option>
        <b-form-select-option :value="{ R: '2D2' }">Another option with object value</b-form-select-option>
      </b-form-select-option-group>
    </b-form-select>
    <div class="mt-2">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>


export default {
  
  name: 'App',
  components: {

  },
  data() {
    return {
      selected: null,
        options: [
          { value: null, text: 'Please select some item' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Default Selected Option' },
          { value: 'c', text: 'This is another option' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
