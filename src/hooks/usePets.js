import { useApi } from "./useApi";

const api = useApi()
export const usePets = () => ({
  getFullPets: async (user) => {
    const pets = await api.getPets(user)
    if(pets){
      pets.map(async (pet, i) => {
        pets[i].meds = await api.getMeds(pet.uuid)
        pets[i].vacs = await api.getVacs(pet.uuid)
        pets[i].anti = await api.getAnti(pet.uuid)
      })
    }
    return pets;
  }
});