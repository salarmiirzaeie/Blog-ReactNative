const {default: axios} = require('axios');
const {useQuery} = require('react-query');
const {default: axiosConfig} = require('../AxiosConfig');

exports.usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const {data} = await axiosConfig.get('/1');
      return data;
    },
  });
};
