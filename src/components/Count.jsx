import React from "react";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify' // import the transition
export default class Count extends React.Component{
	 constructor(props){
			 super(props);
				this.state = {
					count:0,
				}
		}
		
		render(){
		
			var Increment = ()=>{
					 this.setState(()=>this.state.count++);
			}
			console.log(Increment);
			var Descrement = ()=>{
				this.setState(()=>this.state.count--);
				if(this.state.count===0){
					toast.error('😖 Error ', {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
						});
						this.setState(()=>this.state.count=0);
				}
			}
			return(
					<div className=" p-8">
								 <button onClick={Descrement} className=" text-white text-[18px] bg-red-600 px-6 rounded">-</button>
									<span>{this.state.count}</span>
									<button onClick={Increment} className=" text-white text-[18px] bg-green-600 px-6 rounded">+</button>
									<ToastContainer/>
					</div>
			)}
}