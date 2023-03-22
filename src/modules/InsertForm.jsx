import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const InsertForm = () => {

	const navigate = useNavigate();
	const [product, setProduct] = useState(null);
	const handleChange = (e) => {
	  const { name, value } = e.target;
	  setProduct({ ...product, [name]: value });
	};
	const handleSubmit = (e) => {
	  e.preventDefault();
	  axios
		 .post(`https://store-mockup-backend.onrender.com/api/items`, product)
		 .then((res) => navigate(`/products/${res.data.id}`))
		 .catch((e) => console.log(e));
	};

	// Datensatz: id, category, title, imageurl, description, size, color, price 

	return (
		<form method="post" onSubmit={handleSubmit}>


			<label>
				Category: <input name="category" defaultValue="" onChange={handleChange}/>
			</label>

			<label>
				Title: <input name="title" type="text" defaultValue="" onChange={handleChange}/>
			</label>

			<label>
				Imageurl: <input name="imageurl" type="text" defaultValue="" onChange={handleChange}/>
			</label>

			<label>
				Description: <input name="description" type="text" defaultValue="" onChange={handleChange}/>
			</label>

			<label>
				Size: <input name="size" type="text" defaultValue="" onChange={handleChange}/>
			</label>

			<label>
				Price: <input name="price" type="text" defaultValue="" onChange={handleChange}/>
			</label>

			<button type="submit">Insert</button>

		</form>
	)
}

