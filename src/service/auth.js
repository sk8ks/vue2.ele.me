import {getCookies} from 'components/common/utils'

export const getToken = () => getCookies('token');
