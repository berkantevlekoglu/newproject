const app = new Vue({
  el: '#app',
  data: {
    formData: {
      name: '',
      email: ''
    }
  },
  methods: {
    submitForm() {
      axios.post('/submit', this.formData)
        .then(response => {
          console.log(response.data);
          
        })
        .catch(error => {
          console.error(error);
         
        });
    }
  }
});
