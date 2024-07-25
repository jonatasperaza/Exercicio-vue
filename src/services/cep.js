import api from '@/plugins/api';

class CepService {
    async getCep(cep) {
        const response = await api.get(`${cep}/json`);
        console.log(response.data);
        return response.data;
    }
}

export default CepService;