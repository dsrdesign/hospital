import { Time } from "@angular/common";

export class Consultation{
  id!: number;
  medecinId!: number;
  price!: number;


  idPatient!: number;
  date!:Date;
  hour!: Time;
  status!: string;
  idService!: string;
}
