import React from 'react';
import Noticia from './Noticia';
import Masonry from 'react-masonry-component';

const ListaNoticias = ({noticias}) => {
    const childElements = noticias.map(e => 
        <Noticia
            key={e.url}
            noticia={e}
        ></Noticia>
    )
    return (
        <Masonry
            className="row"
        >{childElements}</Masonry>
    );
};

export default ListaNoticias ;