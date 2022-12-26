import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { axiCreate } from '../utils/axios-clean-trace';

export default function useApi({
    axiConfig
}: {
    axiConfig?: AxiosRequestConfig<any> | undefined;
} = {}) {
    const configRef = React.useRef(axiConfig);

    return React.useMemo(() => {
        const cfg = configRef.current;
        return axiCreate({
            baseURL: '/',
            timeout: 30 * 1000,
            ...cfg
        });
    }, [configRef]);
}
