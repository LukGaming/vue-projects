<template>
  <div>
    <div class="d-flex justify-content-center align-items-center page">
            <div class="counter row">
                <button type="button" class="counter-button" @click="decrement">
                    -
                </button>
                <div class="count align-self-center">
                    {{ count }}
                </div>
                <button class="counter-button" @click="increment">
                    +
                </button>
            </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'VueTestsCounterPage',
  computed: {
    ...mapGetters(["count"])
  },

  methods: {
    ...mapActions(["increment", "decrement"])
  },
};
</script>

<style>
body{
    margin: 0;
}
.page{
    height: 100vh;
    background-color: black;
    color: white;
}

.d-flex{
    display: flex;
}

.justify-content-center{
    justify-content: center;
}

.row{
    display: flex;
}

.align-items-center{
    align-items: center;
}

.align-self-center{
    align-self: center;
}

.counter{
    width: 200px;
    justify-content: space-between;
}

.count{
    font-size: 30px;
}

.counter-button{
    font-size: 30px;
    padding: 15px;
    border: 1px solid greenyellow;
    border-radius: 5px;
}

.counter-button:hover{
    background-color: yellowgreen;
}

</style>