<template>
  <form @submit.prevent="getFormValues">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" name="title" id="title" aria-describedby="emailHelp" placeholder="Enter title">
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" class="form-control" name="price" id="price" placeholder="Enter Price">
    </div>
    <div class="form-group">
      <label for="image">Image</label>
      <input type="file" class="form-control" name="image" id="image" placeholder="Image" @change="onFileSelected">
      <input type="hidden" class="form-control" name="image_code" id="image_code" placeholder="Image">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea type="textarea" class="form-control" name="description" id="description" placeholder="Description"></textarea>
    </div>
    <button type="submit" class="btn btn-primary btn-submit">Save</button><br>
  </form>
</template>

<script>
// var TOKEN = localStorage.getItem('token');

import axios from "axios";

export default {
  name: "CreateProduct",
    data: function () {
      return {
        title: '',
        price: '',
        image: '',
        description: '',
        selectedFile: null
      }
    },

    methods: {
      onFileSelected:  (event) => {
          var input = event.target;

          var reader = new FileReader();
          reader.onload = ()=>{
            var dataURL = reader.result;
            var output = document.getElementById('image_code');
            output.value = dataURL;
          };
        reader.readAsDataURL(input.files[0]);
      } ,
      getFormValues: function (submitEvent) {
        this.title = submitEvent.target.elements.title.value
        this.price = submitEvent.target.elements.price.value
        this.image = submitEvent.target.elements.image_code.value
        this.description = submitEvent.target.elements.description.value
          axios({
            method: 'post',
            url: 'api/products',
            data: {
              title: this.title,
              price: this.price,
              image: this.image,
              description: this.description
            },
            // headers: {
            //   'Content-Type': 'application/json',
            //   'Authorization': 'Bearer ' + TOKEN
            // }
          }).then((response) => {
            if (response.status == 200) {
              this.$router.push('/list')
            }
          })
      }
    },
  }
</script>

<style scoped>

</style>