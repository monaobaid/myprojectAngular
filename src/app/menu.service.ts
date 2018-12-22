import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
foodMenuType=[{id:1,type:'مشروبات ساخنه'},
{id:2,type:'مشروبات باردة'},
{id:3,type:'حلويات'}]
foodMenu=[
    {id:1, dtype:'  قهوة  Coffee' , price:8 },
    {id:1, dtype:' شكولاتة ساخنة  Hot Chocolate', price:8 },
    {id:1, dtype:' كابتشينو Cappuccino ' , price:10 },
    {id:1, dtype:' نسكافيه  Nescafe' , price:10},
    {id:1, dtype:' حليب ساخن  Hot Milk ' , price:8  },
    {id:1, dtype:' شاي   Tea' , price:6},
    {id:2, dtype:' عصير برتقال  Orange juice' , price:7 },
    {id:2, dtype:' عصير ليمون  Lemon juice ' , price:7 },
    {id:2, dtype:' عصير مانخو  Mango juice' , price:7},
    {id:2, dtype:' مشروبات غازية Soft drink', price:5},
    {id:3, dtype:' تشيزكيك  Cheese cake' , price:15 },
    {id:3, dtype:' كيك الفلاولة  Strawberry cake' , price:10},
    {id:3, dtype:' كيك الشكولاتة  Chocolate cake', price:10},
  ]
  constructor() { }
}
 arType:'الحلويات'