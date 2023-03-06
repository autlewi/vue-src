
<script setup>
import { ref, reactive } from "vue";
const user = reactive({
  name: {
    first: "",
    last: "",
  },
  email: "",
  shirtModel: "green",
  size: [],
  quantity: [],
  deliveryDate: "",
  deliveryAddress: {
    streetAdd: "",
    streetAdd2: "",
    city: "",
    zip: "",
  },
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <form id="form">
          <div id="top-form-text" >
            <h3>Order Form</h3>
            <h5>
              Please fill in your information and we'll be sending your order in
              no time.
            </h5>
          </div>
          <fieldset>
            <div>
              <label for="firstName" class="form-label">Name</label>
              <input
                id="firstName"
                type="text"
                
                required
                placeholder="First Name"
                v-model="user.name.first"
              />

              <input
                id="lastName"
                type="text"
                
                required
                placeholder="Last Name"
                v-model="user.name.last"
              />
            </div>

            <div>
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
                v-model="user.email"
              />
            </div>

            <div>
              <label>T-Shirt Model </label>

              <input
                id="green-shirt"
                
                type="radio"
                name="shirt-green"
                value="green"
                
                checked
                required
                v-model="user.shirtModel"
              />
              <label for="green-shirt" 
                ><img src="green.png"
              /></label>

              <input
                id="orange-shirt"
                
                type="radio"
                name="shirt"
                value="orange"
                v-model="user.shirtModel"
              />
              <label for="orange-shirt" 
                ><img src="orange.png"
              /></label>
              <input
                id="blue-shirt"
             
                type="radio"
                name="shirt-blue"
                value="blue"
                v-model="user.shirtModel"
              />
              <label for="blue-shirt" 
                ><img src="blue.png"
              /></label>
            </div>

            <div>
              <label class="form-label" for="size">Size</label>

              <select
                id="size"
                
                type="select"
                name="size"
                v-model="user.size"
              >
                <option value="extra-small">XS</option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="extra-large">XL</option>
              </select>
            </div>

            <label for="quantity" class="form-label">Quantity</label>
            <input
              id="quantity"
              type="number"
             
              min="1"
              max="100"
              required
              v-model="user.quantity"
            />

            <div>
              <label for="deliv-date" class="form-label">Delivery Date: </label>
              <input
                id="deliv-date"
                
                type="date"
                name="res-date"
                min="2023-01-01"
                max="2023-12-31"
                required
                v-model="user.deliveryDate"
              />
            </div>
            <div id="delivery">
              <label>Delivery Address </label>

              <input
                id="streetAdd"
                type="text"
              
                required
                placeholder="Street Address"
                v-model="user.deliveryAddress.streetAdd"
              />
            
              <input
                id="streetAdd2"
                type="text"
                
                required
                placeholder="Street Address Line 2 (Optional)"
                v-model="user.deliveryAddress.streetAdd2"
              />
           
              <input
                id="city"
                type="text"
                
                required
                placeholder="City"
                v-model="user.deliveryAddress.city"
              />
            
              <input
                id="zip"
                type="text"
              
                required
                placeholder="Zip Code/Postal Code"
                v-model="user.deliveryAddress.zip"
              />
            
            </div>
          </fieldset>
          <input type="submit" value="Purchase" id="orderButton" />
        </form>
      </div>
      <div class="col-8">
        <div id="info">
          <h3>User Order Info</h3>

          <span>Name: {{ user.name.first }} {{ user.name.last }} </span> <br />
          <span>Email: {{ user.email }} </span> <br />
          <span>T-shirt model: {{ user.shirtModel }} </span> <br />
          <span>size: {{ user.size }} </span> <br />
          <span>Quantity: {{ user.quantity }} </span> <br />
          <span>Delivery Date: {{ user.deliveryDate }} </span> <br />
          <span>Street Adress: {{ user.deliveryAddress.streetAdd }} </span>
          <br />
          <span
            >Street Address Line 2: {{ user.deliveryAddress.streetAddr2 }}
          </span>
          <br />
          <span>City: {{ user.deliveryAddress.city }} </span> <br />
          <span>Zip Code: {{ user.deliveryAddress.zip }} </span> <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
}
#form {
  padding: 25px 60px 50px 60px;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: grey;
  background-image: linear-gradient(180deg, #68bd45 13%, #fff 0);
  display: table;
  width: 12.5in;
  scale: 89%
  
  
}
label {
  margin-top: 10px;
  padding-right: 10px;
  width: 250px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
 
input[type]:not([type="radio"]) {
    padding-bottom: 10px;
    padding-right: 15px;;
    margin-right: 10px
    
    
    
}
input[type="radio"] {
    display: inline-block
}


#orderButton {
  margin-top: 20px;
  background-color: #68bd45;
  border: none;
  color: white;
  border-radius: 2px;
  scale: 120%
  
}


figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#top-form-text {
  color: #fff;
}

#deliveryLoc {
  background-color: lightgray;
}

div {
  margin-bottom: 30px;
}

#delivery {
  background-color: rgb(231, 231, 231);
  border-radius: 4px;
}
</style>

