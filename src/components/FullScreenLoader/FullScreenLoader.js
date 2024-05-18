import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const override = css`
    display: block;
`;

const FullScreenLoader = ({ loading }) => {
    return (
        loading && (
            <div style={overlayStyle}>
                <ClipLoader color="#1890ff" loading={loading} css={override} size={50} />
            </div>
        )
    );
};

export default FullScreenLoader;
