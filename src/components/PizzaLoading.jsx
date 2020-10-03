import React from 'react';
import ContentLoader from 'react-content-loader';
const PizzaLoading = () => {
    return (
        <ContentLoader
            speed={2}
            width={320}
            height={560}
            viewBox="0 0 320 560"
            backgroundColor="#ecddee"
            foregroundColor="#dac0e8"

        >
            <rect x="146" y="442" rx="25" ry="25" width="142" height="45" />
            <rect x="21" y="454" rx="3" ry="3" width="75" height="29" />
            <rect x="32" y="277" rx="2" ry="2" width="242" height="19" />
            <rect x="20" y="320" rx="24" ry="24" width="267" height="105" />
            <circle cx="151" cy="125" r="123" />
            <rect x="141" y="362" rx="0" ry="0" width="1" height="0" />
        </ContentLoader>
    )
}
export default PizzaLoading;