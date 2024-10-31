import $api from "@/api/axios";
import { DogApiResponse } from "@/types/DogTypes";
import { AxiosResponse } from "axios";
import { makeAutoObservable, runInAction } from "mobx";

class Store {
  isLoading: boolean = false;
  dogs: DogApiResponse[] = [];
  page: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  public removeDog(dog: DogApiResponse) {
    runInAction(() => {
      this.dogs = this.dogs.filter((el) => el.id !== dog.id);
    });
  }

  public setLoading(state: boolean) {
    this.isLoading = state;
  }

  public async fetchDogs() {
    try {
      runInAction(() => {
        this.isLoading = true;
        this.page += 1;
      });
      const response: AxiosResponse<DogApiResponse[]> = await $api.get("/", {
        params: {
          page: this.page,
        },
      });

      const data = response.data;
      runInAction(() => {
        this.dogs = [...this.dogs, ...data];
      });
    } catch (error) {
      console.log(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

const store = new Store();
export default store;
