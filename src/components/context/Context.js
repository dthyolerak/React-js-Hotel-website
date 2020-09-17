import React, {Component} from 'react';

import {Links} from '../context/Data';
import {Portfolio} from '../context/Data';


const ProductContext = React.createContext();

class ProductProvider extends Component{


    state={
         sidebarOpen:false,
         links:Links,
         portfolio:Portfolio,
        headerShow:false, 
        closeLinks:false,
    
    }
    //open nav
    handleSidebar=()=>{
        this.setState({
            sidebarOpen:!this.state.sidebarOpen,
        })
        console.log("clicked");


    }

    //handle class
    handleClose=()=>{
        this.setState({
            sidebarOpen:false
        })
    }
    
    //scroll effect
componentDidMount()
{
    window.addEventListener("scroll", this.scrollEffect);
}
    scrollEffect = ()=>{
        if (window.scrollY>50){
            this.setState({
                headerShow:true
            })
        }
        else this.setState({
            headerShow:false
        })
    }

    render(){
        return (<ProductContext.Provider value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            scrollEffect:this.scrollEffect
        }}>
            {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}; 