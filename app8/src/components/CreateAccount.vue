<script setup>
import { ref, reactive, watch } from "vue";
import { onMounted, onUpdated } from "vue";
import { isEmail } from "validator";
import { isMobilePhone } from "validator/lib/isMobilePhone";
import { isStrongPassword } from "validator";
const usernameRef = ref(null);
const username = ref("");
const password = ref("");
const password2 = ref("");
const disabled = ref(true);
const email = ref("");
const emailRef = ref(null);
const phone = ref("");
const phoneRef = ref(null);
const validPhone = ref(false);
const validEmail = ref(false);
const avatarImageFile = reactive({ avatarImageFile: {} });
const validUsername = ref(false);
const validPassword = ref(false);
const passwordsMatch = ref(false);
const usernameErrorRef = ref(null);
const emailErrorRef = ref(null);
const passwordErrorRef = ref(null);
const password2ErrorRef = ref(null);
// watch element ref - similar to onMounted - not watching value of input
// for some reason disabled when ref function is installed
let count = 0;
function checkEmail(str) {
  return isEmail(str);
}

function checkPhone(str) {
  return isMobilePhone(str,'en-US');
}

function checkPassword(str){
    return isStrongPassword(str)
}

watch(usernameRef, () => {
  console.log("watching usernameRef");
  console.log(usernameRef.value);
  console.log(count++);
  usernameRef.value.value = "alewis";
});

watch(emailRef, () => {
  console.log("watching emailRef");
  console.log(emailRef.value);
  console.log(count++);
  emailRef.value.value = "alewis3@eagles.bridgewater.edu";
});

function loadPreviewImg(evt) {
  avatarImageFile.avatarImageFile = evt.target.files[0];
  let reader = new FileReader();
  reader.onloadend = function () {
    let img = document.querySelector("#preview-img");
    img.src = reader.result;
  };
  reader.readAsDataURL(avatarImageFile.avatarImageFile);
}
// called when anything in component changes - including onMounted
// if used in input element, must have v-model set
function componentUpdate(elm) {
  console.log("password changed");
  console.log(elm.value);
  console.log(passwordErrorRef.value);
  if (passwordErrorRef.value != null && elm.value.length > 0) {
    if(checkPassword(password.value) !== false){
        validPassword.value = password.value;
    }
    passwordErrorRef.value.innerHTML = validPassword.value? "&nbsp;" : "Minimum length: 8 characters, at least one upper and lowercase letter, at least one number, and atleast 1 special character(ex.@#!)";
  }
}
//watch v-model input.value ref (called when string changes)
watch(username, () => {
  validUsername.value = username.value.length >= 4;
  usernameErrorRef.value.innerHTML = validUsername.value? "&nbsp;" : "Minimum length: 4 characters";
  usernameRef.value.setAttribute("data", "hello");
});


//watch email
watch(email, () => {
  if (checkEmail(email.value) === true) {
    validEmail.value = email.value;
  }
  emailErrorRef.value.innerHTML = (validEmail.value)? "&nbsp;" : "Please enter a valid email address";

  emailRef.value.setAttribute("data", "hello");
});

watch(phone, () => {
  if (checkPhone(phone.value) === true) {
    validPhone.value = true || phone.value;
  }
    phoneErrorRef.value.innerHTML = (validPhone.value)? "&nbsp;" : "Please enter a valid phone number";

    phoneRef.value.setAttribute("data", "hello");
  
});
// watch array of refs
watch([password, password2], () => {
  passwordsMatch.value = password.value === password2.value;
  password2ErrorRef.value.innerHTML =
    passwordsMatch.value || password2.value.length == 0
      ? "&nbsp;"
      : "Passwords do not match";
});
// watch array of refs
watch(
  [validUsername, validPassword, passwordsMatch, validEmail, validPhone],
  async () => {
    disabled.value = !(
      validUsername.value &&
      validPassword.value &&
      passwordsMatch.value &&
      validEmail.value &&
      validPhone.value
    );
    console.log(disabled.value);
    if (!disabled.value) usernameRef.value.value = "";
  }
);
function submit() {
  let mssg = username.value + ", " + password.value;
  console.log(mssg);
}
onMounted(() => {
  usernameRef.value.focus();
});
onUpdated(() => {
  //console.log(usernameRef.value.value)
});
</script>


<template>
  <div class="container">
    <form
      class="rounded border border-primary border-2 border-opacity-25 py-3 px-5"
    >
      <fieldset class="d-flex flex-column">
        <legend class="text-center">Create Account</legend>
        <div id="images" class="row">
          <div>
            <figure id="fig1">
              <img id="preview-img" />
              <figcaption>
                {{ avatarImageFile.avatarImageFile.null }}
              </figcaption>
              <label>Profile Image Preview</label>
            </figure>
          </div>
        </div>

        <div class="form-floating mb-2">
          <input
            ref="usernameRef"
            v-model="username"
            id="username"
            type="text"
            class="form-control"
          />
          <label for="username" class="form-label">Username</label>
          <small ref="usernameErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input
            ref="emailRef"
            type="email"
            id="email"
            class="form-control"
            v-model="email"
          />
          <label for="email" class="form-label">Email</label>
          <small ref="emailErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input
            ref="phoneRef"
            type="tel"
            id="phone"
            
            class="form-control"
            v-model="phone"
   
          />
          <label for="phone" class="form-label">Phone Number</label>
          <small ref="phoneErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input
            :ref="componentUpdate"
            v-model="password"
            id="password"
            type="password"
            class="form-control"
          />
          <label for="password" class="form-label">Password</label>
          <small ref="passwordErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="form-floating mb-2">
          <input
            v-model="password2"
            id="password2"
            type="password"
            class="form-control"
          />
          <label for="password2" class="form-label">Reenter password</label>
          <small ref="password2ErrorRef" class="text-danger">&nbsp;</small>
        </div>

        <div class="mb-2">
          <label for="avatar" class="form-label"
            >Choose a profile picture:</label
          >

          <input
            id="avatar"
            class="form-control"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            @change="loadPreviewImg"
          />
        </div>

        <div>
          <button
            @click="submit"
            class="btn btn-primary"
            type="button"
            v-bind:disabled="disabled"
          >
            Create Account
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style>
#preview-img {
  width: 150px;
  height: 150px;
  border-radius: 50px;
}
#images {
  display: flex;
  align-items: center;
}
figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  padding: 20px 20px 40px 20px;
  background-color: #686b7c;
}

label {
  color: #312b2f;
}
</style>