import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatPrice } from './helper';

const url = 'https://test-react-api.netlify.app/api/product';
export const Airtable = () => {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		try {
			const { data } = await axios.get(url);
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<section className='section section-center'>
			<div className='title'>
				<h2>Data from Airtable</h2>
				<div className='title-underline'></div>
			</div>
			<div className='link'>
				<a href='https://test-react-api.netlify.app/api/product'>API Link</a>
			</div>
			<div className='products'>
				{products.map((product) => {
					const { id, url, price, name } = product;
					return (
						<section className='product' key={id}>
							<img src={url} alt={name} />
							<div className='info'>
								<h5>{name}</h5>
								<h5 className='price'>{formatPrice(price)}</h5>
							</div>
						</section>
					);
				})}
			</div>
		</section>
	);
};
