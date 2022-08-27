import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = ({fav: "red"});
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({fav: "Yellow"});
        });
    }
    render(){
        return(
            <>
                
                <p>My Favor color is: {this.state.fav}</p>
            </>
        )
    }
}

export default Header;