<template>
  <form @submit.prevent="getFormValues">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" name="title" id="title" aria-describedby="emailHelp" placeholder="Enter title" v-bind:value="this.product.title">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" name="price" id="price" placeholder="Enter Price" v-bind:value="this.product.price">
    </div>
    <div class="form-group">
      <img :src="this.product.image_url" alt="SALMAN" height="155px" width="195px"><br>
      <label for="image">Image</label>
      <input type="file" class="form-control" name="image" id="image" placeholder="Image" @change="onFileSelected">
      <input type="hidden" class="form-control" name="image_code" id="image_code" placeholder="Image">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea type="textarea" class="form-control" name="description" id="description" placeholder="Description" v-model="this.product.description"></textarea>
    </div>
    <button type="submit" class="btn btn-primary btn-submit">Save</button><br>
  </form>
</template>


<script>
import axios from "axios";
// var TOKEN = localStorage.getItem('token');
export default {
name: "EditProduct",
  data: function () {
    return {
      product: {},
      title: '',
      price: '',
      image: '',
      description: '',
      seletedFile: null
    }
  },

  mounted: function() {
        axios({
                method: 'post',
                url: 'api/products/'+this.$route.params.id+'/edit',
                // headers: {
                //   'Content-Type': 'application/json',
                //   'Authorization': 'Bearer '+TOKEN
                // }
                }).then(response => {
                this.product = response.data
            })},

  methods: {
    onFileSelected: function (event) {
      var input = event.target;

      var reader = new FileReader();
      reader.onload = ()=>{
        var dataURL = reader.result;
        var output = document.getElementById('image_code');
        output.value = dataURL;
        // console.log(output.src)
      };
      reader.readAsDataURL(input.files[0]);
    } ,
    getFormValues: function (submitEvent) {
      this.title = submitEvent.target.elements.title.value
      this.price = submitEvent.target.elements.price.value
      this.image = submitEvent.target.elements.image_code.value
      this.description = submitEvent.target.elements.description.value

      axios({
        method: 'put',
        url: 'api/products/'+this.$route.params.id,
        data: {
          title: this.title,
          price: this.price,
          image: this.image,
          description: this.description
        },
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Authorization': 'Bearer '+TOKEN
        // }
      }).then((response) => {
        if (response.status == 200){
          this.$router.replace('/list')
        }
      })
    }
  },
}
</script>

<style scoped>

</style>