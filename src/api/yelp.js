import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer KU2JheXyUmqFxKGLSchnq6d_AP4I6V60pcY7mC1BEC5inlQDuxybSa8KeckdbIfltRPyQEjH1J9nELoB9BTHjrApGvYLAUPbYaFAId6z-CuBkRq9CBNKPWpftSHgXnYx"
  }
  // VHavtj_WshJVMeBpxdnP1g
}) // this configures axios to work with yelp api.