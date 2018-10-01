import { LawsuitJudgement } from "./lawsuit_judgement";
import { LawsuiteStaff } from "./lawsuit_staff";
export class Lawsuit {
  public RowsId: number;
  public ArrestCode: string;
  public SubSectionType: string;
  public LawsuitNo: string;
  public LawsuitDate: string;
  public TitleName: string;
  public FirstName: string;
  public LastName: string;
  public DepartmentName: string;
  public LawsuitArrestStaff: [{ }];


  public LawsuitID: number;
  public IndictmentID: number;
  public IsLawsuit: number;
  public IsLawsuitStatus: string;
  public ReasonDontLawsuit: string;
  public LawsuitTime: string;
  public LawsuitStationCode: string;
  public LawsuitStation: string;
  public IsOutside: number;
  public AccuserTestimony: string;
  public LawsuitResult: string;
  public DeliveryDocNo: string;
  public DeliveryDate: Date;
  public IsActive: number;
  public LawsuitType: number;
  public LawsuitEnd: number;
  public LawsuitStaff: Array<LawsuiteStaff>;
  public LawsuitJudgement: Array<LawsuitJudgement>;
}

class Types {
  public value: number;
  public text: string;
}
