import {
  API,
} from './types';
/**
 * generic action creator for api calls
 * @param param0
 */
function apiAction({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => { },
  onSuccessCallBack = null,
  onFailure = () => { },
  label = '',
  headersOverride = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onSuccessCallBack,
      onFailure,
      label,
      headersOverride,
    },
  };
}
