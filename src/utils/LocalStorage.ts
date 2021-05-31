import { SuccessRegisterResponse } from "../api/models/register/sucess-register.interface";

export class LocalStorage {
  static saveIdClient(idClient: number) {
    localStorage.setItem("idClient", idClient.toString());
  }
  static saveEmailClient(email: string) {
    localStorage.setItem("email", email);
  }

  static saveClient(client: SuccessRegisterResponse): void {
    localStorage.setItem("name", client.client.names);
    localStorage.setItem("lastname", client.client.lastNames);
    localStorage.setItem("phone", client.client.phone);
    localStorage.setItem("address", client.client.adress);
    localStorage.setItem("email", client.client.userLogin.email);
  }
}
