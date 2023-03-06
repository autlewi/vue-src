<template>
  <fieldset>
    <legend>User Input Text Controls</legend>
    <div class="row">
      <div class="col-auto">
        <label for="text" class="form-label">Text</label>
        <input id="text" class="form-control" type="text" />
      </div>
      
      <div class="col-auto">
        <label for="textarea" class="form-label">TextArea</label>
        <textarea id="textarea" class="form-control" rows="1"></textarea>
      </div>
      <div class="col-auto">
        <label for="search" class="form-label">Search</label>
        <input id="search" class="form-control" type="search" />
      </div>
      <div class="col-auto">
        <label for="email" class="form-label">Email</label>
        <input id="email" class="form-control" type="email" />
      </div>
      <div class="col-auto">
        <label for="password" class="form-label">Enter password:</label>
        <input
          id="password"
          class="form-control"
          type="password"
          name="password"
          minlength="8"
          required
        />
      </div>
      <div class="col-auto">
        <label for="phone" class="form-label">Phone Number</label>
        <input id="phone" class="form-control" type="tel" />
      </div>
      <div class="col-auto">
        <label for="url" class="form-label">Link</label>
        <input id="url" class="form-control" type="url" />
      </div>
    </div>
  </fieldset>

  <fieldset>
    <legend>Programmable Selection Controls</legend>
    <div class="row">
      <div id="animals" class="col-auto">
        <label for="animals" class="form-check-label">Select your favorite animals</label>
        <div class="form-check">
          <input
            id="tiger"
            class="form-check-input"
            type="checkbox"
            name="animal"
            value="tiger"
            checked
          />
          <label for="tiger">Tiger</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="snake"
            class="form-check-input"
            name="animal"
            type="checkbox"
            value="animal"
          />
          <label for="snake">Snake</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="bear"
            class="form-check-input"
            name="animal"
            type="checkbox"
            value="animal"
          />
          <label for="bear">Bear</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            id="whale"
            class="form-check-input"
            name="animal"
            type="checkbox"
            value="animal"
          />
          <label for="whale">Whale</label>
        </div>
      </div>

      <div id="math" class="col-auto">
        <label for="math" class="form-check-label">What is the correct answer to: 2 + 2 = ?</label>
        <div class="form-check">
          <input
            id="correct"
            class="form-check-input"
            type="radio"
            name="math"
            value="correct"
            checked
          />
          <label for="correct">4 duhhh</label>
        </div>
        <div class="form-check">
          <input
            id="silly"
            class="form-check-input"
            type="radio"
            name="math"
            value="silly"
          />
          <label for="silly">fish!</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-auto">
        <label for="eyeColors" class="form-label">Select your eye color</label>
        <input
          list="eyeColor-list"
          id="eyeColors"
          class="form-control"
          name="eyeColor"
        />
        <datalist id="eyeColor-list">
          <option value="Brown"></option>
          <option value="Blue"></option>
          <option value="Green"></option>
          <option value="Hazel"></option>
          <option value="Grey"></option>
          <option value="Other"></option>
        </datalist>
      </div>

      <div class="col-auto">
        <label for="car-select" class="form-label">Select a Car Brand</label>
        <select id="car-select" class="form-select" name="cars">
          <option value="Holder">Select...</option>
          <option value="BMW">BMW</option>
          <option value="Nissan">GMC</option>
          <option value="Nissan">Volkswagen</option>
          <option value="Honda">Honda</option>
          <option value="Nissan">Toyota</option>
          <option value="Nissan">Chevrolet</option>
          <option value="Lambo">Lamborgini</option>
        </select>
      </div>
    </div>
  </fieldset>

  <fieldset>
    <legend>Numeric Selection and Display Controls</legend>
    <div class="row">
      <div class="col-auto">
        <label for="age-picker" class="form-label">Enter your age</label>
        <input
          id="age-picker"
          class="form-control"
          type="number"
          name="age"
          min="10"
          max="100"
        />
      </div>
      <div class="col-auto">
        <label for="volume" class="form-label">Volume</label>
        <input
          id="volume"
          class="form-range"
          type="range"
          name="volume"
          min="0"
          max="100"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-auto">
        <label for="download-progress" class="form-label">File download progress</label>
        <progress id="download-progress" max="100" value="50">50%</progress>
      </div>

      <div class="col-auto">
        <label for="batteryHealth" class="form-label">Battery Level</label>
        <meter
          id="batteryHealth"
          min="0"
          max="100"
          low="20"
          high="75"
          optimum="100"
          value="80"
        />
      </div>
    </div>
  </fieldset>

  <fieldset>
    <legend>Pickers</legend>
    <div class="row">
      <div class="col-auto">
        <label for="res-date" class="form-label">Enter Reservation Date:</label
        ><input
          id="res-date"
          class="form-control"
          type="date"
          name="res-date"
          min="2023-01-01"
          max="2023-12-31"
        />
      </div>

      <div class="col-auto">
        <label for="res-time" class="form-label"
          >Enter Time of Reservation:</label>
        <input
          id="res-time"
          class="form-control"
          type="time"
          name="res-time"
          min="8:00"
          max="18:00"
        />
      </div>
      <div class="col-auto">
        <label for="reserve-time" class="form-label">Enter Reservation Date and Time:</label>
        <input
          id="reserve-time"
          class="form-control"
          type="datetime-local"
          name="reserve-time"
          min="2023-01-01T8:00"
          max="2023-12-31T18:00"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-auto">
        <label for="color" class="form-label">Select a color:</label>
        <input
          id="color"
          class="form-control form-control-color"
          type="color"
          name="color"
        />
      </div>
      <div class="col-auto">
        <label for="assignment" class="form-label">Attach Assignment:</label>
        <input
          id="assignment"
          class="form-control"
          type="file"
          name="assignment"
          accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
      </div>
    </div>
  </fieldset>

  <fieldset>
    <legend>Buttons</legend>
    <div>
      <button class="btn btn-outline-primary m-2" type="submit">Submit</button>
      <button class="btn btn-outline-primary m-2" type="reset">Reset</button>
      <button class="btn btn-outline-primary m-2" type="button">Block</button>
    </div>
    <div>
      <input
        id="submit"
        class="btn btn-outline-primary m-2"
        type="submit"
        value="Submit"
      />
      <input
        id="reset"
        class="btn btn-outline-primary m-2"
        type="reset"
        value="Reset"
      />
      <input
        id="call"
        class="btn btn-outline-primary m-2"
        type="image"
        src="/public/call.png"
      />
      <input
        id="friend"
        class="btn btn-outline-primary m-2"
        type="button"
        value="Add Friend"
      />
    </div>
  </fieldset>
</template>
