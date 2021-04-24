import React from "react"

class Checkout extends React.Component{
    state={firstName:"", lastName:"", email:"", creditCard:"", zipCode:""}
    

    handleSubmit = (e) =>{
        e.preventDefault()
        const {firstName, lastName, email, creditCard, zipCode} = this.state
        const {total} = this.props
        console.log({total})
        if(!firstName || !lastName || !email || !creditCard || !zipCode){
            window.alert("Input is not valid")
        } else if (creditCard.length < 16){
            window.alert("Credit card number is not valid")
        } else if (zipCode.length < 5){
            window.alert("Zip code is not valid")
        } else {
            window.alert(`Purchase complete. You will be charged ${total}` )
        }
    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]:value})

    }

    


    render(){
        return (
        <section>

            <h1>Checkout</h1>

            <form onSubmit={this.handleSubmit}> 

                <label htmlFor="firstName">First Name</label>
                <br/>
                <input 
                    id="firstName"
                    name="firstName"
                    value={this.state.firstName} 
                    onChange={this.handleChange}
                    />
                <br/>

                <label htmlFor="lastName">Last Name</label>
                <br/>
                <input 
                    id="lastName"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    />
                <br/>

                <label htmlFor="email">Email</label>
                <br/>
                <input 
                    id="email" 
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                <br/>

                <label htmlFor="creditCard">Credit Card</label>
                <br/>
                <input 
                    id="creditCard" 
                    type="number"
                    name="creditCard"
                    value={this.state.creditCard}
                    onChange={this.handleChange}/>
                <br/>

                <label htmlFor="zipCode">Zip Code</label>
                <br/>
                <input 
                    id="zipCode" 
                    type="number"
                    name="zipCode"
                    value={this.state.zipCode}
                    onChange={this.handleChange}/>
                <br/>

                <button>Buy Now</button>

            </form>

        </section>

        )
    }
}

export default Checkout