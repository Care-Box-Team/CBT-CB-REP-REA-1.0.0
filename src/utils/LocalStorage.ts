export class LocalStorage {
  static saveIdClient(idClient: number) {
    localStorage.setItem("idClient", idClient.toString());
  }
  static saveEmailClient(email: string) {
    localStorage.setItem("email", email);
  }
}
