import axios from "axios";
// "cep"/json
const pegaCep = axios.create({
    baseURL:"http://viacep.com.br/ws/"
});

export default pegaCep;