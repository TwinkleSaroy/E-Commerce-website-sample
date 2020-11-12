import React from 'react';
import   Product from './Product';
import './Home.css';

 function Home() {
    return (
        <div className='home'>
        <img
         className='home_image'
         src='https://www.picmote.com/static/template.19d3d2b2.png' alt=''/>
         {/*Product id,title,price,rating,image*/}
         <div className='home_row'>
         <Product 
            id='12321341'
            title='The learn startup:Now Constant innovation creating'
            price={11.96}
            rating={5}
            image='https://www.modicare.com/preLoginImage/mobileCommon/newproduct-20190911.jpeg'
            />
            <Product 
            id='12321341'
            title='The learn startup:Now Constant innovation creating'
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/I/51TZSQ%2B4f6L._SY300_QL70_ML2_.jpg'
            />
            <Product 
            id='12321341'
            title='The learn startup:Now Constant innovation creating'
            price={11.96}
            rating={5}
            image='https://in.canon/media/image/2018/05/03/642e7bbeae5741e3b872e082626c0151_eos6d-mkii-ef-24-70m-l.png'
            />
            </div>
            <div className='home_row'>
            <Product 
            id='12321341'
            title='The learn startup:Now Constant innovation creating'
            price={11.96}
            rating={5}
            image='https://medias.fashionnetwork.com/image/upload/v1/medias/2050ebade171f195beb11045810cf9b02732683.jpg'
            />
            <Product 
            id='12321341'
            title='The learn startup:Now Constant innovation creating'
            price={11.96}
            rating={5}
            image='https://cdn.wccftech.com/wp-content/uploads/2020/07/Apple-product-line.jpg'
            />
            <Product 
            id='12321341'
            title='The learn startup:Now Constant innovation creating'
            price={11.96}
            rating={5}
            image='https://i01.appmifile.com/webfile/globalimg/PC-_14.jpg?width=612&height=612'
            /> 
            </div>
         {/* Product */}
        
        </div>
    );
};
export default Home;