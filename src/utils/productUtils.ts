import { isToday } from "date-fns";
import { timeSlotMapping } from "./constants"

export const getFilteredProducts = (data: any, selectedSlot: any, selectedDate: any, selectedCategory: any, selectedSort: any) => {
  let prod: any = [];
  let firstStartHr: number = 0;

  if (selectedCategory) {
    const category = data.filter((catItem: any) => catItem.product_category === selectedCategory.category);
    prod = category[0].products;
  } else {
    data.forEach((catItem: any) => {
      prod = [...prod, ...catItem.products]
    })
  }
  if (selectedDate && !selectedSlot) {
    prod = prod.filter((p: any) => {
      const dateValues = Object.keys(p.slots);
      return dateValues.includes(selectedDate.value)
    }).map((p:any) => {
      const slots = p?.slots[selectedDate.value]
      const cHour = (new Date()).getHours();
      firstStartHr = slots.filter((time: number)=> time > cHour)[0]
      return {
        ...p,
        firstStartHr: firstStartHr
      }
    })

  } else if (selectedSlot && selectedDate) {
    const slotLength = (timeSlotMapping as any)[selectedSlot?.value]
    const minslotTime = (timeSlotMapping as any)[selectedSlot?.value][0]
    const maxslotTime = (timeSlotMapping as any)[selectedSlot?.value][slotLength.length-1]

    prod = prod.filter((p: any) => {
      const value = p.slots[selectedDate.value]
      const dd = (new Date()).getHours();
      if (value) {
        if(p?.slots && selectedSlot?.label){
          const date = p?.slots[selectedDate.value]
          const slotted = ((timeSlotMapping as any)[selectedSlot?.value] || [])
          const filteredArray = date.filter((value: number) => slotted.includes(value));
          if(isToday(new Date(selectedDate.value))){
            firstStartHr = filteredArray.filter((time: number)=> time > dd && ( time > minslotTime && time < maxslotTime))[0]
          }else{
            firstStartHr = filteredArray[0]
          }
        }else{
          const slots = p?.slots[selectedDate.value]
          const cHour = (new Date()).getHours();
          firstStartHr = slots.filter((time: number)=> time > cHour)[0]
        }
        p['firstStartHr'] = firstStartHr || 0;
        return !!firstStartHr
      } else {
        return false;
      }
    })
  }
  if (selectedSort) {
    prod.sort((a: any, b: any) => {
      if (selectedSort.value === 0) {
        return a.discounted_price - b.discounted_price
      } else {
        return b.discounted_price - a.discounted_price
      }
    })
  }
  return prod;
}

export const getAllCategories = (data: any) => {
  return data.map((item: any) => {
    return {
      category: item.product_category,
      name: item.product_category_name,
      image: item.product_cat_image_url,
    }
  })
}

export const getUniqueDateOptions = (data?: any) => {
  let prod: any = [];
  let slotItems: any = [];
  data.forEach((catItem: any) => {
    prod = [...prod, ...catItem.products]
  });
  prod.forEach((slotItem: any) => {
    slotItems = [...slotItems, ...(Object.keys(slotItem.slots))]
  });
  const uniques = slotItems.filter((v: any, i: any, a: any) => a.indexOf(v) === i);
  return uniques.map((item: any) => {
    return {
      value: item,
      label: item
    }
  }).sort((a: any, b: any) => (new Date(a.value)).getTime() - (new Date(b.value)).getTime())
}

export const getSlotsForDropDown = () => {
  return [{
    value: 0,
    label: 'Morning'
  }, {
    value: 1,
    label: 'Afternoon'
  }, {
    value: 2,
    label: 'Evening'
  }]
}

export const getSortOptions = () => {
  return [{
    value: 0,
    label: 'Low to High'
  }, {
    value: 1,
    label: 'High to Low'
  }]
}

export const getSelectedProduct = (data: any, id: string) => {
  let prod: any = [];
  data.forEach((catItem: any) => {
    prod = [...prod, ...catItem.products]
  })
  return prod.filter((p: any) => p.product_id === id)[0]
}