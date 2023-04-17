<template></template>

<script>
var B = BABYLON;

var canvas = document.getElementById("renderCanvas");

var engine = new B.Engine(canvas, true);


var createScene = function () {
  var scene = new B.Scene(engine);
  scene.gravity = new BABYLON.Vector3(0, -9.81, 0);

  scene.collisionsEnabled = true;

  //camera
  let camera = new BABYLON.UniversalCamera(
    "UniversalCamera",
    new BABYLON.Vector3(300, 100, -400),
    scene
  );
  camera.attachControl(canvas, true);
  camera.applyGravity = true;
  camera.ellipsoid = new BABYLON.Vector3(1, 40, 1);
  camera.checkCollisions = true;
  camera.speed = 10;
  camera.rotation.y = -Math.PI / 1.51;

  var light = new BABYLON.HemisphericLight(
    "HemiLight",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.4;

  //Skybox
  // https://opengameart.org
  let skybox = B.Mesh.CreateBox("skyBox", 1000.0, scene);
  skybox.position.y = 0;
  skybox.infiniteDistance = true;
  let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
  skyboxMaterial.backFaceCulling = false;

  let files = [
    "_px.jpg",
    "_py.jpg",
    "_pz.jpg",
    "_nx.jpg",
    "_ny.jpg",
    "_nz.jpg",
  ];
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
    "blue-clouds/",
    scene,
    files
  );
  skyboxMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;
  skybox.material = skyboxMaterial;

  //Ground
  let ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap(
    "ground",
    "ground.jpg",
    {
      width: 1200,
      height: 1200,
      subdivisions: 12,
      maxHeight: 3,
      minHeight: -25,
    },
    scene,
    false
  );
  ground.checkCollisions = true;
  ground.position.y = 0;

  let materialground = new B.StandardMaterial("ground", scene);
  materialground.diffuseTexture = new BABYLON.Texture("ground.jpg", scene);
  ground.material = materialground; 

  //Importing
  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "old_city_building.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;

        mesh.scaling = new B.Vector3(9, 9, 9);
      }

      let city = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(city);
      }

      city.position.y = 10;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "low_poly_-_dumpster.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;
        mesh.rotationQuaternion.toEulerAnglesToRef(mesh.rotation);
        mesh.rotationQuaternion = null;

      

        mesh.rotation.y = Math.PI / 1.3;
        mesh.position.x = -600;

        mesh.scaling = new B.Vector3(5.5, 5.5, 5.5);
      }

      let dumpster = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(dumpster);
      }

      dumpster.position.y = 20;
      dumpster.position.z = -730;
      dumpster.position.x = -300;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "low_poly_raccoon.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.position.z = -6;
        mesh.rotation.x = 3;

        mesh.scaling = new B.Vector3(2.8, 2.8, 2.8);
      }

      let raccoon = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(raccoon);
      }

      raccoon.position.y = 10;
      raccoon.position.x = 420;
      raccoon.position.z = -170;
     
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "party_hat_v2.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.position.z = -12;
        mesh.position.x = -0.6;

        mesh.scaling = new B.Vector3(.2, .2, .2);
      }

      let partyHat = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(partyHat);
      }

      partyHat.position.y = 257;
      partyHat.position.z = -160.5;
      partyHat.position.x = 398;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "panuccis_pizza.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(4, 4, 4);
      }

      let panuccis_pizza = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(panuccis_pizza);
      }

      panuccis_pizza.position.y = 56;
      panuccis_pizza.position.x = 430;
      panuccis_pizza.position.z = -128;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "panuccis_pizza.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(4, 4, 4);
      }

      let panuccis_pizza = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(panuccis_pizza);
      }

      panuccis_pizza.position.y = 59;
      panuccis_pizza.position.x = 420;
      panuccis_pizza.position.z = -128;
    }
  );
  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "low_poly_opossum.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.position.z = 6;
        mesh.rotation.x = 3;
       

        mesh.scaling = new B.Vector3(2.5, 2.5, 2.5);
      }

      let possum = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(possum);
      }

      possum.position.y = 10;
      possum.position.x = 340;
      possum.position.z = -150;
     
    }
  );
  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "party_hat_v2.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.position.z = -12;
        mesh.position.x = -0.6;

        mesh.scaling = new B.Vector3(.2, .2, .2);
      }

      let partyHat = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(partyHat);
      }

      partyHat.position.y = 257;
      partyHat.position.z = -162.5;
      partyHat.position.x = 333.5;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "dingus_the_cat.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.position.z = 6;
        mesh.rotation.x = 3;
       

        mesh.scaling = new B.Vector3(1, 1, 1);
      }

      let maxwell = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(maxwell);
      }

      maxwell.position.y = -5;
      maxwell.position.x = 409;
      maxwell.position.z = -200;
     
    }
  );
  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "party_hat_v2.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.position.z = -12;
        mesh.position.x = -0.6;

        mesh.scaling = new B.Vector3(.2, .2, .2);
      }

      let partyHat = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(partyHat);
      }

      partyHat.position.y = 260;
      partyHat.position.z = -202;
      partyHat.position.x = 389.7;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "pizza.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(.3, .3, .3);
      }

      let pizza = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(pizza);
      }

      pizza.position.y = -20;
      pizza.position.x = 330;
      pizza.position.z = -250;
    }
  );
  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "pizza.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(.3, .3, .3);
      }

      let pizzaR = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(pizzaR);
      }

      pizzaR.position.y = -20;
      pizzaR.position.x = 450;
      pizzaR.position.z = -250;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "pizza1.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(1.5, 1.5, 1.5);
      }

      let pizza = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(pizza);
      }

      pizza.position.y = -15;
      pizza.position.x = 400;
      pizza.position.z = -200;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "pizza1.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(1.5, 1.5, 1.5);
      }

      let pizza = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(pizza);
      }

      pizza.position.y = -15;
      pizza.position.x = 375;
      pizza.position.z = -170;
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "fnaf_desk_cup_high_poly.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(.18, .18, .18);
      }

      let cup = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(cup);
      }

      cup.position.y = -260.8;
      cup.position.x = 750;
      cup.position.z = -200;
      
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "fnaf_desk_cup_high_poly.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(.18, .18, .18);
      }

      let cup = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(cup);
      }

      cup.position.y = -260.8;
      cup.position.x = 690;
      cup.position.z = -180;
      
    }
  );

  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "fnaf_desk_cup_high_poly.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;

        mesh.rotation.y = 0.625;
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(.18, .18, .18);
      }

      let cup = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(cup);
      }

      cup.position.y = -260.8;
      cup.position.x = 770;
      cup.position.z = -180;
      
    }
  );
  BABYLON.SceneLoader.ImportMesh(
    null,
    "partySupplies/",
    "party_streamers.glb",
    scene,
    function (meshes, particalSystem, skeletons) {
      console.log(meshes);

      for (let mesh of meshes) {
        mesh.checkCollisions = true;
        
        mesh.position.x = 20;
        mesh.position.z = 10;

        mesh.scaling = new B.Vector3(1.1, 1.1, 1.1);
      }

      let streamers = meshes[0];
      for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(streamers);
      }

      streamers.position.y = 17;
      streamers.position.x = 780;
      streamers.position.z = -170;
      
    }
  );

  
  

  return scene;
};

var scene = createScene();

var music = new BABYLON.Sound("maxwellTheme", "maxwell.mp3", scene, null, { loop: true, autoplay: true });
let volume = .3;
music.setVolume(volume);

var loop = function () {
  scene.render();
};

engine.runRenderLoop(loop);

var resize = function () {
  engine.resize();
};

window.addEventListener("resize", resize);
</script>

<style>
</style>