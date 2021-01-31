<template>
  <div>
    <h3 class="text-center">Products list</h3>
    <button class="btn btn-success float-lg-right"><router-link to="/create" class="text-white"> Create Product </router-link></button>
    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr  v-for="product in allProducts" :key="product.id">
        <th scope="row">{{ product.id }}</th>
        <td><img :src="product.image_url" alt="SALMAN" height="55px" width="95px"></td>
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.description }}</td>
        <td><span class="btn btn-warning" @click="edit(product.id)">edit</span><span class="btn btn-danger" @click="del(product.id)">delete</span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductsList",
  methods: {
    ...mapActions(["fetchProducts", "deleteProduct", "updateProduct"]),
    edit(productId) {
      this.$router.replace('/edit/'+productId);
    },
    del(Id){
      const delProduct = {
        id: Id,
    // title: product.title,
    // completed: !product.completed
    };
         this.deleteProduct(delProduct);
    },
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>

</style>