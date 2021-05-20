export class LocalStorage {
  static saveIdClient(idClient: number) {
    localStorage.setItem("idClient", idClient.toString());
  }
}
