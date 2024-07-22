import api from '@/plugins/api';

class CepService {
    async getCep(cep) {
        const response = await api.get(`${cep}/json`);
        return response.data;
    }
}

export default new CepService;