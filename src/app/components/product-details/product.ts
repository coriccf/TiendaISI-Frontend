export class Product {

  product_id: number=0;
  product_name: string= "";
  details: string="";
  size: string="";
  color: number=0;
  costProduct:number=0;
  status: number= 0;

  constructor(product_id:number,product_name:string,details:string,size:string,color:number,costProduct:number,status:number){
      this.product_id=product_id;
      this.product_name=product_name;
      this.details=details;
      this.size=size;
      this.color=color;
      this.costProduct=costProduct;
      this.status=status;
  }
}

