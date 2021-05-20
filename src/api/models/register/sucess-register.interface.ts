export interface SuccessRegisterResponse {
  client: {
    adress: string;
    idClient: number;
    lastNames: string;
    names: string;
    phone: string;
  };
  message: string;
  status: number;
}
