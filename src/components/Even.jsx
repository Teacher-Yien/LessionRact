
import React from 'react'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify'


export default class Even extends React.Component {
	handleClick = ()=>{
		Swal.fire({
			title: "Good job!",
			text: "You clicked the button!",
			icon: "success"
	});	}
	handleToast = ()=> {toast.info('I Love Students Ract js', {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce,
		});}
		render(){
		return (
				<div className=' p-8'>
					<button onClick={this.handleClick} className=' text-white bg-blue-300 px-5 rounded'>Events Handle</button>
					<button onClick={this.handleToast} className=' text-white bg-green-500 px-5 mx-2 rounded' > Tost</button>

					<ToastContainer />
				</div>
		)
	}
}
