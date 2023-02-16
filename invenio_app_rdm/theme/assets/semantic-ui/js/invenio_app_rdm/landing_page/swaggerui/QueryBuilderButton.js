import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { axiosWithconfig } from "../../utils";
import PropTypes from "prop-types";

export const QueryBuilderButton = ({ onError, apiui }) => {
    const [loading, setLoading] = useState(false);
    const [tkn, setToken] = useState('');
    const handleClick = async () => {
        setLoading(true);
        await axiosWithconfig.post(`/querybuilder`)
            .then((rsp) => {
                setToken(rsp.data);
                setLoading(false);
                console.log(apiui);
                window.open(apiui + '&token=' + rsp.data, '_blank')
            })
            .catch((error) => {
                setLoading(false);
                onError(error);
            });
    };

    return (
        <Button
            onClick={handleClick}
            loading={loading}
        > Click Here!!
        </Button>
    );
};

QueryBuilderButton.propTypes = {
    apiui: PropTypes.string.isRequired,
    onError: PropTypes.func.isRequired,
};