import React, {Component} from "react"

class App extends Component {
  constructor() {
      super()
      this.state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        lactose: false,
        vegan: false,
        peanut: false,
        diabetic: false,
        gluten: false,
        kosher: false,
        halal: false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    const {name, value, type, checked} = event.target

    type === "checkbox" ?
    this.setState({[name]: checked}) :
    this.setState({[name]: value})
  }

  handleSubmit() {
    console.log("Información enviada =D")
  }



  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name" 
            onChange={this.handleChange}
          />
          <br />
          
          <input 
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name" 
            onChange={this.handleChange}
          />
          <br />

          <input 
            type="text"
            value={this.state.age}
            name="age"
            placeholder="Age" 
            onChange={this.handleChange}
          />
          <br /><br />

          <label>Gender: <br />
            <input 
                type="radio" 
                name="gender"
                value="Male"
                checked={this.state.gender === "Male"}
                name="gender" 
                onChange={this.handleChange}
            /> Male
          </label>

          <label>
            <input 
                type="radio" 
                name="gender"
                value="Female"
                checked={this.state.gender === "Female"}
                name="gender" 
                onChange={this.handleChange}
            /> Female
          </label>
          <br /><br />

          <label>Location: </label>
          <select 
              value={this.state.destination}
              onChange={this.handleChange}
              name="destination"
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Asia">Asia</option>
            <option value="América">América</option>
            <option value="África">África</option>
            <option value="Antártida">Antártida</option>
            <option value="Europa">Europa</option>
            <option value="Oceanía">Oceanía</option>
          </select>
          <br /><br />
                  

          <label>Dietary restrictions_:
            <br />
            <input 
                type="checkbox" 
                checked={this.state.lactose}
                name="lactose" 
                onChange={this.handleChange}
            /> Lactose Intolerance
          </label><br />
          <label>
            <input 
                type="checkbox" 
                checked={this.state.vegan}
                name="vegan" 
                onChange={this.handleChange}
            /> Vegetarian and Vegans
          </label><br />
          <label>
            <input 
                type="checkbox" 
                checked={this.state.peanut}
                name="peanut" 
                onChange={this.handleChange}
            /> Peanut Allergies
          </label><br />
          <label>
            <input 
                type="checkbox" 
                checked={this.state.diabetic}
                name="diabetic" 
                onChange={this.handleChange}
            /> Diabetic
          </label><br />
          <label>
            <input 
                type="checkbox" 
                checked={this.state.gluten}
                name="gluten" 
                onChange={this.handleChange}
            /> Gluten Free
          </label><br />
          <label>
            <input 
                type="checkbox" 
                checked={this.state.kosher}
                name="kosher" 
                onChange={this.handleChange}
            /> Kosher
          </label><br />
          <label>
            <input 
                type="checkbox" 
                checked={this.state.halal}
                name="halal" 
                onChange={this.handleChange}
            /> Halal
          </label>
          <br />
          
          <button>Submit</button>
        </form>


        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
            Your dietary restrictions:
            {this.state.lactose && " Lactose Intolerance,"}
            {this.state.vegan && " Vegetarian/Vegan,"}
            {this.state.peanut && " Peanut Allergy,"}
            {this.state.diabetic && " Diabetic,"}
            {this.state.gluten && " Gluten Free,"}
            {this.state.kosher && " Kosher,"}
            {this.state.halal && " Halal,"}
        </p>
      </main>
    )
  }
}

export default App
