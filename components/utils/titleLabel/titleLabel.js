import React from 'react';
import styles from './titleLabel.module.scss';

const TitleLabel = (props) => {
    var { titleName, ...rest } = props;
    return (
        <div {...rest}>
            <h1>{titleName}</h1>
            <style jsx>{`
                div {
                    // background-color: #e6e6e6;
                    background-color: #d5dee0;
                    border: 1px solid black;
					border-radius: 50px;
                    margin-bottom: 25px;
                }

				h1 {
					margin-left: 50px;
				}
			`}</style>
        </div>
    );
};

export default TitleLabel;
