<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Adicionar</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Nome do Item:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Preço do item:</label>
                        <input type="text" class="form-control" v-model="newItem.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { db } from '../config/db';

export default {
  components: {
      name: 'AddItem'
  },
  firebase: {
    items: db.ref('items')
  },
  data () {
    return {
      newItem: {
          name: '',
          price: ''
      }
    }
  },
  methods: {
      addItem() {   
        this.$firebaseRefs.items.push({
            name: this.newItem.name,
            price: this.newItem.price
        })
        this.newItem.name = '';
        this.newItem.price = '';
        this.$router.push('/index')
      }
    }
}
</script>