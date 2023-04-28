import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'marvellousChk'
})

export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param:string): string
  {
    let str:string =""
    if(param == "Prime")
    {
      let iCnt = 2
      for(iCnt ; iCnt < value; iCnt++)
      {
        if((value % iCnt) == 0)
        {
          return str = value +  " It is not Prime"
          //break;
        }
      }
      return "It is Prime"
    }

    if(param == "Even")
    {
      if((value % 2) == 0)
      {
        return str = value + " It is Even number"; 
      }
      else
      {
        return str = value + " It is not Even number";
      }
    }

    if(param == "Odd")
    {
      if((value % 2) != 0)
      {
        return str = value + " It is Odd number";
      }
      else
      {
        return str = value + " It is not Odd number"
      }
      
    }  

    if(param == "Perfect")
      {   
        let sum = 0;
          let iCnt = 1;
          for(iCnt; iCnt < value; iCnt++)
          {
            if((value % iCnt) == 0)
            {
              sum = sum + iCnt;
            }
          }
          if(sum == value)
          {
            return str = value +" It is Perfect Number";
          }
          else
          {
            return str = value + " It is not Perfect Number";
          }
      }

      return str;
  }
}
