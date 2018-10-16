import { Acceptability } from "./acceptability";

export class ArrestProduct {
    public ProductID: '';
    public ProductType = '';
    public ArrestCode = '';
    public GroupCode = '';
    public IsDomestic = '';
    public ProductCode = '';
    public BrandCode = '';
    public BrandNameTH = '';
    public BrandNameEN = '';
    public SubBrandCode = '';
    public SubBrandNameTH = '';
    public SubBrandNameEN = '';
    public ModelCode = '';
    public ModelName = '';
    public FixNo1 = '';
    public DegreeCode = '';
    public Degree = '';
    public SizeCode = '';
    public Size = '';
    public SizeUnitCode = '';
    public SizeUnitName = '';
    public FixNo2 = '';
    public SequenceNo = '';
    public ProductDesc = '';
    public CarNo = '';
    public Qty = '';
    public QtyUnit = '';
    public NetVolume = '';
    public NetVolumeUnit = '';
    public NetWeight = '';
    public NetWeightUnit = '';
    
    public IsActive: number;
    public IsChecked: Acceptability
    public IsNewItem: boolean;
    public ProductFullName = '';
    public IsModify: string;
    public RowId: number;
}


export class ArrestProductDetail {
    // ProductID: number;
    // IsProdcutCo: string;
    // Qty: string;
    // QtyUnit: string;
    // Size: string;
    // SizeUnit: string;
    // Weight: string;
    // WeightUnit: string;
    // MistreatRate: string;
    // Fine: string;
    // IndictmentDetailID: string;
   public ProductDetailID: number;
   public ProductID: number;
   public IsProdcutCo: string;
   public ProductDetailQty: number;
   public ProductDetailQtyUnit: string;
   public ProductDetailSize: number;
   public ProductDetailSizeUnit: string;
   public ProductDetailVolume: number;
   public ProductDetailVolumeUnit: string;
   public ProductDetailMistreatRate: string;
   public ProductDetailFine: string;
   public IndicmentDetailID: number;
   public ProductDetailIsActive: number;
   public ProductType: number;
   public ArrestCode: string;
   public ProductGroupCode: string;
   public ProductIsDomestic: number;
   public ProductCode: string;
   public ProductBrandCode: string;
   public ProductBrandNameTH: string;
   public ProductBrandNameEN: string;
   public ProductSubBrandCode: string;
   public ProductSubBrandNameTH: string;
   public ProductSubBrandNameEN: string;
   public ProductModelCode: string;
   public ProductModelName: string;
   public ProductFixNo1: number;
   public ProductDegreeCode: string;
   public ProductDegree: string;
   public ProductSizeCode: string;
   public ProductSize: string;
   public ProductSizeUnitCode: string;
   public ProductSizeUnitName: string;
   public ProductFixNo2: number;
   public ProductSequenceNo: string;
   public ProductDesc: string;
   public ProductCarNo: string;
   public ProductQty: string;
   public ProductQtyUnit: string;
   public ProductNetVolume: number;
   public ProductNetVolumeUnit: string;
   public ProductIsActive: number;
}