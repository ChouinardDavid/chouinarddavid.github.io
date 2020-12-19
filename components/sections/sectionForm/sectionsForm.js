import React from 'react';

const SectionForm = (props) => {
    const { id, children, ...rest } = props;
    return (
        <>
            {/* <span id={id} ></span> */}
            <div {...rest} >{children}</div>
            <style jsx>{`
				div {
                    margin-top: 75px;
                }


                // Permet d'Afficher la page à la bonne hauteur (entête static) lors d'un click sur le lien d'une section
                // span {
                //     display: block;
                //     height: 180px; /*same height as header*/
                //     margin-top: -180px; /*same height as header*/
                //     visibility: hidden;
                // }
			`}</style>
        </>
    );
};

export default SectionForm;
