
export default function Attrribut(){
			const box = {
				width:"200px",
				height:"200px",
				color:"red",
				backgroundColor:"blue",
				fontSize:"25px",
			}
			var color = { color:"gray"}
			var Demo = "hi crush so cute 🥰";
	return(
			<div className=" p-8">
						<h1 className=" text-red-100 text-3xl">Hello nana</h1>
						<p className=" text-blue-300">{Demo}</p>
						<h1>Number : {7*3}</h1>
						<h1 style={color}>Hello</h1>
						<div style={box}></div>
			</div>
	)
}